const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c=require('./dist/chemistry-core.js'),ctx=vm.createContext({});
vm.runInContext(fs.readFileSync('dist/molecules-data.js','utf8')+';this.bank=moleculeBank',ctx);vm.runInContext(fs.readFileSync('dist/salts-data.js','utf8')+';this.salts=saltBank',ctx);
const bank=JSON.parse(JSON.stringify(ctx.bank)),salts=JSON.parse(JSON.stringify(ctx.salts));
assert(bank.length>=300);assert(salts.length>=40);
for(const m of bank.filter(m=>!m.referenceOnly)){assert(m.name&&m.description&&m.source.startsWith('https://'));assert(c.chemValidate(m.atoms,m.bonds).complete,m.name);const pairs=new Set();for(const [a,b,n]of m.bonds){assert(a!==b&&m.atoms[a]&&m.atoms[b]&&[1,2,3].includes(n));const k=[a,b].sort((a,b)=>a-b).join('-');assert(!pairs.has(k));pairs.add(k)}const reversed={atoms:[...m.atoms].reverse(),bonds:m.bonds.map(([a,b,n])=>[m.atoms.length-1-b,m.atoms.length-1-a,n])};assert(c.chemSameStructure(m,reversed),m.name+' reordered');}
function molecule(cid){const m=bank.find(m=>m.cid===cid);assert(m,'missing cid '+cid);return m}
const ethanol=molecule(702),ether=molecule(8254);assert.equal(c.chemComposition(ethanol.atoms),c.chemComposition(ether.atoms));assert(!c.chemSameStructure(ethanol,ether),'Structural isomers must differ');
for(const cid of [962,977,947,297,280,222,6325,5988,2519]){const m=molecule(cid);assert.equal(c.chemFindMolecule(m.atoms,m.bonds,bank)?.cid,cid)}
const atoms=[{element:'O'},{element:'H'},{element:'H'}],bonds=[];assert(!c.chemAddBond(atoms,bonds,0,0));assert(c.chemAddBond(atoms,bonds,0,1));assert(!c.chemAddBond(atoms,bonds,0,1));assert(c.chemAddBond(atoms,bonds,0,2));assert(c.chemValidate(atoms,bonds).complete);assert.equal(c.chemFindMolecule(atoms,bonds,bank).cid,962);assert(!c.chemValidate([...atoms,...atoms],[[0,1,1],[0,2,1],[3,4,1],[3,5,1]]).complete);
for(const s of salts){assert.equal(s.ratio[0]*s.cation.charge+s.ratio[1]*s.anion.charge,0,s.name);const a=[];[s.cation,s.anion].forEach((ion,i)=>{for(let j=0;j<s.ratio[i];j++)a.push({...ion,kind:'ion',target:ion.charge})});assert.equal(c.saltMatch(a,salts)?.id,s.id);assert.equal(c.saltMatch([...a,...a],salts)?.id,s.id);if(s.mode==='transfer'){for(const ion of [s.cation,s.anion])assert.equal(c.saltElements[c.saltElementKey(ion.symbol,ion.charge)]?.target,ion.charge,s.name)}}
const mg=[{symbol:'Mg',kind:'metal',charge:0,target:2},{symbol:'Cl',kind:'nonmetal',charge:0,target:-1},{symbol:'Cl',kind:'nonmetal',charge:0,target:-1}];assert(!c.saltMatch(mg,salts));assert(!c.saltTransfer(mg,1,0));assert(c.saltTransfer(mg,0,1));assert(!c.saltMatch(mg,salts));assert(!c.saltTransfer(mg,0,1));assert(c.saltTransfer(mg,0,2));assert.equal(c.saltCharge(mg),0);assert.equal(c.saltMatch(mg,salts).formula,'MgCl2');assert(!c.saltTransfer(mg,0,2));
const photos=JSON.parse(fs.readFileSync('dist/images/chemistry/photo-index.json','utf8'));for(const p of Object.values(photos)){assert(fs.statSync('dist/'+p.path).size>100);assert(p.caption&&p.credit&&p.license&&p.source)}
console.log(`PASS: ${bank.length} molecule graphs, reordered graph recognition, structural isomers, bond limits, disconnected molecules, ${salts.length} salt ratios and matches, electron conservation, ${Object.keys(photos).length} local attributed photos.`);

assert(bank.some(m=>m.referenceOnly==='ozone'));assert.equal(c.chemFindMolecule([{element:"O"},{element:"O"},{element:"O"}],[[0,1,1],[1,2,1],[2,0,1]],bank),null);
// Complete every transfer recipe electron by electron; reject one extra transfer.
for(const s of salts.filter(s=>s.mode==='transfer')){
 const a=[];for(const [j,ion] of [s.cation,s.anion].entries())for(let i=0;i<s.ratio[j];i++){const el=c.saltElements[c.saltElementKey(ion.symbol,ion.charge)];assert(el);a.push({symbol:ion.symbol,charge:0,target:el.target,kind:el.target>0?'metal':'nonmetal'})}
 assert.equal(c.saltMatch(a,salts),null);
 while(a.some(x=>x.kind==='metal'&&x.charge<x.target)){const from=a.findIndex(x=>x.kind==='metal'&&x.charge<x.target),to=a.findIndex(x=>x.kind==='nonmetal'&&x.charge>x.target);assert(to>=0,s.name);assert(c.saltTransfer(a,from,to));assert.equal(c.saltCharge(a),0)}
 assert.equal(c.saltMatch(a,salts)?.id,s.id,s.name);assert(!c.saltTransfer(a,0,a.length-1));
}
assert.notEqual(c.saltElementKey('Fe',2),c.saltElementKey('Fe',3));
assert.notEqual(c.saltElementKey('Cu',1),c.saltElementKey('Cu',2));
assert.equal(salts.find(s=>s.id==='fe2o3').ratio.join(':'),'2:3');
console.log('PASS: every transfer recipe conserves charge and reaches the right compound; Fe(II)/Fe(III) and Cu(I)/Cu(II) stay distinct.');
