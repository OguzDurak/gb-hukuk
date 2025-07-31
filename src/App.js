import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Geçici içerik - header test için */}
      <main style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 mb-4" style={{ color: '#2c3e50', fontWeight: '300' }}>
                GB Hukuk Bürosu
              </h1>
              <p className="lead mb-4" style={{ color: '#6c757d' }}>
                Modern ve minimalist header tasarımı gri tonlarda tamamlandı.
                Profesyonel, temiz ve kullanıcı dostu arayüz.
              </p>
              <div className="row mt-5">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
                    <div className="card-body text-center p-4">
                      <h5 style={{ color: '#495057' }}>Profesyonel Tasarım</h5>
                      <p style={{ color: '#6c757d' }}>Gri tonlarda şık ve modern görünüm.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
                    <div className="card-body text-center p-4">
                      <h5 style={{ color: '#495057' }}>Minimalist Yaklaşım</h5>
                      <p style={{ color: '#6c757d' }}>Gereksiz detaylardan arınmış tasarım.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
                    <div className="card-body text-center p-4">
                      <h5 style={{ color: '#495057' }}>Responsive Design</h5>
                      <p style={{ color: '#6c757d' }}>Tüm cihazlarda mükemmel görünüm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
