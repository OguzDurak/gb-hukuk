import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaGavel, FaFileContract, FaUserTie, FaBuilding, FaHome, FaHeart, FaShieldAlt, FaHandshake, FaTimes } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      icon: FaUserTie,
      title: "Hukuki Danışmanlık",
      description: "Tüm hukuki konularda uzman avukatlarımızdan profesyonel danışmanlık hizmeti alın.",
      features: ["Destek", "Uzman Avukatlar", "Gizlilik Garantisi"],
      detailContent: {
        overview: "GB Hukuk Bürosu olarak, 15 yıllık deneyimimizle tüm hukuki konularda kapsamlı danışmanlık hizmetleri sunuyoruz. Uzman avukat kadromuzla, hukuki sorunlarınız için en doğru çözümleri buluyoruz.",
        services: [
          "Bireysel ve kurumsal hukuki danışmanlık",
          "Hukuki risk değerlendirmesi ve analizi",
          "Stratejik hukuki planlama",
          "Mevzuat takibi ve uyumluluk danışmanlığı",
          "Hukuki görüş yazıları hazırlanması",
          "Anlaşmazlık çözüm stratejileri"
        ],
        process: "İlk görüşmede durumunuzu detaylı değerlendirip, size özel çözüm önerileri sunuyoruz. Süreç boyunca düzenli bilgilendirme yaparak, şeffaf ve güvenilir hizmet veriyoruz.",
        price: "Danışmanlık ücretlerimiz, konunun karmaşıklığı ve süresine göre belirlenir."
      }
    },
    {
      id: 2,
      icon: FaGavel,
      title: "Dava ve İcra Takibi",
      description: "Dava süreçlerinizi profesyonel takip ve temsil hizmetimizle güvence altına alın.",
      features: ["Profesyonel Temsil", "Süreç Takibi", "Stratejik Planlama"],
      detailContent: {
        overview: "Hukuki haklarınızı korumak için tüm dava türlerinde profesyonel temsil hizmeti sunuyoruz. Deneyimli avukatlarımızla, davalarınızı en başından sonuna kadar takip ediyoruz.",
        services: [
          "Hukuk ve icra davalarında temsil",
          "Dava stratejisi belirlenmesi",
          "Dilekçe ve savunma hazırlanması", 
          "Delil toplama ve değerlendirme",
          "Duruşma takibi ve müvekkil bilgilendirmesi",
          "İcra takip işlemleri"
        ],
        process: "Dava açılmadan önce detaylı dosya incelemesi yapıp, kazanma şansınızı değerlendiriyoruz. Süreç boyunca tüm gelişmeleri size aktarıyoruz.",
        price: "Dava ücretleri, davanın türü ve karmaşıklığına göre belirlenir."
      }
    },
    {
      id: 3,
      icon: FaFileContract,
      title: "Sözleşme İnceleme",
      description: "Tüm sözleşmelerinizi detaylı inceleyerek hukuki güvenliğinizi sağlıyoruz.",
      features: ["Detaylı İnceleme", "Risk Analizi", "Öneriler"],
      detailContent: {
        overview: "Sözleşmelerinizin hukuki açıdan güvenliğini sağlamak için detaylı inceleme ve düzenleme hizmetleri sunuyoruz. Menfaatlerinizi koruyan güçlü sözleşmeler hazırlıyoruz.",
        services: [
          "Ticari sözleşme inceleme ve düzenleme",
          "İş sözleşmeleri ve personel hakları",
          "Gayrimenkul sözleşmeleri",
          "Ortaklık ve hissedar sözleşmeleri",
          "Lisans ve franchising anlaşmaları",
          "Uluslararası ticaret sözleşmeleri"
        ],
        process: "Sözleşmenizi madde madde inceleyip, riskli noktaları tespit ediyor ve size özel düzenleme önerileri sunuyoruz.",
        price: "Sözleşme inceleme ücretleri, dökümanın uzunluğu ve karmaşıklığına göre değişir."
      }
    },
    {
      id: 4,
      icon: FaBuilding,
      title: "Şirket Hukuku",
      description: "Şirket kurulumu, birleşme, devir ve tüm ticari hukuk işlemleriniz için uzman desteği.",
      features: ["Kuruluş İşlemleri", "Ticari Danışmanlık", "Süreç Yönetimi"],
      detailContent: {
        overview: "Şirketinizin kuruluşundan tasfiyesine kadar tüm ticari hukuk ihtiyaçlarınızda yanınızdayız. Kurumsal müvekkillerimize kapsamlı hukuki destek sağlıyoruz.",
        services: [
          "Şirket kuruluş işlemleri (Ltd, A.Ş, Koop)",
          "Şirket birleşme ve devir işlemleri",
          "Ticaret sicili işlemleri",
          "Ortaklık anlaşmaları düzenlenmesi",
          "Şirket fesih ve tasfiye işlemleri",
          "Ticari uyuşmazlık çözümü"
        ],
        process: "Şirket ihtiyaçlarınızı analiz ederek, en uygun hukuki yapıyı öneriyoruz. Tüm resmi işlemleri takip ediyor, süreçte size rehberlik ediyoruz.",
        price: "Şirket hukuku hizmet ücretleri, işlemin türü ve karmaşıklığına göre belirlenir."
      }
    },
    {
      id: 5,
      icon: FaHome,
      title: "Gayrimenkul Hukuku",
      description: "Gayrimenkul alım-satım, kira ve tüm emlak işlemlerinizde hukuki güvence.",
      features: ["Alım-Satım", "Kira İşlemleri", "Tapu İşlemleri"],
      detailContent: {
        overview: "Gayrimenkul yatırımlarınızı hukuki risklerden korumak için kapsamlı hizmetler sunuyoruz. Tapu işlemlerinden kira anlaşmalarına kadar tüm süreçlerde yanınızdayız.",
        services: [
          "Gayrimenkul alım-satım işlemleri",
          "Tapu devir işlemleri takibi",
          "Kira sözleşmeleri düzenlenmesi",
          "Gayrimenkul uyuşmazlıkları",
          "Kat mülkiyeti ve kat irtifakı",
          "İmar ve yapı ruhsatı işlemleri"
        ],
        process: "Gayrimenkul işleminizden önce detaylı araştırma yapıyor, riskli durumları tespit ediyoruz. Süreç boyunca güvenli adımlarla ilerleyerek işleminizi tamamlıyoruz.",
        price: "Gayrimenkul hukuku ücretleri, işlem değeri ve karmaşıklığı dikkate alınarak belirlenir."
      }
    },
    {
      id: 6,
      icon: FaHeart,
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka ve tüm aile hukuku konularında hassas yaklaşım.",
      features: ["Boşanma İşlemleri", "Velayet Davası", "Nafaka Takibi"],
      detailContent: {
        overview: "Aile içi hukuki konularda hassas ve gizli yaklaşımla hizmet veriyoruz. Özellikle çocukların menfaatini gözeterek, en uygun çözümleri buluyoruz.",
        services: [
          "Anlaşmalı ve çekişmeli boşanma",
          "Velayet ve kişisel ilişki düzenlenmesi",
          "Nafaka belirlenmesi ve takibi",
          "Mal rejimi ve tazminat davaları",
          "Evlat edinme işlemleri",
          "Aile içi şiddet davaları"
        ],
        process: "İlk görüşmede durumunuzu değerlendirip, size en uygun çözüm yolunu öneriyoruz. Süreç boyunca psikolojik desteğe önem vererek ileriyoruz.",
        price: "Aile hukuku ücretleri, davanın türü ve süresine göre belirlenir."
      }
    },
    {
      id: 7,
      icon: FaShieldAlt,
      title: "Sigorta Hukuku",
      description: "Sigorta tazminat davaları ve sigorta şirketleri ile yaşanan sorunlarda uzman desteği.",
      features: ["Tazminat Davası", "Ekspertiz İnceleme", "Müzakere"],
      detailContent: {
        overview: "Sigorta şirketleri ile yaşadığınız uyuşmazlıklarda haklarınızı savunuyoruz. Trafik kazası, kasko, konut ve işyeri sigortası tazminatları konusunda uzmanız.",
        services: [
          "Trafik kazası tazminat davaları",
          "Kasko tazminat takibi",
          "Konut ve işyeri sigortası tazminatları",
          "Sağlık sigortası uyuşmazlıkları",
          "Ekspertiz raporu incelemesi",
          "Sigorta şirketi ile müzakere"
        ],
        process: "Sigorta dosyanızı detaylı inceleyip, tazminat hakkınızı değerlendiriyoruz. Gerekirse bağımsız ekspertiz yaptırarak haklarınızı koruyoruz.",
        price: "Sigorta davası ücretleri, tazminat miktarı üzerinden başarı primi sistemiyle hesaplanır."
      }
    },
    {
      id: 8,
      icon: FaHandshake,
      title: "Arabuluculuk",
      description: "Mahkemeye gitmeden çözüm odaklı arabuluculuk hizmetimizle hızlı sonuç alın.",
      features: ["Hızlı Çözüm", "Maliyet Avantajı", "Gizlilik"],
      detailContent: {
        overview: "Uyuşmazlıklarınızı mahkeme sürecine girmeden, hızlı ve ekonomik şekilde çözmek için arabuluculuk hizmetleri sunuyoruz. Tarafların menfaatlerini gözetiyoruz.",
        services: [
          "Ticari uyuşmazlık arabuluculuğu",
          "Aile içi anlaşmazlık çözümü",
          "İş hukuku uyuşmazlıkları",
          "Tüketici şikayetleri",
          "Kira uyuşmazlıkları",
          "Ortaklık anlaşmazlıkları"
        ],
        process: "Her iki tarafın da kabul edebileceği çözüm önerileri geliştiriyoruz. Gizlilik ilkesiyle hareket ederek, objektif yaklaşım sergiliyoruz.",
        price: "Arabuluculuk ücretleri, mahkeme masraflarına göre çok daha ekonomiktir."
      }
    }
  ];

  return (
    <section className="services-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="services-header">
              <h2 className="services-title">
                <span className="title-main">Hukuki Hizmetlerimiz</span>
                <span className="title-accent">Uzman Çözümler</span>
              </h2>
              <p className="services-description">
                GB Hukuk Bürosu olarak, geniş hizmet yelpazemizle tüm hukuki ihtiyaçlarınıza 
                profesyonel çözümler sunuyoruz. Deneyimli ekibimizle yanınızdayız.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="services-grid">
          {services.map((service) => (
            <Col lg={3} md={6} sm={12} key={service.id} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="service-card-body">
                  <div className="service-icon-wrapper">
                    <service.icon className="service-icon" />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-feature">
                        <span className="feature-bullet">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="service-action">
                    <span 
                      className="service-link" 
                      onClick={() => handleServiceClick(service)}
                    >
                      Detaylı Bilgi →
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="services-cta">
              <h3 className="cta-title">Hangi Konuda Yardıma İhtiyacınız Var?</h3>
              <p className="cta-description">
                Uzman avukat kadromuzla tüm hukuki sorunlarınıza çözüm buluyoruz. 
                Ücretsiz ön görüşme için hemen iletişime geçin.
              </p>
              <button className="cta-button">
                <FaUserTie className="me-2" />
                Danışmanlık Al
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Service Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="service-detail-modal"
      >
        <Modal.Header className="service-modal-header">
          <div className="modal-title-section">
            {selectedService && (
              <>
                <div className="modal-icon-wrapper">
                  <selectedService.icon className="modal-service-icon" />
                </div>
                <Modal.Title className="modal-service-title">
                  {selectedService.title}
                </Modal.Title>
              </>
            )}
          </div>
          <Button 
            variant="link" 
            className="modal-close-btn" 
            onClick={handleCloseModal}
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        
        <Modal.Body className="service-modal-body">
          {selectedService && (
            <div className="service-detail-content">
              <div className="detail-section overview-section">
                <h5 className="detail-section-title">Hizmet Genel Bakış</h5>
                <p className="detail-overview">{selectedService.detailContent.overview}</p>
              </div>
              
              <div className="detail-section services-section">
                <h5 className="detail-section-title">Sunduğumuz Hizmetler</h5>
                <ul className="detail-services-list">
                  {selectedService.detailContent.services.map((service, index) => (
                    <li key={index} className="detail-service-item">
                      <span className="detail-bullet">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="detail-section process-section">
                <h5 className="detail-section-title">Çalışma Sürecimiz</h5>
                <p className="detail-process">{selectedService.detailContent.process}</p>
              </div>
              
              <div className="detail-section pricing-section">
                <h5 className="detail-section-title">Ücretlendirme</h5>
                <p className="detail-pricing">{selectedService.detailContent.price}</p>
              </div>
            </div>
          )}
        </Modal.Body>
        
        <Modal.Footer className="service-modal-footer">
          <div className="modal-footer-content">
            <p className="modal-footer-text">Bu hizmet hakkında detaylı bilgi için iletişime geçebilirsiniz.</p>
            <div className="modal-footer-buttons">
              <Button 
                variant="outline-secondary" 
                onClick={handleCloseModal}
                className="modal-close-button"
              >
                Kapat
              </Button>
      
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Services;