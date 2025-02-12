import React from "react";
import styles from "./AllProjects.module.css"; // Import CSS Module

const AllProjects = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: "Calculator App",
      description: "A calculator application developed using Java/Kotlin.",
      technologies: [ "Kotlin", "Android Studio"],
      github: "https://github.com/bhargav-vyas/calci.git",
      live: "#",
    },
    {
      id: 2,
      title: " Portfolio",
      description: "A modern portfolio website showcasing projects and skills.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/bhargav-vyas/-new-portfolio.git",
      live: "#",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description: "An interactive Tic Tac Toe game built with React.js.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/bhargav-vyas/Tic--Tac--Toe.git",
      live: "#",
    },
    {
      id: 4,
      title: "API Testing Core Java prictice",
      description: "A Java-based project for API testing and automation.",
      technologies: ["Java", "JUnit", "RestAssured"],
      github: "https://github.com/bhargav-vyas/API_Testing_Core_Java.git",
      live: "#",
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
