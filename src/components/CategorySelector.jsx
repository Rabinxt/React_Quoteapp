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
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5rem',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 5px rgba(0,0,0,0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1.5rem',
    width: '80%',
    maxWidth: '700px',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffdd57',
    color: '#333',
    border: 'none',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
};

styles.button[':hover'] = {
  backgroundColor: '#ffe680',
};
export default CategorySelection;
