import React, { useState, useEffect } from 'react';
import { quotesData } from '../data/data';
import '../style/QuoteDisplay.css';

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
    <div className="quote-container">
      <h2 className="quote-heading">{category} Quote</h2>
      <div className="quote-content">
      <div className="quote-box">"{quote}"</div>
      </div>
      <div className="button-group">
        <button onClick={getRandomQuote} className="primary-btn">Show Another</button>
        <button onClick={onBack} className="secondary-btn">Back</button>
      </div>
    </div>
  );
};

export default QuoteDisplay;
