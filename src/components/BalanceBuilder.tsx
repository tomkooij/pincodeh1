import React, { useState } from 'react';

interface BalanceEntry {
  name: string;
  amount: number;
}

const BalanceBuilder: React.FC = () => {
  const [debetItems, setDebetItems] = useState<BalanceEntry[]>([{ name: '', amount: 0 }]);
  const [creditItems, setCreditItems] = useState<BalanceEntry[]>([{ name: '', amount: 0 }]);

  const addDebet = () => setDebetItems([...debetItems, { name: '', amount: 0 }]);
  const addCredit = () => setCreditItems([...creditItems, { name: '', amount: 0 }]);

  const updateDebet = (index: number, field: keyof BalanceEntry, value: string | number) => {
    const newItems = [...debetItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setDebetItems(newItems);
  };

  const updateCredit = (index: number, field: keyof BalanceEntry, value: string | number) => {
    const newItems = [...creditItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setCreditItems(newItems);
  };

  const totalDebet = debetItems.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const totalCredit = creditItems.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const isBalanced = totalDebet === totalCredit && totalDebet > 0;

  return (
    <div className="balance-builder card">
      <h2>Interactieve Balans Bouwer</h2>
      <p>Stel zelf een balans op en controleer of deze in evenwicht is.</p>

      <div className="builder-grid">
        <div className="builder-column">
          <h3>Debet (Bezittingen)</h3>
          {debetItems.map((item, idx) => (
            <div key={idx} className="builder-row">
              <input 
                type="text" 
                placeholder="Naam post" 
                value={item.name} 
                onChange={(e) => updateDebet(idx, 'name', e.target.value)}
              />
              <input 
                type="number" 
                placeholder="Bedrag" 
                value={item.amount || ''} 
                onChange={(e) => updateDebet(idx, 'amount', parseFloat(e.target.value))}
              />
            </div>
          ))}
          <button className="add-btn" onClick={addDebet}>+ Post toevoegen</button>
        </div>

        <div className="builder-column">
          <h3>Credit (Vermogen)</h3>
          {creditItems.map((item, idx) => (
            <div key={idx} className="builder-row">
              <input 
                type="text" 
                placeholder="Naam post" 
                value={item.name} 
                onChange={(e) => updateCredit(idx, 'name', e.target.value)}
              />
              <input 
                type="number" 
                placeholder="Bedrag" 
                value={item.amount || ''} 
                onChange={(e) => updateCredit(idx, 'amount', parseFloat(e.target.value))}
              />
            </div>
          ))}
          <button className="add-btn" onClick={addCredit}>+ Post toevoegen</button>
        </div>
      </div>

      <div className="builder-totals">
        <div className="total-box">
          <strong>Totaal Debet:</strong> € {totalDebet.toLocaleString('nl-NL')}
        </div>
        <div className="total-box">
          <strong>Totaal Credit:</strong> € {totalCredit.toLocaleString('nl-NL')}
        </div>
      </div>

      <div className={`balance-status ${isBalanced ? 'balanced' : 'unbalanced'}`}>
        {totalDebet === 0 && totalCredit === 0 ? 'Vul de balans in' : 
         isBalanced ? '✅ De balans is in evenwicht!' : '❌ De balans is niet in evenwicht.'}
      </div>
    </div>
  );
};

export default BalanceBuilder;
