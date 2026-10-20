const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({});for(const file of ['data.js','chemistry-core.js','compound-reference.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
function counts(formula){return JSON.parse(JSON.stringify(vm.runInContext(`cxFormulaCounts(${JSON.stringify(formula)})`,ctx)))}
assert.deepEqual(counts('Fe2O3'),{Fe:2,O:3});assert.deepEqual(counts('FeO'),{Fe:1,O:1});assert.deepEqual(counts('Fe2(SO4)3'),{Fe:2,S:3,O:12});assert.deepEqual(counts('(NH4)2SO4'),{N:2,H:8,S:1,O:4});assert.deepEqual(counts('CH3COONa'),{C:2,H:3,O:2,Na:1});
console.log('PASS: shared composition parser handles simple formulas, grouped ions and repeated element symbols.');
for(const file of ['molecules-data.js','salts-data.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
vm.runInContext("this.banks={molecule:moleculeBank,salt:saltBank}",ctx);
for(const [type,bank]of Object.entries(ctx.banks))for(const item of bank){const composition=vm.runInContext(`cxComposition(${JSON.stringify(item)},${JSON.stringify(type)})`,ctx);assert(Object.keys(composition).length,item.id);assert(Object.values(composition).every(n=>Number.isInteger(n)&&n>0),item.id)}
if(fs.existsSync('dist/molecule-facts-extra.js')&&fs.existsSync('dist/salt-facts-extra.js')){
 for(const file of ['molecule-facts-extra.js','salt-facts-extra.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
 vm.runInContext("this.facts={molecule:moleculeFactsExtra,salt:saltFactsExtra}",ctx);
 for(const[type,bank]of Object.entries(ctx.banks))for(const item of bank){if(item.referenceOnly)continue;const f=ctx.facts[type][item.id];assert(f,item.id+' missing facts');assert(f.explanation||f.occurrence||f.uses,item.id+' empty facts');assert(f.sources?.length,item.id+' missing sources');for(const s of f.sources)assert(s.title&&s.url.startsWith('https://'),item.id+' invalid source')}
 console.log('PASS: every buildable molecule and salt has additional facts and sources.');
}
if(fs.existsSync('dist/images/chemistry/photo-expansion.json')){
 const photos={...JSON.parse(fs.readFileSync('dist/images/chemistry/photo-index.json','utf8')),...JSON.parse(fs.readFileSync('dist/images/chemistry/photo-expansion.json','utf8'))};let total=0;
 for(const [key,value]of Object.entries(photos))for(const p of Array.isArray(value)?value:[value]){assert(p.path&&!p.path.includes('..')&&!p.path.startsWith('/'),key);assert(fs.statSync('dist/'+p.path).size>100,key);assert(p.caption&&p.credit&&p.license&&p.licenseUrl&&p.source.startsWith('https://'),key);total++}
 assert(photos['salt:feo'],'FeO photo required');assert(photos['salt:fe2o3'],'Fe2O3 photo required');console.log(`PASS: ${total} locally available attributed photographs for ${Object.keys(photos).length} substances.`);
}
vm.runInContext(`const cxEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const cxFormula=cxEscape;`,ctx);
for(const [type,bank]of Object.entries(ctx.banks))for(const item of bank){if(item.referenceOnly)continue;const html=vm.runInContext(`cxFactPanel(${JSON.stringify(item)},${JSON.stringify(type)})`,ctx);assert(html.includes('Beregnet molmasse'),item.id);assert(!/NaN g\/mol|undefined/.test(html),item.id)}
console.log('PASS: every compound fact panel renders valid composition and mass.');
