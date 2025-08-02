import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Adres",
      content: "Ümmühan, Tok Cd. No:7/3, 17860",
      subContent: "Ayvacık, Çanakkale"
    },
    {
      icon: FaPhone,
      title: "Telefon",
      content: "+90 507 733 44 94",
      subContent: "Pazartesi - Cuma: 09:00 - 17:00"
    },
    {
      icon: FaEnvelope,
      title: "E-posta",
      content: "gulumserbilgiclaw@gmail.com",
      subContent: "gulumserbilgiclaw@gmail.com"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+90 507 733 44 94",
      subContent: "Hızlı iletişim için"
    }
  ];

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "09:00 - 17:00" },
    { day: "Cumartesi", hours: "Kapalı" },
    { day: "Pazar", hours: "Kapalı" }
  ];

  return (
    <section className="contact-section">
      <Container>
        {/* Contact Header */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="contact-header">
              <h2 className="contact-title">
                <span className="title-main">İletişime Geçin</span>
                <span className="title-accent">Size Nasıl Yardımcı Olabiliriz?</span>
              </h2>
              <p className="contact-subtitle">
                Hukuki sorularınız ve danışmanlık ihtiyaçlarınız için bizimle iletişime geçin. 
                Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="contact-content justify-content-center">
          {/* Contact Info */}
          <Col lg={8} md={10} sm={12} className="d-flex justify-content-center">
            <div className="contact-info-wrapper">
              <h3 className="info-title">İletişim Bilgileri</h3>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon-wrapper">
                      <info.icon className="info-icon" />
                    </div>
                    <div className="info-content">
                      <h5 className="info-title-text">{info.title}</h5>
                      <p className="info-main">{info.content}</p>
                      <p className="info-sub">{info.subContent}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="working-hours">
                <h4 className="hours-title">
                  <FaClock className="me-2" />
                  Çalışma Saatleri
                </h4>
                <div className="hours-list">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="map-wrapper">
              <h3 className="map-title">Büro Lokasyonumuz</h3>
              <div className="map-container">
                <iframe
                  src="https://maps.google.com/maps?q=Tok%20Caddesi,%20Ayvac%C4%B1k,%20%C3%87anakkale&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Büro Lokasyonu - Ayvacık, Çanakkale"
                ></iframe>
              </div>
              <p className="map-description">
                Ayvacık merkezinde, ulaşım açısından uygun bir konumda bulunan büromuz,
                tüm hukuki ihtiyaçlarınız için hizmetinizdedir.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;