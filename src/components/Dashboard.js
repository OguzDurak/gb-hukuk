import React, { useState, useEffect } from 'react';
import { Row, Col, Card, ProgressBar, Table, Badge } from 'react-bootstrap';
import { 
  FaNewspaper, 
  FaEye, 
  FaEnvelope, 
  FaChartLine,
  FaArrowUp,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaFileAlt
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    articles: { total: 0, published: 0, drafts: 0, featured: 0 },
    contacts: { total: 0, unread: 0, recent: [] },
    recentActivity: []
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    // Makale istatistikleri
    const articles = JSON.parse(localStorage.getItem('adminArticles') || '[]');
    const articleStats = {
      total: articles.length,
      published: articles.filter(a => a.status === 'published').length,
      drafts: articles.filter(a => a.status === 'draft').length,
      featured: articles.filter(a => a.featured).length
    };

    // İletişim istatistikleri
    const contacts = JSON.parse(localStorage.getItem('adminContacts') || '[]');
    const contactStats = {
      total: contacts.length,
      unread: contacts.filter(c => !c.read).length,
      recent: contacts.slice(0, 5)
    };

    // Son aktiviteler
    const recentActivity = [
      { id: 1, action: 'Yeni makale eklendi', time: '2 saat önce', type: 'article' },
      { id: 2, action: 'İletişim formu dolduruldu', time: '5 saat önce', type: 'contact' },
      { id: 3, action: 'Makale güncellendi', time: '1 gün önce', type: 'article' },
      { id: 4, action: 'Yeni mesaj alındı', time: '2 gün önce', type: 'contact' }
    ];

    setStats({
      articles: articleStats,
      contacts: contactStats,
      recentActivity
    });
  };

  // Hoş geldin mesajı için zaman
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Günaydın';
    if (hour < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section mb-4">
        <Row>
          <Col>
            <Card className="welcome-card border-0 bg-gradient">
              <Card.Body className="text-white">
                <h4 className="mb-2">
                  {getGreeting()}, Av. Bilgiç! 👋
                </h4>
                <p className="mb-0 opacity-75">
                  İşte bugünkü özet raporunuz ve sistem durumunuz
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-3">
          <Card className="stat-card border-0 h-100">
            <Card.Body className="text-center">
              <div className="stat-icon bg-primary text-white mb-3">
                <FaNewspaper />
              </div>
              <h3 className="stat-number text-primary">{stats.articles.total}</h3>
              <p className="stat-label text-muted mb-2">Toplam Makale</p>
              <small className="text-success">
                <FaArrowUp className="me-1" />
                {stats.articles.published} yayında
              </small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} className="mb-3">
          <Card className="stat-card border-0 h-100">
            <Card.Body className="text-center">
              <div className="stat-icon bg-success text-white mb-3">
                <FaEye />
              </div>
              <h3 className="stat-number text-success">{stats.articles.published}</h3>
              <p className="stat-label text-muted mb-2">Yayın Makale</p>
              <ProgressBar 
                variant="success" 
                now={(stats.articles.published / stats.articles.total) * 100} 
                className="progress-thin"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} className="mb-3">
          <Card className="stat-card border-0 h-100">
            <Card.Body className="text-center">
              <div className="stat-icon bg-warning text-white mb-3">
                <FaFileAlt />
              </div>
              <h3 className="stat-number text-warning">{stats.articles.drafts}</h3>
              <p className="stat-label text-muted mb-2">Taslak Makale</p>
              <small className="text-muted">
                Düzenleme bekliyor
              </small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} className="mb-3">
          <Card className="stat-card border-0 h-100">
            <Card.Body className="text-center">
              <div className="stat-icon bg-info text-white mb-3">
                <FaEnvelope />
              </div>
              <h3 className="stat-number text-info">{stats.contacts.total}</h3>
              <p className="stat-label text-muted mb-2">Toplam Mesaj</p>
              <small className="text-danger">
                {stats.contacts.unread} okunmamış
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity & Quick Actions */}
      <Row>
        <Col md={8}>
          <Card className="activity-card border-0">
            <Card.Header className="bg-white border-bottom">
              <h5 className="mb-0">
                <FaChartLine className="me-2 text-primary" />
                Son Aktiviteler
              </h5>
            </Card.Header>
            <Card.Body>
              {stats.recentActivity.length > 0 ? (
                <div className="activity-list">
                  {stats.recentActivity.map((activity) => (
                    <div key={activity.id} className="activity-item d-flex align-items-center mb-3">
                      <div className={`activity-icon me-3 ${activity.type === 'article' ? 'bg-primary' : 'bg-success'}`}>
                        {activity.type === 'article' ? <FaNewspaper /> : <FaEnvelope />}
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 fw-medium">{activity.action}</p>
                        <small className="text-muted">
                          <FaClock className="me-1" />
                          {activity.time}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-muted">
                  <FaChartLine size={40} className="mb-3 opacity-50" />
                  <p>Henüz aktivite bulunmuyor</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="quick-stats border-0 mb-3">
            <Card.Header className="bg-white border-bottom">
              <h5 className="mb-0">
                <FaCalendarAlt className="me-2 text-success" />
                Bugün
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="quick-stat-item d-flex justify-content-between mb-2">
                <span className="text-muted">Yeni mesajlar</span>
                <Badge bg="primary">{stats.contacts.unread}</Badge>
              </div>
              <div className="quick-stat-item d-flex justify-content-between mb-2">
                <span className="text-muted">Toplam makale</span>
                <Badge bg="success">{stats.articles.total}</Badge>
              </div>
              <div className="quick-stat-item d-flex justify-content-between mb-2">
                <span className="text-muted">Öne çıkan</span>
                <Badge bg="warning">{stats.articles.featured}</Badge>
              </div>
              <hr />
              <div className="text-center">
                <small className="text-muted">
                  <FaUsers className="me-1" />
                  Sistem aktif ve güvenli
                </small>
              </div>
            </Card.Body>
          </Card>

          {/* System Status */}
          <Card className="system-status border-0">
            <Card.Header className="bg-white border-bottom">
              <h5 className="mb-0">
                <FaClock className="me-2 text-info" />
                Sistem Durumu
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="status-item d-flex justify-content-between align-items-center mb-2">
                <span>Sunucu Durumu</span>
                <Badge bg="success">Çevrimiçi</Badge>
              </div>
              <div className="status-item d-flex justify-content-between align-items-center mb-2">
                <span>Veri Tabanı</span>
                <Badge bg="success">Aktif</Badge>
              </div>
              <div className="status-item d-flex justify-content-between align-items-center mb-2">
                <span>Son Yedekleme</span>
                <small className="text-muted">Bugün</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;