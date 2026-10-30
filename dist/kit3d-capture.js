import * as THREE from './vendor/three/three.module.js';
export function alphaBounds(data,width,height,padding=24){
 let left=width,top=height,right=-1,bottom=-1;
 for(let y=0;y<height;y++)for(let x=0;x<width;x++)if(data[(y*width+x)*4+3]>0){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
 if(right<0)throw Error('Ingen synlig modell å kopiere.');
 return{x:Math.max(0,left-padding),y:Math.max(0,top-padding),width:Math.min(width,right+padding+1)-Math.max(0,left-padding),height:Math.min(height,bottom+padding+1)-Math.max(0,top-padding)};
}
export function exportCamera(camera,positions){
 const copy=camera.clone(),box=new THREE.Box3();positions.forEach(p=>box.expandByPoint(new THREE.Vector3(...p)));
 const center=box.getCenter(new THREE.Vector3()),radius=box.getSize(new THREE.Vector3()).length()/2+1.3;
 copy.aspect=1;copy.position.copy(center).add(new THREE.Vector3(0,0,1).applyQuaternion(copy.quaternion).multiplyScalar(radius/Math.sin(copy.fov*Math.PI/360)*1.12));
 copy.updateProjectionMatrix();copy.updateMatrixWorld();return copy;
}
export function captureKit(scene,group,camera,positions){
 if(!positions.length)return Promise.reject(Error('Legg til et atom først.'));
 let output;const hidden=[],materials=[];
 try{
  // A separate renderer keeps the classroom camera, zoom and selection untouched.
  output=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});output.setPixelRatio(1);output.setSize(1600,1600,false);output.setClearColor(0xffffff,0);
  for(const obj of group.children){if(!['atom','bond'].includes(obj.userData.kind)&&!obj.userData.label){hidden.push([obj,obj.visible]);obj.visible=false;}
   if(obj.userData.kind==='bond'){materials.push([obj,obj.material]);obj.material=obj.material.clone();obj.material.color.set('#91a59a');}}
  output.render(scene,exportCamera(camera,positions));
  const raw=document.createElement('canvas');raw.width=raw.height=1600;const ctx=raw.getContext('2d',{willReadFrequently:true});ctx.drawImage(output.domElement,0,0);
  const b=alphaBounds(ctx.getImageData(0,0,1600,1600).data,1600,1600),cropped=document.createElement('canvas');cropped.width=b.width;cropped.height=b.height;
  const draw=cropped.getContext('2d');draw.fillStyle='white';draw.fillRect(0,0,b.width,b.height);draw.drawImage(raw,b.x,b.y,b.width,b.height,0,0,b.width,b.height);
  return new Promise((resolve,reject)=>cropped.toBlob(blob=>blob?resolve(blob):reject(Error('Kunne ikke lage bildet.')),'image/png'));
 }catch(error){return Promise.reject(error)}finally{
  for(const [obj,visible]of hidden)obj.visible=visible;
  for(const [obj,material]of materials){obj.material.dispose();obj.material=material;}
  if(output){output.dispose();output.forceContextLoss();}
 }
}
