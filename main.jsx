import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    setResponse("Luxa sta pensando...");
    setTimeout(() => {
      setResponse(`Gentile ospite,\n\nGrazie per la sua richiesta: "${input}". Le confermiamo che sarà nostra cura accoglierla al meglio.\n\nA presto,\nLuxa AI`);
    }, 1000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', fontFamily: 'Georgia, serif' }}>
      <h1 style={{ textAlign: 'center' }}>Luxa – Risposte AI</h1>
      <textarea
        rows="5"
        placeholder="Incolla qui la richiesta dell’ospite..."
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <button onClick={handleSend} style={{ padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '6px', cursor: 'pointer' }}>
        Genera risposta
      </button>
      {response && (
        <pre style={{ marginTop: '2rem', background: '#f5f0e6', padding: '1rem', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
          {response}
        </pre>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
