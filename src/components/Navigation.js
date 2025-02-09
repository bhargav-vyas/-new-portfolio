import React from 'react';
import { Link } from 'react-scroll';
import './style.css';
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="brand">Kesh Project</div>
      <div className="nav-links">
        <Link to="hero" smooth={true}>Home</Link>
        <Link to="project" smooth={true}>Project</Link>
        <Link to="other-projects" smooth={true}>Other Projects</Link>
      </div>
    </nav>
  );
};

export default Navigation;