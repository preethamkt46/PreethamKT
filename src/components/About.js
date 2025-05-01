import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      
      <div className="about-content">
        <p className="about-description">
          A <span className="text-accent">Software Developer</span> who creates seamless, scalable, and visually stunning web and mobile applications. 
          With expertise in <span className="highlight">React.js</span>, <span className="highlight">Vanila js</span>, <span className="highlight">Python</span> and a lot
          more, I blend functionality with aesthetics to deliver impactful solutions. Known for my creative
          problem-solving, I bridge the gap between frontend and backend with precision, ensuring every detail 
          contributes to an exceptional user experience.
        </p>
        
        <div className="about-boxes">
          <div className="about-box skills-box">
            <div className="box-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Skills</h3>
            <p>Building responsive UIs with React, Vanila js, and CSS.</p>
          </div>
          
          <div className="about-box hobbies-box">
            <div className="box-icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <h3>Hobbies</h3>
            <p>Dominating in Tekken or scoring goals in FIFA. ⚽🎮</p>
          </div>
          
          <div className="about-box goal-box">
            <div className="box-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Goal</h3>
            <p>Let's team up and create something amazing together. 🚀</p>
          </div>
        </div>
        
        <p className="about-quote">
          I'm not really <span className="text-batman">Batman</span>, but I might be the <span className="text-accent">hero</span> your project needs!
        </p>
      </div>
    </section>
  );
};

export default About; 