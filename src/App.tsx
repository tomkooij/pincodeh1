import { useState } from 'react'
import './App.css'
import TheoryModule from './components/TheoryModule'
import QuizEngine from './engines/QuizEngine'
import CategorizeEngine from './engines/CategorizeEngine'
import CalculationEngine from './engines/CalculationEngine'
import MutationEngine from './engines/MutationEngine'
import BegrippenEngine from './engines/BegrippenEngine'

type Module = 'theorie' | 'stellingen' | 'categoriseren' | 'rekenen' | 'mutaties' | 'begrippen';

function App() {
  const [activeModule, setActiveModule] = useState<Module>('theorie');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Bedrijfseconomie Oefentool</h1>
        <nav className="tab-navigation">
          <button 
            className={activeModule === 'theorie' ? 'active' : ''} 
            onClick={() => setActiveModule('theorie')}
          >
            Theorie
          </button>
          <button 
            className={activeModule === 'stellingen' ? 'active' : ''} 
            onClick={() => setActiveModule('stellingen')}
          >
            Stellingen
          </button>
          <button 
            className={activeModule === 'begrippen' ? 'active' : ''} 
            onClick={() => setActiveModule('begrippen')}
          >
            Begrippen
          </button>
          <button 
            className={activeModule === 'categoriseren' ? 'active' : ''} 
            onClick={() => setActiveModule('categoriseren')}
          >
            Categoriseren
          </button>
          <button 
            className={activeModule === 'rekenen' ? 'active' : ''} 
            onClick={() => setActiveModule('rekenen')}
          >
            Rekenvragen
          </button>
          <button 
            className={activeModule === 'mutaties' ? 'active' : ''} 
            onClick={() => setActiveModule('mutaties')}
          >
            Scenario's
          </button>
        </nav>
      </header>

      <main className="module-content">
        {activeModule === 'theorie' && <TheoryModule />}
        {activeModule === 'stellingen' && <QuizEngine />}
        {activeModule === 'begrippen' && <BegrippenEngine />}
        {activeModule === 'categoriseren' && <CategorizeEngine />}
        {activeModule === 'rekenen' && <CalculationEngine />}
        {activeModule === 'mutaties' && <MutationEngine />}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Educatieve Oefenapp Bedrijfseconomie</p>
      </footer>
    </div>
  )
}

export default App
