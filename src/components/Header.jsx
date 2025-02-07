import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function Header() {
    const [artisans, setArtisans] = useState([]); // Stock les artisans
    const [searchQuery, setSearchQuery] = useState(""); // Stock la recherche
    const [filteredArtisans, setFilteredArtisans] = useState([]); // Stock les résultats filtrés
    const navigate = useNavigate();
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data/artisans.json')
            .then(response => response.json())
            .then(data => {
                console.log("Données chargées :", data);
                setArtisans(data);
                setFilteredArtisans(data);
            })    
            .catch((error) => console.error("Erreur de chargement : ", error));
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = artisans.filter((artisan) =>
            [artisan.name, artisan.speciality, artisan.location].some((field) =>
                field.toLowerCase().includes(query)
            )
        );

        setFilteredArtisans(filtered);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/artisans?recherche=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header>
            <Container>
                <Row className="align-items-center">
                    <Col xs={7} md={5}>
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" className="img-fluid" />
                        </Link>
                    </Col>
                    <Col>
                        <Form className="search-bar d-flex" onSubmit={handleSearchSubmit}>
                            <FormControl
                                type="text"
                                placeholder="Rechercher un artisan..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            {searchQuery && (
                                <ul>
                                    {filteredArtisans.map((artisan) => (
                                        <li key={artisan.id}>
                                            <strong>{artisan.name}</strong> - {artisan.speciality} ({artisan.location})
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Navbar expand="lg" className='mt-1'>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className='ms-auto'>
                                <Nav.Link as={Link} to="/artisans?categorie=bâtiment" className='largeur-1 mx-4'>Bâtiment</Nav.Link>
                                <Nav.Link as={Link} to="/artisans?categorie=services" className='largeur-1 mx-4'>Services</Nav.Link>
                                <Nav.Link as={Link} to="/artisans?categorie=fabrication" className='largeur-2 mx-4'>Fabrication</Nav.Link>
                                <Nav.Link as={Link} to="/artisans?categorie=alimentation" className='largeur-2 mx-4'>Alimentation</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </header>
    );    
};

export default Header;