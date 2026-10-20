// One factual record and renderer for both views. Text never depends on neutron count or charge.
const escapeFact=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const factFor=z=>elementFacts[z-1];
const defaultMass=z=>factFor(z).isotopes[0].mass;
let shownBuildElement=-1;
function photoMarkup(f,compact=false){
 const image=f.photo,context=image.kind==='context';
 return `<figure class="element-photo ${compact?'photo-compact':''}"><div class="photo-frame"><img src="${escapeFact(image.path)}" alt="${escapeFact(image.caption)}" loading="lazy" width="900" height="600"><span class="photo-badge">${context?'Kontekstfoto':image.kind==='solution'?'Prøve i løsning':image.kind==='mineral'?'Mineral / naturlig prøve':image.kind==='object'?'Gjenstand med stoffet':'Fotografi'}</span></div>${compact?'':`<figcaption>${escapeFact(image.caption)}${context?'<strong> Vi har ikke et verifisert fotografi av selve stoffet i denne samlingen.</strong>':''}<details><summary>Fotograf og lisens</summary><p>${escapeFact(image.credit)}</p><p><a href="${escapeFact(image.source)}" target="_blank" rel="noreferrer">Se original og bildeopplysninger ↗</a>${image.licenseUrl?` · <a href="${escapeFact(image.licenseUrl)}" target="_blank" rel="noreferrer">Lisens</a>`:''}</p><p>Original bildetekst: ${escapeFact(image.originalCaption)}</p><p>Bildet er skalert for nettvisning.</p></details></figcaption>`}</figure>`;
}
function renderFactCard(host,z){
 if(!z){host.innerHTML='';host.hidden=true;return}host.hidden=false;
 const f=factFor(z),el=elements[z-1];
 host.innerHTML=`<article class="element-story" aria-label="Fakta om ${escapeFact(el.name)}"><header class="story-heading"><div><p class="eyebrow">BLI KJENT MED GRUNNSTOFFET · ${z}</p><h2>${escapeFact(el.name)} <span>${escapeFact(el.symbol)}</span></h2></div><span class="story-tag">Samme fakta i begge faner</span></header><div class="story-layout"><div>${photoMarkup(f)}<div class="trivia"><p class="eyebrow">VISSTE DU AT …</p><p>${escapeFact(f.trivia)}</p></div></div><div class="story-content"><div class="occurrence-grid"><section><h3>✦ I universet</h3><p>${escapeFact(f.universe)}</p></section><section><h3>◉ På jorda</h3><p>${escapeFact(f.earth)}</p></section><section class="forms"><h3>Hvordan finner vi stoffet?</h3><p>${escapeFact(f.forms)}</p></section></div><section class="isotope-section"><h3>Isotoper du kan utforske</h3><p class="note">Samme grunnstoff, ulikt antall nøytroner. Andeler gjelder naturlig forekomst på jorda der dette er oppgitt. For kunstige grunnstoffer vises utvalgte eksempler.</p><div class="isotope-cards">${f.isotopes.map(iso=>`<div class="isotope-card"><div><b>${escapeFact(el.symbol)}-${iso.mass}</b><span>${iso.mass-z} nøytroner</span></div><p>${escapeFact(iso.abundance)}</p><p class="note">${escapeFact(iso.note)}</p><button data-isotope-z="${z}" data-isotope-mass="${iso.mass}" aria-label="Bygg ${escapeFact(el.name)}-${iso.mass}">Bygg isotopen →</button></div>`).join('')}</div></section><details class="fact-sources"><summary>Kilder til fakta og isotoper</summary><ul>${f.sources.map(src=>`<li><a href="${escapeFact(src.url)}" target="_blank" rel="noreferrer">${escapeFact(src.title)} ↗</a></li>`).join('')}</ul><p class="note">Tekstene er korte, norske sammendrag. Bildet viser en bestemt prøve eller sammenheng, ikke hvordan alle former og isotoper ser ut. En isotops andel er ikke det samme som grunnstoffets forekomst.</p></details></div></div>${z===6?carbonDatingMarkup():''}</article>`;
 if(z===6)initCarbonDating(host);
 host.querySelectorAll('[data-isotope-z]').forEach(button=>button.onclick=()=>{p=Number(button.dataset.isotopeZ);n=Number(button.dataset.isotopeMass)-p;e=p;render();tab('build');document.querySelector('#build').scrollIntoView({behavior:'smooth',block:'start'})});
 host.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;const note=document.createElement('p');note.className='image-error';note.textContent='Bildet kunne ikke lastes. Se originalbildet via lenken nedenfor.';img.after(note)},{once:true}));
}
function updateBuildFacts(z){
 if(shownBuildElement===z)return;shownBuildElement=z;
 renderFactCard(document.querySelector('#buildFacts'),z);
 const teaser=document.querySelector('#factsTeaser');
 if(!z){teaser.innerHTML='';return}
 const f=factFor(z),el=elements[z-1];
 teaser.innerHTML=`${photoMarkup(f,true)}<p class="teaser-trivia">${escapeFact(f.trivia)}</p><a class="facts-jump" href="#buildFacts">Bli kjent med ${escapeFact(el.name.toLowerCase())} ↓</a><p class="note">Isotoper · universet · jorda · stoffets former</p>`;
}
