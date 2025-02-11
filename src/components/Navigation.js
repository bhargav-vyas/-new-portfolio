import React from 'react';
import { Link } from 'react-scroll';
import './style.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="brand">Bhargav Project</div>
      <div className="nav-links">
        <Link to="hero" smooth={true}>Home</Link>
        <Link to="project" smooth={true}>Project</Link>
        {/* Add the "Contact Me" link */}
        <Link to="contact" smooth={true}>Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navigation;