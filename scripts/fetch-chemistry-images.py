"""Download curated real photographs, preserving Commons licensing and precise captions."""
import json,pathlib,urllib.request,urllib.parse,time,re,html,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
HEADERS={'User-Agent':'AtomverkstedEducational/1.0 (educational element reference)'}
PHOTOS=[
('cid:962','Water bubbles in glass.jpg','Vann med bobler i et glass. Vanlig drikkevann inneholder også oppløste stoffer.','context'),
('cid:702','TrodEthanolBottle.jpg','Teknisk etanol på flaske (T-Röd). Produktet er denaturert og inneholder andre stoffer; bildet viser ikke ren etanol.','context'),
('cid:5988','Sugar cubes-closeup.jpg','Sukkerbiter laget av vanlig sukker, der hovedstoffet er sukrose.','sample'),
('cid:5793','D-(+)-Glucose monohydrate.jpg','Glukosemonohydrat: glukose krystallisert med vann. Bildet viser en hydratisert prøve.','hydrate'),
('salt:nacl','Sodium chloride crystals.jpg','Krystaller av kjøkkensalt (natriumklorid).','sample'),
('salt:nahco3','Sodium bicarbonate.jpg','Natron: natriumhydrogenkarbonat som hvitt pulver.','sample'),
('salt:caco3','Calcite crystals.jpg','Kalsittkrystaller: en naturlig krystallform av kalsiumkarbonat. Mineralprøver kan inneholde urenheter.','mineral'),
('salt:cuso4','Copper Sulfate Crystals.jpg','Blå krystaller av kobber(II)sulfatpentahydrat, CuSO4·5H2O. Vannfritt CuSO4 har et annet utseende.','hydrate'),
('salt:mgso4','Magnesium sulfate.JPG','Magnesiumsulfatheptahydrat (epsomsalt), MgSO4·7H2O. Krystallene inneholder bundet vann.','hydrate')]
def get(url):
 with urllib.request.urlopen(urllib.request.Request(url,headers=HEADERS),timeout=45) as r:return r.read()
def clean(s):return html.unescape(re.sub('<[^>]+>',' ',s)).strip()
index={};report=[]
for key,title,caption,kind in PHOTOS:
 try:
  api='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(dict(action='query',format='json',titles='File:'+title,prop='imageinfo',iiprop='url|extmetadata',iiurlwidth=900))
  data=json.loads(get(api));page=next(iter(data['query']['pages'].values()));im=page['imageinfo'][0];meta=im['extmetadata'];license=clean(meta['LicenseShortName']['value']);assert license.startswith(('CC','Public domain')),(title,license)
  dest=ROOT/'dist/images/chemistry'/(key.replace(':','-')+'.jpg');dest.parent.mkdir(parents=True,exist_ok=True)
  url=im.get('thumburl',im['url'])
  if not dest.exists():
   try:dest.write_bytes(get(url))
   except Exception:dest.write_bytes(get(im['url']))
   subprocess.run(['sips','-Z','900',str(dest)],check=True,stdout=subprocess.DEVNULL)
  index[key]=dict(path='images/chemistry/'+dest.name,caption=caption,credit=clean(meta.get('Artist',{}).get('value','See source')),license=license,licenseUrl=meta.get('LicenseUrl',{}).get('value','https://commons.wikimedia.org/wiki/Commons:Licensing'),source=im['descriptionurl'],kind=kind,changes='Skalert til nettvisning.')
  report.append(dict(key=key,title=title,metadata=meta));print('OK',key,license,flush=True)
 except Exception as e:print('FAILED',key,str(e),flush=True)
 time.sleep(.4)
# Reuse the existing verified oxygen photo, including its precise original caption.
existing=json.loads((ROOT/'research/photos.json').read_text());p=next(x for x in existing if x['number']==8)
index['cid:977']=dict(path=p['path'],caption=p['caption'],credit=p['credit'],license='CC BY 3.0',licenseUrl=p['licenseUrl'],source=p['source'],kind='context',changes='Skalert til nettvisning.')
(ROOT/'dist/images/chemistry/photo-index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2))
(ROOT/'research/chemistry-assets-metadata.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print('Indexed',len(index),'photos')
