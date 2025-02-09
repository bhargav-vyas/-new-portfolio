import React from 'react';
import './style.css';
import './Styles.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Bhargav Vyas' Portfolio!</h1>
        <p>Innovative Solutions for Modern Problems</p>
        <button className="cta-button">View Projects</button>
      </div>
    </section>
  );
};

export default Hero;