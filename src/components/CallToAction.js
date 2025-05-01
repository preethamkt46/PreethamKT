import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CallToAction = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="collaborate" className="cta-section" ref={ref}>
      <div className={`cta-container ${isVisible ? 'animate-in' : ''}`}>
        <div className="cta-content">
          <h2>
            Let's <span className="text-accent">collaborate</span>
          </h2>
          <p>
            Unlock the potential of your product with expert design and development services. 
            Let's collaborate to create user-centered solutions that not only meet your goals 
            but also delight your users.
          </p>
          <a href="#contact" className="cta-button">
            Let's Talk <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 