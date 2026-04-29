import type { Flashcard, MutatieScenario, Rekenvraag } from '../types';

export const flashcards: Flashcard[] = [
  // 1.1 & 1.2
  { id: 1, stelling: 'Speltheorie bestudeert besluitvorming waarbij spelers rekening houden met elkaars acties.', isWaar: true, uitleg: 'Dit is de kern van speltheorie.' },
  { id: 2, stelling: 'Een dominante strategie hangt af van de keuze die de tegenstander maakt.', isWaar: false, uitleg: 'Een dominante strategie is de beste keuze, ONGEACHT wat de ander doet.' },
  { id: 3, stelling: 'In een Nash-evenwicht heeft niemand een reden om eenzijdig zijn strategie te veranderen.', isWaar: true, uitleg: 'Gegeven de keuze van de ander, is de eigen keuze optimaal.' },
  { id: 4, stelling: 'Verzonken kosten moeten worden meegenomen in de beslissing over toekomstige investeringen.', isWaar: false, uitleg: 'Verzonken kosten zijn al gemaakt en kunnen niet worden terugverdiend; ze zijn irrelevant voor de toekomst.' },
  { id: 5, stelling: 'Zelfbinding kan helpen om het vertrouwen van een tegenpartij te winnen.', isWaar: true, uitleg: 'Door je vooraf vast te leggen, maak je je acties geloofwaardig.' },
  
  // 1.3
  { id: 6, stelling: 'Een negatief extern effect betekent dat de prijs van een product te laag is.', isWaar: true, uitleg: 'De maatschappelijke kosten (zoals vervuiling) zijn niet in de prijs verwerkt.' },
  { id: 7, stelling: 'Straatverlichting is een voorbeeld van een individueel goed.', isWaar: false, uitleg: 'Straatverlichting is een collectief goed: je kunt niemand uitsluiten en het gebruik van de een gaat niet ten koste van de ander.' },
  { id: 8, stelling: 'Meeliftergedrag komt vaak voor bij collectieve goederen.', isWaar: true, uitleg: 'Mensen profiteren van het goed zonder eraan mee te betalen.' },
  { id: 9, stelling: 'Onderwijs is een quasi-collectief goed.', isWaar: true, uitleg: 'Het kan individueel worden afgenomen, maar de overheid betaalt grotendeels de kosten.' },
  { id: 10, stelling: 'Collectieve dwang (zoals belasting) wordt ingezet om meeliftergedrag te voorkomen.', isWaar: true, uitleg: 'Hiermee dwingt de overheid iedereen om bij te dragen aan collectieve voorzieningen.' },
  
  // 1.4
  { id: 11, stelling: 'De Europese Unie telt momenteel 27 lidstaten.', isWaar: true, uitleg: 'Sinds het vertrek van het VK zijn er 27 landen lid.' },
  { id: 12, stelling: 'Maatschappelijk Verantwoord Ondernemen (MVO) draait alleen om het maken van winst.', isWaar: false, uitleg: 'MVO draait om de balans tussen People, Planet en Profit.' },
  { id: 13, stelling: 'In een circulaire economie worden grondstoffen steeds opnieuw gebruikt.', isWaar: true, uitleg: 'Dit staat ook wel bekend als het "cradle to cradle" principe.' },
  { id: 14, stelling: 'Secundaire arbeidsvoorwaarden gaan over het salaris en de werktijden.', isWaar: false, uitleg: 'Dat zijn de primaire arbeidsvoorwaarden. Secundaire gaan over extra\'s zoals vakantiedagen of training.' },
  { id: 15, stelling: 'Een Centraal Akkoord wordt gesloten tussen vakbonden en individuele werknemers.', isWaar: false, uitleg: 'Het wordt gesloten op landelijk niveau tussen vakcentrales, werkgeverscentrales en de regering.' }
];

export const begrippen: any[] = [
  { naam: 'Dijkverhoging door de overheid', categorie: 'Collectief goed', uitleg: 'Bescherming tegen water is niet splitsbaar en je kunt niemand uitsluiten.' },
  { naam: 'Lawaai van een vliegveld', categorie: 'Negatief extern effect', uitleg: 'Omwonenden ervaren overlast waarvoor zij niet worden gecompenseerd in de prijs van een ticket.' },
  { naam: 'Een diploma aan de hogeschool', categorie: 'Quasi-collectief goed', uitleg: 'Het is een individueel goed (onderwijs), maar wordt door de overheid gesubsidieerd.' },
  { naam: 'Geen belasting betalen maar wel de weg gebruiken', categorie: 'Meeliftergedrag', uitleg: 'Profiteren van collectieve voorzieningen zonder bijdrage.' },
  { naam: 'Cradle to cradle productie', categorie: 'Circulaire economie', uitleg: 'Hergebruik van materialen zonder kwaliteitsverlies.' },
  { naam: 'Vakantiegeld en een lease-auto', categorie: 'Secundaire arbeidsvoorwaarden', uitleg: 'Aanvullende afspraken bovenop het basisloon.' },
  { naam: 'De minister verklaart een cao voor de hele bouwsector', categorie: 'Algemeen verbindend', uitleg: 'De afspraken gelden nu voor alle werkgevers en werknemers in die sector.' },
  { naam: 'Invoering van de Euro in de EU', categorie: 'Europese Unie', uitleg: 'Een voorbeeld van vergaande economische samenwerking.' }
];

export const mutatieScenarios: MutatieScenario[] = [
  {
    id: 1,
    scenario: 'Een fabriek investeert in een filter om de uitstoot van fijnstof te beperken. Wat is het effect op de maatschappelijke kosten?',
    oplossing: {
      post1: 'Maatschappelijke kosten',
      verandering1: '-',
      post2: 'Winst van de fabriek',
      verandering2: '-'
    },
    uitleg: 'De negatieve externe effecten nemen af (lagere maatschappelijke kosten), maar de investering drukt de winst van de fabriek.'
  },
  {
    id: 2,
    scenario: 'De overheid verhoogt de subsidie op zonnepanelen. Wat gebeurt er met de consumentenwelvaart en de uitstoot?',
    oplossing: {
      post1: 'Welvaart consument',
      verandering1: '+',
      post2: 'CO2-uitstoot',
      verandering2: '-'
    },
    uitleg: 'Subsidies verhogen de welvaart voor de gebruiker en stimuleren milieuvriendelijke keuzes.'
  }
];

export const rekenvragen: Rekenvraag[] = [
  {
    id: 1,
    titel: 'Milieubeleid in het gevangenendilemma',
    items: [
      { naam: 'Beide landen voeren beleid in (Netto opbrengst)', bedrag: 4, type: 'Nederland' },
      { naam: 'Alleen Duitsland voert in (Opbrengst NL)', bedrag: 7, type: 'Nederland' },
      { naam: 'Alleen Nederland voert in (Opbrengst NL)', bedrag: -3, type: 'Nederland' },
      { naam: 'Geen beleid (Opbrengst NL)', bedrag: 0, type: 'Nederland' }
    ],
    vraag: 'Wat is de netto-opbrengst voor Nederland als zij als enige milieubeleid invoeren?',
    correctAntwoord: -3,
    uitleg: 'Als Nederland de kosten draagt (12) maar de opbrengst slechts 9 is, is er een nettoverlies. Zie matrix op pag. 13 van theorie.'
  }
];
