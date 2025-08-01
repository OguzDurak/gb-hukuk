import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      sticky="top" 
      className="main-navbar shadow-sm"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <div className="logo-text">
            <span className="brand-name">Bilgiç</span>
            <span className="brand-subtitle">Hukuk Bürosu</span>
          </div>
          <div className="brand-tagline">
            Güvenilir Hukuki Çözümler
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-item">
              Ana Sayfa
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              Hakkımızda
            </Nav.Link>
            <Nav.Link href="#services" className="nav-item">
              Hizmetlerimiz
            </Nav.Link>
            <Nav.Link href="#team" className="nav-item">
              Ekibimiz
            </Nav.Link>
            <Nav.Link href="#articles" className="nav-item">
              Makaleler
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item">
              İletişim
            </Nav.Link>
            <Button 
              variant="dark" 
              className="contact-btn ms-3"
              href="#appointment"
            >
              Danışmanlık Al
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;