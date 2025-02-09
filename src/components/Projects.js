import React from 'react';
import './style.css';
const Projects = () => {
  const projects = [
    { id: 1, name: 'Project 1', tech: 'React, Firebase' },
    { id: 2, name: 'Project 2', tech: 'Node.js, MySQL' },
    { id: 3, name: 'Project 3', tech: 'Python, Django' },
  ];

  return (
    <section id="other-projects" className="projects-section">
      <h2>Other Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <button className="view-button">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;