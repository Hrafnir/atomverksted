// Original Norwegian educational summaries. Hydrates and real mineral forms are distinguished from the ideal ion model.
const saltFactsExtra = {
  "nacl": {
    "occurrence": "Finnes som mineralet halitt i bergsalt og som oppløste ioner i havvann.",
    "uses": "Brukes i mat, veisalting og som råstoff for klor og natriumhydroksid.",
    "appearance": "Rent salt har fargeløse krystaller; mange små krystaller sammen ser hvite ut.",
    "explanation": "I fast salt ligger Na⁺ og Cl⁻ i et gjentatt krystallgitter. NaCl forteller forholdet mellom ionene, ikke størrelsen på et molekyl.",
    "sources": [
      {
        "title": "PubChem: Natriumklorid (bordsalt)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5234"
      }
    ]
  },
  "kcl": {
    "occurrence": "Finnes som mineralet sylvin og sammen med andre salter i avleiringer etter fordampet saltvann.",
    "uses": "Viktig kaliumgjødsel; brukes også i enkelte salterstatninger.",
    "appearance": "Rent KCl er hvitt eller fargeløst. Naturlig sylvin kan være farget av andre stoffer.",
    "explanation": "Planter trenger kalium. K⁺ i saltet har helt andre egenskaper enn det reaktive metallet kalium.",
    "sources": [
      {
        "title": "PubChem: Kaliumklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/4873"
      }
    ]
  },
  "mgcl2": {
    "occurrence": "Magnesium- og kloridioner finnes i sjøvann og konsentrerte saltlaker.",
    "uses": "Brukes som råstoff for magnesium og i blant annet støvbinding og veivedlikehold.",
    "appearance": "Hvite eller fargeløse krystaller som lett tar opp vann.",
    "explanation": "Krystallene inneholder ofte krystallvann, for eksempel MgCl₂·6H₂O. Modellen viser ioneforholdet uten disse vannmolekylene.",
    "sources": [
      {
        "title": "PubChem: Magnesiumklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5360315"
      }
    ]
  },
  "cacl2": {
    "occurrence": "Finnes i enkelte saltlaker og fremstilles også industrielt.",
    "uses": "Brukes til avising, støvbinding og som fuktighetsabsorberende middel.",
    "appearance": "Hvitt fast stoff som kan ta opp så mye vann fra lufta at det blir en løsning.",
    "explanation": "Oppløsning av vannfritt CaCl₂ avgir varme. CaCl₂ og hydrater av saltet har samme forhold mellom kalsium og klorid, men ulikt vanninnhold.",
    "sources": [
      {
        "title": "PubChem: Kalsiumklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5284359"
      }
    ]
  },
  "licl": {
    "occurrence": "Fremstilles fra litiumholdige råstoffer, blant annet saltlaker.",
    "uses": "Brukes til teknisk avfukting og som råstoff ved framstilling av litiummetall.",
    "appearance": "Hvite eller fargeløse krystaller som er sterkt fuktighetsabsorberende.",
    "explanation": "Når saltet løses, skilles ionene fra krystallgitteret og omgis av vannmolekyler. Litiumioner er ikke små biter litiummetall.",
    "sources": [
      {
        "title": "PubChem: Litiumklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/433294"
      }
    ]
  },
  "naf": {
    "occurrence": "Framstilles industrielt; fluor finnes i naturen i en rekke mineraler, særlig fluoritt.",
    "uses": "En fluoridkilde i enkelte tannpleieprodukter.",
    "appearance": "Hvitt, krystallinsk fast stoff.",
    "explanation": "Fluoridionet F⁻ er forskjellig fra fluorgassen F₂. Tannpleieprodukter inneholder nøye tilpassede mengder; rent NaF er ikke tannkrem.",
    "sources": [
      {
        "title": "PubChem: Natriumfluorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5235"
      }
    ]
  },
  "kf": {
    "occurrence": "Brukes først og fremst som framstilt industrikjemikalium.",
    "uses": "Fluoridkilde i kjemisk framstilling.",
    "appearance": "Hvitt eller fargeløst krystallinsk stoff som tar opp fuktighet.",
    "explanation": "KF inneholder K⁺ og F⁻ i forholdet 1:1. Et ionegitter er en annen type oppbygning enn et molekyl med én strek mellom to atomer.",
    "sources": [
      {
        "title": "PubChem: Kaliumfluorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/522689"
      }
    ]
  },
  "lif": {
    "occurrence": "Litiumfluorid framstilles fra litiumråstoffer og fluoridforbindelser.",
    "uses": "Brukes i spesialoptikk, blant annet for ultrafiolett lys, og i strålingsdosimetre.",
    "appearance": "Hvitt stoff eller fargeløse krystaller.",
    "explanation": "Selv om LiF og NaCl har lignende ionemodeller, kan de ha ulike egenskaper. LiF er langt mindre løselig i vann enn bordsalt.",
    "sources": [
      {
        "title": "PubChem: Litiumfluorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/224478"
      },
      {
        "title": "Princeton University: Strålingsdosimetre",
        "url": "https://ehs.princeton.edu/laboratory-research/radiation-safety/radiation-monitoring-badges"
      }
    ]
  },
  "mgf2": {
    "occurrence": "Finnes sjeldent som mineralet sellaïtt; optisk materiale framstilles industrielt.",
    "uses": "Brukes som antirefleksbelegg på linser og i optikk som må slippe gjennom UV-lys.",
    "appearance": "Rent stoff er hvitt eller danner fargeløse krystaller.",
    "explanation": "Et tynt MgF₂-belegg kan redusere refleksjon fra en linse. Det krever et kontrollert lag, ikke bare løst pulver på glasset.",
    "sources": [
      {
        "title": "PubChem: Magnesiumfluorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24546"
      },
      {
        "title": "Handbook of Mineralogy: Sellaïtt",
        "url": "https://handbookofmineralogy.org/pdf/sellaite/"
      }
    ]
  },
  "caf2": {
    "occurrence": "Hovedstoffet i mineralet fluoritt, som finnes i mange land.",
    "uses": "Råstoff i fluorkjemi og til enkelte optiske komponenter.",
    "appearance": "Rent CaF₂ er fargeløst; fluoritt kan blant annet være lilla, grønn eller gul.",
    "explanation": "Fargene i en mineralprøve skyldes blant annet sporstoffer og feil i krystallgitteret. De endrer ikke mineralets grunnformel CaF₂.",
    "sources": [
      {
        "title": "PubChem: Kalsiumfluorid (fluoritt)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/84512"
      }
    ]
  },
  "alf3": {
    "occurrence": "Framstilles industrielt til bruk i aluminiumproduksjon.",
    "uses": "Tilsettes elektrolytten ved framstilling av aluminium for å styre smeltens egenskaper.",
    "appearance": "Hvitt krystallinsk stoff.",
    "explanation": "AlF₃ er et hjelpestoff i prosessen. Aluminiumet som produseres kommer hovedsakelig fra aluminiumoksid som er løst i elektrolytten.",
    "sources": [
      {
        "title": "PubChem: Aluminiumfluorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2124"
      }
    ]
  },
  "nabr": {
    "occurrence": "Bromid finnes i sjøvann og særlig i enkelte konsentrerte saltlaker; natriumbromid framstilles industrielt.",
    "uses": "Brukes i kjemisk industri og enkelte tekniske saltløsninger.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Br⁻ er bromidionet. Det er forskjellig fra det rødbrune grunnstoffet brom, Br₂.",
    "sources": [
      {
        "title": "PubChem: Natriumbromid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/253881"
      }
    ]
  },
  "kbr": {
    "occurrence": "Et framstilt bromidsalt med råstoff fra bromidholdige saltlaker.",
    "uses": "Brukes til prøvepreparering i infrarød spektroskopi.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "KBr slipper gjennom mye infrarødt lys. Derfor kan en liten prøve blandes med KBr i en måling som undersøker molekylenes vibrasjoner.",
    "sources": [
      {
        "title": "PubChem: Kaliumbromid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/253877"
      }
    ]
  },
  "mgbr2": {
    "occurrence": "Framstilles som kjemisk reagens fra magnesium- og bromidråstoffer.",
    "uses": "Brukes i kjemiske reaksjoner og materialkjemi.",
    "appearance": "Hvitt eller fargeløst fast stoff; finnes også som hydrater.",
    "explanation": "Vannfritt MgBr₂ og hydratiserte krystaller er forskjellige materialformer. Verkstedet viser bare forholdet ett magnesiumion til to bromidioner.",
    "sources": [
      {
        "title": "PubChem: Magnesiumbromid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/82241"
      }
    ]
  },
  "cabr2": {
    "occurrence": "Framstilles industrielt; brukes ofte oppløst i vann.",
    "uses": "Konsentrerte løsninger brukes blant annet som tunge væsker ved boring.",
    "appearance": "Hvite krystaller; en ren vannløsning er fargeløs.",
    "explanation": "En saltløsning kan få høy tetthet når mye salt er oppløst. Da finnes ionene fordelt i vann, ikke som små CaBr₂-klumper.",
    "sources": [
      {
        "title": "PubChem: Kalsiumbromid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5360316"
      }
    ]
  },
  "nai": {
    "occurrence": "Framstilles fra natrium- og jodråstoffer.",
    "uses": "Krystaller med en liten tilsetning av tallium brukes i detektorer for ioniserende stråling.",
    "appearance": "Rent stoff er hvitt eller fargeløst og tar lett opp fuktighet.",
    "explanation": "I en scintillasjonsdetektor gir stråling små lysglimt i krystallen. Detektorens materiale skrives ofte NaI(Tl), fordi tilsetningen er viktig.",
    "sources": [
      {
        "title": "PubChem: Natriumjodid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5238"
      }
    ]
  },
  "ki": {
    "occurrence": "Et framstilt jodidsalt.",
    "uses": "Brukes blant annet til jodberiking av noen typer salt.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Jodid, I⁻, er forskjellig fra molekylet I₂. Jodberiking betyr at små mengder jodforbindelse blandes i saltet; bordsalt blir ikke til rent KI.",
    "sources": [
      {
        "title": "PubChem: Kaliumjodid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/4875"
      }
    ]
  },
  "mgo": {
    "occurrence": "Finnes som mineralet periklas og framstilles blant annet fra magnesiumholdige råstoffer.",
    "uses": "Brukes i ildfaste ovnsforinger og andre varmebestandige materialer.",
    "appearance": "Hvitt pulver eller fargeløse krystaller.",
    "explanation": "Når magnesium brenner i oksygen, dannes MgO. Det hvite produktet har helt andre egenskaper enn det blanke metallet.",
    "sources": [
      {
        "title": "PubChem: Magnesiumoksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14792"
      }
    ]
  },
  "cao": {
    "occurrence": "Framstilles ved å varme kalkstein slik at CaCO₃ avgir CO₂.",
    "uses": "Brukes i metallurgi, byggematerialer og behandling av vann.",
    "appearance": "Hvitt eller gråhvitt fast stoff, avhengig av renhet.",
    "explanation": "Brent kalk reagerer med vann til lesket kalk, Ca(OH)₂, og avgir varme. CaO, Ca(OH)₂ og CaCO₃ er tre forskjellige forbindelser.",
    "sources": [
      {
        "title": "PubChem: Kalsiumoksid (brent kalk)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14778"
      }
    ]
  },
  "al2o3": {
    "occurrence": "Finnes som korund og er et viktig mellomprodukt ved foredling av bauksitt.",
    "uses": "Brukes til aluminiumproduksjon, slipemidler og teknisk keramikk.",
    "appearance": "Rent stoff er hvitt eller fargeløst; korund med sporstoffer kan være farget.",
    "explanation": "Rubin og safir er varianter av korund. Små tilsetninger kan gi sterke farger uten at grunnformelen Al₂O₃ endres.",
    "sources": [
      {
        "title": "PubChem: Aluminiumoksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/9989226"
      }
    ]
  },
  "na2s": {
    "occurrence": "Framstilles industrielt og inngår blant annet i prosesskjemi for papir.",
    "uses": "Brukes i papirindustri og kjemisk framstilling.",
    "appearance": "Rent stoff er lyst; tekniske produkter kan være gule og inneholde vann.",
    "explanation": "Sulfidionet S²⁻ inneholder ikke oksygen. Sulfat, SO₄²⁻, er et helt annet ion selv om begge har ladningen 2−.",
    "sources": [
      {
        "title": "PubChem: Natriumsulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14804"
      }
    ]
  },
  "k2s": {
    "occurrence": "Et framstilt sulfid; brukes i kjemiske og tekniske blandinger.",
    "uses": "Sulfidholdige preparater brukes blant annet til overflatebehandling av metaller.",
    "appearance": "Rent stoff kan være fargeløst; tekniske blandinger kan være gulbrune.",
    "explanation": "Produkter kalt svovellever er blandinger av flere kalium- og svovelforbindelser. De bør derfor ikke presenteres som rent K₂S.",
    "sources": [
      {
        "title": "PubChem: Kaliumsulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/162263"
      }
    ]
  },
  "cas": {
    "occurrence": "Finnes sjeldent som mineralet oldhamitt, kjent blant annet fra meteoritter.",
    "uses": "Brukes i enkelte selvlysende materialer og i kjemisk framstilling.",
    "appearance": "Rent stoff er hvitt; urenheter kan gi annen farge.",
    "explanation": "Særlige tilsetninger og feil i krystallgitteret kan gi luminescens. Det betyr ikke at alle prøver av rent CaS lyser i mørket.",
    "sources": [
      {
        "title": "PubChem: Kalsiumsulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10197613"
      },
      {
        "title": "Smithsonian: Oldhamitt i meteoritter",
        "url": "https://repository.si.edu/bitstreams/b4b62d02-d9c8-47db-843f-96af0b1e126d/download"
      }
    ]
  },
  "na2co3": {
    "occurrence": "Finnes i naturråstoffer som trona og framstilles også industrielt.",
    "uses": "Et viktig råstoff til glass og mange rengjøringsmidler.",
    "appearance": "Hvitt pulver eller fargeløse krystaller.",
    "explanation": "Krystallsoda er ofte Na₂CO₃·10H₂O. Natron, NaHCO₃, er et annet stoff, selv om navnene og bruksområdene ligner.",
    "sources": [
      {
        "title": "PubChem: Natriumkarbonat (soda)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10340"
      }
    ]
  },
  "nahco3": {
    "occurrence": "Finnes som mineralet nahkolitt; natron til hverdagsbruk framstilles industrielt.",
    "uses": "Brukes som hevemiddel sammen med syre og i enkelte rengjøringsprodukter.",
    "appearance": "Hvitt pulver.",
    "explanation": "Når hydrogenkarbonat reagerer med syre, frigjøres CO₂. Gassboblene kan få deig til å heve. Bakepulver er en blanding som også inneholder en syrekomponent.",
    "sources": [
      {
        "title": "PubChem: Natriumhydrogenkarbonat (natron)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/516892"
      }
    ]
  },
  "caco3": {
    "occurrence": "Finnes i kalkstein, kritt, marmor og mange skjell.",
    "uses": "Brukes i byggematerialer, papir, fyllstoffer og kalking.",
    "appearance": "Rent stoff er hvitt eller fargeløst; naturlige bergarter kan være farget.",
    "explanation": "Kalsitt og aragonitt har samme kjemiske formel, men ulik plassering av atomene i krystallen. En formel forteller ikke hele materialets struktur.",
    "sources": [
      {
        "title": "PubChem: Kalsiumkarbonat (kalk)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10112"
      }
    ]
  },
  "k2co3": {
    "occurrence": "Navnet pottaske kommer av eldre framstilling fra planteaske.",
    "uses": "Brukes blant annet i glass og kjemisk framstilling.",
    "appearance": "Hvitt stoff som tar opp fuktighet.",
    "explanation": "Pottaske og soda er beslektede karbonatsalter, men har forskjellige positive ioner: K⁺ og Na⁺.",
    "sources": [
      {
        "title": "PubChem: Kaliumkarbonat (pottaske)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/11430"
      }
    ]
  },
  "khco3": {
    "occurrence": "Framstilles industrielt som et hydrogenkarbonatsalt.",
    "uses": "Brukes blant annet i enkelte typer slokkepulver.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Ved oppvarming kan stoffet avgi CO₂ og vann. Slokkepulverets virkning avhenger av hele produktets sammensetning og bruksområde.",
    "sources": [
      {
        "title": "PubChem: Kaliumhydrogenkarbonat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/516893"
      }
    ]
  },
  "mgco3": {
    "occurrence": "Finnes som mineralet magnesitt.",
    "uses": "Råstoff for magnesiumoksid og brukt i enkelte pulverprodukter.",
    "appearance": "Hvitt stoff; naturlig magnesitt kan være misfarget.",
    "explanation": "Klatrekalk er ofte basisk eller hydratisert magnesiumkarbonat. Et bilde av klatrekalk er derfor et brukseksempel, ikke nødvendigvis rent MgCO₃.",
    "sources": [
      {
        "title": "PubChem: Magnesiumkarbonat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/11029"
      }
    ]
  },
  "li2co3": {
    "occurrence": "Framstilles fra litiumholdige saltlaker og mineralråstoffer.",
    "uses": "Viktig råstoff i litiumkjemi og enkelte glass- og keramikkprodukter.",
    "appearance": "Hvitt pulver.",
    "explanation": "Karbonationet har ladning 2−, så to Li⁺ trengs per CO₃²⁻. At et stoff er et råstoff til batterier betyr ikke at hele batteriet består av stoffet.",
    "sources": [
      {
        "title": "PubChem: Litiumkarbonat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/11125"
      }
    ]
  },
  "na2so4": {
    "occurrence": "Finnes blant annet som mineralet thenarditt; mirabilitt inneholder krystallvann.",
    "uses": "Brukes i vaskemidler, glass og papirindustri.",
    "appearance": "Hvitt pulver eller fargeløse krystaller.",
    "explanation": "Glaubersalt er Na₂SO₄·10H₂O. Krystallvannet er en del av krystallen, og er utelatt fra verkstedets enkle ionemodell.",
    "sources": [
      {
        "title": "PubChem: Natriumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24436"
      }
    ]
  },
  "k2so4": {
    "occurrence": "Finnes i enkelte saltavleiringer og framstilles som gjødselråstoff.",
    "uses": "Tilfører planter kalium og svovel, med lite klorid.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Sulfatet inneholder svovel bundet til oksygen. Det er ikke det samme som sulfid, som har andre kjemiske egenskaper.",
    "sources": [
      {
        "title": "PubChem: Kaliumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24507"
      }
    ]
  },
  "mgso4": {
    "occurrence": "Finnes som ulike mineraler med krystallvann, blant annet epsomitt.",
    "uses": "Brukes blant annet som magnesiumgjødsel og i kjemisk industri.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Epsomsalt er vanligvis MgSO₄·7H₂O. Det er ett magnesiumion og ett sulfation per formelenhet, i tillegg til sju vannmolekyler.",
    "sources": [
      {
        "title": "PubChem: Magnesiumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24083"
      }
    ]
  },
  "caso4": {
    "occurrence": "Finnes som anhydritt uten krystallvann og som gips med to vannmolekyler per formelenhet.",
    "uses": "Brukes i gipsplater, støpeformer og sement.",
    "appearance": "Rent stoff er hvitt eller fargeløst; naturgips kan ha andre farger.",
    "explanation": "Når gips delvis mister krystallvann ved oppvarming, får man et materiale som kan herde ved tilsetting av vann. Vanninnholdet er avgjørende for bruken.",
    "sources": [
      {
        "title": "PubChem: Kalsiumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24497"
      }
    ]
  },
  "cuso4": {
    "occurrence": "Et vanlig framstilt kobbersalt; hydrater finnes også som mineraler.",
    "uses": "Brukes blant annet i galvaniske prosesser og som laboratoriekjemikalium.",
    "appearance": "Pentahydratet CuSO₄·5H₂O er blått. Vannfritt CuSO₄ er hvitt eller svært lyst.",
    "explanation": "De blå krystallene som ofte vises på bilder, inneholder krystallvann. Verkstedet viser Cu²⁺ og SO₄²⁻ uten disse vannmolekylene.",
    "sources": [
      {
        "title": "PubChem: Kobber(II)sulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24462"
      }
    ]
  },
  "feso4": {
    "occurrence": "Kan dannes ved oksidasjon av jernholdige sulfider og framstilles industrielt.",
    "uses": "Brukes blant annet i vannbehandling og som jernkilde.",
    "appearance": "Heptahydratet FeSO₄·7H₂O danner lysegrønne krystaller.",
    "explanation": "Fe²⁺ kan oksideres videre til Fe³⁺ i luft. Derfor kan en prøve endre utseende ved lagring; dette er ikke det samme stoffet som jern(III)sulfat.",
    "sources": [
      {
        "title": "PubChem: Jern(II)sulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24393"
      }
    ]
  },
  "fe2so43": {
    "occurrence": "Framstilles industrielt som jern(III)-salt.",
    "uses": "Brukes særlig i vannbehandling for å få små partikler til å klumpe seg sammen.",
    "appearance": "Ofte lyst til gulaktig fast stoff; farge og form påvirkes av vanninnhold.",
    "explanation": "To Fe³⁺ gir ladningen +6, og tre SO₄²⁻ gir −6. Tallet III viser oksidasjonstallet til jern, ikke antall jernatomer.",
    "sources": [
      {
        "title": "PubChem: Jern(III)sulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24826"
      }
    ]
  },
  "znso4": {
    "occurrence": "Framstilles fra sinkråstoffer; finnes også som hydratiserte mineraler.",
    "uses": "Brukes i industri og til å tilføre mikronæringsstoffet sink.",
    "appearance": "Hvite eller fargeløse krystaller, ofte med krystallvann.",
    "explanation": "ZnSO₄ kan forekomme med forskjellig antall vannmolekyler i krystallen. Opplysningen om hydrat er viktig når man sammenligner masser.",
    "sources": [
      {
        "title": "PubChem: Sinksulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24424"
      }
    ]
  },
  "baso4": {
    "occurrence": "Hovedbestanddelen i mineralet barytt.",
    "uses": "Brukes til tunge borevæsker og i medisinske røntgenkontrastmidler.",
    "appearance": "Rent stoff er hvitt; naturlig barytt kan være farget.",
    "explanation": "Bariumsulfat løses svært lite i vann og stopper røntgenstråler effektivt. Andre bariumforbindelser kan ha helt andre egenskaper.",
    "sources": [
      {
        "title": "PubChem: Bariumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24414"
      }
    ]
  },
  "al2so43": {
    "occurrence": "Et framstilt aluminiumsalt, vanligvis levert som et vannholdig produkt eller en løsning.",
    "uses": "Brukes i vannrensing og papirproduksjon.",
    "appearance": "Hvitt eller fargeløst stoff; tekniske produkter kan være svakt farget.",
    "explanation": "I vannbehandling dannes flak som kan fange små partikler. Det er en kjemisk prosess i vann, mer omfattende enn bare å sette ionene ved siden av hverandre.",
    "sources": [
      {
        "title": "PubChem: Aluminiumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24850"
      }
    ]
  },
  "nano3": {
    "occurrence": "Kjent fra tørre saltavleiringer i Chile, derav navnet chilesalpeter.",
    "uses": "Brukes blant annet i gjødsel og glassproduksjon.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "NO₃⁻ er en hel atomgruppe med ladning 1−. Nitrogenet er bundet til oksygen og er ikke fritt nitrogengass.",
    "sources": [
      {
        "title": "PubChem: Natriumnitrat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24268"
      }
    ]
  },
  "kno3": {
    "occurrence": "Finnes i enkelte naturlige saltavleiringer og framstilles industrielt.",
    "uses": "Brukes blant annet i gjødsel og glass.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Saltets to ioner tilfører kalium og nitrogen. Nitrat er kjemisk forskjellig fra nitritt, NO₂⁻, selv om begge ionene har ladning 1−.",
    "sources": [
      {
        "title": "PubChem: Kaliumnitrat (salpeter)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24434"
      }
    ]
  },
  "cano32": {
    "occurrence": "Framstilles industrielt til gjødsel og tekniske formål.",
    "uses": "Gjødselkilde for både kalsium og nitrogen.",
    "appearance": "Hvite eller fargeløse krystaller som lett tar opp vann.",
    "explanation": "Rent Ca(NO₃)₂ må skilles fra gjødselblandinger som inneholder flere salter. Parentesen betyr at hele nitratgruppen finnes to ganger.",
    "sources": [
      {
        "title": "PubChem: Kalsiumnitrat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24963"
      }
    ]
  },
  "agno3": {
    "occurrence": "Et framstilt sølvsalt.",
    "uses": "Brukes til å påvise halidioner og som råstoff til andre sølvforbindelser.",
    "appearance": "Fargeløse eller hvite krystaller.",
    "explanation": "Når Ag⁺ møter Cl⁻ i vann, dannes tungtløselig AgCl som et hvitt bunnfall. Det er et eksempel på at oppløste ioner kan bygge et nytt fast stoff.",
    "sources": [
      {
        "title": "PubChem: Sølvnitrat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24470"
      }
    ]
  },
  "nh4cl": {
    "occurrence": "Finnes som mineralet salmiakk, blant annet ved enkelte vulkanske gassutslipp; framstilles også industrielt.",
    "uses": "Brukes i noen batterier, flussmidler og salmiakkprodukter.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Det positive ionet er NH₄⁺, en atomgruppe uten metall. Salmiakk, NH₄Cl, må ikke forveksles med salmiakkspiritus, som er ammoniakk i vann.",
    "sources": [
      {
        "title": "PubChem: Ammoniumklorid (salmiakk)",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/25517"
      }
    ]
  },
  "nh4no3": {
    "occurrence": "Framstilles industrielt, særlig til gjødsel.",
    "uses": "En konsentrert kilde til plantenæringsstoffet nitrogen.",
    "appearance": "Hvitt krystallinsk stoff som tar opp fuktighet.",
    "explanation": "Både NH₄⁺ og NO₃⁻ inneholder nitrogen, men de har motsatt ladning og ulik kjemi. Verkstedet viser dem som ferdige grupper.",
    "sources": [
      {
        "title": "PubChem: Ammoniumnitrat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/22985"
      }
    ]
  },
  "nh42so4": {
    "occurrence": "Framstilles industrielt, også som biprodukt i noen prosesser.",
    "uses": "Gjødsel som tilfører både nitrogen og svovel.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Parentesen i (NH₄)₂SO₄ betyr to hele ammoniumioner. De balanserer ett sulfation med ladning 2−.",
    "sources": [
      {
        "title": "PubChem: Ammoniumsulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/6097028"
      }
    ]
  },
  "na3po4": {
    "occurrence": "Et industrielt framstilt fosfatsalt.",
    "uses": "Brukes i enkelte rengjøringsmidler og teknisk behandling.",
    "appearance": "Hvitt krystallinsk stoff, ofte med krystallvann.",
    "explanation": "Fosfationet PO₄³⁻ krever tre Na⁺ for ladningsbalanse. Fosfater i avløp kan bidra til overgjødsling av vann.",
    "sources": [
      {
        "title": "PubChem: Trinatriumfosfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24243"
      }
    ]
  },
  "ca3po42": {
    "occurrence": "Et kalsiumfosfat som framstilles fra fosfatråstoffer.",
    "uses": "Brukes i keramikk og enkelte materialer knyttet til bein.",
    "appearance": "Hvitt, tungtløselig pulver.",
    "explanation": "Bein og tenner består ikke av rent Ca₃(PO₄)₂. Et sentralt mineral der er hydroksyapatitt, som også inneholder hydroksidioner.",
    "sources": [
      {
        "title": "PubChem: Kalsiumfosfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24456"
      }
    ]
  },
  "ch3coona": {
    "occurrence": "Framstilles fra eddiksyre og natriumholdige baser.",
    "uses": "Brukes i blant annet buffere; trihydratet brukes i noen gjenbrukbare håndvarmere.",
    "appearance": "Hvite eller fargeløse krystaller.",
    "explanation": "Når en overmettet løsning av natriumacetattrihydrat krystalliserer, avgis varme. Krystallvannet er viktig i denne håndvarmertypen.",
    "sources": [
      {
        "title": "PubChem: Natriumacetat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/517045"
      },
      {
        "title": "Rutgers University: Krystallisasjon av natriumacetat",
        "url": "https://rutchem.rutgers.edu/cldf-demos/1031-cldf-demo-crystallization"
      }
    ]
  },
  "na2so3": {
    "occurrence": "Et framstilt sulfittsalt.",
    "uses": "Brukes i papirindustri og til å fjerne oppløst oksygen i enkelte tekniske systemer.",
    "appearance": "Hvitt fast stoff.",
    "explanation": "Sulfitt kan oksideres til sulfat. Formlene SO₃²⁻ og SO₄²⁻ skiller seg med ett oksygenatom, men egenskapene er ikke de samme.",
    "sources": [
      {
        "title": "PubChem: Natriumsulfitt",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24437"
      }
    ]
  },
  "nano2": {
    "occurrence": "Et industrielt framstilt nitrittsalt.",
    "uses": "Brukes blant annet i regulert matkonservering og kjemisk industri.",
    "appearance": "Hvite til svakt gulaktige krystaller.",
    "explanation": "Nitritt er NO₂⁻, mens nitrat er NO₃⁻. De er ikke utskiftbare; i mat brukes nitritt bare i kontrollerte mengder og produkter.",
    "sources": [
      {
        "title": "PubChem: Natriumnitritt",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/23668193"
      }
    ]
  },
  "na2s2o3": {
    "occurrence": "Et framstilt tiosulfatsalt.",
    "uses": "Brukes til å fjerne klor fra vann og som fiksermiddel i tradisjonell fotografering.",
    "appearance": "Vanlig pentahydrat har fargeløse krystaller.",
    "explanation": "Tiosulfat kan binde sølvioner i løselige komplekser. Det hjelper et fikserbad å fjerne sølvhalider som ikke skal bli igjen i bildet.",
    "sources": [
      {
        "title": "PubChem: Natriumtiosulfat",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24477"
      }
    ]
  },
  "agcl": {
    "occurrence": "Finnes som mineralet klorargyritt og kan felles ut fra løsninger med sølv- og kloridioner.",
    "uses": "Brukes blant annet i elektroder og har en historie i fotografiske materialer.",
    "appearance": "Hvitt stoff som kan mørkne i lys.",
    "explanation": "Lys kan føre til dannelse av små mengder metallisk sølv. Derfor er både fargen og lysfølsomheten nyttig å knytte til stoffets kjemi.",
    "sources": [
      {
        "title": "PubChem: Sølvklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24561"
      }
    ]
  },
  "fecl2": {
    "occurrence": "Framstilles industrielt som jern(II)-salt.",
    "uses": "Brukes blant annet i vannbehandling og kjemisk framstilling.",
    "appearance": "Vannholdige krystaller er ofte lysegrønne.",
    "explanation": "Her er jernets oksidasjonstall II. Fe²⁺ kan oksideres til Fe³⁺; da kreves et annet ioneforhold for en kloridforbindelse.",
    "sources": [
      {
        "title": "PubChem: Jern(II)klorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24458"
      }
    ]
  },
  "fecl3": {
    "occurrence": "Framstilles industrielt og selges ofte som løsning.",
    "uses": "Brukes i vannbehandling og etsing av kobber.",
    "appearance": "Vannfritt stoff er mørkt; hydrater og løsninger er ofte gulbrune.",
    "explanation": "Fe³⁺ krever tre Cl⁻ for ladningsbalanse. Fargen på en løsning avhenger også av hvilke grupper som omgir jernionene i vannet.",
    "sources": [
      {
        "title": "PubChem: Jern(III)klorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24380"
      }
    ]
  },
  "zncl2": {
    "occurrence": "Et industrielt framstilt sinksalt.",
    "uses": "Brukes blant annet i flussmidler og enkelte batterier.",
    "appearance": "Hvitt eller fargeløst stoff som sterkt trekker til seg fuktighet.",
    "explanation": "Flussmidler hjelper til å fjerne oksidlag fra metalloverflater. Verkstedets ionemodell viser ladningsbalanse, mens bindingene i virkelig ZnCl₂ også har kovalent preg.",
    "sources": [
      {
        "title": "PubChem: Sinkklorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5727"
      }
    ]
  },
  "fe2o3": {
    "occurrence": "Finnes som hematitt, en viktig jernmalm. Beslektede vannholdige jern(III)-forbindelser er viktige i rust.",
    "uses": "Brukes som jernråstoff og rødt pigment.",
    "appearance": "Finfordelt hematitt er rødbrun; større krystaller kan se mørke og metalliske ut.",
    "explanation": "Rust dannes når jern korroderer med vann og oksygen. Den er en blanding av blant annet vannholdige jern(III)oksider og oksidhydroksider, ikke rent Fe₂O₃. Her er Fe₂O₃ en forenklet rustmodell.",
    "sources": [
      {
        "title": "PubChem: Jern(III)oksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/518696"
      },
      {
        "title": "Royal Society of Chemistry: Hvorfor ruster jern?",
        "url": "https://edu.rsc.org/experiments/what-causes-iron-to-rust/434.article"
      },
      {
        "title": "Purdue University: Korrosjon",
        "url": "https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch19/1_frame.html"
      }
    ]
  },
  "feo": {
    "occurrence": "Mineralformen kalles wüstitt. FeO kan inngå i oksidlag som dannes på jern ved høy temperatur.",
    "uses": "Brukes blant annet i keramikk og som eksempel i materialforskning.",
    "appearance": "Mørkt eller svart fast stoff.",
    "explanation": "FeO er jern(II)oksid, ikke den vanlige rødbrune rusten. Vanlig rust inneholder hovedsakelig vannholdige jern(III)-forbindelser. Virkelig wüstitt kan dessuten ha underskudd på jern sammenlignet med idealformelen FeO.",
    "sources": [
      {
        "title": "PubChem: Jern(II)oksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/449809"
      },
      {
        "title": "NERC: Wüstitt",
        "url": "https://vocab.nerc.ac.uk/collection/S27/current/CS003360/"
      },
      {
        "title": "Purdue University: Korrosjon",
        "url": "https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch19/1_frame.html"
      }
    ]
  },
  "cuo": {
    "occurrence": "Finnes som mineralet tenoritt og kan dannes ved oksidasjon av kobber.",
    "uses": "Brukes blant annet i keramiske pigmenter og katalysatorer.",
    "appearance": "Svart pulver eller mørke krystaller.",
    "explanation": "Kobber kan ha forskjellige oksidasjonstall. I CuO er det II; i rødt Cu₂O er det I. Dermed blir både ioneforhold og egenskaper forskjellige.",
    "sources": [
      {
        "title": "PubChem: Kobber(II)oksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14829"
      }
    ]
  },
  "cu2o": {
    "occurrence": "Finnes som mineralet kupritt og kan inngå i oksidlag på kobber.",
    "uses": "Brukes blant annet som pigment og i enkelte bunnstoffprodukter.",
    "appearance": "Rødt eller rødbrunt fast stoff.",
    "explanation": "To Cu⁺ balanserer ett O²⁻. Romertallet I i navnet viser kobberets oksidasjonstall, mens det lille 2-tallet i formelen viser antall kobber per oksygen.",
    "sources": [
      {
        "title": "PubChem: Kobber(I)oksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10313194"
      },
      {
        "title": "NORDOX: Kobber(I)oksid i bunnstoff",
        "url": "https://nordox.no/industrial-applications/antifouling/"
      }
    ]
  },
  "zno": {
    "occurrence": "Finnes som mineralet sinkitt; mye framstilles industrielt.",
    "uses": "Brukes i gummi, pigmenter og som UV-filter i noen solkremer.",
    "appearance": "Rent pulver er hvitt; naturlig sinkitt kan være farget av andre stoffer.",
    "explanation": "Sinkoksid kan påvirke UV-lys og er et halvledermateriale. Et ferdig solkremprodukt er en blanding; det er ikke bare løst ZnO-pulver.",
    "sources": [
      {
        "title": "PubChem: Sinkoksid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3007857"
      }
    ]
  },
  "fes": {
    "occurrence": "Finnes i flere jern–svovel-materialer; mineralet troilitt har sammensetningen FeS og er kjent fra meteoritter.",
    "uses": "Brukes som eksempel på en kjemisk forbindelse av jern og svovel.",
    "appearance": "Vanlig laboratorieprodukt er mørkt eller svart.",
    "explanation": "Når jern og svovel reagerer til jernsulfid, dannes et nytt stoff. FeS er ikke rust: oksygenet i jernoksid er her erstattet av svovel.",
    "sources": [
      {
        "title": "PubChem: Jern(II)sulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14828"
      }
    ]
  },
  "zns": {
    "occurrence": "Finnes som sinkblende og wurtzitt; sinkblende er en viktig sinkmalm.",
    "uses": "Brukes som sinkråstoff, i pigmenter og i noen lysende materialer.",
    "appearance": "Rent stoff er lyst; naturlig sinkblende kan være gulbrun til svart.",
    "explanation": "Små mengder andre stoffer kan gjøre ZnS luminescerende. Naturlig malm, rent pulver og et lysende materiale kan derfor se svært forskjellige ut.",
    "sources": [
      {
        "title": "PubChem: Sinksulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/14821"
      },
      {
        "title": "ATSDR: Egenskaper for sinkforbindelser",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK600540/table/ch4.tab2/"
      }
    ]
  },
  "cucl": {
    "occurrence": "Et framstilt kobber(I)-salt, også kjent som det sjeldne mineralet nantokitt.",
    "uses": "Brukes i katalyse og kjemisk framstilling.",
    "appearance": "Rent stoff er hvitt; prøver kan bli grønne når de endres i luft.",
    "explanation": "Cu⁺ og Cl⁻ balanserer hverandre én til én. Grønn farge kan skyldes andre kobberforbindelser som har dannet seg, ikke den rene CuCl-formen.",
    "sources": [
      {
        "title": "PubChem: Kobber(I)klorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/62652"
      }
    ]
  },
  "cucl2": {
    "occurrence": "Framstilles industrielt og finnes også i sjeldne mineralformer.",
    "uses": "Brukes i blant annet katalyse og metallbehandling.",
    "appearance": "Vannfritt stoff er gulbrunt; dihydratet CuCl₂·2H₂O er blågrønt.",
    "explanation": "Vann og klorid rundt kobberionene påvirker fargen. Et fotografi av blågrønne krystaller viser vanligvis hydratet, ikke vannfritt CuCl₂.",
    "sources": [
      {
        "title": "PubChem: Kobber(II)klorid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24014"
      }
    ]
  },
  "agbr": {
    "occurrence": "Et sølvhalid som også finnes som mineralet bromargyritt.",
    "uses": "Har vært sentralt i tradisjonell fotografisk film og fotopapir.",
    "appearance": "Lysegult fast stoff som mørkner ved lyspåvirkning.",
    "explanation": "Lys starter kjemiske endringer i sølvhalidkornene. Framkalling gjør det svake latente bildet synlig; modellen viser bare ioneforholdet.",
    "sources": [
      {
        "title": "PubChem: Sølvbromid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/66199"
      }
    ]
  },
  "agi": {
    "occurrence": "Finnes som mineralet jodargyritt og framstilles industrielt.",
    "uses": "Brukes blant annet i noen former for skybesåing og i forskning på ioneledere.",
    "appearance": "Gult, svært tungtløselig fast stoff.",
    "explanation": "Ved skybesåing kan partikler bidra til isdannelse under egnede forhold. Det betyr ikke at sølvjodid kan skape regn i enhver sky.",
    "sources": [
      {
        "title": "PubChem: Sølvjodid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/24563"
      },
      {
        "title": "Idaho Department of Water Resources: Skybesåing",
        "url": "https://idwr.idaho.gov/iwrb-overview/iwrb-programs-overview/cloud-seeding-program/"
      }
    ]
  },
  "mgs": {
    "occurrence": "Framstilles som magnesium–svovel-forbindelse og studeres i materialkjemi.",
    "uses": "Brukes som kjemisk reagens og i forskning på sulfider.",
    "appearance": "Rent stoff beskrives som hvitt pulver; tekniske prøver kan være farget.",
    "explanation": "MgS kan reagere med fuktighet. Sulfidionet i modellen er derfor ikke nødvendigvis bevart som et fritt S²⁻-ion hvis stoffet møter vann.",
    "sources": [
      {
        "title": "PubChem: Magnesiumsulfid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/82824"
      }
    ]
  }
};
