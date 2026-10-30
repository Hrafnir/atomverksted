const assert=require('node:assert/strict');
(async()=>{const {alphaBounds,exportCamera}=await import('./dist/kit3d-capture.js'),T=await import('./dist/vendor/three/three.module.js');
const data=new Uint8ClampedArray(100*80*4);data[(20*100+30)*4+3]=255;data[(60*100+70)*4+3]=1;
assert.deepEqual(alphaBounds(data,100,80,5),{x:25,y:15,width:51,height:51});assert.throws(()=>alphaBounds(new Uint8Array(16),2,2));
const K=require('./dist/kit3d-core');for(const preset of Object.values(K.presets)){const m=preset.make(),camera=new T.PerspectiveCamera(38,1.7,.1,1000);camera.position.set(1,2,3);camera.rotation.set(.7,-1.2,.4);const before=camera.toJSON(),out=exportCamera(camera,m.atoms.map(a=>a.pos));assert.deepEqual(camera.toJSON(),before);assert(camera.quaternion.equals(out.quaternion));for(const a of m.atoms){const p=new T.Vector3(...a.pos).project(out);assert(Math.abs(p.x)<.9&&Math.abs(p.y)<.9&&p.z<1&&p.z>-1);}}
console.log('PASS: alpha crop, empty image rejection; every preset fits export, selected camera angle preserved, original camera unchanged.');})();
