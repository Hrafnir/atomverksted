/* Transfer topology unchanged; geometry is an explicitly approximate teaching layout. */
const KitTransfer=(()=>{
 function convert(source,K,sameStructure){
  if(!source?.atoms?.length)throw Error('Legg til minst ett atom først');
  const bonds=source.bonds.map(b=>b.slice(0,3));
  const types=source.atoms.map((a,i)=>{const orders=bonds.filter(b=>b[0]===i||b[1]===i).map(b=>b[2]);
   if(a.element==='C')return orders.includes(3)||orders.filter(n=>n===2).length===2?'Cl':orders.includes(2)?'Cp':'C';
   if(a.element==='N')return orders.includes(3)?'Nl':orders.includes(2)?'Np':'N';
   if(a.element==='O')return orders.includes(2)?'Od':'O';
   return a.element==='Cl'?'Ch':a.element;
  });
  if(types.some(t=>!K.types[t]))throw Error('Et grunnstoff mangler en 3D-byggestein');
  let m=K.validate({atoms:types.map((t,i)=>K.atom(t,[i*2,0,0])),bonds});
  // Match the complete graph, not only its formula (structural isomers differ).
  for(const [id,p]of Object.entries(K.presets)){
   if(p.network)continue;const ready=p.make();
   if(sameStructure(source,{atoms:ready.atoms.map(a=>({element:K.types[a.type].symbol})),bonds:ready.bonds}))return{model:ready,preset:id,note:'Samme atomkoblinger, vist med en ferdig rommodell.'};
  }
  const seen=new Set();let offset=0,cyclic=false;
  for(let root=0;root<m.atoms.length;root++){
   if(seen.has(root))continue;
   const component=[],queue=[root];seen.add(root);
   while(queue.length){const i=queue.shift();component.push(i);for(const j of K.neighbors(m,i))if(!seen.has(j)){seen.add(j);queue.push(j)}}
   const members=new Set(component),edges=bonds.filter(b=>members.has(b[0]));
   if(edges.length>=component.length){
    cyclic=true;
    // Unknown rings retain the student's planar arrangement; no invented stereochemistry.
    const xs=component.map(i=>Number.isFinite(source.atoms[i].x)?source.atoms[i].x:i*150),ys=component.map(i=>Number.isFinite(source.atoms[i].y)?source.atoms[i].y:0);
    const minX=Math.min(...xs),minY=Math.min(...ys);
    component.forEach((i,k)=>{m.atoms[i].pos=[offset+(xs[k]-minX)/90,(ys[k]-minY)/90,0]});
   }else{
    // Place each acyclic branch along the geometry of its local building piece.
    const placed=new Set([root]),todo=[root];m.atoms[root]=K.atom(types[root],[offset,0,0]);
    while(todo.length){const i=todo.shift(),a=m.atoms[i],parent=K.neighbors(m,i).some(j=>placed.has(j));let slot=parent?1:0;
     for(const j of K.neighbors(m,i)){if(placed.has(j))continue;const d=a.dirs[slot++];if(!d)throw Error('For mange naboer for byggesteinen');
      m.atoms[j]=K.atom(types[j],K.add(a.pos,K.mul(d,types[j]==='H'||types[i]==='H'?1.25:1.65)),K.mul(d,-1));placed.add(j);todo.push(j);
     }
    }
   }
   const minX=Math.min(...component.map(i=>m.atoms[i].pos[0]));component.forEach(i=>m.atoms[i].pos[0]+=offset-minX);
   offset=Math.max(...component.map(i=>m.atoms[i].pos[0]))+4;
  }
  K.fitPorts(m);return{model:m,preset:null,note:cyclic?'Forenklet visning: ukjente ringer beholder den flate plasseringen. Dette er ikke en beregnet molekylform.':'Forenklet rommodell fra byggesteinenes vinkler. Plasseringen er ikke energiberegnet og kan ha overlapp.'};
 }
 return{convert};
})();
if(typeof module!=='undefined')module.exports=KitTransfer;
