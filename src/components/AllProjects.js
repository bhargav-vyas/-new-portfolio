import React from "react";
import styles from "./AllProjects.module.css"; // Import CSS Module

const AllProjects = () => {
  // Project data including new projects
  const projects = [
    {
      id: 1,
      title: "Blogging Application",
      description: "A full-stack blogging platform with authentication.",
      technologies: ["Spring Boot", "React", "MySQL"],
      github: "https://github.com/bhargav-vyas/Bloging-application.git",
      // live: "#",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "A modern portfolio website showcasing projects and skills.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/bhargav-vyas/-new-portfolio.git",
      // live: "#",
    },
    {
      id: 3,
      title: "Kabaddi Project",
      description: "A management system for Kabaddi tournaments.",
      technologies: ["Java", "Spring Boot", "MongoDB"],
      github: "https://github.com/bhargav-vyas/Kabbadi_project.git",
      // live: "#",
    },
    {
      id: 4,
      title: "IPL REST API",
      description: "A REST API for managing IPL cricket data.",
      technologies: ["Spring Boot", "Java", "PostgreSQL"],
      github: "https://github.com/bhargav-vyas/IPL-rest-api.git",
      // live: "#",
    },
    {
      id: 5,
      title: "Tic Tac Toe Game",
      description: "An interactive Tic Tac Toe game built with React.js.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/bhargav-vyas/Tic--Tac--Toe.git",
      // live: "#",
    },
    {
      id: 6,
      title: "File System Upload",
      description: "A project for handling file uploads efficiently.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/bhargav-vyas/File_System_Upload.git",
      // live: "#",
    },
    {
      id: 7,
      title: "Calculator App",
      description: "A calculator application developed using Java/Kotlin.",
      technologies: ["Kotlin", "Android Studio"],
      github: "https://github.com/bhargav-vyas/calci.git",
      // live: "#",
    },
    {
      id: 8,
      title: "API Testing Core Java Practice",
      description: "A Java-based project for API testing and automation.",
      technologies: ["Java", "JUnit", "RestAssured"],
      github: "https://github.com/bhargav-vyas/API_Testing_Core_Java.git",
      // live: "#",
    },
    {
      id: 9,
      title: "Hibernate Setup",
      description: "A project to demonstrate Hibernate ORM setup and usage.",
      technologies: ["Java", "Hibernate", "MySQL"],
      github: "https://github.com/bhargav-vyas/hibernate-setup.git",
      // live: "#",
    },
    {
      id: 10,
      title: "Servlet Practice",
      description: "A project to practice Java Servlets for web development.",
      technologies: ["Java", "Servlet", "Tomcat"],
      github: "https://github.com/bhargav-vyas/servlet-prictice.git",
      // live: "#",
    },
    {
      id: 11,
      title: "E-Learning Hub",
      description: "An e-learning platform for online courses and content.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/bhargav-vyas/E-Learning-Hub.git",
      // live: "#",
    }
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
              {/* <button
                className={styles.githubButton}
                onClick={() => window.open(project.github, '_blank')}
              >
                View GitHub
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;


// live: "#",