const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),K=require('./dist/kit3d-core'),T=require('./dist/kit3d-transfer'),C=require('./dist/chemistry-core');
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('dist/molecules-data.js','utf8')+';this.bank=moleculeBank',ctx);
function check(source){const before=JSON.stringify(source),out=T.convert(source,K,C.chemSameStructure),m=K.validate(out.model);assert.equal(JSON.stringify(source),before);assert.equal(m.atoms.length,source.atoms.length);assert(C.chemSameStructure(source,{atoms:m.atoms.map(a=>({element:K.types[a.type].symbol})),bonds:m.bonds}));assert(m.atoms.every(a=>a.pos.every(Number.isFinite)));return out;}
for(const m of ctx.bank.filter(m=>!m.referenceOnly)){check(m);check({atoms:[...m.atoms].reverse(),bonds:m.bonds.map(([a,b,n])=>[m.atoms.length-1-a,m.atoms.length-1-b,n])});}
for(const s of Object.keys(C.chemElements))check({atoms:[{element:s,x:0,y:0}],bonds:[]});
check({atoms:[{element:'C'},{element:'O'},{element:'H'},{element:'Cl'}],bonds:[[0,1,2,[0],[0]]]});
for(const id of ['methane','water','ethane','ethene','ethyne','benzene']){const m=K.presets[id].make(),out=check({atoms:m.atoms.map(a=>({element:K.types[a.type].symbol})),bonds:m.bonds});assert.equal(out.preset,id);}
const methane=check({atoms:[{element:'C'},...Array.from({length:4},()=>({element:'H'}))],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]}).model;
const dirs=K.neighbors(methane,0).map(i=>K.unit(K.sub(methane.atoms[i].pos,methane.atoms[0].pos)));assert(Math.abs(K.dot(dirs[0],dirs[1])+1/3)<1e-6);
assert.throws(()=>T.convert({atoms:[],bonds:[]},K,C.chemSameStructure));
console.log('PASS: all buildable bank molecules and reversed atom orders preserve topology; all 12 elements, partial/disconnected builds, double/triple bonds, source immutability, known 3D forms and tetrahedral methane.');
