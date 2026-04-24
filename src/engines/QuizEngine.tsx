import React, { useState } from 'react';
import { flashcards } from '../data/mockData';

const QuizEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const nextCard = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const isCorrect = selectedAnswer === currentCard.isWaar;

  return (
    <div className="quiz-engine card">
      <h2>Stellingen (Flashcards)</h2>
      <div className="flashcard-content">
        <p className="stelling">{currentCard.stelling}</p>
        
        {!showFeedback ? (
          <div className="button-group">
            <button className="primary" onClick={() => handleAnswer(true)}>Waar</button>
            <button className="primary error" onClick={() => handleAnswer(false)}>Niet Waar</button>
          </div>
        ) : (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            <p><strong>{isCorrect ? 'Correct!' : 'Helaas, dat is niet juist.'}</strong></p>
            <p>{currentCard.uitleg}</p>
            <button className="primary" onClick={nextCard}>Volgende stelling</button>
          </div>
        )}
      </div>
      <div className="progress">
        Stelling {currentIndex + 1} van {flashcards.length}
      </div>
    </div>
  );
};

export default QuizEngine;
