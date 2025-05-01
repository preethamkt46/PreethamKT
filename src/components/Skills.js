import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Frontend skills
  const frontendSkills = [
    { name: 'React.js', percentage: 75 },
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage:90},
    { name: 'JavaScript', percentage: 75 },
    // { name: 'Next.js', percentage: 90 },
    // { name: 'TailwindCSS', percentage: 92 }
  ];
  
  // Backend skills
  const backendSkills = [
    { name: 'Node.js', percentage: 0 },
    { name: 'Express', percentage: 0 },
    { name: 'MongoDB', percentage: 5 },
    { name: 'SQL', percentage: 0 }
  ];
  
  // Programming languages
  const languages = [
    // { name: 'JavaScript', percentage: 95 },
    // { name: 'TypeScript', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'Java', percentage: 80 },
    { name: 'Kotlin', percentage: 5 }
  ];
  
  // Frameworks & Tools
  const frameworks = [
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Redux', percentage: 50 },
    // { name: 'Material UI', percentage: 90 },
    { name: 'Git/GitHub', percentage: 70 },
    // { name: 'AWS', percentage: 80 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>My Skills</h2>
      </div>
      
      <div className="skills-content">
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-laptop-code"></i> Frontend
            </h3>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-server"></i> Backend
            </h3>
            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-code"></i> Programming Languages
            </h3>
            <div className="skill-list">
              {languages.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-layer-group"></i> Frameworks & Tools
            </h3>
            <div className="skill-list">
              {frameworks.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 