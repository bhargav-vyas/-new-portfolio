import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <section id="project-details" className="project-details-overlay">
      <div className="project-details-content">
        <h2>About {project.name}</h2>
        <div className="project-details-grid">
          <div className="project-image">
            <img src={project.image} alt={`${project.name} Project`} />
          </div>
          <div className="project-info">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a
              href={project.demoLink}
              className="demo-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <button onClick={onClose} className="close-button">
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;