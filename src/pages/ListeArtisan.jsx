import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ListeArtisans = () => {
    const [artisans, setArtisans] = useState([]);
    const [filteredArtisans, setFilteredArtisans] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("categorie") || "";
    const query = searchParams.get("recherche") || "";

    useEffect(() => {
        fetch("/data/artisans.json")
            .then((response) => response.json())
            .then((data) => {
                setArtisans(data);

                // Filtrer selon la catégorie ou la recherche
                let filtered = data;

                if (category) {
                    filtered = filtered.filter((artisan) =>
                        artisan.speciality.toLowerCase().includes(category.toLowerCase())
                    );
                }

                if (query) {
                    filtered = filtered.filter((artisan) =>
                        [artisan.name, artisan.speciality, artisan.location].some((field) =>
                            field.toLowerCase().includes(query.toLowerCase())
                        )
                    );
                }

                setFilteredArtisans(filtered);
            })
            .catch((error) => console.error("Erreur de chargement :", error));
    }, [category, query]);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Liste des artisans</h2>
            <Row>
                {filteredArtisans.map((artisan) => (
                    <Col key={artisan.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="p-3 shadow-sm">
                            <Card.Body>
                                <Card.Title>{artisan.name}</Card.Title>
                                <div className="mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            className={i < artisan.note ? "text-warning" : "text-secondary"}
                                        />
                                    ))}
                                </div>
                                <Card.Text>
                                    <strong>Spécialité :</strong> {artisan.speciality} <br />
                                    <strong>Localisation :</strong> {artisan.location}
                                </Card.Text>
                                <Link to={`/artisan/${artisan.id}`} className="btn btn-primary btn-sm">
                                    Voir plus
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {filteredArtisans.length === 0 && <p>Aucun artisan trouvé.</p>}
        </Container>
    );
};

export default ListeArtisans;
