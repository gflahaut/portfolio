import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Photo from '../assets/img/ChatGPT Image 6 déc. 2025, 15_29_55.png';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#hero">
          <div className='col-auto d-none d-lg-block'>
             <img height="75"width="75"
                    alt="Portrait"
                    className="rounded-circle shadow-lg bd-placeholder-img" 
                    src={Photo}
                  />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navMenu" />
        <Navbar.Collapse id="navMenu">
          <Nav className="ms-auto">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}