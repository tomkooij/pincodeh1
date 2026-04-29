import React, { useState } from 'react';
import { begrippen } from '../data/mockData';

const categories = [
  'Collectief goed',
  'Negatief extern effect',
  'Quasi-collectief goed',
  'Meeliftergedrag',
  'Circulaire economie',
  'Secundaire arbeidsvoorwaarden',
  'Algemeen verbindend',
  'Europese Unie'
];

const CategorizeEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentItem = begrippen[currentIndex];

  const handleCategorySelect = (category: string) => {
    const isCorrect = category === currentItem.categorie;
    setFeedback({
      isCorrect,
      message: currentItem.uitleg
    });
  };

  const nextItem = () => {
    setFeedback(null);
    setCurrentIndex((prev) => (prev + 1) % begrippen.length);
  };

  return (
    <div className="categorize-engine card">
      <h2>Categoriseren</h2>
      <p>Deel de volgende situatie in de juiste categorie in:</p>
      
      <div className="item-to-categorize">
        <h3>{currentItem.naam}</h3>
      </div>

      {!feedback ? (
        <div className="category-options">
          {categories.map((cat) => (
            <button key={cat} className="category-btn" onClick={() => handleCategorySelect(cat)}>
              {cat}
            </button>
          ))}
        </div>
      ) : (
        <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          <p><strong>{feedback.isCorrect ? 'Correct!' : 'Niet correct.'}</strong></p>
          <p>{feedback.message}</p>
          <button className="primary" onClick={nextItem}>Volgende situatie</button>
        </div>
      )}

      <div className="progress">
        Situatie {currentIndex + 1} van {begrippen.length}
      </div>
    </div>
  );
};

export default CategorizeEngine;
