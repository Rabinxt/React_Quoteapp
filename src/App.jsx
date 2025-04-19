import React, { useState } from 'react';
import Loader from './components/Loader';
import CategorySelection from './components/CategorySelector';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : selectedCategory ? (
        <QuoteDisplay category={selectedCategory} onBack={handleBackToCategories} />
      ) : (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      )}
    </>
  );
}

export default App;
