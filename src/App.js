import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Admin giriş durumunu kontrol et
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (adminLoggedIn === 'true' && loginTime) {
      // 24 saat sonra otomatik çıkış
      const now = Date.now();
      const loginTimestamp = parseInt(loginTime);
      const hoursPassed = (now - loginTimestamp) / (1000 * 60 * 60);
      
      if (hoursPassed < 24) {
        setIsAdminLoggedIn(true);
      } else {
        // Otomatik çıkış
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminLoginTime');
        localStorage.removeItem('adminUser');
        setIsAdminLoggedIn(false);
      }
    }
  }, []);

  // Ana site komponenti
  const MainSite = () => (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Ana site */}
        <Route path="/" element={<MainSite />} />
        
        {/* Admin rotaları */}
        <Route 
          path="/admin" 
          element={
            isAdminLoggedIn ? (
              <AdminDashboard onLogout={setIsAdminLoggedIn} />
            ) : (
              <AdminLogin onLogin={setIsAdminLoggedIn} />
            )
          } 
        />
        
        {/* Admin giriş sayfası */}
        <Route 
          path="/admin/login" 
          element={
            isAdminLoggedIn ? (
              <Navigate to="/admin" replace />
            ) : (
              <AdminLogin onLogin={setIsAdminLoggedIn} />
            )
          } 
        />
        
        {/* Diğer tüm rotalar ana sayfaya yönlendir */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
