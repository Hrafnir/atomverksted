# Atomverksted

Norsk undervisningsapp med atombyggeverksted, alle 118 grunnstoffer, C-14-simulator, molekylverksted og saltverk.

**Åpne appen:** https://hrafnir.github.io/atomverksted/

Appen er et statisk nettsted i `dist/`, uten innlogging eller serveravhengighet. JavaScript- og CSS-filene i denne mappen er kildekoden, ikke generert byggeoutput.

## Kjør lokalt

```sh
python3 -m http.server 4173 --directory dist
```

Åpne http://localhost:4173/ i nettleseren.

## Endringer og publisering

Rediger filene i `dist/`. Push til `main` kjører kontrollene og publiserer `dist/` til GitHub Pages. Arbeidsflyten kan også startes manuelt fra Actions.

Kontroller lokalt med Node.js 24:

```sh
node verify-chemistry.cjs
node verify-layout.cjs
node verify-compound-reference.cjs
node verify-facts.cjs
node verify-learning.cjs
node verify-hydroxide.cjs
```

## Data, bilder og modellbegrensninger

Stoffkortene oppgir faktakilder. Fotografier har individuelle kilde-, fotograf- og lisensopplysninger i appen og i `dist/images/chemistry/photo-index.json` og `photo-expansion.json`. Grunnstoffbildenes opplysninger ligger i grunnstoffdataene. Rettighetene til tredjepartsinnhold følger de oppgitte lisensene; dette repositoriet gir ingen ny felles lisens til disse bildene.

Modellene er pedagogiske forenklinger. Lewis-verkstedet beskriver ikke all molekylgeometri, stereokjemi eller kjemisk stabilitet. Saltverket viser elektronregnskap og ioneforhold. Fe₂O₃ er en forenklet rustmodell; virkelig rust er en blanding av vannholdige jernforbindelser.

`scripts/` inneholder hjelpeverktøy for datainnhenting. Vanlig bruk og publisering krever ikke at disse kjøres. Enkelte hjelpeverktøy bruker lokale mellomlagre i `research/` som ikke inngår i repositoriet.

## Del aktiviteter med klassen

Knappen **Del aktivitet** kopierer en lenke til valgt fane. Atomlenker bevarer protoner, nøytroner, elektroner og utfordring; periodesystemlenker bevarer valgt grunnstoff. Molekyl- og saltlenker åpner valgt oppgave fra starten. Frie byggeendringer lagres ikke i lenken.

Eksempler (fungerer også på Sites med samme parametere):
- Karbon-14: `?tab=build&p=6&n=8&e=6&challenge=1`
- Karbon i periodesystemet: `?tab=table&z=6`
- Vannoppgave: `?tab=molecules&cid=962`
- Jern(III)oksid: `?tab=salts&salt=fe2o3`

Vanlige ioner har egne skallfordelinger; andre ladningstilstander merkes som skjematiske. Isotoplisten er et utvalg og brukes ikke til å avvise ukjente isotoper. Saltillustrasjonene bevarer ioneforholdet, men er ikke modeller av de faktiske krystallstrukturene.

## Natrium og litium i vann

Fanen **Metall i vann** forklarer reaksjonen trinnvis med partikkelillustrasjoner, elektronregnskap og sammenligning av Na/Li. Dette er en pedagogisk modell, ikke en simulering av reaksjonsmekanisme, temperatur, pH eller hastighet.

- Natrium i vann: `?tab=reactions&metal=Na`
- Litium i vann: `?tab=reactions&metal=Li`
- Bygg NaOH fra atomer: `?tab=salts&salt=naoh`
- Bygg LiOH fra atomer: `?tab=salts&salt=lioh`

Hydroksidverkstedet lar eleven legge til metall, O og H, pare O/H-elektronene og overføre ett elektron til O–H-delen. Denne konstruksjonen viser elektronbokføring for forbindelsen og må ikke forveksles med reaksjonsforløpet i vann. NaOH og LiOH finnes også i den søkbare banken over 71 ioneforbindelser og kan bygges med ferdige ioner.
