const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const c=vm.createContext({});
for(const f of ['chemistry-core.js','salts-data.js','salt-facts-extra.js','hydroxide.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
vm.runInContext(fs.readFileSync('dist/water-reaction.js','utf8').replace('initHydroxide();renderWaterReaction();',''),c);
vm.runInContext(`
for(const metal of ['Na','Li']){
 let state={metal,M:false,O:false,H:false,bond:false,transferred:false,selected:null,history:[]};
 if(hydroxideComplete(state)||hydroxideAction(state,'bond')||hydroxideAction(state,'transfer'))throw Error('Premature completion');
 for(const action of ['H','M','O','bond','transfer']){const next=hydroxideAction(state,action);if(!next)throw Error('Valid action rejected');if(hydroxideAction(next,action))throw Error('Duplicate accepted');state=next;}
 if(!hydroxideComplete(state))throw Error('Did not complete');
 const match=saltMatch([{symbol:metal,charge:1,target:1},{symbol:'OH',charge:-1,target:-1}],saltBank);
 if(match?.formula!==metal+'OH')throw Error('Not recognized');
 if(!saltFactsExtra[match.id].explanation||!saltFactsExtra[match.id].sources.length)throw Error('Missing facts');
 for(let step=0;step<4;step++){
  const inventory=waterReactionInventory(metal,step),totals={},charge=inventory.reduce((n,s)=>n+s.count*s.charge,0);
  inventory.forEach(s=>Object.entries(s.atoms).forEach(([element,count])=>totals[element]=(totals[element]||0)+count*s.count));
  if(totals[metal]!==2||totals.H!==4||totals.O!==2||charge!==0)throw Error('Conservation '+metal+' '+step);
  const drawing=waterReactionDrawing(metal,step);if((drawing.split('>O</text>').length-1)!==2||(drawing.split('>H</text>').length-1)!==4)throw Error('Visible atoms not conserved');
 }
}
`,c);
assert.equal(vm.runInContext("saltBank.filter(s=>s.buildKind==='hydroxide').length",c),2);
console.log('PASS: NaOH/LiOH built from individual atoms; invalid and repeated actions rejected; salt-bank matches and facts; atoms and charge conserved in all reaction stages, including visible SVG atoms.');
