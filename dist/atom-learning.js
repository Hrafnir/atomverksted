/* Common monatomic ions: principal-shell populations, not orbital pictures.
   Main-group closed shells and Fe/Cu/Zn/Ag configurations follow OpenStax Chemistry 2e, 6.4 and 7.1.
   Other charge states deliberately retain an explicit approximation label. */
const ionShellData={
 '1:-1':[2], '3:1':[2], '4:2':[2], '7:-3':[2,8], '8:-2':[2,8], '9:-1':[2,8],
 '11:1':[2,8], '12:2':[2,8], '13:3':[2,8], '15:-3':[2,8,8], '16:-2':[2,8,8], '17:-1':[2,8,8],
 '19:1':[2,8,8], '20:2':[2,8,8], '26:2':[2,8,14], '26:3':[2,8,13],
 '29:1':[2,8,18], '29:2':[2,8,17], '30:2':[2,8,18], '34:-2':[2,8,18,8], '35:-1':[2,8,18,8],
 '37:1':[2,8,18,8], '38:2':[2,8,18,8], '47:1':[2,8,18,18], '48:2':[2,8,18,18],
 '52:-2':[2,8,18,18,8], '53:-1':[2,8,18,18,8], '55:1':[2,8,18,18,8], '56:2':[2,8,18,18,8]
};
function knownIonShells(z,count){return ionShellData[z+':'+(z-count)]||null}
function atomShellDistribution(data,z,count){
 if(!count)return [];
 const known=knownIonShells(z,count);if(known)return known.slice();
 const shells=z?data[z-1].shells.slice():[];
 let total=shells.reduce((a,b)=>a+b,0);
 while(total>count){let i=shells.length-1;while(!shells[i])i--;shells[i]--;total--;}
 while(total<count){let i=Math.max(0,shells.length-1);if((shells[i]||0)>=2*(i+1)**2)i++;shells[i]=(shells[i]||0)+1;total++;}
 while(shells.length&&!shells.at(-1))shells.pop();return shells;
}
const atomTasks=[
 {text:'Bygg et nøytralt karbon-12-atom: 6 protoner, 6 nøytroner og 6 elektroner.',check:(p,n,e)=>p===6&&n===6&&e===6,answer:'Karbon-12 har 6 protoner og 6 nøytroner. Med 6 elektroner er atomet nøytralt.'},
 {text:'Lag karbon-14. Hva må du endre fra karbon-12? Ladningen kan du velge selv.',check:(p,n)=>p===6&&n===8,answer:'Karbon-14 har 6 protoner og 8 nøytroner: to flere nøytroner enn karbon-12. Elektronene endrer ikke isotopen.'},
 {text:'Lag et natriumion med ladning +1: 11 protoner, 12 nøytroner og 10 elektroner.',check:(p,n,e)=>p===11&&n===12&&e===10,answer:'11 protoner og 10 elektroner gir ladning +1. Du har bygget natrium-23 som Na⁺.'},
 {text:'Bygg et nøytralt oksygenatom med 8 protoner. Velg selv antall nøytroner.',check:(p,n,e)=>p===8&&e===8,answer:'8 protoner bestemmer at dette er oksygen. 8 elektroner balanserer ladningen.'},
 {text:'Bygg et nøytralt helium-4-atom. Hint: Atomnummeret er 2.',check:(p,n,e)=>p===2&&n===2&&e===2,answer:'2 protoner + 2 nøytroner gir massetall 4. 2 elektroner gjør atomet nøytralt.'}
];
function updateAtomLearning(){
 const task=atomTasks[challenge],correct=task.check(p,n,e),box=document.querySelector('#challenge');
 box.textContent=task.text;
 let status=document.querySelector('#challengeStatus');if(!status){status=document.createElement('p');status.id='challengeStatus';status.setAttribute('role','status');box.after(status);}
 status.textContent=correct?'✓ Riktig! '+task.answer:'Bygg videre og se om du finner løsningen.';
 status.className=correct?'learning-success':'note';
 document.querySelector('#nextChallenge').classList.toggle('ready',correct);
 document.querySelector('.built-isotope')?.remove();
 if(!p)return;
 const f=factFor(p),iso=f.isotopes.find(i=>i.mass===p+n),panel=document.createElement('section');panel.className='built-isotope';
 panel.innerHTML=`<b>Om ${escapeFact(elements[p-1].name)}-${p+n}</b>${iso?`<p>${escapeFact(iso.abundance)}</p><p>${escapeFact(iso.note)}</p>`:'<p>Denne isotopen er ikke omtalt i faktabanken. Listen er et utvalg og avgjør ikke om kjernen kan eksistere.</p>'}<button id="usualIsotope">Velg standardisotop (${defaultMass(p)})</button><p class="note">Vanligvis den vanligste naturlige isotopen; for kunstige grunnstoffer et utvalgt eksempel. Bare nøytronene endres.</p>${p===6&&n===8?'<a href="#buildFacts">Utforsk C-14-datering nedenfor ↓</a>':''}`;
 document.querySelector('#explanation').append(panel);
 document.querySelector('#usualIsotope').onclick=()=>{n=defaultMass(p)-p;render()};
}
function resetSaltTransfers(state){if(state.mode!=='transfer')return;state.atoms.forEach(a=>a.charge=0);state.selected=null;}
function moleculeIsomerFeedback(found){
 const task=molState.recipe===null?null:moleculeBank[molState.recipe],composition=chemComposition(molState.atoms);
 if(found&&task&&chemComposition(task.atoms)===composition&&!chemSameStructure({atoms:molState.atoms,bonds:molState.bonds},task))return `<p class="isomer-note">Du har bygget <b>${cxEscape(found.name)}</b>, en strukturisomer av ${cxEscape(task.name)}: samme molekylformel, men andre atomkoblinger.</p>`;
 if(!found){const matches=moleculeBank.filter(m=>!m.referenceOnly&&chemComposition(m.atoms)===composition);if(matches.length)return `<p class="isomer-note">Samme molekylformel finnes i banken hos ${matches.slice(0,4).map(m=>cxEscape(m.name)).join(', ')}. Koblingene dine gir ikke et eksakt treff. Fylte bindingsplasser alene viser ikke at strukturen er stabil.</p>`;}
 return '';
}
function ionLatticeMarkup(s){
 const unit=[...Array(s.ratio[0]).fill(s.cation),...Array(s.ratio[1]).fill(s.anion)];
 const columns=unit.length*2,width=Math.max(320,columns*68),height=220;
 let ions='';for(let row=0;row<3;row++)for(let col=0;col<columns;col++){
  const ion=unit[(col+row)%unit.length],x=(col+.5)*width/columns,y=38+row*70;
  ions+=`<g><circle cx="${x}" cy="${y}" r="27" fill="${ion.charge>0?'#d9e9f4':'#f5d9ca'}" stroke="#78938b"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="12">${cxEscape(ion.symbol)}${cxCharge(ion.charge)}</text></g>`;
 }
 return `<figure class="ion-lattice"><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Gjentatte ioner i forholdet ${s.ratio[0]} til ${s.ratio[1]}, skjematisk illustrasjon">${ions}</svg><figcaption>Ionene gjentas videre i et fast stoff. Skissen bevarer forholdet ${s.ratio[0]}:${s.ratio[1]}, men viser ikke saltets faktiske krystallstruktur, avstander eller ionestørrelser.</figcaption></figure>`;
}
