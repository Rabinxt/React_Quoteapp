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
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  quote: {
    fontSize: '24px',
    margin: '20px 0',
    color: '#333',
  },
  button: {
    padding: '10px 16px',
    fontSize: '16px',
    margin: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default QuoteDisplay;
