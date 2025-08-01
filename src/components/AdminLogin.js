import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaLock, FaUser, FaShieldAlt } from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin bilgileri (Production'da environment variable olmalı)
  const ADMIN_CREDENTIALS = {
    username: 'avukat',
    password: 'hukuk2024'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Hata mesajını temizle
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basit doğrulama simülasyonu
    setTimeout(() => {
      if (
        credentials.username === ADMIN_CREDENTIALS.username &&
        credentials.password === ADMIN_CREDENTIALS.password
      ) {
        // Başarılı giriş
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminLoginTime', Date.now().toString());
        localStorage.setItem('adminUser', credentials.username);
        onLogin(true);
      } else {
        setError('Kullanıcı adı veya şifre hatalı!');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-login-wrapper">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={4}>
            <Card className="admin-login-card shadow">
              <Card.Body className="p-4">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="admin-icon mb-3">
                    <FaShieldAlt size={50} />
                  </div>
                  <h3 className="admin-title">Admin Paneli</h3>
                  <p className="admin-subtitle text-muted">
                    Bilgiç Hukuk Bürosu Yönetim Sistemi
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="danger" className="mb-3">
                    <FaLock className="me-2" />
                    {error}
                  </Alert>
                )}

                {/* Login Form */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaUser className="me-2 text-primary" />
                      Kullanıcı Adı
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleInputChange}
                      placeholder="Kullanıcı adınızı girin"
                      required
                      className="form-control-lg"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      <FaLock className="me-2 text-primary" />
                      Şifre
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      placeholder="Şifrenizi girin"
                      required
                      className="form-control-lg"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-100 admin-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Giriş Yapılıyor...
                      </>
                    ) : (
                      <>
                        <FaShieldAlt className="me-2" />
                        Güvenli Giriş
                      </>
                    )}
                  </Button>
                </Form>

                {/* Help Text */}
                <div className="admin-help mt-4 p-3 bg-light rounded">
                  <small className="text-muted">
                    <strong>🔐 Güvenlik:</strong> Bu panel sadece yetkili personel içindir.<br/>
                    <strong>⏰ Oturum:</strong> 24 saat sonra otomatik çıkış yapılır.<br/>
                    <strong>📱 Erişim:</strong> Masaüstü ve mobil uyumludur.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;