import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { Container, Row, Col, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();    
        const searchValue = document.querySelector("input[name='searchInput']").value;;
        if (searchValue.trim() !== "") {
            navigate(`/search?q=${searchValue}`);
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
                        <Form className="search-bar" onSubmit={handleSearchSubmit}>
                            <FormControl
                                type="text"
                                placeholder="Rechercher..."
                                className="me-2"                        
                                aria-label='Search'
                                name='searchInput'
                                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                            />
                            <FontAwesomeIcon 
                                className="search-icon" 
                                icon={faSearch} 
                                onClick={handleSearchSubmit} 
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Navbar expand="lg" className='mt-1'>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className='ms-auto'>
                                <Nav.Link as={Link} to="*" className='largeur-1 mx-4'>Bâtiment</Nav.Link>
                                <Nav.Link as={Link} to="*" className='largeur-1 mx-4'>Services</Nav.Link>
                                <Nav.Link as={Link} to="*" className='largeur-2 mx-4'>Fabrication</Nav.Link>
                                <Nav.Link as={Link} to="*" className='largeur-2 mx-4'>Alimentation</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </header>
    );    
};

export default Header;