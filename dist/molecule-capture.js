/* Bounds and export use model coordinates, independent of viewport zoom/scroll. */
const MoleculeCapture=(()=>{
 function bounds(atoms,padding=76){if(!atoms.length)return null;const xs=atoms.map(a=>a.x),ys=atoms.map(a=>a.y),x=Math.min(...xs)-padding,y=Math.min(...ys)-padding;return{x,y,width:Math.max(...xs)-x+padding,height:Math.max(...ys)-y+padding};}
 function fit(atoms,width,height){const b=bounds(atoms);return b?Math.max(.01,Math.min(2,(width-24)/b.width,(height-24)/b.height)):1;}
 function svg(state,elements,angles,loneAngles,freeSlots){const b=bounds(state.atoms);if(!b)throw Error('Legg til et atom først.');const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));let body='';
  for(const [a,b,n]of state.bonds){const A=state.atoms[a],B=state.atoms[b],len=Math.hypot(B.x-A.x,B.y-A.y)||1,ux=(B.x-A.x)/len,uy=(B.y-A.y)/len;for(let k=0;k<n;k++){const d=(k-(n-1)/2)*7;body+=`<line x1="${A.x+ux*30-uy*d}" y1="${A.y+uy*30+ux*d}" x2="${B.x-ux*30-uy*d}" y2="${B.y-uy*30+ux*d}" stroke="#47695d" stroke-width="3"/>`;}body+=`<circle cx="${(A.x+B.x)/2}" cy="${(A.y+B.y)/2}" r="15" fill="white" stroke="#c4d6c6"/><text x="${(A.x+B.x)/2}" y="${(A.y+B.y)/2+4}" font-size="12">${'•'.repeat(n*2)}</text>`;}
  state.atoms.forEach((a,i)=>{const el=elements[a.element];body+=`<circle cx="${a.x}" cy="${a.y}" r="29" fill="${esc(el.color)}" stroke="white" stroke-width="2"/><text x="${a.x}" y="${a.y+8}" font-size="26" font-weight="bold">${esc(a.element)}</text><text x="${a.x+14}" y="${a.y+22}" font-size="9">${i+1}</text>`;
   for(const slot of freeSlots(state.atoms,state.bonds,i)){const angle=angles(a.element)[slot]*Math.PI/180;body+=`<circle cx="${a.x+49*Math.cos(angle)}" cy="${a.y+49*Math.sin(angle)}" r="4.5" fill="#2679b5"/>`;}
   for(const angle of loneAngles(a.element)){const t=angle*Math.PI/180;body+=`<text x="${a.x+47*Math.cos(t)}" y="${a.y+47*Math.sin(t)+4}" font-size="12">••</text>`;}
  });
  return{...b,source:`<svg xmlns="http://www.w3.org/2000/svg" width="${b.width}" height="${b.height}" viewBox="${b.x} ${b.y} ${b.width} ${b.height}"><rect x="${b.x}" y="${b.y}" width="${b.width}" height="${b.height}" fill="white"/><g font-family="Arial, sans-serif" text-anchor="middle" fill="#183c3a">${body}</g></svg>`};
 }
 return{bounds,fit,svg};
})();
if(typeof module!=='undefined')module.exports=MoleculeCapture;
