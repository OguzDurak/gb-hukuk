import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { 
  FaSignOutAlt, 
  FaNewspaper, 
  FaEnvelope, 
  FaCog, 
  FaChartBar,
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaFileAlt
} from 'react-icons/fa';
import ArticleManagement from './ArticleManagement';
import ContactManagement from './ContactManagement';
import SiteSettings from './SiteSettings';
import Dashboard from './Dashboard';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [adminUser, setAdminUser] = useState('');

  useEffect(() => {
    // Admin kullanıcı bilgisini al
    const user = localStorage.getItem('adminUser') || 'Admin';
    setAdminUser(user);
  }, []);

  const handleLogout = () => {
    // Çıkış onayı
    if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      localStorage.removeItem('adminLoggedIn');
      localStorage.removeItem('adminLoginTime');
      localStorage.removeItem('adminUser');
      onLogout(false);
    }
  };

  // Navigation items
  const navItems = [
    {
      key: 'dashboard',
      title: 'Dashboard',
      icon: <FaHome />,
      component: <Dashboard />
    },
    {
      key: 'articles',
      title: 'Makaleler',
      icon: <FaNewspaper />,
      component: <ArticleManagement />
    },
    {
      key: 'contacts',
      title: 'İletişim',
      icon: <FaEnvelope />,
      component: <ContactManagement />
    },
    {
      key: 'settings',
      title: 'Ayarlar',
      icon: <FaCog />,
      component: <SiteSettings />
    }
  ];

  return (
    <div className="admin-dashboard">
      {/* Top Navigation */}
      <div className="admin-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="admin-brand">
                <h4 className="mb-0">
                  <FaChartBar className="me-2 text-primary" />
                  Bilgiç Hukuk Admin
                </h4>
                <small className="text-muted">Yönetim Paneli</small>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <div className="admin-user-info">
                <span className="me-3">
                  <FaUser className="me-1" />
                  Hoş geldiniz, <strong>{adminUser}</strong>
                </span>
                <span className="me-3 text-muted">
                  <FaCalendarAlt className="me-1" />
                  {new Date().toLocaleDateString('tr-TR')}
                </span>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  <FaSignOutAlt className="me-1" />
                  Çıkış
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container fluid className="admin-content">
        <Tab.Container 
          activeKey={activeTab} 
          onSelect={(k) => setActiveTab(k)}
        >
          <Row>
            {/* Sidebar Navigation */}
            <Col md={3} lg={2} className="admin-sidebar">
              <Nav variant="pills" className="flex-column admin-nav">
                {navItems.map((item) => (
                  <Nav.Item key={item.key}>
                    <Nav.Link 
                      eventKey={item.key}
                      className="admin-nav-link"
                    >
                      {item.icon}
                      <span className="nav-text">{item.title}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              {/* Quick Stats in Sidebar */}
              <div className="sidebar-stats mt-4">
                <Card className="stats-card">
                  <Card.Body className="text-center py-3">
                    <FaFileAlt className="stats-icon mb-2" />
                    <div className="stats-number">
                      {JSON.parse(localStorage.getItem('adminArticles') || '[]').length}
                    </div>
                    <div className="stats-label">Toplam Makale</div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Main Content Area */}
            <Col md={9} lg={10} className="admin-main">
              <Tab.Content>
                {navItems.map((item) => (
                  <Tab.Pane key={item.key} eventKey={item.key}>
                    <div className="content-header mb-4">
                      <h3 className="content-title">
                        {item.icon}
                        <span className="ms-2">{item.title}</span>
                      </h3>
                    </div>
                    <div className="content-body">
                      {item.component}
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default AdminDashboard;