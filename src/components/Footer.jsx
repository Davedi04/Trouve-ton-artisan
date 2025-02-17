import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <Container>
                <Row className='Row'>
                    <Col xs={7} md={5}>
                        <img src="/logo.png" alt="Logo" className='cadre1 img-fluid'/>
                    </Col>
                    <Col xs={12} md={4}>
                        <address className='mt-3 mt-md-0'>
                            <h2>Lyon</h2>
                            <p className='mb-1'>101 cours Charlemagne</p>
                            <p className='mb-1'>CS 20033</p>
                            <p className='mb-1'>69269 LYON CEDEX 02</p>
                            <p className='mb-1'>France</p>
                            <p className='mb-1'>+33 (0)4 26 73 40 00</p>
                        </address>
                    </Col>
                </Row>
                <Row className="ligne justify-content-center">
                    <Col className='text-center'>
                        <a className="blanc mx-2" href="*">Mentions légales</a>
                        <a className="blanc mx-2" href="*">Données personnelles</a>
                        <a className="blanc mx-2" href="*">Accessibilité</a>
                        <a className="blanc mx-2" href="*">Politique des coockies</a>
                        <a className="blanc mx-2" href="*">Marchés publics</a>
                        <a className="blanc mx-2" href="*">Venir à la Région     </a>
                        <a className="blanc mx-2" href="*">Presse</a>
                        <a className="blanc mx-2" href="*">Contacts</a>
                        <a className="blanc mx-2" href="*">Gestion des cookies</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;