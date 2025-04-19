import React, { useEffect } from 'react';

const Loader = ({ onFinish }) => {


    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div style={styles.loader}>
            <h1>Welcome to <span style={styles.appName}>QuoteVerse</span></h1>
            <p>by Rabin</p>
        </div>
    );
};

const styles = {
    loader: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: '#f2f2f2',
        color: '#333',
    },
    appName: {
        color: '#007bff',
    },
};

export default Loader;
