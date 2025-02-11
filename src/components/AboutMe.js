import React from 'react';
import styles from './AboutMe.module.css'; // Import CSS Module

const AboutMe = () => {
  // Example data for work experience, education, and skills
  const workExperience = [
    {
      id: 1,
      company: 'Tech Corp',
      role: 'Software Engineer',
      duration: 'Jan 2022 - Present',
      description: 'Developed and maintained web applications using React and Node.js.',
    },
    {
      id: 2,
      company: 'Innovate Solutions',
      role: 'Frontend Developer',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Built responsive user interfaces and collaborated with design teams.',
    },
  ];

  const education = [
    {
      id: 1,
      institution: 'University of Tech',
      degree: 'Bachelor of Technology in Electronics and Telecommunication Engineering (E&TC)',
      duration: '2023 - 2026',
    //   averageMarks: '8.24 g',
    },
    {
      id: 2,
      institution: '(MSBTE)Maharashtra State Board of Technical Education',
      degree: 'Diploma in  Electronics and Telecommunication Engineering (E&TC)',
      duration: '2020 - 2023',
    //   averageMarks: '75%'
    },
  ];

  const skills = [
    'Java', 'Spring Boot', 'Hibernate', 'MVC', 'Servlet', 
    'React', 'JavaScript', 'CSS', 'HTML', 'Git', 
    'Android Studio', 'Kotlin', 'Raspberry Pi'
  ];

  return (
    <section id="about-me" className={styles.aboutMe}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.subtext}>My professional journey and skills.</p>

      {/* Resume Download Button */}
      <a
        href="/Bhargav__Resume_new.pdf" // Replace with the actual path to your resume file
        download="Bhargav_Resume.pdf"
        className={styles.resumeButton}
      >
        Download Resume
      </a>

      {/* Work Experience Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Work Experience</h3>
        <div className={styles.timeline}>
          {workExperience.map((work) => (
            <div key={work.id} className={styles.timelineItem}>
              <h4 className={styles.role}>{work.role}</h4>
              <p className={styles.company}>{work.company}</p>
              <p className={styles.duration}>{work.duration}</p>
              <p className={styles.description}>{work.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        <div className={styles.timeline}>
          {education.map((edu) => (
            <div key={edu.id} className={styles.timelineItem}>
              <h4 className={styles.degree}>{edu.degree}</h4>
              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.duration}>{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;