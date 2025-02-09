import React from "react";
import "./style.css";
const ProjectDetails = () => {
  return (
    <section id="project" className="project-section">
      <h2>About Project Bhargav</h2>
      <div className="project-details">
        <div className="project-image">
          <img src="/kesh-screenshot.jpg" alt=" Bhargav Project" />
        </div>
        <div className="project-info">
          <h3>Key Features</h3>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <h3>Technologies Used</h3>
          <div className="tech-stack">
            <span>React.js</span>
            <span>Spring Boot</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>Android Studio</span>
            <span>Kotlin</span>
            <span>GitHub</span>
            <span>Raspberry Pi</span>
            <span>Ubuntu</span>
          </div>

          <a href="#" className="demo-button">
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
