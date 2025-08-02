import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaBalanceScale,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Ekibimiz', href: '#team' },
    { name: 'İletişim', href: '#contact' }
  ];

  const mainServices = [
    'Gayrimenkul Hukuku',
    'Borç Anlaşmaları',
    'Ceza Hukuku'
  ];

  const additionalServices = [
    'Fikri Mülkiyet',
    'Ticaret Hukuku',
    'Aile Hukuku',
    'İş Hukuku',
    'Danışmanlık Hizmetleri'
  ];

  const contactInfo = {
    address: 'Ümmühan, Tok Cd. No:7/3, 17860 Ayvacık, Çanakkale',
    phone: '+90 507 733 44 94',
    email: 'gulumserbilgiclaw@gmail.com',
    workingHours: {
      weekdays: 'Pazartesi - Cuma: 09:00 - 17:00',
      weekend: 'Cumartesi - Pazar: Kapalı'
    }
  };

  return (
    <footer className="footer-section">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main">
          {/* Company Info */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="footer-brand">
              <div className="brand-header">
                <FaBalanceScale className="brand-icon" />
                <div className="brand-text">
                  <h4 className="brand-name">Bilgiç Avukatlık ve</h4>
                  <p className="brand-subtitle">Hukuk Bürosu</p>
                </div>
              </div>
              <p className="brand-description">
                Ayvacık merkezinde hukuki alanda güvenilir çözümler sunarak, müvekkillerimizin 
                haklarını koruyoruz. Profesyonel yaklaşım ve deneyimli kadromuzla her zaman yanınızdayız.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={12} className="mb-4">
            <div className="footer-links">
              <h5 className="footer-title">Hızlı Linkler</h5>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index} className="link-item">
                    <a 
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.substring(1));
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-services">
              <h5 className="footer-title">Hizmetlerimiz</h5>
              <ul className="services-list">
                {/* Ana Hizmetler */}
                {mainServices.map((service, index) => (
                  <li key={index} className="service-item">
                    {service}
                  </li>
                ))}
                
                {/* Daha Fazla Hizmetler Butonu */}
                <li className="service-item service-toggle" onClick={() => setShowAdditionalServices(!showAdditionalServices)}>
                  <span className="service-bullet toggle-bullet">
                    {showAdditionalServices ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                  <span className="toggle-text">
                    {showAdditionalServices ? 'Daha Az Göster' : 'Diğer Hizmetlerimiz'}
                  </span>
                </li>
                
                {/* Ek Hizmetler (Açılır) */}
                {showAdditionalServices && additionalServices.map((service, index) => (
                  <li key={`additional-${index}`} className="service-item additional-service">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-contact">
              <h5 className="footer-title">İletişim</h5>
              <div className="contact-list">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-text">{contactInfo.address}</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span className="contact-text">{contactInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span className="contact-text">{contactInfo.email}</span>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div className="working-hours-text">
                    <div>{contactInfo.workingHours.weekdays}</div>
                    <div>{contactInfo.workingHours.weekend}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Business Partner Section - Separate Row */}
        <Row className="footer-partner-section">
          <Col lg={8} md={10} sm={12} className="mx-auto">
            <div className="footer-partner-highlight">
              <h4 className="partner-section-title">İş Ortağımız</h4>
              <div className="partner-showcase">
                <a 
                  href="https://www.gdhukuk.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="partner-showcase-link"
                >
                  <div className="partner-showcase-content">
                    <div className="partner-main-info">
                      <div className="partner-showcase-name">Gedikoğlu Hukuk</div>
                      <div className="partner-showcase-description">
                        ESG ve Sürdürülebilirlik Uzmanı • Kurumsal Hukuk • Uluslararası Ticari İşlemler
                      </div>
                    </div>
                    <div className="partner-showcase-contact">
                      <div className="partner-showcase-detail">
                        <FaPhone className="partner-showcase-icon" />
                        <span>+90 216 266 79 25</span>
                      </div>
                      <div className="partner-showcase-detail">
                        <FaEnvelope className="partner-showcase-icon" />
                        <span>info@gdhukuk.com</span>
                      </div>
                      <div className="partner-showcase-detail">
                        <FaMapMarkerAlt className="partner-showcase-icon" />
                        <span>Maltepe, İstanbul</span>
                      </div>
                    </div>
                  </div>
                  <div className="partner-visit-indicator">
                    <span>Website'i Ziyaret Et →</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom">
          <Col lg={8} md={8} sm={12}>
            <div className="copyright">
              <p className="copyright-text">
                © 2025 Bilgiç Avukatlık ve Hukuk Bürosu. Tüm hakları saklıdır.
              </p>
              <p className="legal-text">
                Bu web sitesindeki tüm bilgiler sadece bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz.
              </p>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="text-end">
            <button 
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Sayfanın başına dön"
            >
              <FaArrowUp />
              <span>Başa Dön</span>
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;