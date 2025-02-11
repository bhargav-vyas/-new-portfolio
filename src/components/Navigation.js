import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; // For routing
import "./style.css";

const Navigation = () => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // For programmatic navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Function to handle Home button click
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      // Navigate to the Home route if not already there
      navigate("/");
    } else {
      // Scroll to the hero section if already on the Home route
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Function to handle Projects and Contact Me button clicks
  const handleScrollClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to the Home route first
      navigate("/");
      // Wait for the Home page to load, then scroll to the section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust the delay as needed
    } else {
      // Scroll to the section if already on the Home route
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="brand">Bhargav Project</div>

      {/* Mobile Menu Toggle Button */}
      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {/* Home button */}
        <a onClick={handleHomeClick} className="nav-link">
          Home
        </a>

        {/* Smooth scroll links for Projects and Contact Me */}
        <a onClick={() => handleScrollClick("project")} className="nav-link">
          Projects
        </a>
        <a onClick={() => handleScrollClick("contact")} className="nav-link">
          Contact Me
        </a>

        {/* Link to the AllProjects page */}
        <RouterLink
          to="/projects"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          All Projects
        </RouterLink>

        {/* Link to the About Me page */}
        <RouterLink
          to="/about"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          About Me
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navigation;
