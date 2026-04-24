import React, { useState } from 'react';
import { rekenvragen } from '../data/mockData';

const CalculationEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentQuestion = rekenvragen[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = parseFloat(userInput) === currentQuestion.correctAntwoord;
    setFeedback({
      isCorrect,
      message: currentQuestion.uitleg
    });
  };

  const nextQuestion = () => {
    setFeedback(null);
    setUserInput('');
    setCurrentIndex((prev) => (prev + 1) % rekenvragen.length);
  };

  return (
    <div className="calculation-engine card">
      <h2>Rekenvragen</h2>
      <div className="question-box">
        <h3>{currentQuestion.titel}</h3>
        <ul className="payoff-list">
          {currentQuestion.items.map((item, idx) => (
            <li key={idx}>
              <strong>{item.naam}:</strong> {item.bedrag}
            </li>
          ))}
        </ul>
        <p className="vraag-tekst">{currentQuestion.vraag}</p>
      </div>

      {!feedback ? (
        <form onSubmit={handleSubmit} className="calculation-form">
          <div className="input-group">
            <input 
              type="number" 
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)} 
              placeholder="Uw antwoord..."
              required
            />
          </div>
          <button type="submit" className="primary">Controleer antwoord</button>
        </form>
      ) : (
        <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          <p><strong>{feedback.isCorrect ? 'Correct!' : 'Niet correct.'}</strong></p>
          <p>{feedback.message}</p>
          <button className="primary" onClick={nextQuestion}>Volgende vraag</button>
        </div>
      )}
    </div>
  );
};

export default CalculationEngine;
