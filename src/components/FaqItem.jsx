import { useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '15px',
        padding: '15px',
        cursor: 'pointer'
      }}
      onClick={() => setOpen(!open)}
    >
      <h4 style={{ margin: 0, color: '#0d1b2a' }}>{question}</h4>
      {open && (
        <p style={{ marginTop: '10px', color: '#333' }}>{answer}</p>
      )}
    </div>
  );
}
