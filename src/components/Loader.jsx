import React, { useEffect } from 'react';

const Loader = ({ onFinish }) => {


    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div style={styles.loader}>
            <h1> <span style={styles.appName}>QuoteVerse</span></h1>
            <p>by Rabin Chhatkuli</p>
        </div>
    );
};
const styles = {
    loader: {
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '0.5rem',
        letterSpacing: '2px',
    },
    appName: {
        fontWeight: 'bold',
        color: '#ffdd57',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    },
    creator: {
        fontSize: '1.2rem',
        opacity: 0.85,
    }
};

export default Loader;
