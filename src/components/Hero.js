import React from 'react';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-headline">
            <span className="greeting">Hi, I am</span>
            <h1 className="name">Preetham K T</h1>
            <h2>Full Stack Developer <span className="text-accent">crafting exceptional digital experiences</span> with modern technologies</h2>
          </div>
          
          <div className="hero-stats">
            {/* <div className="stat-item">
              <h3>4+</h3>
              <p>YEARS OF<br />EXPERIENCE</p>
            </div> */}
            <div className="stat-item">
              <h3>3+</h3>
              <p>PROJECTS<br />COMPLETED</p>
            </div>
          </div>
          
          <div className="cta-buttons">
            <a href="#contact" className="cta-button" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Let's Talk <i className="fas fa-comments"></i>
            </a>
            <a href="#projects" className="outline-button" onClick={(e) => handleSmoothScroll(e, 'projects')}>
              My Work <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 