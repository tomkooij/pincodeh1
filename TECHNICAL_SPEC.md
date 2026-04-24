# Technical Specification: Educatieve Oefenapp Bedrijfseconomie

## Tech Stack
- **Framework:** React (18+) met TypeScript.
- **Build Tool:** Vite (voor snelle ontwikkeling en optimalisatie).
- **Styling:** Vanilla CSS (om een specifieke, ledger-achtige look te kunnen creëren zonder overhead).
- **Hosting:** GitHub Pages (geautomatiseerde deployment via `gh-pages` branch).

## Datastructuur (Blueprint)
Vragen en oefeningen worden strikt gescheiden van de UI-componenten in `src/data/`. Elk onderdeel moet voldoen aan een specifiek interface:

### 1. Categorisering
```typescript
interface BalansItem {
  naam: string;
  categorie: string;
  uitleg: string;
}
```

### 2. Mutatie-Scenario's
```typescript
interface MutatieScenario {
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
```

### 3. Rekenvragen
```typescript
interface Rekenvraag {
  id: number;
  titel: string;
  items: { naam: string; bedrag: number; type: string }[];
  vraag: string;
  correctAntwoord: number;
  uitleg: string;
}
```

## Architectuur Richtlijnen
- **Component-based:** Gebruik afzonderlijke `Engine` componenten voor elke oefenvorm (bijv. `QuizEngine.tsx`, `MutationEngine.tsx`).
- **State Management:** Gebruik React `useState` en `useEffect` voor de interactie binnen een module.
- **Feedback Loop:** Elke interactie moet resulteren in een visueel signaal (kleur/icoon) en tekstuele uitleg.
- **Pathing:** Bij deployment op GitHub Pages moet de `base` property in `vite.config.ts` worden ingesteld op de naam van het repository.
