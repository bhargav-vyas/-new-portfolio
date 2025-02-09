import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import './App.css';
import ProjectDetails from './components/ProjectDetils';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ProjectDetails/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;