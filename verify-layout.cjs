const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const c=vm.createContext({});vm.runInContext(fs.readFileSync('dist/chemistry-core.js','utf8')+fs.readFileSync('dist/molecule-layout.js','utf8')+';this.api={molAngles,molPoint,molFreeSlots,molSyncPorts,molClaimBond,molHydrideLayout,molFindSnap,molComponent,molMoveTargets,molMoveAtoms}',c);const l=c.api,near=(a,b)=>assert(Math.abs(a-b)<1e-6);
const atoms=[{element:'C',x:250,y:250},...Array.from({length:4},()=>({element:'H',x:500,y:400}))],bonds=[];
for(const [i,slot]of [[1,2],[2,0],[3,3],[4,1]]){assert(l.molClaimBond(atoms,bonds,0,i,slot,0));const p=l.molPoint(atoms[0],slot);near(atoms[i].x,p.x);near(atoms[i].y,p.y);assert(!l.molFreeSlots(atoms,bonds,0).includes(slot))}
assert.equal(l.molFreeSlots(atoms,bonds,0).length,0);assert.equal(l.molComponent(bonds,0).length,5);assert(!l.molClaimBond(atoms,bonds,0,1,0,0));
bonds.splice(1,1);l.molSyncPorts(atoms,bonds);assert.deepEqual([...l.molFreeSlots(atoms,bonds,0)],[0]);
const free=[{element:'C',x:250,y:250},{element:'H',x:600,y:300}],empty=[];const hit=l.molFindSnap(free,empty,1,{x:299,y:250});assert.equal(hit.slot,1);assert.equal(hit.atom,0);near(hit.x,400);near(hit.y,250);assert.equal(l.molFindSnap(free,empty,1,{x:900,y:900}),null);
const water=l.molHydrideLayout({atoms:[{element:'O'},{element:'H'},{element:'H'}],bonds:[[0,1,1],[0,2,1]]});near(water[1].x+water[2].x,2*water[0].x);near(water[1].y,water[2].y);assert(water[1].y<water[0].y);
const methane=l.molHydrideLayout({atoms:[{element:'C'},...Array.from({length:4},()=>({element:'H'}))],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]});for(let i=1;i<5;i++){const next=i===4?1:i+1,a={x:methane[i].x-230,y:methane[i].y-230},b={x:methane[next].x-230,y:methane[next].y-230};near(a.x*b.x+a.y*b.y,0);near(Math.hypot(a.x,a.y),150)}
console.log('PASS: stable chosen slots, occupied-slot rejection, slot release, H drop target, symmetric water, equal 90-degree methane bonds, connected-component movement.');

// A bonded hydrogen can move independently without changing connectivity or port ownership.
const movable=water.map(a=>({...a}));movable.push({element:'He',x:700,y:300});
const links=[[0,1,1,[0],[0]],[0,2,1,[1],[0]]],original=movable.map(a=>({...a})),before=JSON.stringify(links);
l.molMoveAtoms(movable,original,l.molMoveTargets(links,1),80,50);
near(movable[1].x,original[1].x+80);near(movable[1].y,original[1].y+50);
for(const i of [0,2,3])assert.deepEqual(movable[i],original[i]);
assert.equal(JSON.stringify(links),before);assert.equal(l.molFindSnap(movable,links,1,{x:230,y:230}),null);
// Drag deltas are relative to the initial position, not accumulated per pointer event.
l.molMoveAtoms(movable,original,[1],100,60);near(movable[1].x,original[1].x+100);
l.molMoveAtoms(movable,original,[1],-1000,-1000);near(movable[1].x,80);near(movable[1].y,80);assert.deepEqual(movable[0],original[0]);
l.molMoveAtoms(movable,original,l.molMoveTargets(links,0,'molecule'),25,40);
for(const i of [0,1,2]){near(movable[i].x,original[i].x+25);near(movable[i].y,original[i].y+40)}
assert.deepEqual(movable[3],original[3]);assert.equal(JSON.stringify(links),before);
console.log('PASS: independent bonded-atom movement, whole-molecule mode, fixed neighbors, stable bonds/ports and board bounds.');
