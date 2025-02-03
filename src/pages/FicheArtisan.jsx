import React from 'react';
import { Link } from 'react-router-dom';

function FicheArtisan({ artisan }) {
    const { id, nom, note, specialite, localisation } = artisan;

    // Fonction pour afficher les étoiles en fonction de la note
    const renderStars = (note) => {
        let stars = '';
        for (let i = 0; i < note; i++) {
            stars += '⭐';
        }
        return stars;
    };

    return (
        <div className="artisan-card">
            <h2>{nom}</h2>
            <p>{renderStars(note)}</p>
            <p>Spécialité: {specialite}</p>
            <p>Localisation: {localisation}</p>
            <Link to={`/artisan/${id}`} className="btn btn-primary">
                Voir plus
            </Link>
        </div>
    );
}

export default FicheArtisan;
