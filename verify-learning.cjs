const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context=vm.createContext({});
for(const file of ['data.js','atom-learning.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),context);
const result=vm.runInContext(`(()=>{
const expected=[[53,54,[2,8,18,18,8]],[35,36,[2,8,18,8]],[17,18,[2,8,8]],[26,24,[2,8,14]],[26,23,[2,8,13]],[29,28,[2,8,18]],[29,27,[2,8,17]],[47,46,[2,8,18,18]]];
for(const [z,count,want] of expected)if(JSON.stringify(atomShellDistribution(elements,z,count))!==JSON.stringify(want))throw Error('Wrong ion '+z+':'+count);
for(let z=0;z<=118;z++)for(let count=0;count<=118;count++){
 const shells=atomShellDistribution(elements,z,count);
 if(shells.reduce((a,b)=>a+b,0)!==count||shells.some((v,i)=>v<0||v>2*(i+1)**2))throw Error('Electron conservation/capacity '+z+':'+count);
 if(z===count&&z&&JSON.stringify(shells)!==JSON.stringify(elements[z-1].shells))throw Error('Neutral changed');
}
const good=[[6,6,6],[6,8,4],[11,12,10],[8,10,8],[2,2,2]],bad=[[6,6,5],[6,6,6],[11,12,11],[8,8,7],[2,3,2]];
atomTasks.forEach((task,i)=>{if(!task.check(...good[i])||task.check(...bad[i]))throw Error('Task '+i)});
const state={mode:'transfer',selected:0,recipe:2,atoms:[{symbol:'Fe',charge:2,target:3},{symbol:'O',charge:-2,target:-2}]};resetSaltTransfers(state);
if(state.atoms.some(a=>a.charge)||state.atoms.length!==2||state.atoms[0].target!==3||state.recipe!==2||state.selected!==null)throw Error('Reset lost atoms or targets');
const ions={mode:'ions',atoms:[{charge:2}]};resetSaltTransfers(ions);if(ions.atoms[0].charge!==2)throw Error('Reset changed ready-made ions');
return true;})()`,context);
assert.equal(result,true);
console.log('PASS: common ion configurations, all 14,161 electron-count combinations, unchanged neutral atoms, interactive task acceptance/rejection, reversible transfer reset preserves atoms and target charges.');
for(const file of ['chemistry-core.js','molecules-data.js','salts-data.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),context);
vm.runInContext(fs.readFileSync('dist/chemistry.js','utf8').split('\n').slice(1,5).join('\n'),context);
vm.runInContext(`
const ethanolIndex=moleculeBank.findIndex(m=>m.name==='Etanol'),ether=moleculeBank.find(m=>m.name==='Dimetyleter');
if(ethanolIndex<0||!ether)throw Error('Missing isomer fixtures');
const molState={atoms:ether.atoms,bonds:ether.bonds,recipe:ethanolIndex};
if(!moleculeIsomerFeedback(ether).includes('strukturisomer av Etanol'))throw Error('Missing isomer explanation');
if(moleculeIsomerFeedback(moleculeBank[ethanolIndex]).includes('stabil'))throw Error('Overclaim');
for(const salt of saltBank){
 const markup=ionLatticeMarkup(salt),positive=(markup.match(/fill="#d9e9f4"/g)||[]).length,negative=(markup.match(/fill="#f5d9ca"/g)||[]).length;
 if(positive!==salt.ratio[0]*6||negative!==salt.ratio[1]*6)throw Error('Lattice ratio '+salt.id);
 if(!markup.includes('ikke saltets faktiske krystallstruktur'))throw Error('Missing model limitation');
}
`,context);
const classroom=fs.readFileSync('dist/classroom.js','utf8');
vm.runInContext(classroom.slice(classroom.indexOf('function readClassroomInteger'),classroom.indexOf('function applyClassroomURL')),context);
context.URLSearchParams=URLSearchParams;
vm.runInContext(`for(const input of ['-1','119','Infinity','<script>','1.5',''])if(readClassroomInteger(new URLSearchParams({z:input}),'z',1,118,6)!==6)throw Error('Unsafe route');if(readClassroomInteger(new URLSearchParams({z:'53'}),'z',1,118,6)!==53)throw Error('Valid route rejected');`,context);
console.log('PASS: isomer teaching feedback, ion ratios for every salt illustration, invalid route parameters.');
