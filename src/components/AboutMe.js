import React from 'react';
import styles from './AboutMe.module.css'; // Import CSS Module

const AboutMe = () => {
  // Example data for work experience, education, and skills
  const workExperience = [
    {
      id: 1,
      company: 'Innovate in the project of the  Java and backend technologies',
      role: 'Software Engineer',
      duration: 'Jan 2023 - Present',
      description: `Developed scalable web applications using React, JavaScript, and integrated RESTful APIs with Spring Boot and Hibernate. 
              Optimized database performance and implemented authentication with JWT and OAuth. 
              Led junior developers, conducted code reviews, and followed best coding practices. 
              Worked with Git, CI/CD pipelines, Docker, and collaborated with designers for responsive web designs. 
              Integrated third-party APIs, developed Android apps using Kotlin, and implemented IoT solutions with Raspberry Pi for embedded systems.`
    },
    {
  id: 2,
  company: 'Innovate in the project of the React',
  role: 'Frontend Developer',
  duration: 'Jan 2023 - Present',
  description: `Developed responsive user interfaces using React and JavaScript, ensuring a seamless and 
  dynamic user experience across web and mobile platforms. Collaborated closely with design teams to implement pixel-perfect designs and enhance 
  user engagement. Integrated third-party APIs to extend functionality and optimized performance to meet both aesthetic and technical requirements. 
  Ensured smooth functionality across devices by implementing responsive design principles, and contributed to UI/UX improvements based on user feedback. 
  Actively participated in code reviews and followed best practices for front-end development to maintain high-quality, scalable code.`
}

  ];

  const education = [
    {
      id: 1,
      institution: 'Bharati Vidyapeeth University College of Engineering, Pune',
      degree: 'Bachelor of Technology in Electronics and Telecommunication Engineering (E&TC)',
      duration: '2023 - 2026',
    },
    {
      id: 2,
      institution: '(MSBTE)Maharashtra State Board of Technical Education',
      degree: 'Diploma in Electronics and Telecommunication Engineering (E&TC)',
      duration: '2020 - 2023',
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
        href="/Bhargav__Resume_new.pdf"
        download="Bhargav_Resume.pdf"
        className={styles.resumeButton}
      >
        Download Resume
      </a>

      {/* Work Experience Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Working with Technology and Experience</h3>
        <div className={styles.timeline}>
          {workExperience.map((work) => (
            <div key={work.id} className={styles.timelineItem}>
              <h4 className={`${styles.role} ${work.role === 'Software Engineer' ? styles.smallRole : ''}`}>
                {work.role}
              </h4>
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
