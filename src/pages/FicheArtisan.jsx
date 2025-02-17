import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faGlobe } from "@fortawesome/free-solid-svg-icons";

const ArtisanDetail = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null); // Stocke l'artisan spécifique

  useEffect(() => {
    fetch("/data/artisans.json") // Assure-toi que le fichier est bien dans public/data/
      .then((response) => response.json())
      .then((data) => {
        const foundArtisan = data.find((a) => a.id === parseInt(id));
        setArtisan(foundArtisan || null);
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [id]);

  const [formData, setFormData] = useState({
    nom: "",
    objet: "",
    message: ""
  });

  if (!artisan) return <p>Artisan introuvable</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé à ${artisan.name} !`);
  };

  return (
    <Container className="mt-4 mb-4">
      <Card className="p-4 shadow">
        <h2>{artisan.name}</h2>

        <div className="mb-3">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < artisan.note ? "text-warning" : "text-secondary"}
            />
          ))}
        </div>

        <p><strong>Spécialité :</strong> {artisan.speciality}</p>
        <p><strong>Localisation :</strong> {artisan.location}</p>

        <h3 className="mt-4">À propos</h3>
        <p>{artisan.description || "Aucune description disponible."}</p>

        {artisan.site && (
          <p>
            <FontAwesomeIcon icon={faGlobe} className="me-2" />
            <a href={artisan.site} target="_blank" rel="noopener noreferrer">
              Visiter le site web
            </a>
          </p>
        )}

        <h3 className="mt-4">Contact</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Objet</Form.Label>
            <Form.Control
              type="text"
              name="objet"
              value={formData.objet}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">Envoyer</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ArtisanDetail;
