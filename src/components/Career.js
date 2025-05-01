import React, { useEffect, useState, useRef } from 'react';

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Add intersection observer to trigger animation when in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Education data - replace with your actual education details
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      major: "Computer Science & Engineering",
      institution: "Visvesvaraya Technological University",
      duration: "2021 - 2025",
      grade: "CGPA: 8.9/10",
      skills: ["Data Structures", "JAVA", "OOP", "DBMS", "Computer Networks"]
    },
    // {
    //   degree: "TAP Academy",
    //   major: "Full-Stack Web Development",
    //   institution: "TAP Academy",
    //   duration: "2025",
    //   // grade: "Distinction: Top 5%",
    //   skills: ["FrontEnd", "BackEnd", "DataBase", "Java", "Python", "DSA"]
    // },
    {
      degree: "Intermediate",
      major: "PCMB",
      institution: "St. Michael's Pre-University College",
      duration: "2019 - 2021",
      grade: "Percentage: 89.3/100",
      skills: ["Physics",  "Chemistry", "Mathematics", "Biology"]
    },
    {
      degree: "High School",
      major: "",
      institution: "St. Michael's High School",
      duration: "2017 - 2029",
      grade: "Percentage: 86.72/100",
      skills: []
    }
    
  ];

  return (
    <section id="career" className="career-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          My Career <span className="text-accent">Journey</span>
        </h2>
      </div>
      
      <div className={`career-container ${isVisible ? 'animate-in' : ''}`}>
        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="education-card"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="card-content">
                <div className="card-header">
                  <h3>{edu.degree}</h3>
                  <div className="code-icon">{'</>'}</div>
                </div>
                <div className="card-details">
                  <p className="major">{edu.major}</p>
                  <h4>{edu.institution}</h4>
                  <p className="duration">{edu.duration}</p>
                  <p className="grade">{edu.grade}</p>
                  <div className="skills-container">
                    {edu.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career; 