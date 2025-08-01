import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Alert, Tab, Nav } from 'react-bootstrap';
import { FaSave, FaUser, FaGlobe, FaShieldAlt, FaPalette } from 'react-icons/fa';

const SiteSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  
  const [profileSettings, setProfileSettings] = useState({
    lawyerName: 'Av. Bilgiç',
    firmName: 'Bilgiç Hukuk Bürosu',
    phone: '0507 733 44 94',
    email: 'info@bilgichukuk.com',
    address: 'İstanbul, Türkiye',
    bio: 'Deneyimli hukuk uzmanı'
  });

  const [siteSettings, setSiteSettings] = useState({
    siteTitle: 'Bilgiç Hukuk Bürosu',
    siteDescription: 'Güvenilir hukuki çözümler',
    whatsappNumber: '905077334494',
    workingHours: 'Pazartesi - Cuma: 09:00 - 18:00'
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const savedProfile = localStorage.getItem('adminProfile');
    const savedSite = localStorage.getItem('adminSiteSettings');
    
    if (savedProfile) {
      setProfileSettings(JSON.parse(savedProfile));
    }
    if (savedSite) {
      setSiteSettings(JSON.parse(savedSite));
    }
  };

  const showAlert = (message, variant = 'success') => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: '', variant: '' }), 3000);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('adminProfile', JSON.stringify(profileSettings));
    showAlert('Profil bilgileri başarıyla güncellendi!');
  };

  const handleSiteSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('adminSiteSettings', JSON.stringify(siteSettings));
    showAlert('Site ayarları başarıyla güncellendi!');
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      showAlert('Yeni şifreler eşleşmiyor!', 'danger');
      return;
    }

    if (securitySettings.newPassword.length < 6) {
      showAlert('Yeni şifre en az 6 karakter olmalıdır!', 'danger');
      return;
    }

    // Şifre güncelleme simülasyonu
    showAlert('Şifre başarıyla güncellendi!');
    setSecuritySettings({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="site-settings">
      {/* Alert */}
      {alert.show && (
        <Alert variant={alert.variant} className="mb-4">
          {alert.message}
        </Alert>
      )}

      {/* Header */}
      <div className="mb-4">
        <h4 className="mb-1">Site Ayarları</h4>
        <p className="text-muted mb-0">Kişisel bilgilerinizi ve site ayarlarınızı yönetin</p>
      </div>

      {/* Settings Tabs */}
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="profile" className="text-start">
                  <FaUser className="me-2" />
                  Profil Bilgileri
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="site" className="text-start">
                  <FaGlobe className="me-2" />
                  Site Ayarları
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="security" className="text-start">
                  <FaShieldAlt className="me-2" />
                  Güvenlik
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appearance" className="text-start">
                  <FaPalette className="me-2" />
                  Görünüm
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md={9}>
            <Tab.Content>
              {/* Profile Settings */}
              <Tab.Pane eventKey="profile">
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Profil Bilgileri</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form onSubmit={handleProfileSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Avukat Adı</Form.Label>
                            <Form.Control
                              type="text"
                              value={profileSettings.lawyerName}
                              onChange={(e) => setProfileSettings({
                                ...profileSettings,
                                lawyerName: e.target.value
                              })}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Büro Adı</Form.Label>
                            <Form.Control
                              type="text"
                              value={profileSettings.firmName}
                              onChange={(e) => setProfileSettings({
                                ...profileSettings,
                                firmName: e.target.value
                              })}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control
                              type="tel"
                              value={profileSettings.phone}
                              onChange={(e) => setProfileSettings({
                                ...profileSettings,
                                phone: e.target.value
                              })}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>E-posta</Form.Label>
                            <Form.Control
                              type="email"
                              value={profileSettings.email}
                              onChange={(e) => setProfileSettings({
                                ...profileSettings,
                                email: e.target.value
                              })}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control
                          type="text"
                          value={profileSettings.address}
                          onChange={(e) => setProfileSettings({
                            ...profileSettings,
                            address: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Biyografi</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={profileSettings.bio}
                          onChange={(e) => setProfileSettings({
                            ...profileSettings,
                            bio: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Button type="submit" variant="primary">
                        <FaSave className="me-2" />
                        Profil Bilgilerini Kaydet
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Site Settings */}
              <Tab.Pane eventKey="site">
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Site Ayarları</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form onSubmit={handleSiteSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Site Başlığı</Form.Label>
                        <Form.Control
                          type="text"
                          value={siteSettings.siteTitle}
                          onChange={(e) => setSiteSettings({
                            ...siteSettings,
                            siteTitle: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Site Açıklaması</Form.Label>
                        <Form.Control
                          type="text"
                          value={siteSettings.siteDescription}
                          onChange={(e) => setSiteSettings({
                            ...siteSettings,
                            siteDescription: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>WhatsApp Numarası</Form.Label>
                        <Form.Control
                          type="text"
                          value={siteSettings.whatsappNumber}
                          onChange={(e) => setSiteSettings({
                            ...siteSettings,
                            whatsappNumber: e.target.value
                          })}
                          placeholder="905077334494"
                        />
                        <Form.Text className="text-muted">
                          Ülke kodu ile birlikte, boşluk olmadan
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Çalışma Saatleri</Form.Label>
                        <Form.Control
                          type="text"
                          value={siteSettings.workingHours}
                          onChange={(e) => setSiteSettings({
                            ...siteSettings,
                            workingHours: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Button type="submit" variant="primary">
                        <FaSave className="me-2" />
                        Site Ayarlarını Kaydet
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Security Settings */}
              <Tab.Pane eventKey="security">
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Güvenlik Ayarları</h5>
                  </Card.Header>
                  <Card.Body>
                    <Form onSubmit={handleSecuritySubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mevcut Şifre</Form.Label>
                        <Form.Control
                          type="password"
                          value={securitySettings.currentPassword}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            currentPassword: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Yeni Şifre</Form.Label>
                        <Form.Control
                          type="password"
                          value={securitySettings.newPassword}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            newPassword: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Yeni Şifre (Tekrar)</Form.Label>
                        <Form.Control
                          type="password"
                          value={securitySettings.confirmPassword}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            confirmPassword: e.target.value
                          })}
                        />
                      </Form.Group>

                      <Button type="submit" variant="warning">
                        <FaShieldAlt className="me-2" />
                        Şifreyi Güncelle
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Appearance Settings */}
              <Tab.Pane eventKey="appearance">
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Görünüm Ayarları</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center py-5">
                      <FaPalette size={40} className="text-muted mb-3" />
                      <h5>Yakında</h5>
                      <p className="text-muted">
                        Görünüm ayarları gelecek güncellemelerde eklenecektir.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default SiteSettings;