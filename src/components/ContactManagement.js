import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Badge, Modal } from 'react-bootstrap';
import { FaEnvelope, FaEnvelopeOpen, FaTrash, FaPhone, FaUser } from 'react-icons/fa';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadContacts();
    // Eğer hiç mesaj yoksa örnek mesajlar ekle
    const savedContacts = localStorage.getItem('adminContacts');
    if (!savedContacts || JSON.parse(savedContacts).length === 0) {
      addSampleContacts();
    }
  }, []);

  const loadContacts = () => {
    const savedContacts = localStorage.getItem('adminContacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  };

  const addSampleContacts = () => {
    const sampleContacts = [
      {
        id: 1,
        name: "Ahmet Yılmaz",
        email: "ahmet@example.com",
        phone: "0532 123 45 67",
        subject: "Boşanma Davası Danışmanlığı",
        message: "Merhaba, boşanma davası konusunda bilgi almak istiyorum. 10 yıllık evliliğim var ve iki çocuğum bulunmaktadır.",
        read: false,
        createdAt: new Date().toISOString(),
        priority: "high"
      },
      {
        id: 2,
        name: "Fatma Demir",
        email: "fatma@example.com",
        phone: "0533 987 65 43",
        subject: "İş Hukuku Konusu",
        message: "İş yerinde mobbing yaşıyorum. Haklarım konusunda bilgi almak istiyorum.",
        read: true,
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 gün önce
        priority: "medium"
      },
      {
        id: 3,
        name: "Mehmet Kaya",
        email: "mehmet@example.com", 
        phone: "0534 555 44 33",
        subject: "Emlak Alım-Satım",
        message: "Ev alım satım sözleşmesi konusunda danışmanlık istiyorum.",
        read: false,
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 gün önce
        priority: "low"
      }
    ];

    setContacts(sampleContacts);
    localStorage.setItem('adminContacts', JSON.stringify(sampleContacts));
  };

  const markAsRead = (contactId) => {
    const updatedContacts = contacts.map(contact => {
      if (contact.id === contactId) {
        return { ...contact, read: true };
      }
      return contact;
    });
    setContacts(updatedContacts);
    localStorage.setItem('adminContacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (contactId) => {
    if (window.confirm('Bu mesajı silmek istediğinize emin misiniz?')) {
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
      setContacts(updatedContacts);
      localStorage.setItem('adminContacts', JSON.stringify(updatedContacts));
    }
  };

  const openContactModal = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
    if (!contact.read) {
      markAsRead(contact.id);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return 'Acil';
      case 'medium': return 'Orta';
      case 'low': return 'Düşük';
      default: return 'Normal';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Bugün';
    if (diffDays === 2) return 'Dün';
    if (diffDays <= 7) return `${diffDays - 1} gün önce`;
    return date.toLocaleDateString('tr-TR');
  };

  const unreadCount = contacts.filter(c => !c.read).length;

  return (
    <div className="contact-management">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">İletişim Mesajları</h4>
          <p className="text-muted mb-0">Web sitesinden gelen müvekkil mesajları</p>
        </div>
        <Badge bg="primary" className="fs-6">
          {unreadCount} okunmamış mesaj
        </Badge>
      </div>

      {/* Statistics */}
      <div className="row mb-4">
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-primary text-white p-3 rounded">
            <h5 className="mb-1">{contacts.length}</h5>
            <small>Toplam Mesaj</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-danger text-white p-3 rounded">
            <h5 className="mb-1">{unreadCount}</h5>
            <small>Okunmamış</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-success text-white p-3 rounded">
            <h5 className="mb-1">{contacts.filter(c => c.read).length}</h5>
            <small>Okunmuş</small>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-2">
          <div className="stat-box bg-warning text-white p-3 rounded">
            <h5 className="mb-1">{contacts.filter(c => c.priority === 'high').length}</h5>
            <small>Acil</small>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Mesaj Listesi</h5>
        </Card.Header>
        <Card.Body className="p-0">
          {contacts.length === 0 ? (
            <div className="text-center py-5">
              <FaEnvelope size={40} className="text-muted mb-3" />
              <h5>Henüz mesaj yok</h5>
              <p className="text-muted">İletişim formundan gelen mesajlar burada görünecek</p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Durum</th>
                    <th>Gönderen</th>
                    <th>Konu</th>
                    <th>Öncelik</th>
                    <th>Tarih</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id} className={!contact.read ? 'table-warning' : ''}>
                      <td>
                        {contact.read ? (
                          <FaEnvelopeOpen className="text-success" title="Okunmuş" />
                        ) : (
                          <FaEnvelope className="text-primary" title="Okunmamış" />
                        )}
                      </td>
                      <td>
                        <div>
                          <strong className="d-block">{contact.name}</strong>
                          <small className="text-muted">
                            <FaPhone className="me-1" />
                            {contact.phone}
                          </small>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="fw-medium">{contact.subject}</span>
                          <br />
                          <small className="text-muted">
                            {contact.message.substring(0, 50)}...
                          </small>
                        </div>
                      </td>
                      <td>
                        <Badge bg={getPriorityColor(contact.priority)}>
                          {getPriorityText(contact.priority)}
                        </Badge>
                      </td>
                      <td>
                        <small>{formatDate(contact.createdAt)}</small>
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <Button
                            size="sm"
                            variant="outline-primary"
                            onClick={() => openContactModal(contact)}
                            title="Detayları Gör"
                          >
                            <FaUser />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => deleteContact(contact.id)}
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

      {/* Contact Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mesaj Detayları</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact && (
            <div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Ad Soyad:</strong>
                  <p>{selectedContact.name}</p>
                </div>
                <div className="col-md-6">
                  <strong>Telefon:</strong>
                  <p>{selectedContact.phone}</p>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>E-posta:</strong>
                  <p>{selectedContact.email}</p>
                </div>
                <div className="col-md-6">
                  <strong>Tarih:</strong>
                  <p>{new Date(selectedContact.createdAt).toLocaleString('tr-TR')}</p>
                </div>
              </div>

              <div className="mb-3">
                <strong>Konu:</strong>
                <p>{selectedContact.subject}</p>
              </div>

              <div className="mb-3">
                <strong>Mesaj:</strong>
                <div className="bg-light p-3 rounded">
                  {selectedContact.message}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <Badge bg={getPriorityColor(selectedContact.priority)} className="fs-6">
                  Öncelik: {getPriorityText(selectedContact.priority)}
                </Badge>
                <Button 
                  variant="success" 
                  href={`tel:${selectedContact.phone}`}
                  className="d-flex align-items-center"
                >
                  <FaPhone className="me-2" />
                  Ara
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactManagement;