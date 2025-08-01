import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expanded]);

  // Enhanced mobile menu toggle
  const handleToggle = (isExpanded) => {
    setExpanded(isExpanded);
  };

  // Close mobile menu when clicking outside
  const handleOutsideClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

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
    setExpanded(false); // Close mobile menu after WhatsApp
  };

  // Custom Hamburger Component
  const HamburgerIcon = ({ isOpen }) => (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );

  return (
    <>
      <Navbar 
        bg="white" 
        expand="lg" 
        sticky="top" 
        className={`main-navbar shadow-sm ${expanded ? 'menu-open' : ''}`}
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand onClick={() => scrollToSection('home')} className="brand-logo" style={{ cursor: 'pointer' }}>
            <div className="logo-text">
              <span className="brand-name">Bilgiç</span>
              <span className="brand-subtitle">Hukuk Bürosu</span>
            </div>
            <div className="brand-tagline">
              Güvenilir Hukuki Çözümler
            </div>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="custom-toggler"
          >
            <HamburgerIcon isOpen={expanded} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="mobile-nav-menu">
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
                onClick={() => scrollToSection('articles')} 
                className="nav-item"
                style={{ cursor: 'pointer' }}
              >
                Makaleler
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

      {/* Mobile Menu Overlay */}
      {expanded && (
        <div 
          className="mobile-menu-overlay" 
          onClick={handleOutsideClick}
        />
      )}
    </>
  );
};

export default Header;