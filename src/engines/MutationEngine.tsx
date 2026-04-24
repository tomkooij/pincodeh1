import React, { useState } from 'react';
import { mutatieScenarios } from '../data/mockData';

const MutationEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState({
    post1: '',
    dir1: '+',
    post2: '',
    dir2: '+'
  });
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentScenario = mutatieScenarios[currentIndex];

  // Extraheer unieke partijen uit het scenario om als opties te tonen
  // In een echte app zouden deze opties in de data zitten.
  const options = [
    '',
    currentScenario.oplossing.post1,
    currentScenario.oplossing.post2,
    'Collectief Belang',
    'Individueel Belang',
    'Consumentenwelvaart'
  ].filter((v, i, a) => a.indexOf(v) === i); // Unique

  const handleCheck = () => {
    const isCorrect = 
      (selections.post1 === currentScenario.oplossing.post1 && selections.dir1 === currentScenario.oplossing.verandering1 &&
       selections.post2 === currentScenario.oplossing.post2 && selections.dir2 === currentScenario.oplossing.verandering2) ||
      (selections.post1 === currentScenario.oplossing.post2 && selections.dir1 === currentScenario.oplossing.verandering2 &&
       selections.post2 === currentScenario.oplossing.post1 && selections.dir2 === currentScenario.oplossing.verandering1);

    setFeedback({
      isCorrect,
      message: currentScenario.uitleg
    });
  };

  const nextScenario = () => {
    setFeedback(null);
    setSelections({ post1: '', dir1: '+', post2: '', dir2: '+' });
    setCurrentIndex((prev) => (prev + 1) % mutatieScenarios.length);
  };

  return (
    <div className="mutation-engine card">
      <h2>Strategische Scenario's</h2>
      <p className="scenario-text">{currentScenario.scenario}</p>

      {!feedback ? (
        <div className="mutation-controls">
          <div className="mutation-row">
            <select 
              value={selections.post1}
              onChange={(e) => setSelections({...selections, post1: e.target.value})}
            >
              <option value="">Selecteer partij...</option>
              {options.filter(o => o !== '').map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <select value={selections.dir1} onChange={(e) => setSelections({...selections, dir1: e.target.value as '+' | '-'})}>
              <option value="+">Stijgt</option>
              <option value="-">Daalt</option>
            </select>
          </div>
          <div className="mutation-row">
            <select 
              value={selections.post2}
              onChange={(e) => setSelections({...selections, post2: e.target.value})}
            >
              <option value="">Selecteer partij...</option>
              {options.filter(o => o !== '').map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <select value={selections.dir2} onChange={(e) => setSelections({...selections, dir2: e.target.value as '+' | '-'})}>
              <option value="+">Stijgt</option>
              <option value="-">Daalt</option>
            </select>
          </div>
          <button className="primary" onClick={handleCheck} disabled={!selections.post1 || !selections.post2}>
            Controleer Scenario
          </button>
        </div>
      ) : (
        <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          <p><strong>{feedback.isCorrect ? 'Correct!' : 'Niet correct.'}</strong></p>
          <p>{feedback.message}</p>
          <button className="primary" onClick={nextScenario}>Volgend scenario</button>
        </div>
      )}
    </div>
  );
};

export default MutationEngine;
