import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Tools = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const tools = [
    {
      name: 'SiteFlow',
      description: 'Website Builder',
      icon: 'fas fa-globe'
    },
    {
      name: 'Pixelo',
      description: 'Design Tool',
      icon: 'fas fa-pencil-ruler'
    },
    {
      name: 'JuiceBox',
      description: 'Payment Provider',
      icon: 'fas fa-credit-card'
    },
    {
      name: 'TalkAI',
      description: 'AI Assistant',
      icon: 'fas fa-robot'
    },
    {
      name: 'NoteSpace',
      description: 'Productivity Tool',
      icon: 'fas fa-sticky-note'
    },
    {
      name: 'WebCraft',
      description: 'React Framework',
      icon: 'fab fa-react'
    }
  ];

  return (
    <section id="tools" className="tools-section" ref={ref}>
      <div className="section-header">
        <h2 className={isVisible ? 'animate-in' : ''}>
          Top-Tier Tools for <span className="text-accent">Exceptional Results</span>
        </h2>
      </div>
      
      <div className={`tools-grid ${isVisible ? 'animate-in' : ''}`}>
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="tool-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="tool-icon">
              <i className={tool.icon}></i>
            </div>
            <div className="tool-info">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools; 