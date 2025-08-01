import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Badge, Modal, Alert } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const ArticleManagement = () => {
  const [articles, setArticles] = useState([]);
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    const savedArticles = localStorage.getItem('adminArticles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  };

  const showMessage = (message, variant = 'success') => {
    setShowAlert({ show: true, message, variant });
    setTimeout(() => setShowAlert({ show: false, message: '', variant: '' }), 3000);
  };

  const toggleStatus = (articleId) => {
    const updatedArticles = articles.map(article => {
      if (article.id === articleId) {
        const newStatus = article.status === 'published' ? 'draft' : 'published';
        return { ...article, status: newStatus, updatedAt: new Date().toISOString() };
      }
      return article;
    });
    setArticles(updatedArticles);
    localStorage.setItem('adminArticles', JSON.stringify(updatedArticles));
    showMessage('Makale durumu güncellendi!');
  };

  const toggleFeatured = (articleId) => {
    const updatedArticles = articles.map(article => {
      if (article.id === articleId) {
        return { ...article, featured: !article.featured, updatedAt: new Date().toISOString() };
      }
      return article;
    });
    setArticles(updatedArticles);
    localStorage.setItem('adminArticles', JSON.stringify(updatedArticles));
    showMessage('Öne çıkarma durumu güncellendi!');
  };

  const deleteArticle = (articleId) => {
    if (window.confirm('Bu makaleyi silmek istediğinize emin misiniz?')) {
      const updatedArticles = articles.filter(article => article.id !== articleId);
      setArticles(updatedArticles);
      localStorage.setItem('adminArticles', JSON.stringify(updatedArticles));
      showMessage('Makale başarıyla silindi!', 'info');
    }
  };

  // Örnek makale ekleme fonksiyonu
  const addSampleArticle = () => {
    const newArticle = {
      id: Date.now(),
      title: "Örnek Makale: " + new Date().toLocaleDateString('tr-TR'),
      excerpt: "Bu admin panelinden eklenen örnek bir makaledir. Gerçek makalelerinizi buradan yönetebilirsiniz.",
      content: "Makale içeriği buraya gelecek...",
      category: "Hukuk Genel",
      status: "draft",
      featured: false,
      author: "Av. Bilgiç",
      readTime: "3 dk",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updatedArticles = [newArticle, ...articles];
    setArticles(updatedArticles);
    localStorage.setItem('adminArticles', JSON.stringify(updatedArticles));
    showMessage('Örnek makale eklendi!');
  };

  return (
    <div className="article-management">
      {/* Alert */}
      {showAlert.show && (
        <Alert variant={showAlert.variant} className="mb-4">
          {showAlert.message}
        </Alert>
      )}

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Makale Yönetimi</h4>
          <p className="text-muted mb-0">Hukuki makalelerinizi oluşturun ve yönetin</p>
        </div>
        <Button 
          variant="primary" 
          onClick={addSampleArticle}
          className="d-flex align-items-center"
        >
          <FaPlus className="me-2" />
          Örnek Makale Ekle
        </Button>
      </div>

      {/* Statistics */}
      <div className="row mb-4">
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-primary text-white p-3 rounded">
            <h5 className="mb-1">{articles.length}</h5>
            <small>Toplam Makale</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-success text-white p-3 rounded">
            <h5 className="mb-1">{articles.filter(a => a.status === 'published').length}</h5>
            <small>Yayında</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-warning text-white p-3 rounded">
            <h5 className="mb-1">{articles.filter(a => a.status === 'draft').length}</h5>
            <small>Taslak</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-info text-white p-3 rounded">
            <h5 className="mb-1">{articles.filter(a => a.featured).length}</h5>
            <small>Öne Çıkan</small>
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Makale Listesi</h5>
        </Card.Header>
        <Card.Body className="p-0">
          {articles.length === 0 ? (
            <div className="text-center py-5">
              <FaEye size={40} className="text-muted mb-3" />
              <h5>Henüz makale yok</h5>
              <p className="text-muted">İlk makalenizi eklemek için "Örnek Makale Ekle" butonunu kullanın</p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Başlık</th>
                    <th>Kategori</th>
                    <th>Durum</th>
                    <th>Öne Çıkan</th>
                    <th>Tarih</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map(article => (
                    <tr key={article.id}>
                      <td>
                        <div>
                          <strong className="d-block">{article.title}</strong>
                          <small className="text-muted">
                            {article.excerpt?.substring(0, 60)}...
                          </small>
                        </div>
                      </td>
                      <td>
                        <Badge bg="secondary">{article.category}</Badge>
                      </td>
                      <td>
                        <Badge 
                          bg={article.status === 'published' ? 'success' : 'warning'}
                          style={{ cursor: 'pointer' }}
                          onClick={() => toggleStatus(article.id)}
                        >
                          {article.status === 'published' ? 'Yayında' : 'Taslak'}
                        </Badge>
                      </td>
                      <td>
                        <Badge 
                          bg={article.featured ? 'primary' : 'light'}
                          text={article.featured ? 'white' : 'dark'}
                          style={{ cursor: 'pointer' }}
                          onClick={() => toggleFeatured(article.id)}
                        >
                          {article.featured ? 'Evet' : 'Hayır'}
                        </Badge>
                      </td>
                      <td>
                        <small>
                          {new Date(article.createdAt).toLocaleDateString('tr-TR')}
                        </small>
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <Button
                            size="sm"
                            variant="outline-primary"
                            title="Düzenle"
                          >
                            <FaEdit />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => deleteArticle(article.id)}
                            title="Sil"
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleManagement;