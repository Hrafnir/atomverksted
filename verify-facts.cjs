const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({});
for(const file of ['data.js','facts-data.js','carbon-dating.js','facts.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
vm.runInContext('this.facts=elementFacts; this.getMass=defaultMass; this.card=renderFactCard',ctx);
assert.equal(ctx.facts.length,118);
for(let z=1;z<=118;z++){
 const f=ctx.facts[z-1];assert.equal(f.number,z);assert(f.trivia&&f.universe&&f.earth&&f.forms);
 assert(f.sources.length);for(const source of f.sources)assert.match(source.url,/^https:\/\//);
 assert(fs.existsSync('dist/'+f.photo.path));assert(fs.statSync('dist/'+f.photo.path).size>100);
 for(const iso of f.isotopes)assert(Number.isInteger(iso.mass)&&iso.mass>=z&&iso.mass-z<=200);
 const a={querySelectorAll:()=>[]},b={querySelectorAll:()=>[]};ctx.card(a,z);ctx.card(b,z);assert.equal(a.innerHTML,b.innerHTML);assert(a.innerHTML.includes(f.photo.path));
 assert.equal(ctx.getMass(z),f.isotopes[0].mass);
}
assert.equal(ctx.getMass(26),56);assert.equal(ctx.getMass(118),294);
assert.equal(ctx.facts[8].photo.kind,'mineral');assert.equal(ctx.facts[99].photo.kind,'context');
assert(ctx.facts[5].isotopes.some(i=>i.mass===14));
console.log('PASS: all 118 fact records, both card renderings, isotope bounds, defaults, source URLs and local photographs.');

vm.runInContext(`for(const [years,percent] of [[0,100],[5730,50],[11460,25],[17190,12.5]]){if(Math.abs(c14Remaining(years)-percent)>1e-8||Math.abs(c14Age(percent)-years)>1e-8)throw Error("C14 conversion failed")} if(c14Age(0)!==null||c14Age(-1)!==null||c14Age(101)!==null)throw Error("C14 bounds failed");`,ctx);
console.log("PASS: radiocarbon half-lives, inverse conversions and invalid fractions.");
