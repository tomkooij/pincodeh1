# Educatieve Oefenapp Bedrijfseconomie (Pincode H1)

Een interactieve webapp ontworpen voor 4 HAVO leerlingen om zelfstandig complexe bedrijfseconomische concepten te oefenen. De focus ligt op actieve verwerking en directe feedback, met een visueel ontwerp dat aansluit bij de boekhoudkundige context.

## 🚀 Functionaliteiten

-   **Theorie Module**: Kernbegrippen overzichtelijk gepresenteerd in een "ledger-look" tabel.
-   **Stellingen (Flashcards)**: Oefenen met "Waar/Niet Waar" vragen inclusief uitgebreide pedagogische uitleg.
-   **Categoriseren**: Oefen het indelen van balansposten in de juiste categorieën (Vaste Activa, Vlottende Activa, etc.).
-   **Rekenvragen**: Casus-gebaseerde opdrachten met numerieke invoer en stap-voor-stap uitwerkingen.
-   **Mutatie-Scenario's**: Interactief oefenen van balansveranderingen naar aanleiding van zakelijke transacties.
-   **Interactieve Balans Bouwer**: Vrije invulvelden voor het opstellen van een complete balans met automatische balanscontrole.

## 🛠️ Tech Stack

-   **Framework**: [React 18+](https://reactjs.org/) met [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: Vanilla CSS (Schoon, Ledger-achtig ontwerp)
-   **Deployment**: GitHub Pages

## 📦 Installatie & Ontwikkeling

### Vereisten
- [Node.js](https://nodejs.org/) (versie 18 of hoger)
- npm (wordt meegeleverd met Node.js)

### Stappen
1.  **Clone de repository:**
    ```bash
    git clone https://github.com/gebruikersnaam/pincodeh1.git
    cd pincodeh1
    ```

2.  **Installeer dependencies:**
    ```bash
    npm install
    ```

3.  **Start de development server:**
    ```bash
    npm run dev
    ```

4.  **Bouwen voor productie:**
    ```bash
    npm run build
    ```

## 🌐 Deployment naar GitHub Pages

Dit project is geconfigureerd voor eenvoudige deployment naar GitHub Pages.

1.  Zorg ervoor dat de `base` property in `vite.config.ts` overeenkomt met je repository naam.
2.  Installeer het `gh-pages` pakket (indien nog niet aanwezig):
    ```bash
    npm install gh-pages --save-dev
    ```
3.  Voeg de volgende scripts toe aan `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4.  Voer het deployment script uit:
    ```bash
    npm run deploy
    ```

## 📄 Licentie
Dit project is ontwikkeld voor educatieve doeleinden.
