export interface Flashcard {
  id: number;
  stelling: string;
  isWaar: boolean;
  uitleg: string;
}

export interface BalansItem {
  naam: string;
  categorie: 'Vaste Activa' | 'Vlottende Activa' | 'Eigen Vermogen' | 'Vreemd Vermogen Lang' | 'Vreemd Vermogen Kort' | 'Debet' | 'Credit';
  uitleg: string;
}

export interface MutatieScenario {
  id: number;
  scenario: string;
  oplossing: {
    post1: string;
    verandering1: '+' | '-';
    post2: string;
    verandering2: '+' | '-';
  };
  uitleg: string;
}

export interface Rekenvraag {
  id: number;
  titel: string;
  items: { naam: string; bedrag: number; type: string }[];
  vraag: string;
  correctAntwoord: number;
  uitleg: string;
}

export interface Begrip {
  id: number;
  term: string;
  definitie: string;
  opties?: string[]; // Voor meerkeuze
}
