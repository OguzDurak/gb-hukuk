import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
