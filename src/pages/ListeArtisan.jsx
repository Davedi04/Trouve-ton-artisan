import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import artisansData from "../data/artisans.json";

const ArtisanList = () => {
  return (
    <Container className="mt-4">
      <Row>
        {artisansData.map((artisan) => (
          <Col key={artisan.id} md={4} sm={6} xs={12} className="mb-4">
            <Link to={`/artisan/${artisan.id}`} className="text-decoration-none text-dark">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>{artisan.nom}</Card.Title>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className={i < artisan.note ? "text-warning" : "text-secondary"}
                      />
                    ))}
                  </div>
                  <Card.Text><strong>Spécialité :</strong> {artisan.specialite}</Card.Text>
                  <Card.Text><strong>Localisation :</strong> {artisan.localisation}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtisanList;
