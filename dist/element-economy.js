// Short Norwegian summaries. Country names are examples, not production rankings.
// Sources support uses and production; economic significance is a qualitative educational synthesis.
const elementEconomy = [
  {
    "number": 1,
    "uses": "Brukes til ammoniakk for gjødsel, i oljeraffinerier og som drivstoff i brenselceller.",
    "economy": "Et viktig industriråstoff. Gjødselproduksjon gjør hydrogen indirekte viktig for matforsyningen.",
    "production": "Fremstilles på kjemiske fabrikker, særlig fra naturgass, men også ved elektrolyse av vann. Det utvinnes vanligvis ikke som fri gass fra gruver.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/1/hydrogen"
      }
    ]
  },
  {
    "number": 2,
    "uses": "Flytende helium kjøler blant annet MR-magneter. Gassen brukes også til lekkasjesøk og beskyttende atmosfærer.",
    "economy": "En spesialgass som er vanskelig å erstatte når det trengs svært lave temperaturer.",
    "production": "Skilles fra heliumholdig naturgass, blant annet i USA og Qatar. Vanlig luft inneholder for lite helium til å være hovedkilden.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/2/helium"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      }
    ]
  },
  {
    "number": 3,
    "uses": "Litiumforbindelser brukes i oppladbare batterier, varmebestandig glass og keramikk.",
    "economy": "Viktig for batterier i kjøretøy, elektronikk og energilagring. Ikke alle batterityper inneholder litium.",
    "production": "Hentes fra mineraler som spodumen, blant annet i Australia, og fra saltlaker, blant annet i Chile og Argentina.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/3/lithium"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      }
    ]
  },
  {
    "number": 4,
    "uses": "Beryllium brukes i lette, stive deler til romteknologi, røntgenvinduer og kobberlegeringer.",
    "economy": "Et lite, spesialisert marked der lav vekt og gode materialegenskaper er verdifulle. Giftig støv gjør produksjonen krevende.",
    "production": "Utvinnes fra beryll og bertranditt. USA er et eksempel på et land som utvinner berylliumråstoff.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/4/beryllium"
      },
      {
        "title": "USGS – Mineral Commodity Summaries 2026",
        "url": "https://pubs.usgs.gov/publication/mcs2026"
      }
    ]
  },
  {
    "number": 5,
    "uses": "Borforbindelser brukes i varmebestandig glass, glassfiber og vaskemidler. Bor inngår også i sterke magneter.",
    "economy": "Glass- og materialindustrien trenger store mengder borater, selv om rent bor har færre bruksområder.",
    "production": "Borater hentes fra avsetninger etter gamle innsjøer, blant annet i Tyrkia og USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/5/boron"
      }
    ]
  },
  {
    "number": 6,
    "uses": "Grafitt brukes i elektroder og batterier, diamant i skjæreverktøy og karbon i stål. Karbonforbindelser inngår i brensler og plast.",
    "economy": "Svært stor økonomisk betydning på tvers av energi, materialer og kjemisk industri; formene har svært ulik verdi.",
    "production": "Grafitt og diamant brytes i gruver, mens kull, olje og gass hentes fra andre forekomster. Grafitt og diamant kan også fremstilles kunstig.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/6/carbon"
      }
    ]
  },
  {
    "number": 7,
    "uses": "Nitrogen brukes til gjødsel via ammoniakk, som beskyttelsesgass i matpakker og som kjølevæske når det er flytende.",
    "economy": "Gjødsel gjør nitrogenindustrien sentral for jordbruket. Gassen er også viktig i mat- og prosessindustrien.",
    "production": "Skilles fra luft på industrianlegg over hele verden. Råstoffet er atmosfæren, ikke en gruve.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/7/nitrogen"
      }
    ]
  },
  {
    "number": 8,
    "uses": "Oksygen brukes i stålproduksjon, medisinsk behandling og kjemiske prosesser.",
    "economy": "En industrigass som mange store produksjonsprosesser er avhengige av, i tillegg til betydningen for helsetjenesten.",
    "production": "Fremstilles ved å skille luftens gasser. Elektrolyse av vann gir også oksygen som produkt.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/8/oxygen"
      }
    ]
  },
  {
    "number": 9,
    "uses": "Fluorforbindelser brukes i fluorplast, kjølemidler og tannpleie. Fluoritt brukes også i metallindustrien.",
    "economy": "Viktig for kjemisk industri og spesialmaterialer. Bruksområdene gjelder oftest forbindelser, ikke fri fluorgass.",
    "production": "Råstoffet er særlig mineralet fluoritt, som brytes blant annet i Kina og Mexico.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/9/fluorine"
      },
      {
        "title": "USGS – Mineral Commodity Summaries 2026",
        "url": "https://pubs.usgs.gov/publication/mcs2026"
      }
    ]
  },
  {
    "number": 10,
    "uses": "Neon brukes i lysreklame og i gassblandinger til enkelte lasere.",
    "economy": "Et lite marked, men viktig for spesielle lys- og laseranvendelser.",
    "production": "Skilles fra flytende luft som et biprodukt ved store luftseparasjonsanlegg. Den lave konsentrasjonen gjør innsamlingen krevende.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/10/neon"
      }
    ]
  },
  {
    "number": 11,
    "uses": "Natriumforbindelser brukes i mat, glass, såpe og papir. Natriumhydroksid er et viktig industrikjemikalium.",
    "economy": "Salt og natriumkjemikalier er rimelige råstoffer med svært store bruksvolumer. Rent natriummetall har mer spesialisert bruk.",
    "production": "Salt hentes fra bergsaltgruver, saltlaker og sjøvann i mange land. Natriummetall fremstilles industrielt fra salter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/11/sodium"
      }
    ]
  },
  {
    "number": 12,
    "uses": "Magnesium brukes i lette legeringer til kjøretøy og elektronikk. Magnesiumoksid tåler varme og brukes i ovnsforinger.",
    "economy": "Lav vekt gjør metallet nyttig i transport; forbindelsene er viktige for varmebestandige materialer.",
    "production": "Hentes fra mineraler som dolomitt og magnesitt, og fra saltlaker. Kina er et eksempel på et land med stor metallproduksjon.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/12/magnesium"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      }
    ]
  },
  {
    "number": 13,
    "uses": "Aluminium brukes i fly, biler, bokser, bygg og strømledninger.",
    "economy": "Et av de viktigste konstruksjonsmetallene. Gjenvinning sparer mye av energien som trengs ved produksjon fra malm.",
    "production": "Bauksitt brytes blant annet i Australia og Brasil. Aluminiumoksid fra malmen omdannes til metall i smelteverk, også i Norge.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/13/aluminium"
      },
      {
        "title": "USGS – mineralproduksjon i Australia",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/australia"
      },
      {
        "title": "USGS – mineralproduksjon i Brasil",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/brazil"
      },
      {
        "title": "Norges mineralstrategi – norske råstoffer og industri",
        "url": "https://www.regjeringen.no/no/dokumenter/norges-mineralstrategi/id2986278/?ch=4"
      }
    ]
  },
  {
    "number": 14,
    "uses": "Rent silisium brukes i databrikker og solceller. Silisiumdioksid inngår i glass, mens silikon brukes i tetningsmidler.",
    "economy": "Grunnleggende for elektronikk og solenergi; silikater har dessuten stor betydning som byggematerialer.",
    "production": "Kvarts er et viktig råstoff. Metallet fremstilles i elektriske ovner, blant annet i Norge, og må renses ekstra grundig til elektronikk.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/14/silicon"
      },
      {
        "title": "Norges mineralstrategi – norske råstoffer og industri",
        "url": "https://www.regjeringen.no/no/dokumenter/norges-mineralstrategi/id2986278/?ch=4"
      }
    ]
  },
  {
    "number": 15,
    "uses": "Fosfat brukes særlig i gjødsel. Fosforforbindelser inngår også i kjemikalier og enkelte batterimaterialer.",
    "economy": "Et sentralt næringsstoff i jordbruket som planter ikke kan erstatte med et annet grunnstoff.",
    "production": "Fosfatstein brytes blant annet i Marokko, Kina og USA. Det meste brukes som fosfat, ikke som rent fosfor.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/15/phosphorus"
      },
      {
        "title": "USGS – Mineral Commodity Summaries 2026",
        "url": "https://pubs.usgs.gov/publication/mcs2026"
      }
    ]
  },
  {
    "number": 16,
    "uses": "Svovel brukes særlig til svovelsyre, som igjen trengs til gjødsel og andre kjemikalier. Det brukes også til gummi.",
    "economy": "Stor betydning som råstoff for kjemisk industri og gjødselproduksjon.",
    "production": "Mye svovel gjenvinnes når svovelforbindelser fjernes fra olje og naturgass. Det kan også forekomme som rent stoff i vulkanske områder.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/16/sulfur"
      }
    ]
  },
  {
    "number": 17,
    "uses": "Klor brukes til vannbehandling og produksjon av PVC og andre kjemikalier.",
    "economy": "En viktig byggestein i kjemisk industri. Klorproduksjon er tett knyttet til produksjonen av natriumhydroksid.",
    "production": "Fremstilles ved elektrolyse av saltlake på kjemiske fabrikker. Saltet kommer fra gruver, saltlaker eller sjøvann.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/17/chlorine"
      }
    ]
  },
  {
    "number": 18,
    "uses": "Argon beskytter varme metaller under sveising og brukes i lyspærer og isolerglass.",
    "economy": "En viktig industrigass fordi den reagerer svært lite med andre stoffer.",
    "production": "Skilles fra luft sammen med oksygen og nitrogen ved luftseparasjonsanlegg i mange land.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/18/argon"
      }
    ]
  },
  {
    "number": 19,
    "uses": "Kaliumsalter brukes særlig i gjødsel, men også i glass, såpe og andre kjemikalier.",
    "economy": "Svært viktig for jordbruket: kalium er ett av de tre hovednæringsstoffene i vanlig NPK-gjødsel.",
    "production": "Kaliumsalter hentes fra underjordiske saltlag og saltlaker. Saskatchewan i Canada er et viktig utvinningsområde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/19/potassium"
      },
      {
        "title": "USGS – kaliumsalter i Canada",
        "url": "https://pubs.usgs.gov/publication/70273714"
      }
    ]
  },
  {
    "number": 20,
    "uses": "Kalsiumforbindelser brukes i sement, kalk, gips og stålproduksjon. Rent metall har mer spesialiserte bruksområder.",
    "economy": "Stor økonomisk betydning gjennom byggematerialer som produseres i enorme mengder.",
    "production": "Kalkstein og gips brytes mange steder i verden; Norge har blant annet kalksteinsuttak. Det er vanligvis forbindelsene som brukes direkte.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/20/calcium"
      },
      {
        "title": "Norges mineralstrategi – norske råstoffer og industri",
        "url": "https://www.regjeringen.no/no/dokumenter/norges-mineralstrategi/id2986278/?ch=4"
      }
    ]
  },
  {
    "number": 21,
    "uses": "Scandium kan gjøre aluminiumlegeringer sterkere og brukes i spesielle lamper.",
    "economy": "Et lite spesialmarked; kostbar utvinning begrenser hvor mye det brukes.",
    "production": "Forekommer spredt i mange mineraler og gjenvinnes ofte fra andre råstoffstrømmer. Det sjeldne mineralet thortveititt er kjent fra Skandinavia.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/21/scandium"
      }
    ]
  },
  {
    "number": 22,
    "uses": "Titanmetall brukes i fly, implantater og korrosjonsbestandige deler. Titandioksid er et hvitt pigment i maling og plast.",
    "economy": "Både pigmentindustrien og avanserte metallprodukter gir titan økonomisk betydning.",
    "production": "Ilmenitt og rutil er viktige råstoffer. Ilmenitt brytes blant annet i Norge; metall og pigment fremstilles deretter i egne prosesser.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/22/titanium"
      },
      {
        "title": "Norges mineralstrategi – norske råstoffer og industri",
        "url": "https://www.regjeringen.no/no/dokumenter/norges-mineralstrategi/id2986278/?ch=4"
      }
    ]
  },
  {
    "number": 23,
    "uses": "Vanadium styrker stål og brukes i kjemiske katalysatorer og noen typer strømningsbatterier.",
    "economy": "Små tilsetninger kan gi sterkere stål, med betydning for bygg, verktøy og maskiner.",
    "production": "Hentes fra vanadiumholdig jernmalm og andre mineraler, og kan gjenvinnes fra enkelte industrielle reststoffer. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/23/vanadium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 24,
    "uses": "Krom gjør rustfritt stål motstandsdyktig mot korrosjon. Det brukes også i overflatebelegg og andre legeringer.",
    "economy": "En nøkkelråvare for rustfritt stål i industri, kjøkkenutstyr og bygg.",
    "production": "Utvinnes særlig fra kromitt, blant annet i Sør-Afrika, Kasakhstan, India og Tyrkia.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/24/chromium"
      }
    ]
  },
  {
    "number": 25,
    "uses": "Mangan brukes i stål og i flere batterikjemier. Mangandioksid er kjent fra vanlige tørrbatterier.",
    "economy": "Stålindustrien trenger mangan for å oppnå ønskede egenskaper; batteribruk gir ytterligere etterspørsel.",
    "production": "Manganmalm brytes blant annet i Sør-Afrika, Gabon og Australia. Pyrolusitt er et vanlig manganmineral.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/25/manganese"
      }
    ]
  },
  {
    "number": 26,
    "uses": "Jern brukes først og fremst som stål i bygg, kjøretøy, skip, verktøy og maskiner.",
    "economy": "Et grunnleggende metall for verdens infrastruktur, med langt større bruksvolum enn de fleste andre metaller.",
    "production": "Hematitt og magnetitt er viktige malmer. Australia og Brasil utvinner store mengder; skrapstål er også en viktig råstoffkilde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/26/iron"
      },
      {
        "title": "USGS – mineralproduksjon i Australia",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/australia"
      },
      {
        "title": "USGS – mineralproduksjon i Brasil",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/brazil"
      }
    ]
  },
  {
    "number": 27,
    "uses": "Kobolt brukes i enkelte oppladbare batterier, varmebestandige legeringer, magneter og blå pigmenter.",
    "economy": "Viktig for bestemte batterier og turbinmaterialer. Mange bruksområder krever små mengder med spesielle egenskaper.",
    "production": "Utvinnes ofte sammen med kobber eller nikkel, blant annet i DR Kongo og Indonesia. Gruvedrift og raffinering kan skje i ulike land.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/27/cobalt"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      },
      {
        "title": "USGS – mineralproduksjon i Indonesia",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/indonesia"
      }
    ]
  },
  {
    "number": 28,
    "uses": "Nikkel brukes i rustfritt stål, varmebestandige legeringer og flere batterityper.",
    "economy": "Stor betydning for stålindustrien og for deler av batteriindustrien.",
    "production": "Hentes fra laterittmalm og sulfidmalm. Indonesia, Filippinene og Canada er eksempler på utvinningsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/28/nickel"
      },
      {
        "title": "USGS – mineralproduksjon i Indonesia",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/indonesia"
      }
    ]
  },
  {
    "number": 29,
    "uses": "Kobber leder strøm godt og brukes i ledninger, motorer, elektronikk og vannrør.",
    "economy": "Sentralt for strømnett og elektrifisering. Gjenvinning er en viktig del av kobberforsyningen.",
    "production": "Hentes særlig fra kobbermineraler som kobberkis, blant annet i Chile, Peru og Kina.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/29/copper"
      }
    ]
  },
  {
    "number": 30,
    "uses": "Sink beskytter stål mot rust ved galvanisering og brukes i messing og støpte deler.",
    "economy": "Stor økonomisk nytte fordi korrosjonsbeskyttelse forlenger levetiden til bygg, biler og annet stålutstyr.",
    "production": "Utvinnes særlig fra sinkblende, blant annet i Kina, Australia og Peru.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/30/zinc"
      }
    ]
  },
  {
    "number": 31,
    "uses": "Galliumforbindelser brukes i lysdioder, lasere og halvledere for blant annet effektiv strømstyring.",
    "economy": "Et lite råstoffmarked med stor betydning for elektronikk og kommunikasjon.",
    "production": "Gjenvinnes særlig som biprodukt fra behandling av bauksitt, også fra sinkråstoff. Kina har en sentral rolle i produksjonen.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/31/gallium"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      },
      {
        "title": "USGS – gallium som biprodukt",
        "url": "https://pubs.usgs.gov/publication/ofr20261018/full"
      }
    ]
  },
  {
    "number": 32,
    "uses": "Germanium brukes i fiberoptikk, infrarød optikk og spesielle halvledere.",
    "economy": "Viktig for utvalgte produkter innen kommunikasjon, sensorer og avansert elektronikk.",
    "production": "Gjenvinnes fra sinkråstoff og fra enkelte kullbaserte reststoffer. Det drives sjelden egne germaniumgruver. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/32/germanium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 33,
    "uses": "Arsen inngår blant annet i galliumarsenid til elektronikk og i noen spesiallegeringer.",
    "economy": "Et spesialråstoff for halvledere; giftigheten begrenser andre bruksområder og krever kontrollert håndtering.",
    "production": "Hentes vanligvis som biprodukt ved behandling av andre metallmalmer, blant annet kobber- og blyråstoff. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/33/arsenic"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 34,
    "uses": "Selen brukes i glassproduksjon, pigmenter og enkelte solcellematerialer.",
    "economy": "Et lite, men nyttig marked i glass- og materialindustrien. Tilgangen henger sammen med produksjonen av andre metaller.",
    "production": "Gjenvinnes hovedsakelig fra reststoffer ved elektrolytisk raffinering av kobber. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/34/selenium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 35,
    "uses": "Bromforbindelser brukes i enkelte flammehemmere, borevæsker og kjemisk produksjon.",
    "economy": "Et spesialråstoff for kjemisk industri. Miljøegenskaper påvirker hvilke forbindelser som brukes.",
    "production": "Hentes fra bromidrike saltlaker, blant annet i USA, Israel og Kina; ikke vanligvis fra fast malm.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/35/bromine"
      }
    ]
  },
  {
    "number": 36,
    "uses": "Krypton brukes i spesiallamper, lasere og enkelte isolerglassvinduer.",
    "economy": "En nisjegass som kan gi gode egenskaper i lys- og isolasjonsprodukter, men er dyr å samle inn.",
    "production": "Skilles ut fra luft ved store luftseparasjonsanlegg. Det finnes svært lite krypton i hver liter luft.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/36/krypton"
      }
    ]
  },
  {
    "number": 37,
    "uses": "Rubidium brukes blant annet i forskning, atomklokker og spesialglass.",
    "economy": "Et lite marked for presisjonsutstyr og forskning, ikke et vanlig konstruksjonsmateriale.",
    "production": "Hentes som biprodukt fra mineraler som lepidolitt og fra kaliumholdige råstoffer og saltlaker.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/37/rubidium"
      },
      {
        "title": "NIST – atomklokker med rubidium",
        "url": "https://www.nist.gov/atomic-clocks/how-atomic-clocks-work/clocks-galore"
      }
    ]
  },
  {
    "number": 38,
    "uses": "Strontiumsalter gir rødt lys i fyrverkeri. Forbindelser brukes også i ferrittmagneter og selvlysende materialer.",
    "economy": "Et spesialråstoff for magneter, keramikk og signalprodukter.",
    "production": "Utvinnes særlig fra mineralet celestin. Kina er et eksempel på et land med strontiumproduksjon.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/38/strontium"
      }
    ]
  },
  {
    "number": 39,
    "uses": "Yttrium brukes i lasermaterialer, keramikk og lysgivende materialer.",
    "economy": "Viktig i noen avanserte materialer selv om det brukes langt mindre enn vanlige industrimetaller.",
    "production": "Hentes fra sjeldne jordartsmineraler som xenotim og monazitt, blant annet fra råstoff i Kina.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/39/yttrium"
      }
    ]
  },
  {
    "number": 40,
    "uses": "Zirkonium brukes i korrosjonsbestandige legeringer og kjernekraftverk. Zirkon og zirkoniumoksid brukes i keramikk.",
    "economy": "Viktig både for keramikk og for spesialmaterialer som tåler krevende miljøer.",
    "production": "Mineralet zirkon hentes særlig fra mineralsand, blant annet i Australia og Sør-Afrika.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/40/zirconium"
      }
    ]
  },
  {
    "number": 41,
    "uses": "Niobium styrker stål og brukes i superledende magneter, blant annet til MR og partikkelakseleratorer.",
    "economy": "Små tilsetninger kan gjøre stål lettere og sterkere; spesiallegeringer er viktige for avansert utstyr.",
    "production": "Hentes fra niobiummineraler, særlig pyroklor. Brasil er et sentralt utvinningsland; Canada har også produksjon.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/41/niobium"
      },
      {
        "title": "USGS – mineralproduksjon i Brasil",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/brazil"
      }
    ]
  },
  {
    "number": 42,
    "uses": "Molybden styrker stål og brukes i katalysatorer og smøremidler som molybdendisulfid.",
    "economy": "Viktig for legeringer som tåler varme, slitasje og korrosjon.",
    "production": "Molybdenglans er et viktig mineral. Utvinning skjer blant annet i Kina, USA, Chile og Peru, også som biprodukt fra kobbermalm.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/42/molybdenum"
      }
    ]
  },
  {
    "number": 43,
    "uses": "Isotopen technetium-99m brukes som sporstoff ved medisinske bildeundersøkelser.",
    "economy": "Svært viktig for nukleærmedisinsk diagnostikk, selv om selve stoffmengdene er små.",
    "production": "Produseres gjennom kjernefysiske prosesser. Medisinsk technetium leveres ofte fra generatorer med molybden-99; det utvinnes ikke fra vanlige gruver.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/43/technetium"
      }
    ]
  },
  {
    "number": 44,
    "uses": "Ruthenium brukes i elektriske komponenter, elektroder og kjemiske katalysatorer.",
    "economy": "Små mengder har verdi i elektronikk og kjemisk industri, blant annet ved klorproduksjon.",
    "production": "Gjenvinnes sammen med andre platinametaller fra malm og reststoffer i nikkel- og platinametallindustrien. Sør-Afrika er et viktig utvinningsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/44/ruthenium"
      },
      {
        "title": "USGS – platinametaller fra Sør-Afrika",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/south-africa"
      }
    ]
  },
  {
    "number": 45,
    "uses": "Rhodium brukes særlig i bilkatalysatorer som reduserer utslipp av nitrogenoksider, og i enkelte overflatebelegg.",
    "economy": "Et sjeldent spesialmetall der utslippsrensing gir viktig etterspørsel.",
    "production": "Gjenvinnes sammen med andre platinametaller og ved behandling av kobber- og nikkelråstoff. Brukte katalysatorer er også en kilde. Sør-Afrika er et viktig utvinningsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/45/rhodium"
      },
      {
        "title": "USGS – platinametaller fra Sør-Afrika",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/south-africa"
      }
    ]
  },
  {
    "number": 46,
    "uses": "Palladium brukes i bilkatalysatorer, elektronikk, smykker og kjemiske katalysatorer.",
    "economy": "Et verdifullt industrimetall med stor betydning for utslippsrensing.",
    "production": "Hentes fra platinametallholdige malmer og som biprodukt fra nikkelproduksjon, blant annet i Russland og Sør-Afrika. Det gjenvinnes også fra katalysatorer.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/46/palladium"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      }
    ]
  },
  {
    "number": 47,
    "uses": "Sølv brukes i smykker, elektriske kontakter, elektronikk og solceller.",
    "economy": "Både industriråstoff og edelmetall for sparing og smykker; god elektrisk ledningsevne gir teknisk verdi.",
    "production": "Hentes fra sølvmalm, men også som biprodukt fra bly-, sink-, kobber- og gullmalm. Gjenvinning bidrar til forsyningen. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/47/silver"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 48,
    "uses": "Kadmium brukes i enkelte nikkel–kadmium-batterier og i kadmiumtellurid til solceller.",
    "economy": "Et begrenset spesialmarked. Giftigheten gjør at mange tidligere bruksområder er erstattet av andre materialer.",
    "production": "Gjenvinnes nesten alltid som biprodukt når sinkmalm behandles, og kan også hentes fra brukte produkter. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/48/cadmium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 49,
    "uses": "Indiumtinnoksid gir gjennomsiktige, strømledende lag i skjermer. Indiumforbindelser brukes også i halvledere.",
    "economy": "Viktig for skjermteknologi og avansert elektronikk, til tross for små produksjonsmengder.",
    "production": "Gjenvinnes særlig som biprodukt ved sinkraffinering. Tilgangen avhenger derfor også av sinkindustrien. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/49/indium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 50,
    "uses": "Tinn brukes i loddemetall, beskyttende belegg på stålbokser og produksjon av flatt glass.",
    "economy": "Viktig for å koble sammen elektroniske komponenter og for emballasjeindustrien.",
    "production": "Utvinnes fra kassiteritt, blant annet i Kina, Indonesia, Peru og Bolivia. Resirkulert tinn er også en råstoffkilde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/50/tin"
      }
    ]
  },
  {
    "number": 51,
    "uses": "Antimonforbindelser brukes i flammehemmende materialer. Metallet brukes også til å gjøre blylegeringer hardere.",
    "economy": "Et spesialråstoff med betydning for materialegenskaper og enkelte batterier.",
    "production": "Hentes særlig fra antimonitt, blant annet i Kina, og kan også gjenvinnes fra metallprodukter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/51/antimony"
      }
    ]
  },
  {
    "number": 52,
    "uses": "Tellur brukes i kadmiumtellurid-solceller og i legeringer og termoelektriske materialer.",
    "economy": "Et lite marked der solcelleproduksjon og spesialmaterialer kan ha stor betydning for etterspørselen.",
    "production": "Gjenvinnes særlig fra reststoffer ved kobberraffinering. Utvinningen er dermed knyttet til kobberindustrien. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/52/tellurium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 53,
    "uses": "Jodforbindelser brukes i kontrastmidler, desinfeksjon, skjermer og tilsetning til salt og dyrefôr.",
    "economy": "Viktig for både helse og kjemisk industri, selv om behovet i hvert produkt ofte er lite.",
    "production": "Hentes fra jodholdige saltlaker og mineralavsetninger. Chile og Japan er eksempler på produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/53/iodine"
      },
      {
        "title": "USGS – Mineral Commodity Summaries 2026",
        "url": "https://pubs.usgs.gov/publication/mcs2026"
      }
    ]
  },
  {
    "number": 54,
    "uses": "Xenon brukes i spesiallamper og som drivgass i enkelte satellitters ionemotorer.",
    "economy": "En sjelden og kostbar spesialgass for blant annet romteknologi og belysning.",
    "production": "Skilles fra luft ved store luftseparasjonsanlegg. Svært lav konsentrasjon gjør utvinningen mer krevende enn for argon.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/54/xenon"
      }
    ]
  },
  {
    "number": 55,
    "uses": "Cesiumforbindelser brukes i borevæsker. Cesiumatomer brukes også i svært presise atomklokker.",
    "economy": "Et lite spesialmarked; presis tidtaking har stor betydning for kommunikasjon og navigasjon.",
    "production": "Mineralet pollucitt er en viktig kilde, blant annet kjent fra Manitoba i Canada. Cesium separeres fra andre alkalimetaller.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/55/caesium"
      }
    ]
  },
  {
    "number": 56,
    "uses": "Bariumsulfat brukes til å gjøre borevæsker tunge og som kontrastmiddel ved enkelte røntgenundersøkelser.",
    "economy": "Mineralet barytt er viktig for boring etter olje og gass; rent bariummetall har langt mindre bruk.",
    "production": "Hentes hovedsakelig fra baryttforekomster. For mange bruksområder brukes mineralet uten å fremstille rent metall. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/56/barium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 57,
    "uses": "Lantan brukes i batterilegeringer, optisk glass og katalysatorer.",
    "economy": "Et nyttig råstoff for batterier, optikk og kjemisk industri; verdien ligger ofte i forbindelsene.",
    "production": "Separeres fra andre sjeldne jordarter i mineraler som monazitt og bastnäsitt. Kina har en sentral rolle i denne industrien.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/57/lanthanum"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 58,
    "uses": "Ceriumoksid brukes til å polere glass og i katalysatorer. Ceriumlegeringer gir gnister i lightere.",
    "economy": "Et mye brukt sjeldent jordartsmetall med betydning for glassbearbeiding og utslippsrensing.",
    "production": "Hentes fra bastnäsitt og monazitt sammen med andre sjeldne jordarter, med betydelig produksjon i Kina.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/58/cerium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 59,
    "uses": "Praseodym brukes i permanente magneter, legeringer og farging av glass og keramikk.",
    "economy": "Viktig som del av magnetmaterialer og som spesialtilsetning til andre materialer.",
    "production": "Separeres fra monazitt og bastnäsitt sammen med andre sjeldne jordarter. Kina er en viktig kilde i forsyningskjeden.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/59/praseodymium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 60,
    "uses": "Neodym brukes i sterke magneter til motorer, generatorer, høyttalere og hodetelefoner, og i enkelte lasere.",
    "economy": "Stor teknologisk betydning for kompakte motorer og magneter, blant annet i elbiler og vindkraft.",
    "production": "Hentes fra mineraler som bastnäsitt og monazitt. Kina har en sentral rolle i utvinning og videre bearbeiding av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/60/neodymium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 61,
    "uses": "Promethium brukes først og fremst i forskning, og har hatt nisjebruk i spesialbatterier og måleutstyr.",
    "economy": "Ingen bred råvareøkonomi; radioaktiviteten og begrenset tilgang gjør bruken svært spesialisert.",
    "production": "Fremstilles gjennom kjernefysiske prosesser og separeres i spesialanlegg. Det finnes ingen vanlig gruvedrift etter promethium.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/61/promethium"
      }
    ]
  },
  {
    "number": 62,
    "uses": "Samarium brukes i samarium–kobolt-magneter som tåler varme, og i materialer som absorberer nøytroner.",
    "economy": "Nyttig for magneter i krevende miljøer, der temperaturstabilitet er viktigere enn lavest mulig pris.",
    "production": "Separeres fra mineraler som monazitt og bastnäsitt, sammen med andre sjeldne jordarter. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/62/samarium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 63,
    "uses": "Europiumforbindelser gir rødt og blått lys i lysgivende materialer og brukes også i sikkerhetsmerking.",
    "economy": "Små mengder kan gi spesielle optiske egenskaper i lamper, skjermer og kontrollmerker.",
    "production": "Hentes fra sjeldne jordartsmineraler som monazitt og bastnäsitt, og må separeres fra lignende grunnstoffer. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/63/europium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 64,
    "uses": "Gadoliniumforbindelser brukes i enkelte MR-kontrastmidler. Stoffet absorberer også nøytroner og brukes i spesialmaterialer.",
    "economy": "Viktig for medisinsk diagnostikk og enkelte tekniske nisjer; det brukes i kontrollerte forbindelser, ikke som fritt metall i kroppen.",
    "production": "Separeres fra monazitt, bastnäsitt og andre sjeldne jordartsråstoffer. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/64/gadolinium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 65,
    "uses": "Terbium brukes i grønne lysgivende materialer og i spesielle magnetiske legeringer.",
    "economy": "Et spesialråstoff der små tilsetninger kan gi verdifulle lys- og magnetegenskaper.",
    "production": "Hentes sammen med andre sjeldne jordarter og krever omfattende separasjon. Monazitt og enkelte andre jordartsmineraler er mulige råstoffer. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/65/terbium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 66,
    "uses": "Dysprosium kan hjelpe neodymmagneter med å beholde magnetismen ved høy temperatur.",
    "economy": "Viktig for noen motorer og generatorer som må fungere godt i varme omgivelser.",
    "production": "Hentes fra sjeldne jordartsråstoffer, blant annet mineraler som xenotim, og separeres fra kjemisk lignende metaller. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/66/dysprosium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 67,
    "uses": "Holmium brukes i enkelte lasere og spesielle magnetiske materialer, og kan absorbere nøytroner.",
    "economy": "Et lite nisjemarked for forskningsutstyr og avansert teknologi.",
    "production": "Hentes i små mengder fra sjeldne jordartsmineraler, blant annet ved bearbeiding av yttriumholdige råstoffer. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/67/holmium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 68,
    "uses": "Erbium brukes i optiske fiberforsterkere, lasere og rosa glass.",
    "economy": "Viktig for optisk kommunikasjon: erbium kan forsterke lyssignaler i fiberkabler.",
    "production": "Separeres fra andre sjeldne jordarter i mineraler som monazitt og bastnäsitt. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/68/erbium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 69,
    "uses": "Thulium brukes i spesiallasere og har vært brukt som strålingskilde i bærbart røntgenutstyr.",
    "economy": "Et lite, spesialisert marked. Den lave konsentrasjonen i råstoffene gjør utvinningen krevende.",
    "production": "Hentes i svært små mengder fra sjeldne jordartsmineraler som monazitt og må skilles fra lignende grunnstoffer. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/69/thulium"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 70,
    "uses": "Ytterbium brukes i lasere, blant annet fiberlasere, og i forskning på svært presise klokker.",
    "economy": "Et nisjeråstoff for optikk, måleteknikk og avansert produksjonsutstyr.",
    "production": "Separeres fra sjeldne jordartsmineraler, blant annet monazitt; det brytes vanligvis ikke i egne ytterbiumgruver. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/70/ytterbium"
      },
      {
        "title": "NIST – atomklokker med ytterbium",
        "url": "https://www.nist.gov/programs-projects/yb-optical-lattice-clock"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 71,
    "uses": "Lutetium brukes i spesialkatalysatorer, og isotopen lutetium-177 brukes i målrettet strålebehandling.",
    "economy": "Små mengder kan ha stor verdi innen spesialkjemi og nukleærmedisin.",
    "production": "Naturlig lutetium separeres fra sjeldne jordartsmineraler. Medisinske radioisotoper fremstilles i egne kjernefysiske produksjonsanlegg. Kina er sentralt i forsyningen av sjeldne jordarter.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/71/lutetium"
      },
      {
        "title": "IAEA – målrettet behandling med lutetium-177",
        "url": "https://www.iaea.org/sites/default/files/gc/gc67-inf4.pdf"
      },
      {
        "title": "Natural Resources Canada – sjeldne jordarter",
        "url": "https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/rare-earth-elements-facts"
      }
    ]
  },
  {
    "number": 72,
    "uses": "Hafnium brukes i kontrollstaver, varmebestandige legeringer og som hafniumoksid i databrikker.",
    "economy": "Et lite marked med betydning for både mikroelektronikk og spesialmaterialer.",
    "production": "Følger zirkonium i mineralet zirkon og gjenvinnes ved separasjon under zirkoniumproduksjon, ikke vanligvis fra egne hafniumgruver.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/72/hafnium"
      }
    ]
  },
  {
    "number": 73,
    "uses": "Tantal brukes i små kondensatorer i elektronikk, kjemisk utstyr og enkelte implantater.",
    "economy": "Viktig når det trengs kompakte komponenter og høy korrosjonsbestandighet.",
    "production": "Hentes blant annet fra tantalitt og andre mineraler sammen med niobium. Utvinningen kan være knyttet til tinn- og andre metallråstoffer.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/73/tantalum"
      }
    ]
  },
  {
    "number": 74,
    "uses": "Wolframkarbid brukes i harde skjære- og boreverktøy. Wolframmetall brukes der høy temperatur er et problem.",
    "economy": "Stor betydning for verktøy som bearbeider metall og bergarter.",
    "production": "Utvinnes særlig fra scheelitt og wolframitt. Brukte hardmetallverktøy kan også gjenvinnes. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/74/tungsten"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 75,
    "uses": "Rhenium brukes i varmebestandige turbinlegeringer og i kjemiske katalysatorer.",
    "economy": "Et sjeldent spesialmetall med betydning for flymotorer og raffinering.",
    "production": "Gjenvinnes særlig fra restgasser og støv ved behandling av molybdenholdige råstoffer, ofte knyttet til kobbermalm. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/75/rhenium"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 76,
    "uses": "Osmium brukes i noen svært harde legeringer. Osmiumforbindelser brukes blant annet i mikroskopi.",
    "economy": "Et svært lite spesialmarked; sjeldenhet og krevende håndtering begrenser bruken.",
    "production": "Gjenvinnes sammen med andre platinametaller, blant annet fra reststoffer ved nikkelraffinering.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/76/osmium"
      }
    ]
  },
  {
    "number": 77,
    "uses": "Iridium brukes i slitesterke elektriske kontakter, tennplugger og spesialutstyr som tåler høy temperatur.",
    "economy": "Et sjeldent metall med verdi når materialer må tåle sterk korrosjon og slitasje.",
    "production": "Gjenvinnes som biprodukt ved behandling av platinametall- og nikkelråstoffer. Sør-Afrika er et viktig utvinningsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/77/iridium"
      },
      {
        "title": "USGS – platinametaller fra Sør-Afrika",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/south-africa"
      }
    ]
  },
  {
    "number": 78,
    "uses": "Platina brukes i bilkatalysatorer, kjemiske katalysatorer, smykker og brenselceller.",
    "economy": "Både et viktig industrimetall og et edelmetall. Katalytiske egenskaper gir stor teknisk verdi.",
    "production": "Utvinnes særlig fra platinametallmalmer, blant annet i Sør-Afrika. Brukte katalysatorer og smykker gjenvinnes også.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/78/platinum"
      },
      {
        "title": "USGS – råstoffer og produksjonskjeder",
        "url": "https://pubs.usgs.gov/publication/sir20255021"
      }
    ]
  },
  {
    "number": 79,
    "uses": "Gull brukes i smykker, elektroniske kontakter og som investering og reserveverdi.",
    "economy": "Har både finansiell og industriell betydning; korrosjonsbestandigheten er nyttig i elektronikk.",
    "production": "Hentes fra gullførende bergarter og løsmasser, blant annet i Kina og Australia. Resirkulert gull er også en viktig kilde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/79/gold"
      },
      {
        "title": "USGS – mineralproduksjon i Australia",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/australia"
      }
    ]
  },
  {
    "number": 80,
    "uses": "Kvikksølv har vært brukt i måleinstrumenter, lamper og kjemisk industri. Mange bruksområder er erstattet av andre løsninger.",
    "economy": "Et begrenset industriråstoff der giftighet og miljøproblemer veier tungt ved valg av materialer.",
    "production": "Sinnober er den viktigste malmen. Kvikksølv kan også gjenvinnes fra produkter og industrielle reststoffer. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/80/mercury"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 81,
    "uses": "Thallium brukes i noen elektroniske komponenter og spesielle optiske materialer.",
    "economy": "Et lite nisjemarked; høy giftighet begrenser anvendelsene.",
    "production": "Gjenvinnes som biprodukt ved behandling av blant annet kobber-, sink- og blyråstoffer.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/81/thallium"
      }
    ]
  },
  {
    "number": 82,
    "uses": "Bly brukes særlig i blybatterier, samt i stråleskjerming og enkelte legeringer.",
    "economy": "Batterier gir fortsatt betydelig etterspørsel. Gjenvinning av brukte batterier er en viktig råstoffkilde.",
    "production": "Hentes fra blyglans og fra resirkulerte produkter. Giftigheten gjør kontrollert behandling viktig. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/82/lead"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 83,
    "uses": "Vismut brukes i lettsmeltelige legeringer, enkelte legemidler, kosmetikk og pigmenter.",
    "economy": "Et spesialråstoff som også kan erstatte bly i noen produkter.",
    "production": "Gjenvinnes ofte som biprodukt ved raffinering av bly, kobber, tinn og andre metaller. Kina er et eksempel på et produksjonsland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/83/bismuth"
      },
      {
        "title": "USGS – mineralutvinning og metallproduksjon i Kina",
        "url": "https://www.usgs.gov/centers/national-minerals-information-center/china"
      }
    ]
  },
  {
    "number": 84,
    "uses": "Polonium brukes i forskning og har hatt nisjebruk i antistatiske apparater.",
    "economy": "Svært liten økonomisk rolle utenfor spesialiserte radioaktive kilder.",
    "production": "Fremstilles i spesialanlegg gjennom kjernefysiske prosesser med vismut. De naturlige sporene i uranmalm er ikke en vanlig råstoffkilde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/84/polonium"
      }
    ]
  },
  {
    "number": 85,
    "uses": "Astat brukes i forskning, blant annet på målrettet behandling med isotopen astat-211.",
    "economy": "Et forskningsstoff med mulig medisinsk verdi, men ingen vanlig råvarehandel.",
    "production": "Fremstilles i svært små mengder ved partikkelakseleratorer. Isotopene lever kort, så stoffet kan ikke lagres som et vanlig råstoff.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/85/astatine"
      },
      {
        "title": "DOE – forskning og fremstilling av astat-211",
        "url": "https://www.isotopes.gov/At-211-Advancing-the-reach-of-short-lived-isotopes"
      }
    ]
  },
  {
    "number": 86,
    "uses": "Radon brukes hovedsakelig som sporstoff i forskning. I bygninger er det først og fremst en uønsket radioaktiv gass.",
    "economy": "Liten verdi som produkt; økonomisk betydning ligger særlig i måling og tiltak mot radon i bygninger.",
    "production": "Dannes naturlig når radium i berggrunnen henfaller. Til forskning kan det samles fra slike radioaktive kilder; det er ingen vanlig radongruve.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/86/radon"
      }
    ]
  },
  {
    "number": 87,
    "uses": "Francium brukes bare i forskning på atomer og radioaktivitet.",
    "economy": "Ingen vanlig industriell bruk eller råvarehandel; isotopene lever for kort til å lagres.",
    "production": "Fremstilles i små mengder i forskningsanlegg. Naturlige spor dannes ved radioaktivt henfall, men utvinnes ikke kommersielt.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/87/francium"
      }
    ]
  },
  {
    "number": 88,
    "uses": "Isotopen radium-223 brukes i behandling av enkelte krefttilfeller. Historisk ble radium brukt i selvlysende maling.",
    "economy": "En liten, spesialisert medisinsk rolle; den gamle forbruksbruken er forlatt på grunn av strålingen.",
    "production": "Forekommer i spor i uranmalm. Radiumisotoper til moderne bruk separeres eller fremstilles i spesialiserte radioisotopanlegg.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/88/radium"
      },
      {
        "title": "Oak Ridge – medisinske isotoper",
        "url": "https://www.ornl.gov/news/five-medical-radioisotopes-plus-stable-isotope-rise"
      }
    ]
  },
  {
    "number": 89,
    "uses": "Actinium brukes i forskning. Actinium-225 undersøkes og brukes i spesialisert målrettet strålebehandling.",
    "economy": "Mulig medisinsk verdi som spesialisert isotop, men ingen vanlig metallindustri.",
    "production": "Produseres og separeres i radioisotopanlegg, blant annet med reaktorer eller akseleratorer. Naturlige spor er ikke en praktisk hovedkilde.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/89/actinium"
      },
      {
        "title": "Oak Ridge – medisinske isotoper",
        "url": "https://www.ornl.gov/news/five-medical-radioisotopes-plus-stable-isotope-rise"
      }
    ]
  },
  {
    "number": 90,
    "uses": "Thorium undersøkes som mulig råstoff til kjernekraft og har vært brukt i spesiallegeringer og varmebestandige materialer.",
    "economy": "Mer betydning som mulig fremtidig energiråstoff enn som bredt brukt brensel i dagens kraftverk.",
    "production": "Finnes blant annet i monazitt og thoritt. Kan følge utvinning av sjeldne jordarter; radioaktiviteten gjør behandling og lagring krevende.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/90/thorium"
      }
    ]
  },
  {
    "number": 91,
    "uses": "Protactinium brukes hovedsakelig i forskning på radioaktivitet og grunnstoffenes kjemi.",
    "economy": "Ingen vesentlig industriell bruk; verdien er vitenskapelig.",
    "production": "Finnes i spor i uranmalm og kan separeres fra radioaktive materialer ved spesialiserte laboratorier.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/91/protactinium"
      }
    ]
  },
  {
    "number": 92,
    "uses": "Uran brukes som brensel i kjernekraftverk og som utgangspunkt for produksjon av andre isotoper.",
    "economy": "Et viktig energiråstoff i land som bruker kjernekraft.",
    "production": "Hentes fra uranholdige bergarter, blant annet i Kasakhstan, Canada og Australia, og bearbeides videre til brensel.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/92/uranium"
      },
      {
        "title": "IAEA – global uranproduksjon",
        "url": "https://www-pub.iaea.org/MTCD/publications/PDF/CRCPFUI005web.pdf"
      }
    ]
  },
  {
    "number": 93,
    "uses": "Neptunium brukes i forskning og som utgangspunkt for produksjon av plutonium-238 til romteknologi.",
    "economy": "Et spesialisert kjernefysisk råstoff, ikke et vanlig handelsmetall.",
    "production": "Dannes i kjernekraft- og forskningsreaktorer og separeres i spesialanlegg. Naturlige spor utvinnes ikke kommersielt.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/93/neptunium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 94,
    "uses": "Plutonium brukes i enkelte kjernebrensler. Plutonium-238 gir varme og elektrisk energi til romsonder.",
    "economy": "Viktig i avgrensede deler av kjernekraft og romfart, men ingen vanlig forbrukerråvare.",
    "production": "Fremstilles gjennom kjernefysiske prosesser og separeres i kontrollerte anlegg. Det kommer ikke fra vanlig gruvedrift.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/94/plutonium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 95,
    "uses": "Americium-241 brukes i ioniske røykvarslere og enkelte måleinstrumenter.",
    "economy": "Små mengder har praktisk verdi i spesialiserte strålingskilder.",
    "production": "Dannes gjennom kjernefysiske prosesser og radioaktivt henfall, og separeres fra andre tunge grunnstoffer i spesialanlegg.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/95/americium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 96,
    "uses": "Curium brukes i forskning og som strålingskilde i analyseinstrumenter, blant annet for romutforskning.",
    "economy": "Et spesialmateriale for forskning og instrumenter, ikke en råvare for masseproduksjon.",
    "production": "Fremstilles i forskningsreaktorer og separeres fra andre aktinider. Oak Ridge i USA er et eksempel på et produksjonsmiljø.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/96/curium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      },
      {
        "title": "NASA – curium i analyseinstrumenter på Mars",
        "url": "https://science.nasa.gov/resource/a-piece-of-new-mexico-on-mars/"
      }
    ]
  },
  {
    "number": 97,
    "uses": "Berkelium brukes i forskning, blant annet som utgangsmateriale for å lage tyngre grunnstoffer.",
    "economy": "Ingen vanlig industribruk; verdien ligger i sjeldne forskningsforsøk.",
    "production": "Fremstilles i svært små mengder i forskningsreaktorer, blant annet ved Oak Ridge i USA, og skilles fra andre aktinider.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/97/berkelium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 98,
    "uses": "Californium-252 brukes som nøytronkilde i analyseutstyr og forskning.",
    "economy": "Et svært spesialisert produkt som kan være nyttig i små mengder; ingen vanlig metallindustri.",
    "production": "Fremstilles ved bestråling og separasjon i spesialanlegg, blant annet ved Oak Ridge i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/98/californium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 99,
    "uses": "Einsteinium brukes til å undersøke tunge grunnstoffer og lage enda tyngre atomkjerner.",
    "economy": "Ingen kommersiell hverdagsbruk; betydningen er vitenskapelig.",
    "production": "Kan separeres i svært små mengder fra produksjon i forskningsreaktorer, blant annet ved Oak Ridge i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/99/einsteinium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 100,
    "uses": "Fermium brukes til forskning på tunge atomkjerner og radioaktivt henfall.",
    "economy": "Ingen vanlig industriell bruk eller råvarehandel.",
    "production": "Fremstilles i forskningsreaktorer og undersøkes i svært små mengder. Oak Ridge i USA er et eksempel på et miljø som arbeider med slike isotoper.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/100/fermium"
      },
      {
        "title": "Oak Ridge – produksjon og bruk av isotoper",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 101,
    "uses": "Mendelevium brukes til å undersøke kjemien og radioaktiviteten til tunge grunnstoffer.",
    "economy": "Bare forskningsverdi; det produseres ikke som et vanlig industrimateriale.",
    "production": "Lages atom for atom med partikkelakseleratorer. Det ble først fremstilt ved Berkeley i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/101/mendelevium"
      }
    ]
  },
  {
    "number": 102,
    "uses": "Nobelium brukes i forskning på tunge atomkjerner og deres elektroner.",
    "economy": "Ingen kommersiell bruk; kunnskap om naturens oppbygning er formålet.",
    "production": "Fremstilles med partikkelakseleratorer. Dubna i Russland er sentralt i historien om grunnstoffets fremstilling.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/102/nobelium"
      }
    ]
  },
  {
    "number": 103,
    "uses": "Lawrencium brukes til forskning på de tyngste aktinidenes kjemi og atomstruktur.",
    "economy": "Ingen industriell råvareverdi; bare svært små mengder er tilgjengelige for forskning.",
    "production": "Lages med partikkelakseleratorer, og ble først rapportert fremstilt ved Berkeley i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/103/lawrencium"
      }
    ]
  },
  {
    "number": 104,
    "uses": "Rutherfordium brukes til å undersøke hvordan svært tunge grunnstoffer reagerer kjemisk.",
    "economy": "Ingen vanlig industribruk; forskningsforsøk må gjøres med svært få atomer.",
    "production": "Lages i partikkelakseleratorer. Laboratorier i Dubna og Berkeley har spilt sentrale roller i fremstillingen.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/104/rutherfordium"
      }
    ]
  },
  {
    "number": 105,
    "uses": "Dubnium brukes til forskning på kjemien til svært tunge grunnstoffer.",
    "economy": "Ingen vanlig råvarehandel eller industriell bruk.",
    "production": "Fremstilles i partikkelakseleratorer. Dubna i Russland og Berkeley i USA er sentrale steder i oppdagelseshistorien.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/105/dubnium"
      }
    ]
  },
  {
    "number": 106,
    "uses": "Seaborgium brukes i studier av supertunge atomkjerner og deres kjemi.",
    "economy": "Bare vitenskapelig betydning; det finnes ikke i mengder som kan brukes som materialer.",
    "production": "Lages i partikkelakseleratorer. Grunnstoffet ble først fremstilt ved Berkeley i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/106/seaborgium"
      }
    ]
  },
  {
    "number": 107,
    "uses": "Bohrium brukes til forskning på supertunge grunnstoffer og radioaktivt henfall.",
    "economy": "Ingen kommersiell bruk; kort levetid og svært få atomer begrenser det til forskning.",
    "production": "Lages i partikkelakseleratorer, og ble oppdaget ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/107/bohrium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 108,
    "uses": "Hassium brukes blant annet til å undersøke kjemiske egenskaper hos svært tunge atomer.",
    "economy": "Ingen industriell bruk; verdien er kunnskap om atomers oppbygning og kjemi.",
    "production": "Fremstilles i partikkelakseleratorer. Det ble oppdaget ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/108/hassium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 109,
    "uses": "Meitnerium brukes til forskning på supertunge atomkjerner og deres henfall.",
    "economy": "Ingen kommersiell bruk; det kan ikke samles som et vanlig metall.",
    "production": "Lages i partikkelakseleratorer, og ble oppdaget ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/109/meitnerium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 110,
    "uses": "Darmstadtium brukes til forskning på hvor stabile supertunge atomkjerner kan være.",
    "economy": "Bare forskningsverdi; atomene er svært kortlivede og lages i svært små antall.",
    "production": "Fremstilles i partikkelakseleratorer. Oppdagelsen skjedde ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/110/darmstadtium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 111,
    "uses": "Røntgenium brukes til studier av supertunge grunnstoffer og radioaktivt henfall.",
    "economy": "Ingen praktisk industribruk eller vanlig råvarehandel.",
    "production": "Lages i partikkelakseleratorer, og ble oppdaget ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/111/roentgenium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 112,
    "uses": "Copernicium brukes til forskning på supertunge atomers kjemi og oppbygning.",
    "economy": "Ingen kommersiell bruk; vitenskapelige forsøk gjøres med svært få atomer.",
    "production": "Fremstilles i partikkelakseleratorer. Det ble oppdaget ved GSI i Darmstadt i Tyskland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/112/copernicium"
      },
      {
        "title": "GSI – fremstilling av nye grunnstoffer",
        "url": "https://www.gsi.de/forschungbeschleuniger/forschung_ein_ueberblick/neue_elemente"
      }
    ]
  },
  {
    "number": 113,
    "uses": "Nihonium brukes til forskning på supertunge atomkjerner.",
    "economy": "Ingen industriell bruk; betydningen ligger i å utvide kunnskapen om periodesystemet.",
    "production": "Lages i partikkelakseleratorer. Oppdagelsen er knyttet til RIKEN i Japan.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/113/nihonium"
      },
      {
        "title": "RIKEN – oppdagelsen av nihonium",
        "url": "https://www.riken.jp/en/about/history/story/113/"
      }
    ]
  },
  {
    "number": 114,
    "uses": "Flerovium brukes til å undersøke stabilitet og kjemi hos supertunge grunnstoffer.",
    "economy": "Ingen kommersiell bruk; svært få og kortlivede atomer er tilgjengelige.",
    "production": "Fremstilles i partikkelakseleratorer. Oppdagelsen kom gjennom samarbeid ved Dubna i Russland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/114/flerovium"
      }
    ]
  },
  {
    "number": 115,
    "uses": "Moscovium brukes til forskning på atomkjerner og radioaktivt henfall.",
    "economy": "Bare forskningsverdi; det produseres ikke som et brukbart materiale.",
    "production": "Lages i partikkelakseleratorer. Fremstillingen er knyttet til internasjonalt samarbeid ved Dubna i Russland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/115/moscovium"
      }
    ]
  },
  {
    "number": 116,
    "uses": "Livermorium brukes til studier av supertunge atomkjerner.",
    "economy": "Ingen industriell bruk; den vitenskapelige betydningen er større enn noen praktisk materialverdi.",
    "production": "Fremstilles i partikkelakseleratorer gjennom internasjonalt samarbeid, blant annet ved Dubna i Russland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/116/livermorium"
      }
    ]
  },
  {
    "number": 117,
    "uses": "Tenness brukes til forskning på supertunge grunnstoffer og mulige grenser for atomkjerners stabilitet.",
    "economy": "Ingen kommersiell bruk; det eksisterer bare i svært små antall og kort tid.",
    "production": "Lages i partikkelakseleratorer. Oppdagelsen kom gjennom internasjonalt samarbeid ved Dubna, med blant annet berkelium fra Oak Ridge i USA.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/117/tennessine"
      },
      {
        "title": "Oak Ridge – berkelium og supertunge grunnstoffer",
        "url": "https://www.ornl.gov/project/medical-industrial-and-research-isotopes"
      }
    ]
  },
  {
    "number": 118,
    "uses": "Oganesson brukes til forskning på supertunge atomer og hvordan periodesystemet kan utvides.",
    "economy": "Ingen praktisk industribruk eller råvarehandel; egenskapene undersøkes gjennom få atomer og beregninger.",
    "production": "Lages i partikkelakseleratorer. Oppdagelsen er knyttet til internasjonalt samarbeid ved Dubna i Russland.",
    "sources": [
      {
        "title": "Royal Society of Chemistry – bruk og råstoff",
        "url": "https://periodic-table.rsc.org/element/118/oganesson"
      }
    ]
  }
];
