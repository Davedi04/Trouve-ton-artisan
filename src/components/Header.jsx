import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    const handleSearchSubmit = (e) => {
        e.preventDefault();    
        const searchQuery = e.target.elements.searchInput.value;
        console.log(searchQuery);
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
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <FormControl
                            type="text"
                            placeholder="Rechercher..."
                            className="me-2"                        
                            aria-label='Search'
                            name='searchInput'
                            />
                            <Button variant="outline-success">Rechercher</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Navbar expand="lg" className='mt-1'>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav>
                                <Nav.Link as={Link} to="/pages/ArtisanList" className='largeur-1 mx-4'>Bâtiment</Nav.Link>
                                <Nav.Link as={Link} to="/pages/ArtisanList" className='largeur-1 mx-4'>Services</Nav.Link>
                                <Nav.Link as={Link} to="/pages/ArtisanList" className='largeur-2 mx-4'>Fabrication</Nav.Link>
                                <Nav.Link as={Link} to="/pages/ArtisanList" className='largeur-2 mx-4'>Alimentation</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </header>
    );    
};

export default Header;