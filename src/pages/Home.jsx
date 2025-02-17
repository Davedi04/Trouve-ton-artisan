import { useState, useEffect } from "react";
import "./style.css";

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    fetch('/data/artisans.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur réseau : " + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log("Données chargées :", data); // Debugging
        setTopArtisans(data);

        // Trier les artisans par note et prendre les 3 meilleurs
        const top3 = [...data].sort((a, b) => b.note - a.note).slice(0, 3);
        setTopArtisans(top3);
      })
      .catch((error) => console.error("Erreur de chargement : ", error));
  }, []);
  
  return (
    <div className="home-container">
      {/* Section Comment trouver mon artisan ? */}
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

      {/* Section Artisans du mois */}
      <section className="top-artisans">
        <h2>Artisans du mois</h2>
        <div className="artisan-list">
          {topArtisans.map((artisan) => (
            <div className="artisan-card" key={artisan.id}>
              <h3>{artisan.name}</h3>
              <p><strong>Spécialité :</strong> {artisan.speciality}</p>
              <p><strong>Localisation :</strong> {artisan.location}</p>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < artisan.note ? "star filled" : "star"}>
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
