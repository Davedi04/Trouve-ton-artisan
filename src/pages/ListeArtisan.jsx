import React, { useState, useEffect } from 'react';
import FicheArtisan from './FicheArtisan';
import ArtisansData from '../data/artisans.json'; // Ton fichier JSON des artisans

function ArtisanList() {
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        setArtisans(ArtisansData);
    }, []);

    return (
        <div>
            <h1>Liste des artisans</h1>
            <div className="artisan-list">
                {artisans.map((artisan) => (
                    <FicheArtisan key={artisan.id} artisan={artisan} />
                ))}
            </div>
        </div>
    );
}

export default ArtisanList;
