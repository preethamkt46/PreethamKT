import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import aiChatAppImage from '../assests/AiChatApp-p.jpg'; 
import ebill from '../assests/ebill-p.jpg'; 
import smartclient from '../assests/smartclient.png'; 
// Import the renamed image file

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Projects data
  const projects = [
    {
      title: 'AI Chat App',
      description: 'Innovative chat application powered by AI',
      type: 'Java, Kotlin, API',
      image: aiChatAppImage, // Use the imported image
      link: 'https://github.com/preethamkt46/Ai-Chat-App'
    },
    {
      title: 'Smart Client Response',
      description: 'Automated client response system',
      type: 'Python, Google Sheets, API',
      image: smartclient, // Update with actual image path
      link: 'https://github.com/preethamkt46/Smart-client-response'
    },
    {
      title: 'Electricity Billing Management System',
      description: 'Complete billing solution for utilities',
      type: 'HTML, CSS, JS, PHP, Database',
      image: ebill, // Update with actual image path
      link: 'https://github.com/preethamkt46/Electricity-Bill-Management-System'
    },
    {
      title: 'Blog Diary',
      description: 'A Blog Web Application',
      type: 'React, Appwrite, TailwindCSS',
      image: '/images/projects/taskai.jpg',
      link: '#'
    }
  ];

  // Handle card click
  const handleCardClick = (link, e) => {
    // Prevent default only if the click was not on the visit button
    if (!e.target.closest('.visit-btn')) {
      e.preventDefault();
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          Latest <span className="text-accent">Projects</span>
        </h2>
      </div>
      
      <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            onClick={(e) => handleCardClick(project.link, e)}
          >
            <div className="project-image">
              {/* Project image placeholder - replace with actual images */}
              <div className="image-placeholder" style={{backgroundImage: `url(${project.image})`}}></div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <p className="project-type">{project.type}</p>
                <a 
                  href={project.link} 
                  className="visit-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Site</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 