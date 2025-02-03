import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <img src="../404.jpg" alt="Page not found" style={{ width: '50%' }} />
            <h1>404 - Page Not Found</h1>
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
};

export default NotFound;
