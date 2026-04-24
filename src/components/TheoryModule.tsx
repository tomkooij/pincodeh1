import React from 'react';

const TheoryModule: React.FC = () => {
  return (
    <div className="theory-module">
      <section className="card">
        <h2>Kernbegrippen Speltheorie (Pincode H1)</h2>
        <p>Speltheorie bestudeert hoe mensen beslissingen nemen waarbij ze rekening houden met de verwachte keuzes van anderen.</p>
        
        <div className="ledger-table-container">
          <table className="ledger-table">
            <thead>
              <tr>
                <th>Begrip</th>
                <th>Kenmerken</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Simultaan spel</strong></td>
                <td>Spelers nemen tegelijkertijd een besluit (bijv. steen-papier-schaar).</td>
              </tr>
              <tr>
                <td><strong>Sequentieel spel</strong></td>
                <td>Spelers reageren op elkaars acties (bijv. schaken).</td>
              </tr>
              <tr>
                <td><strong>Dominante strategie</strong></td>
                <td>De keuze die altijd het beste resultaat geeft, ongeacht de actie van de ander.</td>
              </tr>
              <tr>
                <td><strong>Nash-evenwicht</strong></td>
                <td>Een uitkomst waarbij geen enkele speler zijn positie kan verbeteren door eenzijdig een andere keuze te maken.</td>
              </tr>
              <tr>
                <td><strong>Gevangenendilemma</strong></td>
                <td>Een spel waarbij het nastreven van het eigenbelang leidt tot een slechter resultaat voor beide spelers.</td>
              </tr>
              <tr>
                <td><strong>Verzonken kosten</strong></td>
                <td>Kosten die al gemaakt zijn en niet meer terugverdiend kunnen worden. Deze horen geen rol te spelen in toekomstige beslissingen.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Beslisboom vs Matrix</h3>
        <p>Voor simultane spellen gebruiken we een <strong>opbrengstenmatrix</strong>. Voor sequentiële spellen gebruiken we een <strong>beslisboom</strong> (spelboom).</p>
        
        <div className="formula-box">
          Individueel Belang ≠ Collectief Belang
        </div>
      </section>
    </div>
  );
};

export default TheoryModule;
