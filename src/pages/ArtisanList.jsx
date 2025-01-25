import React from 'react';
import artisans from '../data/artisans.json';
import ArtisanCard from './ArtisanCard';
function ArtisanList() {
    return (
        <div>
            <h1>Liste des artisans</h1>
            <div className='artisan-list'>
                {artisans.map((artisan) => (
                    <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
            </div>
        </div>
    );
};

export default ArtisanList;
