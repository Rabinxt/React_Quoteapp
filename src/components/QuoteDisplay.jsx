import React, { useState, useEffect } from 'react';
import { quotesData } from '../data/data';

const QuoteDisplay = ({ category, onBack }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, [category]);

  const getRandomQuote = () => {
    const quotes = quotesData[category];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h2>{category} Quote</h2>
      <p style={styles.quote}>"{quote}"</p>
      <div>
        <button onClick={getRandomQuote} style={styles.button}>Show Another</button>
        <button onClick={onBack} style={{ ...styles.button, backgroundColor: '#6c757d' }}>Back</button>
      </div>
    </div>
  );
};
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 5px rgba(0,0,0,0.3)',
  },
  quote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    lineHeight: '1.6',
    textShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#ffdd57',
    color: '#333',
    border: 'none',
    borderRadius: '10px',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
};
export default QuoteDisplay;
