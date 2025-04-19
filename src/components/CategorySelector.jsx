import React from 'react';

const categories = [
  'Motivational',
  'Love',
  'Life',
  'Funny',
  'Success',
  'Friendship',
  'Wisdom',
];

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select a Quote Category</h2>
      <div style={styles.grid}>
        {categories.map((category, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
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
  heading: {
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default CategorySelection;
