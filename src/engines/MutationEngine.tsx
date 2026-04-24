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

  const handleCheck = () => {
    // Basic check for the scenario. In a real app, this would be more flexible.
    // For this prototype, we match against the mock data solution.
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
            <input 
              type="text" 
              placeholder="Partij/Indicator 1" 
              value={selections.post1}
              onChange={(e) => setSelections({...selections, post1: e.target.value})}
            />
            <select value={selections.dir1} onChange={(e) => setSelections({...selections, dir1: e.target.value as '+' | '-'})}>
              <option value="+">Stijgt</option>
              <option value="-">Daalt</option>
            </select>
          </div>
          <div className="mutation-row">
            <input 
              type="text" 
              placeholder="Partij/Indicator 2" 
              value={selections.post2}
              onChange={(e) => setSelections({...selections, post2: e.target.value})}
            />
            <select value={selections.dir2} onChange={(e) => setSelections({...selections, dir2: e.target.value as '+' | '-'})}>
              <option value="+">Stijgt</option>
              <option value="-">Daalt</option>
            </select>
          </div>
          <button className="primary" onClick={handleCheck}>Controleer Scenario</button>
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
