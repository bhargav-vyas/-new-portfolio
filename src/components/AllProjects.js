import React from "react";
import styles from "./AllProjects.module.css"; // Import CSS Module

const AllProjects = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description: "A full-stack e-commerce application with user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://ecommerce-app.com",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that fetches real-time weather data using an API.",
      technologies: ["React", "OpenWeather API", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weatherapp.com",
    },
  ];

  return (
    <section id="all-projects" className={styles.allProjects}>
      <h2 className={styles.heading}>My Projects</h2>
      <p className={styles.subtext}>Here are some of the projects I've worked on.</p>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;