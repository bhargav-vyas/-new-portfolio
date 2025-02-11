import React, { useState } from "react";
import "./Projects.css"; // Make sure to create this file for styling
import ProjectDetails from "./ProjectDetails"; // Correct path to ProjectDetails.js

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Example project data
  const projects = [
    {
      id: 1,
      name: "E-Learning Platform",
      image: "/images/elearning.jpg", // Replace with actual image path
      tech: "Spring Boot, Java, MySQL",
      description:
        "An e-learning platform built with Spring Boot, Java, and MySQL. It supports user authentication, course management, and more.",
      features: ["User Authentication", "Course Management", "Admin Dashboard"],
      technologies: ["Spring Boot", "Java", "MySQL", "Hibernate"],
      demoLink: "https://example.com",
    },
    {
      id: 2,
      name: "Blog Server",
      image: "/images/blog.jpg", // Replace with actual image path
      tech: "Spring Boot, Java, Hibernate, MySQL",
      description:
        "A blog server built with Spring Boot, Java, Hibernate, and MySQL. It supports CRUD operations for blog posts and comments.",
      features: ["CRUD Operations", "User Comments", "REST APIs"],
      technologies: ["Spring Boot", "Java", "Hibernate", "MySQL"],
      demoLink: "https://example.com",
    },
    {
      id: 3,
      name: "File Upload Interface",
      image: "/images/file-upload.jpg", // Replace with actual image path
      tech: "React.js, JavaScript",
      description:
        "A file upload interface built with React.js and JavaScript. It allows users to upload files and view upload history.",
      features: ["File Upload", "Upload History", "Drag and Drop"],
      technologies: ["React.js", "JavaScript"],
      demoLink: "https://example.com",
    },
    {
      id: 4,
      name: "Tic-Tac-Toe Game",
      image: "/images/tic-tac-toe.jpg", // Replace with actual image path
      tech: "React.js, JavaScript, CSS",
      description:
        "A simple Tic-Tac-Toe game built with React.js, JavaScript, and CSS. It supports two-player gameplay.",
      features: ["Two-Player Gameplay", "Responsive Design", "Win Detection"],
      technologies: ["React.js", "JavaScript", "CSS"],
      demoLink: "https://example.com",
    },
  ];

  // Function to handle project selection
  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  // Function to close the ProjectDetails component
  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Other Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <button
              className="view-button"
              onClick={() => handleViewDetails(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Render the ProjectDetails component if a project is selected */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  );
};

export default Projects;