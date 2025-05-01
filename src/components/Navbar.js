import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  // Handle scroll to update active section and navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Add scrolled class to App element for profile shrink effect
      const appElement = document.querySelector('.App');
      if (appElement) {
        if (isScrolled) {
          appElement.classList.add('scrolled');
        } else {
          appElement.classList.remove('scrolled');
        }
      }
      
      const sections = ['home', 'about', 'skills', 'projects', 'career', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Set active section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      setActiveSection(section);
    }
  }, [location.hash]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body class for menu state
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };
  
  // Handler for navigation links
  const handleNavClick = (e, section) => {
    closeMenu();
    handleSmoothScroll(e, section);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`top-nav ${menuOpen ? 'menu-open' : ''}`}>
          <div className="nav-menu">
            <Link 
              to="/#home" 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
              title="Home"
            >
              <i className="fas fa-home"></i>
            </Link>
            
            <Link 
              to="/#about" 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
              title="About"
            >
              <i className="fas fa-user"></i>
            </Link>
            
            <Link 
              to="/#skills" 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'skills')}
              title="Skills"
            >
              <i className="fas fa-code"></i>
            </Link>
            
            <Link 
              to="/#projects" 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'projects')}
              title="Projects"
            >
              <i className="fas fa-briefcase"></i>
            </Link>
            
            <Link 
              to="/#career" 
              className={`nav-item ${activeSection === 'career' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'career')}
              title="Career"
            >
              <i className="fas fa-graduation-cap"></i>
            </Link>
            
            <Link 
              to="/#contact" 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
              title="Contact"
            >
              <i className="fas fa-envelope"></i>
            </Link>
          </div>
        </nav>
      </div>
      
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-container">
          <Link 
            to="/#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          
          <Link 
            to="/#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </Link>
          
          <Link 
            to="/#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            <i className="fas fa-code"></i>
            <span>Skills</span>
          </Link>
          
          <Link 
            to="/#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            <i className="fas fa-briefcase"></i>
            <span>Projects</span>
          </Link>
          
          <Link 
            to="/#career" 
            className={activeSection === 'career' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'career')}
          >
            <i className="fas fa-graduation-cap"></i>
            <span>Career</span>
          </Link>
          
          <Link 
            to="/#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </Link>
        </div>
      </div>
      
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
};

export default Navbar; 