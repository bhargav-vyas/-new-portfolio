import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'; // Import your global CSS file

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="project">
        <Projects />
      </section>
      {/* Removed the "other-projects" section */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;