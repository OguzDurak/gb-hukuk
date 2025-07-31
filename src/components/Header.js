import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setExpanded(false); // Close mobile menu after click
    }
  };

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = '905077334494';
    const message = 'Merhaba, size web siteniz üzerinden ulaşıyorum.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

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
            <span className="brand-name">GB</span>
            <span className="brand-subtitle">HUKUK</span>
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
            <Nav.Link 
              onClick={() => scrollToSection('home')} 
              className="nav-item"
              style={{ cursor: 'pointer' }}
            >
              Ana Sayfa
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('about')} 
              className="nav-item"
              style={{ cursor: 'pointer' }}
            >
              Hakkımızda
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('services')} 
              className="nav-item"
              style={{ cursor: 'pointer' }}
            >
              Hizmetlerimiz
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('team')} 
              className="nav-item"
              style={{ cursor: 'pointer' }}
            >
              Ekibimiz
            </Nav.Link>
            <Nav.Link 
              href="#" 
              className="nav-item"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Makalelerimiz
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('contact')} 
              className="nav-item"
              style={{ cursor: 'pointer' }}
            >
              İletişim
            </Nav.Link>
            <Button 
              variant="dark" 
              className="contact-btn ms-3"
              onClick={openWhatsApp}
              style={{ cursor: 'pointer' }}
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