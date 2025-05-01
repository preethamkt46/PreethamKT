import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Career from '../components/Career';
import Contact from '../components/Contact';
import { scrollToElement } from '../utils/smoothScroll';

const HomePage = () => {
  const location = useLocation();
  
  // Handle hash navigation
  useEffect(() => {
    // If URL has a hash, scroll to that section
    if (location.hash) {
      // Remove the '#' from the hash
      const id = location.hash.substring(1);
      
      // Small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Contact />
    </div>
  );
};

export default HomePage; 