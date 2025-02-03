import { useState } from "react";
import artisansData from "../data/artisans.json";
import "./style.css"; // Fichier CSS pour le style

const Home = () => {
  const topArtisans = artisansData.slice(0, 3);

  return (
    <div className="home-container">
      {/* Section "Comment trouver mon artisan ?" */}
      <section className="how-to">
        <h1>Comment trouver mon artisan ?</h1>
        <div className="steps">
          {[
            "Choisir la catégorie d’artisanat dans le menu.",
            "Choisir un artisan.",
            "Le contacter via le formulaire de contact.",
            "Une réponse sera apportée sous 48h."
          ].map((text, index) => (
            <div className="step" key={index}>
              <span className="number">{index + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section "Artisans du mois" */}
      <section className="top-artisans">
        <h2>Artisans du mois</h2>
        <div className="artisan-list">
          {topArtisans.map((artisan) => (
            <div className="artisan-card" key={artisan.id}>
              <h3>{artisan.name}</h3>
              <p><strong>Spécialité :</strong> {artisan.specialty}</p>
              <p><strong>Localisation :</strong> {artisan.location}</p>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < artisan.rating ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
