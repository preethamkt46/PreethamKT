import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Timeline education data
  const timelineEvents = [
    {
      year: '2022 - 2024',
      title: 'Post Graduate Program in Full Stack Web Development',
      institution: 'Caltech CTME',
      description: 'Full stack web development program covering advanced JavaScript frameworks, databases, and cloud deployment techniques'
    },
    {
      year: '2020 - 2022',
      title: 'Masters in Computer Application',
      institution: 'Jawaharlal Nehru Technological University',
      description: 'Specialized in advanced programming concepts, software design patterns and development methodologies'
    },
    {
      year: '2017 - 2020',
      title: 'Bachelors in Computer Application',
      institution: 'Osmania University',
      description: 'Fundamental computer science education covering programming, data structures, algorithms and systems design'
    }
  ];

  return (
    <section id="timeline" className="timeline-section" ref={ref}>
      <h2 className={isVisible ? 'animate-in' : ''}>Educational Timeline</h2>
      <div className={`timeline-container ${isVisible ? 'animate-in' : ''}`}>
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className="timeline-item"
            style={{ animationDelay: `${0.1 + index * 0.2}s` }}
          >
            <div className="timeline-year">
              <h3>{event.year}</h3>
            </div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <h4>{event.institution}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline; 