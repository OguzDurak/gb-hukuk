import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaUsers, FaAward, FaCertificate, FaGlobe, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      id: 1,
      icon: FaBalanceScale,
      title: "Adalet ve Eşitlik",
      description: "Her müvekkile eşit mesafede yaklaşır, adaletin tecellisi için çalışırız."
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: "Güven ve Gizlilik",
      description: "Müvekkil sırlarını korur, güven temelli ilişkiler kurarız."
    },
    {
      id: 3,
      icon: FaHandshake,
      title: "Profesyonellik",
      description: "Her işimizde yüksek kalite standardları ve etik değerleri benimseriz."
    },
    {
      id: 4,
      icon: FaHeart,
      title: "İnsani Yaklaşım",
      description: "Hukuki sorunların ardındaki insani boyutu göz ardı etmeyiz."
    }
  ];

  const achievements = [
    {
      id: 1,
      icon: FaAward,
      title: "10+ Yıl Deneyim",
      description: "Alanında köklü deneyim"
    },
    {
      id: 2,
      icon: FaCertificate,
      title: "Uzman Kadro",
      description: "Sertifikalı avukat ekibi"
    },
    {
      id: 3,
      icon: FaUsers,
      title: "100+ Müvekkil",
      description: "Memnun müvekkil portföyü"
    },
    {
      id: 4,
      icon: FaGlobe,
      title: "Kapsamlı Hizmet",
      description: "Geniş uzmanlık alanları"
    }
  ];

  return (
    <section className="about-section">
      <Container>
        {/* About Header */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="about-header">
              <h2 className="about-title">
                <span className="title-main">Bilgiç Avukatlık ve Hukuk Bürosu</span>
                <span className="title-accent">Hakkımızda</span>
              </h2>
              <p className="about-subtitle">
                10 yıldır hukuki alanda güvenilir çözümler sunarak, müvekkillerimizin haklarını koruyoruz.
              </p>
            </div>
          </Col>
        </Row>

        {/* Story Section */}
        <Row className="mb-5 align-items-center">
          <Col lg={6}>
            <div className="story-content">
              <h3 className="story-title">Hikayemiz</h3>
              <p className="story-text">
                Bilgiç Avukatlık ve Hukuk Bürosu, 2025 yılında İstanbul Üniversitesi Hukuk Fakültesi mezunu Gülümser  Bilgiç tarafından kurulan bir hukuk bürosudur. Kurulduğu günden bu yana, 
                adalet anlayışı ve müvekkil memnuniyeti odaklı hizmet vermektedir.
              </p>
              <p className="story-text">
                Büromuz, özellikle borç anlaşması, ceza davası, fikri mülkiyet ve gayrimenkul hukuku alanlarında uzmanlaşmış 
                deneyimli avukatlardan oluşan güçlü bir ekibe sahiptir. Modern hukuk anlayışını geleneksel 
                değerlerle harmanlayarak müvekkillerimize en iyi hizmeti sunmayı hedefliyoruz.
              </p>
              <div className="story-highlight">
                <div className="highlight-icon">
                  <FaBalanceScale />
                </div>
                <div className="highlight-content">
                  <h5>Misyonumuz</h5>
                  <p>Hukuki sorunlara kalıcı ve etkin çözümler üretmek, müvekkillerimizin haklarını en iyi şekilde korumak.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="story-visual">
              <div className="visual-card">
                <div className="visual-icon">
                  <FaBalanceScale />
                </div>
                <h4>Profesyonel Hukuki Hizmet</h4>
                <p>Deneyim ve uzmanlıkla harmanlanmış güvenilir çözümler</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Values Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="values-header text-center mb-4">
              <h3 className="values-title">Değerlerimiz</h3>
              <p className="values-subtitle">Çalışma prensiplerimizdeki temel değerler</p>
            </div>
          </Col>
        </Row>

        <Row className="values-grid mb-5">
          {values.map((value) => (
            <Col lg={3} md={6} sm={12} key={value.id} className="mb-4">
              <Card className="value-card h-100">
                <Card.Body className="value-card-body">
                  <div className="value-icon-wrapper">
                    <value.icon className="value-icon" />
                  </div>
                  <h5 className="value-title">{value.title}</h5>
                  <p className="value-description">{value.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Achievements Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="achievements-header text-center mb-4">
              <h3 className="achievements-title">Başarılarımız</h3>
              <p className="achievements-subtitle">Yıllar içinde elde ettiğimiz başarılar ve deneyimler</p>
            </div>
          </Col>
        </Row>

        <Row className="achievements-grid">
          {achievements.map((achievement) => (
            <Col lg={3} md={6} sm={12} key={achievement.id} className="mb-4">
              <div className="achievement-item">
                <div className="achievement-icon-wrapper">
                  <achievement.icon className="achievement-icon" />
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="about-cta">
              <h3 className="cta-title">Hukuki Sorununuz mu Var?</h3>
              <p className="cta-description">
                Deneyimli ekibimizle size en uygun çözümü bulalım. Bugün iletişime geçin ve 
                hukuki haklarınızı korumak için ilk adımı atın.
              </p>
              <button className="cta-button">
                <FaHandshake className="me-2" />
                İletişime Geçin
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;