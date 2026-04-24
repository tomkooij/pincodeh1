import React, { useState, useEffect } from 'react';
import { begrippenLijst } from '../data/begrippenData';

const BegrippenEngine: React.FC = () => {
  const [mode, setMode] = useState<'term-to-def' | 'def-to-term'>('def-to-term');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentBegrip = begrippenLijst[currentIndex];

  useEffect(() => {
    generateOptions();
  }, [currentIndex, mode]);

  const generateOptions = () => {
    if (mode === 'def-to-term') {
      const correct = currentBegrip.term;
      const filtered = begrippenLijst.filter(b => b.term !== correct);
      const randoms = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 3).map(b => b.term);
      setOptions([...randoms, correct].sort(() => 0.5 - Math.random()));
    }
  };

  const handleSelection = (selected: string) => {
    const isCorrect = selected === currentBegrip.term;
    setFeedback({
      isCorrect,
      message: `Het juiste begrip is: ${currentBegrip.term}.`
    });
  };

  const [userInput, setUserInput] = useState('');
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = userInput.toLowerCase().trim() === currentBegrip.term.toLowerCase().trim();
    setFeedback({
      isCorrect,
      message: `Het juiste begrip is: ${currentBegrip.term}. \n\nDefinitie: ${currentBegrip.definitie}`
    });
  };

  const nextItem = () => {
    setFeedback(null);
    setUserInput('');
    setCurrentIndex(Math.floor(Math.random() * begrippenLijst.length));
  };

  return (
    <div className="begrippen-engine card">
      <h2>Begrippen Oefenen</h2>
      
      <div className="mode-toggle">
        <button className={mode === 'def-to-term' ? 'active' : ''} onClick={() => setMode('def-to-term')}>Definitie &rarr; Begrip (MC)</button>
        <button className={mode === 'term-to-def' ? 'active' : ''} onClick={() => setMode('term-to-def')}>Uitleg &rarr; Begrip (Invullen)</button>
      </div>

      <div className="question-content">
        {mode === 'def-to-term' ? (
          <>
            <p className="definitie-text"><em>"{currentBegrip.definitie}"</em></p>
            {!feedback ? (
              <div className="category-options">
                {options.map(opt => (
                  <button key={opt} className="category-btn" onClick={() => handleSelection(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
                <p><strong>{feedback.isCorrect ? 'Correct!' : 'Helaas.'}</strong></p>
                <p>{feedback.message}</p>
                <button className="primary" onClick={nextItem}>Volgende</button>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="definitie-text">Welk begrip hoort bij deze uitleg?</p>
            <p className="definitie-text"><em>"{currentBegrip.definitie}"</em></p>
            {!feedback ? (
              <form onSubmit={handleTextSubmit} className="calculation-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    placeholder="Typ het begrip..."
                    required
                  />
                </div>
                <button type="submit" className="primary">Controleer</button>
              </form>
            ) : (
              <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
                <p><strong>{feedback.isCorrect ? 'Correct!' : 'Bijna goed.'}</strong></p>
                <p>{feedback.message}</p>
                <button className="primary" onClick={nextItem}>Volgende</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BegrippenEngine;
