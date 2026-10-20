#!/usr/bin/env python3
"""Fetch PubChem structures, validate neutral Lewis graphs and emit an educational bank.
Run with Python containing rdkit and requests. Cached responses permit reproducible rebuilds.
Stereochemistry is deliberately ignored in this introductory graph model.
"""
import json,time,re,sys,hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import requests
from rdkit import Chem
from rdkit.Chem import AllChem,rdMolDescriptors
ROOT=Path(__file__).resolve().parents[1]
CACHE=ROOT/'research/molecules-cache';CACHE.mkdir(parents=True,exist_ok=True)
entries=[]
def group(category, lines):
 for line in lines.strip().splitlines():
  if not line.strip():continue
  parts=line.split('|'); entries.append((parts[0].strip(),parts[1].strip(),category,parts[2].strip() if len(parts)>2 else ''))
group('Små molekyler', '''
water|Vann|Vann består av to hydrogenatomer og ett oksygenatom. Molekylene er polare og kan danne hydrogenbindinger til hverandre.
hydrogen|Hydrogen|Hydrogengass består av H₂-molekyler. De to atomene deler ett elektronpar.
oxygen|Oksygen|Oksygengass består av O₂-molekyler og brukes i celleåndingen. Her vises den enkle Lewis-modellen med en dobbeltbinding; modellen beskriver ikke alle magnetiske egenskaper.
nitrogen|Nitrogen|Nitrogengass utgjør mesteparten av lufta. De to nitrogenatomene deler tre elektronpar i en trippelbinding.
carbon dioxide|Karbondioksid|Karbondioksid dannes blant annet ved celleånding og forbrenning. Planter bruker det i fotosyntesen.
ammonia|Ammoniakk|Ammoniakk er en nitrogenforbindelse som blant annet brukes til å lage gjødsel. Nitrogenatomet har tre bindinger til hydrogen.
hydrogen peroxide|Hydrogenperoksid|Hydrogenperoksid har en binding mellom to oksygenatomer. Stoffet brukes blant annet i bleking og desinfeksjon.
hydrogen sulfide|Hydrogensulfid|Hydrogensulfid er en giftig gass kjent for lukten av råtne egg.
hydrogen fluoride|Hydrogenfluorid
hydrogen chloride|Hydrogenklorid|Hydrogenklorid er et molekylært stoff. Når det løses i vann, dannes saltsyre med ioner.
hydrogen bromide|Hydrogenbromid
hydrogen iodide|Hydrogenjodid
fluorine|Fluor
chlorine|Klor|Klorgass består av Cl₂-molekyler. Dette er en annen form av grunnstoffet enn kloridionene i bordsalt.
bromine|Brom
 iodine|Jod
hydrogen cyanide|Hydrogencyanid
carbon disulfide|Karbondisulfid
carbonyl sulfide|Karbonylsulfid
phosphine|Fosfin
silane|Silan
borane|Boran
boron trifluoride|Bortrifluorid
boron trichloride|Bortriklorid
silicon tetrachloride|Silisiumtetraklorid
silicon tetrafluoride|Silisiumtetrafluorid
hydrazine|Hydrazin
hydroxylamine|Hydroksylamin
hypochlorous acid|Hypoklorsyrling
hypobromous acid|Hypobromsyrling
boric acid|Borsyre
''')
group('Hydrokarboner', '''
methane|Metan|Metan er hovedbestanddelen i naturgass. Ett karbonatom danner fire enkeltbindinger til hydrogen.
ethane|Etan
propane|Propan|Propan brukes som brensel. Molekylet har en kjede med tre karbonatomer.
butane|Butan
isobutane|Isobutan
pentane|Pentan
isopentane|Isopentan
neopentane|Neopentan
hexane|Heksan
heptane|Heptan
octane|Oktan
nonane|Nonan
decane|Dekan
undecane|Undekan
dodecane|Dodekan
hexadecane|Heksadekan
2-methylpentane|2-metylpentan
3-methylpentane|3-metylpentan
2,2-dimethylbutane|2,2-dimetylbutan
2,3-dimethylbutane|2,3-dimetylbutan
2,2,4-trimethylpentane|Isooktan
ethene|Eten|Eten har en dobbeltbinding mellom karbonatomene. Stoffet er et plantehormon som påvirker fruktmodning og brukes til å lage polyeten.
propene|Propen
1-butene|But-1-en
2-butene|But-2-en
isobutene|2-metylpropen
1-pentene|Pent-1-en
1-hexene|Heks-1-en
1-octene|Okt-1-en
1,3-butadiene|Buta-1,3-dien
isoprene|Isopren
allene|Propadien
acetylene|Etyn|Etyn, også kalt acetylen, har en trippelbinding mellom karbonatomene og brukes blant annet ved sveising.
propyne|Propyn
1-butyne|But-1-yn
2-butyne|But-2-yn
1-pentyne|Pent-1-yn
1-hexyne|Heks-1-yn
cyclopropane|Syklopropan
cyclobutane|Syklobutan
cyclopentane|Syklopentan
cyclohexane|Sykloheksan
cycloheptane|Sykloheptan
cyclooctane|Syklooktan
methylcyclopentane|Metylsyklopentan
methylcyclohexane|Metylsykloheksan
cyclopentene|Syklopenten
cyclohexene|Sykloheksen
cyclopentadiene|Syklopentadien
benzene|Benzen|Benzen har en ring med seks karbonatomer. Vekslende enkelt- og dobbeltbindinger er en forenklet tegning av delokaliserte elektroner.
toluene|Toluen
ethylbenzene|Etylbenzen
styrene|Styren
cumene|Kumen
o-xylene|Orto-xylen
m-xylene|Meta-xylen
p-xylene|Para-xylen
mesitylene|Mesitylen
naphthalene|Naftalen
anthracene|Antracen
phenanthrene|Fenantren
biphenyl|Bifenyl
fluorene|Fluoren
pyrene|Pyren
adamantane|Adamantan
limonene|Limonen|Limonen er et terpen som finnes i sitrusskall. Ulike romlige varianter skilles ikke i dette verkstedet.
alpha-pinene|Alfa-pinen
beta-pinene|Beta-pinen
myrcene|Myrcen
squalene|Skvalen
''')
group('Alkoholer og fenoler', '''
methanol|Metanol|Metanol er den enkleste alkoholen. Den er giftig og må ikke forveksles med etanol.
ethanol|Etanol|Etanol er alkoholen som dannes ved gjæring. Molekylet har en hydroksylgruppe, –OH.
1-propanol|Propan-1-ol
2-propanol|Propan-2-ol|Propan-2-ol kalles også isopropanol og brukes i mange rengjørings- og desinfeksjonsmidler.
1-butanol|Butan-1-ol
2-butanol|Butan-2-ol
isobutanol|2-metylpropan-1-ol
tert-butanol|2-metylpropan-2-ol
1-pentanol|Pentan-1-ol
isoamyl alcohol|3-metylbutan-1-ol
1-hexanol|Heksan-1-ol
1-octanol|Oktan-1-ol
1-decanol|Dekan-1-ol
ethylene glycol|Etan-1,2-diol
propylene glycol|Propan-1,2-diol
glycerol|Glyserol|Glyserol har tre hydroksylgrupper. Det inngår i fettmolekyler og brukes også som fuktighetsbevarende stoff.
1,3-propanediol|Propan-1,3-diol
1,4-butanediol|Butan-1,4-diol
diethylene glycol|Dietylenglykol
triethylene glycol|Trietylenglykol
benzyl alcohol|Benzylalkohol
2-phenylethanol|2-fenyletanol
allyl alcohol|Prop-2-en-1-ol
propargyl alcohol|Prop-2-yn-1-ol
cyclohexanol|Sykloheksanol
phenol|Fenol
catechol|Katekol
resorcinol|Resorcinol
hydroquinone|Hydrokinon
pyrogallol|Pyrogallol
phloroglucinol|Floroglucinol
o-cresol|Orto-kresol
m-cresol|Meta-kresol
p-cresol|Para-kresol
thymol|Tymol
carvacrol|Karvakrol
menthol|Mentol|Mentol er et stoff i mynteoljer som gir en kjølende sanseopplevelse.
geraniol|Geraniol
linalool|Linalool
citronellol|Citronellol
nerol|Nerol
farnesol|Farnesol
bisphenol A|Bisfenol A
''')
group('Aldehyder og ketoner', '''
formaldehyde|Metanal
acetaldehyde|Etanal
propanal|Propanal
butanal|Butanal
pentanal|Pentanal
hexanal|Heksanal
heptanal|Heptanal
octanal|Oktanal
nonanal|Nonanal
decanal|Dekanal
benzaldehyde|Benzaldehyd
cinnamaldehyde|Kanelaldehyd|Kanelaldehyd bidrar til lukten og smaken av kanel.
vanillin|Vanillin|Vanillin er et viktig aromastoff i vanilje. Molekylet har både en aldehydgruppe og oksygenholdige grupper på en aromatisk ring.
ethylvanillin|Etylvanillin
citral|Citral
citronellal|Citronellal
furfural|Furfural
acrolein|Propenal
glyoxal|Etandial
glutaraldehyde|Pentandial
acetone|Aceton|Aceton er et løsemiddel og den enkleste ketonen. Karbonylgruppen har en dobbeltbinding mellom karbon og oksygen.
2-butanone|Butan-2-on
2-pentanone|Pentan-2-on
3-pentanone|Pentan-3-on
2-hexanone|Heksan-2-on
2-heptanone|Heptan-2-on
cyclopentanone|Syklopentanon
cyclohexanone|Sykloheksanon
acetophenone|Acetofenon
benzophenone|Benzofenon
camphor|Kamfer
carvone|Karvon
menthone|Menton
diacetyl|Butan-2,3-dion
acetylacetone|Pentan-2,4-dion
benzoquinone|Para-benzokinon
anthraquinone|Antrakinon
''')
group('Organiske syrer', '''
formic acid|Maursyre
acetic acid|Eddiksyre|Eddiksyre gir eddik den sure smaken. Molekylet har en karboksylgruppe; i vann kan noe av syren avgi H⁺.
propionic acid|Propansyre
butyric acid|Butansyre
valeric acid|Pentansyre
caproic acid|Heksansyre
heptanoic acid|Heptansyre
caprylic acid|Oktansyre
nonanoic acid|Nonansyre
capric acid|Dekansyre
lauric acid|Laurinsyre
myristic acid|Myristinsyre
palmitic acid|Palmitinsyre
stearic acid|Stearinsyre
oleic acid|Oljesyre
linoleic acid|Linolsyre
alpha-linolenic acid|Alfa-linolensyre
arachidonic acid|Arakidonsyre
benzoic acid|Benzosyre
salicylic acid|Salisylsyre
acetylsalicylic acid|Acetylsalisylsyre|Acetylsalisylsyre er virkestoffet i aspirin. Strukturmodellen viser hvilke atomer som er koblet sammen.
oxalic acid|Oksalsyre
malonic acid|Malonsyre
succinic acid|Ravsyre
glutaric acid|Glutarsyre
adipic acid|Adipinsyre
sebacic acid|Sebasinsyre
maleic acid|Maleinsyre
fumaric acid|Fumarsyre
lactic acid|Melkesyre|Melkesyre har både en hydroksylgruppe og en karboksylgruppe. I kroppen finnes stoffet hovedsakelig som laktat.
pyruvic acid|Pyrodruesyre
citric acid|Sitronsyre|Sitronsyre finnes i sitrusfrukter og er del av sitronsyresyklusen i cellene.
malic acid|Eplesyre
tartaric acid|Vinsyre
ascorbic acid|Askorbinsyre|Askorbinsyre er vitamin C. Mennesker må få vitaminet gjennom kosten.
glycolic acid|Glykolsyre
glyceric acid|Glyserinsyre
acrylic acid|Akrylsyre
methacrylic acid|Metakrylsyre
sorbic acid|Sorbinsyre
cinnamic acid|Kanelsyre
ferulic acid|Ferulsyre
caffeic acid|Kaffesyre
gallic acid|Gallussyre
phthalic acid|Ftalsyre
isophthalic acid|Isoftalsyre
terephthalic acid|Tereftalsyre
''')
group('Estere og etere', '''
methyl acetate|Metylacetat
ethyl acetate|Etylacetat|Etylacetat er en ester som brukes som løsemiddel. Estergruppen binder sammen deler som kan stamme fra en syre og en alkohol.
propyl acetate|Propylacetat
butyl acetate|Butylacetat
isobutyl acetate|Isobutylacetat
isoamyl acetate|Isoamylacetat|Isoamylacetat er en ester med karakteristisk bananaktig lukt.
methyl formate|Metylformiat
ethyl formate|Etylformiat
methyl propionate|Metylpropionat
ethyl propionate|Etylpropionat
methyl butyrate|Metylbutyrat
ethyl butyrate|Etylbutyrat
methyl benzoate|Metylbenzoat
ethyl benzoate|Etylbenzoat
methyl salicylate|Metylsalisylat
methyl acrylate|Metylakrylat
ethyl acrylate|Etylakrylat
methyl methacrylate|Metylmetakrylat
ethyl lactate|Etyllaktat
dimethyl oxalate|Dimetyloksalat
diethyl oxalate|Dietyloksalat
dimethyl carbonate|Dimetylkarbonat
ethyl carbamate|Etylkarbamat
benzyl acetate|Benzylacetat
linalyl acetate|Linalylacetat
gamma-butyrolactone|Gamma-butyrolakton
coumarin|Kumarin
triacetin|Triacetin
dimethyl ether|Dimetyleter
diethyl ether|Dietyleter
methyl ethyl ether|Metyletyleter
methyl tert-butyl ether|Metyl-tert-butyleter
anisole|Anisol
phenetole|Fenetol
diphenyl ether|Difenyleter
1,4-dioxane|1,4-dioksan
1,3-dioxolane|1,3-dioksolan
tetrahydrofuran|Tetrahydrofuran
tetrahydropyran|Tetrahydropyran
ethylene oxide|Etylenoksid
propylene oxide|Propylenoksid
''')
group('Biomolekyler og nitrogenforbindelser', '''
glucose|Glukose|Glukose er et enkelt sukker som celler bruker som energikilde. Banken viser én strukturform; sukker kan også ha andre ringformer og åpen kjede.
fructose|Fruktose
ribose|Ribose
deoxyribose|Deoksyribose
sucrose|Sukrose|Sukrose er vanlig bordsukker. Molekylet er bygd opp av en glukosedel og en fruktosedel.
lactose|Laktose
maltose|Maltose
sorbitol|Sorbitol
mannitol|Mannitol
xylitol|Xylitol
erythritol|Erytritol
inositol|Inositol
glycine|Glysin|Glysin er den enkleste aminosyren og inngår i proteiner. Her vises en nøytral struktur; i vann finnes aminosyrer ofte som zwitterioner.
alanine|Alanin
valine|Valin
leucine|Leucin
isoleucine|Isoleucin
serine|Serin
threonine|Treonin
cysteine|Cystein
methionine|Metionin
aspartic acid|Asparaginsyre
glutamic acid|Glutaminsyre
asparagine|Asparagin
glutamine|Glutamin
lysine|Lysin
arginine|Arginin
histidine|Histidin
phenylalanine|Fenylalanin
tyrosine|Tyrosin
tryptophan|Tryptofan
proline|Prolin
urea|Urea|Urea, også kalt urinstoff, dannes når kroppen skiller ut nitrogen fra nedbryting av aminosyrer.
thiourea|Tiourea
adenine|Adenin
guanine|Guanin
cytosine|Cytosin
thymine|Tymin
uracil|Uracil
caffeine|Koffein|Koffein finnes blant annet i kaffe og te. Det påvirker nervesystemet ved å blokkere adenosinreseptorer.
theobromine|Teobromin
theophylline|Teofyllin
uric acid|Urinsyre
creatine|Kreatin
creatinine|Kreatinin
dopamine|Dopamin
serotonin|Serotonin
melatonin|Melatonin
histamine|Histamin
nicotine|Nikotin
niacin|Niacin
nicotinamide|Nikotinamid
pyridoxine|Pyridoksin
paracetamol|Paracetamol|Paracetamol er et virkestoff i smertestillende og febernedsettende legemidler.
ibuprofen|Ibuprofen
lidocaine|Lidokain
benzocaine|Benzokain
methylamine|Metylamin
dimethylamine|Dimetylamin
trimethylamine|Trimetylamin
ethylamine|Etylamin
diethylamine|Dietylamin
triethylamine|Trietylamin
propylamine|Propylamin
butylamine|Butylamin
ethylenediamine|Etan-1,2-diamin
aniline|Anilin
benzylamine|Benzylamin
acetonitrile|Acetonitril
propionitrile|Propannitril
benzonitrile|Benzonitril
acrylonitrile|Akrylnitril
formamide|Formamid
acetamide|Acetamid
benzamide|Benzamid
dimethylformamide|Dimetylformamid
caprolactam|Kaprolaktam
pyridine|Pyridin
pyrrole|Pyrrol
piperidine|Piperidin
pyrrolidine|Pyrrolidin
morpholine|Morfolin
piperazine|Piperazin
imidazole|Imidazol
pyrazole|Pyrazol
pyrimidine|Pyrimidin
pyrazine|Pyrazin
pyridazine|Pyridazin
indole|Indol
quinoline|Kinolin
isoquinoline|Isokinolin
purine|Purin
''')
group('Andre organiske forbindelser', '''
chloromethane|Klormetan
dichloromethane|Diklormetan
chloroform|Kloroform
carbon tetrachloride|Karbontetraklorid
bromomethane|Brommetan
iodomethane|Jodmetan
fluoromethane|Fluormetan
difluoromethane|Difluormetan
trifluoromethane|Trifluormetan
tetrafluoromethane|Tetrafluormetan
chloroethane|Kloretan
1,2-dichloroethane|1,2-dikloretan
vinyl chloride|Kloreten
trichloroethylene|Trikloreten
tetrachloroethylene|Tetrakloreten
chlorobenzene|Klorbenzen
bromobenzene|Brombenzen
fluorobenzene|Fluorbenzen
iodobenzene|Jodbenzen
methanethiol|Metantiol
ethanethiol|Etantiol
dimethyl sulfide|Dimetylsulfid
dimethyl disulfide|Dimetyldisulfid
diethyl sulfide|Dietylsulfid
thiophene|Tiofen
furan|Furan
thiazole|Tiazol
oxazole|Oksazol
benzofuran|Benzofuran
benzothiophene|Benzotiofen
''')

def fetch(entry):
 name=entry[0]; path=CACHE/(hashlib.sha256(name.encode()).hexdigest()[:20]+'.json')
 if path.exists():return entry,json.loads(path.read_text())
 url='https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/'+requests.utils.quote(name,safe='')+'/property/CanonicalSMILES,MolecularFormula/JSON'
 for attempt in range(4):
  try:
   r=requests.get(url,timeout=45)
   if r.status_code==200:
    data=r.json()['PropertyTable']['Properties'][0];path.write_text(json.dumps(data));return entry,data
   if r.status_code==404:return entry,{'error':'not found'}
  except Exception:pass
  time.sleep(2+attempt*3)
 return entry,{'error':'lookup failed'}

if __name__=='__main__':
 results=[]
 # At most three concurrent requests; pace submission below 5 requests/second.
 with ThreadPoolExecutor(max_workers=3) as pool:
  futures=[]
  for entry in entries:
   futures.append(pool.submit(fetch,entry))
   if not (CACHE/(hashlib.sha256(entry[0].encode()).hexdigest()[:20]+'.json')).exists():time.sleep(.25)
  for i,f in enumerate(futures):
   results.append(f.result())
   if i%30==0:print('Fetched',i,'/',len(entries),flush=True)
 output=[];seen=set();bykey={};rejected=[]
 valence={'H':1,'C':4,'N':3,'O':2,'F':1,'Cl':1,'Br':1,'I':1,'S':2,'P':3,'Si':4,'B':3}
 for (query,name,cat,desc),record in results:
  try:
   smiles=record.get('ConnectivitySMILES') or record.get('CanonicalSMILES')
   mol=Chem.MolFromSmiles(smiles)
   if mol is None or len(Chem.GetMolFrags(mol))!=1:raise ValueError('not one molecule')
   Chem.RemoveStereochemistry(mol)
   key=Chem.MolToSmiles(mol,isomericSmiles=False)
   if key in seen:
    bykey[key].setdefault('aliases',[]).append(name)
    raise ValueError('same connectivity already present (stereoisomer or synonym)')
   mol=Chem.AddHs(mol);Chem.Kekulize(mol,clearAromaticFlags=True)
   for atom in mol.GetAtoms():
    if atom.GetFormalCharge() or atom.GetNumRadicalElectrons():raise ValueError('charged atom or radical')
    if atom.GetSymbol() not in valence or sum(b.GetBondTypeAsDouble() for b in atom.GetBonds())!=valence[atom.GetSymbol()]:raise ValueError('outside simple valence model')
   if mol.GetNumAtoms()>220:raise ValueError('too large')
   AllChem.Compute2DCoords(mol)
   pos=mol.GetConformer().GetPositions();minx=min(p[0] for p in pos);maxx=max(p[0] for p in pos);miny=min(p[1] for p in pos);maxy=max(p[1] for p in pos);span=max(maxx-minx,maxy-miny,1)
   atoms=[{'element':a.GetSymbol(),'x':round(.5+(pos[a.GetIdx()][0]-(maxx+minx)/2)/span*.9,4),'y':round(.5-(pos[a.GetIdx()][1]-(maxy+miny)/2)/span*.9,4)} for a in mol.GetAtoms()]
   bonds=[[b.GetBeginAtomIdx(),b.GetEndAtomIdx(),int(b.GetBondTypeAsDouble())] for b in mol.GetBonds()]
   doubles=sum(b[2]==2 for b in bonds);triples=sum(b[2]==3 for b in bonds);rings=mol.GetRingInfo().NumRings()
   summary=f'Modellen har {len(atoms)} atomer og {len(bonds)} bindinger mellom atompar.'
   if doubles:summary+=f' {doubles} av bindingene er dobbeltbindinger, med to delte elektronpar hver.'
   if triples:summary+=f' {triples} av bindingene er trippelbindinger, med tre delte elektronpar hver.'
   if rings:summary+=' Atomer er også koblet sammen i ringstrukturer.'
   if not desc:
    formulas={'Hydrokarboner':'Det består bare av karbon og hydrogen.','Alkoholer og fenoler':'Strukturen viser hvordan oksygenholdige grupper er koblet til karbonskjelettet.','Aldehyder og ketoner':'Strukturen har en karbonylgruppe med en dobbeltbinding mellom karbon og oksygen.','Organiske syrer':'Strukturen viser syremolekylet i en nøytral form. I vann kan likevekter gi andre former.','Estere og etere':'Oksygenatomene og bindingene deres er viktige for å kjenne igjen stoffgruppen.','Biomolekyler og nitrogenforbindelser':'Se hvordan karbon, hydrogen og de andre atomene er bundet sammen.','Andre organiske forbindelser':'Strukturen viser hvordan andre grunnstoffer er koblet til et organisk karbonskjelett.','Små molekyler':'Denne modellen viser atomene og elektronparbindingene i ett molekyl.'}
    desc=f'{name} har molekylformelen {record["MolecularFormula"]}. '+formulas[cat]
    if query in ['alanine','valine','leucine','isoleucine','serine','threonine','cysteine','methionine','aspartic acid','glutamic acid','asparagine','glutamine','lysine','arginine','histidine','phenylalanine','tyrosine','tryptophan','proline']:desc+= ' Dette er en aminosyre som inngår i proteiner; i vann er zwitterionformen vanlig.'
   output.append({'id':'pubchem-'+str(record['CID']),'name':name,'formula':record['MolecularFormula'],'category':cat,'description':desc,'structureSummary':summary,'cid':record['CID'],'source':'https://pubchem.ncbi.nlm.nih.gov/compound/'+str(record['CID']),'atoms':atoms,'bonds':bonds,'stereochemistry':'Romlig isomeri skilles ikke i denne modellen.'})
   seen.add(key);bykey[key]=output[-1]
  except Exception as ex:rejected.append({'query':query,'reason':str(ex)})
 (ROOT/'research/molecules-rejected.json').write_text(json.dumps(rejected,ensure_ascii=False,indent=2))
 (ROOT/'dist/molecules-data.js').write_text('// PubChem molecular connectivity; educational Norwegian summaries. Generated by scripts/build-molecule-bank.py.\nconst moleculeBank = '+json.dumps(output,ensure_ascii=False,separators=(',',':'))+';\n')
 print('ACCEPTED',len(output),'REJECTED',len(rejected),'REQUESTED',len(entries),flush=True)
 print(json.dumps(rejected,ensure_ascii=False),flush=True)
