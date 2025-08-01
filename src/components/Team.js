import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaAward, FaEnvelope, FaPhone, FaLinkedin, FaBalanceScale, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = '905077334494';
    const message = 'Merhaba, size web siteniz üzerinden ulaşıyorum.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const teamMembers = [
    {
      id: 1,
      name: "Gülümser Bilgiç",
      title: "Kurucu Avukat",
      image: "/images/gulumser.png",
      education: "İstanbul Üniversitesi Hukuk Fakültesi",
      experience: "5+ Yıl Deneyim",
      specializations: [
        "Gayrimenkul Hukuku",
        "Borç Anlaşmaları", 
        "Ceza Hukuku",
        "Fikri Mülkiyet"
      ],
      bio: "İstanbul Üniversitesi Hukuk Fakültesi mezunu. 5 yıllık deneyimiyle özellikle gayrimenkul ve ceza hukuku alanlarında uzmanlaşmış. Müvekkil odaklı yaklaşımı ve etik değerleri ile tanınır.",
      contact: {
        email: "gulumserbilgiclaw@gmail.com",
        phone: "+90 507 733 44 94"
      },
      icon: FaBalanceScale
    },
    {
      id: 2,
      name: "Duygu Elif Gedikoğlu",
      title: "Kıdemli Avukat - Gedikoğlu Hukuk Kurucu Avukat",
      image: "/images/duygu.png",
      education: "Kocaeli Üniversitesi Hukuk Fakültesi",
      experience: "15+ Yıl Deneyim",
      specializations: [
        "Ticaret Hukuku",
        "Şirket Kuruluşları",
        "Sözleşme Hukuku",
        "Arabuluculuk"
      ],
      bio: "Gayrimenkul hukuk alanında başarılı bir şekilde çalışan bir avukat. Şirket kuruluşları ve ticari anlaşmazlıklar konusunda geniş deneyimi bulunan uzman avukat.",
      contact: {
        email: "duygugedikoglu@gdhukuk.com",
        phone: "+90 216 266 79 25"
      },
      icon: FaHandshake
    },
    
    
  ];

  return (
    <section className="team-section">
      <Container>
        {/* Team Header */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="team-header">
              <h2 className="team-title">
                <span className="title-main">Uzman Ekibimiz</span>
                <span className="title-accent">Deneyim ve Güven</span>
              </h2>
              <p className="team-subtitle">
                Alanında uzman avukatlarımız, geniş deneyimleri ve professional yaklaşımlarıyla 
                müvekkillerimizin haklarını en iyi şekilde korumaktadır.
              </p>
            </div>
          </Col>
        </Row>

        {/* Team Grid */}
        <Row className="team-grid">
          {teamMembers.map((member) => (
            <Col lg={6} md={6} sm={12} key={member.id} className="mb-4">
              <Card className="team-card h-100">
                <div className="team-card-header">
                  <div className="member-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="member-image-placeholder" style={{display: 'none'}}>
                      <member.icon className="placeholder-icon" />
                    </div>
                  </div>
                  <div className="member-basic-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-title">{member.title}</p>
                    <div className="member-credentials">
                      <div className="credential-item">
                        <FaGraduationCap className="credential-icon" />
                        <span>{member.education}</span>
                      </div>
                      <div className="credential-item">
                        <FaAward className="credential-icon" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Card.Body className="team-card-body">
                  <div className="member-specializations">
                    <h6 className="specializations-title">Uzmanlık Alanları</h6>
                    <div className="specializations-list">
                      {member.specializations.map((spec, index) => (
                        <span key={index} className="specialization-tag">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="member-bio">
                    <p className="bio-text">{member.bio}</p>
                  </div>

                  <div className="member-contact">
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <span className="contact-text">{member.contact.email}</span>
                    </div>
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <span className="contact-text">{member.contact.phone}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Stats */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Uzman Avukat</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Yıl Toplam Deneyim</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8</div>
                <div className="stat-label">Uzmanlık Alanı</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">%100</div>
                <div className="stat-label">Müvekkil Memnuniyeti</div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Team CTA */}
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="team-cta">
              <h3 className="cta-title">Ekibimizle Tanışın</h3>
              <p className="cta-description">
                Deneyimli avukat kadromuz, size en uygun hukuki çözümü sunmak için hazır. 
                Hangi konuda yardıma ihtiyacınız varsa, uzman ekibimiz yanınızda.
              </p>
              <button 
                className="cta-button"
                onClick={openWhatsApp}
                style={{ cursor: 'pointer' }}
              >
                <FaHandshake className="me-2" />
                Ekibimizle İletişime Geçin
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;