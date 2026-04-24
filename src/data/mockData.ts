import type { Flashcard, MutatieScenario, Rekenvraag } from '../types';

export const flashcards: Flashcard[] = [
  {
    id: 1,
    stelling: 'Bij speltheorie kijk je alleen naar je eigen acties, zonder rekening te houden met anderen.',
    isWaar: false,
    uitleg: 'Speltheorie bestudeert juist de interactie tussen spelers en hoe zij hun beslissingen op elkaar afstemmen.'
  },
  {
    id: 2,
    stelling: 'In een simultaan spel nemen spelers op hetzelfde moment een beslissing.',
    isWaar: true,
    uitleg: 'Kenmerkend voor simultane spellen is dat spelers tegelijkertijd beslissen, zonder de keuze van de ander te weten.'
  },
  {
    id: 3,
    stelling: 'Een sequentieel spel wordt gekenmerkt door spelers die na elkaar reageren.',
    isWaar: true,
    uitleg: 'Bij een sequentieel spel doet de ene speler een zet, waarna de andere speler reageert (zoals bij schaken).'
  },
  {
    id: 4,
    stelling: 'Een eenmalig spel heeft vaker een coöperatieve uitkomst dan een herhaald spel.',
    isWaar: false,
    uitleg: 'Bij herhaalde spellen is de kans op samenwerking groter omdat spelers rekening houden met toekomstige rondes (reputatie).'
  },
  {
    id: 5,
    stelling: 'In een coöperatief spel werken spelers samen om het beste resultaat voor de hele groep te behalen.',
    isWaar: true,
    uitleg: 'Coöperatie betekent samenwerking gericht op het gezamenlijke belang.'
  },
  {
    id: 6,
    stelling: 'In een niet-coöperatief spel is het niet mogelijk om bindende afspraken te maken.',
    isWaar: true,
    uitleg: 'Spelers handelen hier puur uit eigenbelang en kunnen de ander niet dwingen tot samenwerking.'
  },
  {
    id: 7,
    stelling: 'Een opbrengstenmatrix (pay-offmatrix) wordt gebruikt om de uitkomsten van simultane spellen weer te geven.',
    isWaar: true,
    uitleg: 'De matrix toont de mogelijke opbrengsten voor alle spelers bij elke combinatie van strategieën.'
  },
  {
    id: 8,
    stelling: 'De best-responsemethode helpt bij het bepalen van de beste reactie op elke mogelijke actie van de ander.',
    isWaar: true,
    uitleg: 'Hiermee identificeer je de beste keuze voor jezelf, gegeven de actie van de tegenstander.'
  },
  {
    id: 9,
    stelling: 'In een Nash-evenwicht wil geen enkele speler eenzijdig zijn strategie veranderen.',
    isWaar: true,
    uitleg: 'Gegeven de keuze van de ander, is de eigen keuze de beste die men kan maken.'
  },
  {
    id: 10,
    stelling: 'Een gevangenendilemma (prisoners\' dilemma) leidt altijd tot de meest optimale uitkomst voor beide spelers.',
    isWaar: false,
    uitleg: 'Het dilemma is juist dat individueel rationeel gedrag leidt tot een uitkomst die voor beide spelers slechter is.'
  },
  {
    id: 11,
    stelling: 'Een dominante strategie is de keuze die altijd het beste resultaat geeft, ongeacht wat de ander doet.',
    isWaar: true,
    uitleg: 'Als een speler een dominante strategie heeft, zal hij deze altijd kiezen.'
  },
  {
    id: 12,
    stelling: 'Het individuele belang leidt in een gevangenendilemma tot een collectief nadeel.',
    isWaar: true,
    uitleg: 'Omdat beide voor eigen gewin gaan, missen ze de kans op het hogere gezamenlijke belang.'
  },
  {
    id: 13,
    stelling: 'Een prijzenoorlog is gunstig voor de winstmarges van bedrijven.',
    isWaar: false,
    uitleg: 'Een prijzenoorlog drukt de prijzen en daarmee de winstmarges omlaag.'
  },
  {
    id: 14,
    stelling: 'In een ultimatumspel bepaalt de tweede speler de verdeling van het geld.',
    isWaar: false,
    uitleg: 'De eerste speler doet een voorstel, de tweede speler kan dit alleen accepteren of weigeren.'
  },
  {
    id: 15,
    stelling: 'Een spelboom wordt gebruikt om de stappen in een sequentieel spel te visualiseren.',
    isWaar: true,
    uitleg: 'De boomstructuur laat zien welke keuzes na elkaar worden gemaakt.'
  },
  {
    id: 16,
    stelling: 'Een contract of overeenkomst kan helpen om uit een gevangenendilemma te komen.',
    isWaar: true,
    uitleg: 'Door afspraken vast te leggen en sanctioneerbaar te maken, wordt samenwerking afgedwongen.'
  },
  {
    id: 17,
    stelling: 'Sociale normen hebben geen invloed op de uitkomst van economische spellen.',
    isWaar: false,
    uitleg: 'Onbeschreven regels over wat "normaal" is (zoals eerlijkheid) sturen het gedrag van mensen aanzienlijk.'
  },
  {
    id: 18,
    stelling: 'Zelfbinding is een manier om de eigen keuzemogelijkheden in de toekomst te beperken om de ander te overtuigen.',
    isWaar: true,
    uitleg: 'Door jezelf vooraf vast te leggen, maak je je strategie geloofwaardig voor de ander.'
  },
  {
    id: 19,
    stelling: 'Verzonken kosten zijn kosten die je nog kunt terugverdienen als je stopt met een project.',
    isWaar: false,
    uitleg: 'Verzonken kosten zijn onherroepelijk gedaan en kunnen niet worden terugverdiend.'
  }
];

export const begrippen: any[] = [
  { naam: 'Prijsverlaging bij supermarkt', categorie: 'Simultaan', uitleg: 'Vaak reageren supermarkten direct op elkaars prijzen zonder de actie af te wachten.' },
  { naam: 'Schaken', categorie: 'Sequentieel', uitleg: 'Bij schaken doe je om de beurt een zet, je reageert dus op de ander.' },
  { naam: 'Boete voor kartelvorming', categorie: 'Niet-coöperatief', uitleg: 'Kartels zijn verboden afspraken in een niet-coöperatieve omgeving.' },
  { naam: 'Ultimatumspel', categorie: 'Sequentieel', uitleg: 'De ene speler doet een voorstel, de ander reageert.' },
  { naam: 'Steen-papier-schaar', categorie: 'Simultaan', uitleg: 'Beide spelers onthullen hun keuze op exact hetzelfde moment.' },
  { naam: 'Bieden op een veiling (open)', categorie: 'Sequentieel', uitleg: 'Je ziet het bod van de ander en besluit dan of je eroverheen gaat.' },
  { naam: 'Een eenmalige transactie op Marktplaats', categorie: 'Niet-coöperatief', uitleg: 'Zonder herhaling of sterke controle is er weinig prikkel tot samenwerking.' },
  { naam: 'Strafschop bij voetbal', categorie: 'Simultaan', uitleg: 'De keeper en de schutter kiezen hun hoek op hetzelfde moment.' },
  { naam: 'Dammen', categorie: 'Sequentieel', uitleg: 'Net als bij schaken bepalen spelers hun zet na de zet van de tegenstander.' },
  { naam: 'Concurrentiestrijd tussen Coca-Cola en Pepsi', categorie: 'Simultaan', uitleg: 'Zij nemen vaak marketingbeslissingen zonder exact te weten wat de ander doet.' },
  { naam: 'Samenwonen en de huur verdelen', categorie: 'Coöperatief', uitleg: 'Hier is sprake van een gezamenlijk belang en bindende afspraken.' },
  { naam: 'Zelfbinding door een garantiecertificaat', categorie: 'Sequentieel', uitleg: 'Het bedrijf zet een eerste stap om de klant later te overtuigen.' },
  { naam: 'Een prijzenoorlog tussen tankstations', categorie: 'Simultaan', uitleg: 'Prijzen worden vrijwel direct aangepast op basis van de borden bij de buren.' },
  { naam: 'Onderhandelen over een CAO', categorie: 'Sequentieel', uitleg: 'Partijen reageren met biedingen en tegenbiedingen op elkaar.' }
];

export const mutatieScenarios: MutatieScenario[] = [
  {
    id: 1,
    scenario: 'In een prijzenoorlog verlagen beide supermarkten hun prijzen. Wat is het effect op de winst?',
    oplossing: {
      post1: 'Winst Supermarkt A',
      verandering1: '-',
      post2: 'Winst Supermarkt B',
      verandering2: '-'
    },
    uitleg: 'Bij een prijzenoorlog dalen de marges voor beide partijen, wat meestal leidt tot lagere winsten voor beiden.'
  }
];

export const rekenvragen: Rekenvraag[] = [
  {
    id: 1,
    titel: 'Bibi en Stefan opbrengstenmatrix',
    items: [
      { naam: 'Beide wel trouwfoto\'s', bedrag: -1000, type: 'Bibi' },
      { naam: 'Bibi wel, Stefan niet', bedrag: 2000, type: 'Bibi' },
      { naam: 'Bibi niet, Stefan wel', bedrag: 1000, type: 'Bibi' },
      { naam: 'Beide niet', bedrag: 0, type: 'Bibi' }
    ],
    vraag: 'Wat is de maximale opbrengst voor Bibi in deze matrix?',
    correctAntwoord: 2000,
    uitleg: 'Kijkend naar de bedragen voor Bibi (eerste getal in de matrix op pag. 10), is € 2.000 het hoogste bedrag dat zij kan verdienen.'
  }
];
