import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaUser, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Ad Soyad gereklidir';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Ad Soyad en az 2 karakter olmalıdır';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'E-posta gereklidir';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    // Phone validation (Turkish format)
    const phoneRegex = /^(\+90|0)?[0-9]{10,11}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Telefon numarası gereklidir';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Geçerli bir telefon numarası giriniz';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Konu gereklidir';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Mesaj gereklidir';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mesaj en az 10 karakter olmalıdır';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // EmailJS Configuration
      const serviceId = 'service_4sujrk7';
      const templateId = 'template_9k13xef';
      const publicKey = 'rgMqdC8BJJwkgX5n-';

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'gulumserbilgiclaw@gmail.com'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Auto-hide success message after 7 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form Section */}
        <Row className="contact-form-section justify-content-center mb-5">
          <Col lg={8} md={10} sm={12}>
            <div className="contact-form-wrapper">
              <h3 className="form-title">
                <FaPaperPlane className="me-2" />
                Bize Mesaj Gönderin
              </h3>
              <p className="form-subtitle">
                Hukuki konulardaki sorularınız için aşağıdaki formu doldurabilirsiniz. 
                En kısa sürede size dönüş yapacağız.
              </p>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <Alert variant="success" className="submit-alert">
                  <FaCheckCircle className="me-2" />
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </Alert>
              )}
              
              {submitStatus === 'error' && (
                <Alert variant="danger" className="submit-alert">
                  <FaExclamationTriangle className="me-2" />
                  Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz veya telefon ile iletişime geçiniz.
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  {/* Name Field */}
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        <FaUser className="me-2" />
                        Ad Soyad *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Adınız ve soyadınız"
                        className={`form-input ${formErrors.name ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {formErrors.name && (
                        <div className="invalid-feedback d-block">
                          {formErrors.name}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  {/* Email Field */}
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        <FaEnvelope className="me-2" />
                        E-posta *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                        className={`form-input ${formErrors.email ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <div className="invalid-feedback d-block">
                          {formErrors.email}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  {/* Phone Field */}
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        <FaPhone className="me-2" />
                        Telefon *
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+90 5XX XXX XX XX"
                        className={`form-input ${formErrors.phone ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {formErrors.phone && (
                        <div className="invalid-feedback d-block">
                          {formErrors.phone}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  {/* Subject Field */}
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        Konu *
                      </Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.subject ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
                        <option value="Borç Anlaşmaları">Borç Anlaşmaları</option>
                        <option value="Ceza Hukuku">Ceza Hukuku</option>
                        <option value="Fikri Mülkiyet">Fikri Mülkiyet</option>
                        <option value="Ticaret Hukuku">Ticaret Hukuku</option>
                        <option value="Aile Hukuku">Aile Hukuku</option>
                        <option value="İş Hukuku">İş Hukuku</option>
                        <option value="Diğer">Diğer</option>
                      </Form.Select>
                      {formErrors.subject && (
                        <div className="invalid-feedback d-block">
                          {formErrors.subject}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  {/* Message Field */}
                  <Col xs={12} className="mb-4">
                    <Form.Group>
                      <Form.Label className="form-label">
                        Mesajınız *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hukuki sorununuzu ve danışmanlık ihtiyacınızı detaylı olarak açıklayınız..."
                        className={`form-input ${formErrors.message ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                      />
                      {formErrors.message && (
                        <div className="invalid-feedback d-block">
                          {formErrors.message}
                        </div>
                      )}
                      <Form.Text className="text-muted">
                        Minimum 10 karakter gereklidir.
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  {/* Submit Button */}
                  <Col xs={12} className="text-center">
                    <Button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Mesaj Gönder
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
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