import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects'; // Import the AllProjects component
import AboutMe from './components/AboutMe'; // Import the AboutMe component
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {/* Home Page (Default Route) */}
          <Route
            path="/"
            element={
              <>
                <section id="hero">
                  <Hero />
                </section>
                <section id="project">
                  <Projects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />

          {/* All Projects Page */}
          <Route path="/projects" element={<AllProjects />} />

          {/* About Me Page */}
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;