import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaBalanceScale } from 'react-icons/fa';
import heroBackground from '../assets/hero_background.png';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(52, 73, 94, 0.85) 100%), url(${heroBackground})`
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col lg={10} xl={8} className="hero-content">          
            <h1 className="hero-title">
              <span className="title-main">Hukuki Sorunlarınız İçin</span>
              <span className="title-accent">Profesyonel Çözümler</span>
            </h1>
            
            <p className="hero-description">
              GB Hukuk Bürosu olarak, 10 yıllık deneyimimizle müvekkillerimize 
              en kaliteli hukuki hizmetleri sunuyoruz. Uzman Ekibimizle size en iyi hizmeti sunuyoruz.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-title">Hukuki Danışmanlık</div>
                <div className="stat-description">Alanında uzman avukatlar ile profesyonel hukuki destek</div>
              </div>
              <div className="stat-item">
                <div className="stat-title">Hukuki Destek</div>
                <div className="stat-description">Acil durumlar için kesintisiz hukuki danışmanlık hizmeti</div>
              </div>
              <div className="stat-item">
                <div className="stat-title">Güvenilir Çözümler</div>
                <div className="stat-description">Müvekkillerimizin haklarını koruyarak etkin çözümler</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <Button variant="primary" size="lg" className="cta-primary me-3">
                <FaCalendarAlt className="me-2" />
                Danışmanlık Al
              </Button>
              <Button variant="outline-light" size="lg" className="cta-secondary">
                <FaBalanceScale className="me-2" />
                Hizmetlerimiz
              </Button>
            </div>
            
            <div className="hero-contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+90 507 733 44 94</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@gb-hukuk.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;