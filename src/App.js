import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { handleSmoothScroll } from './utils/smoothScroll';
import profilePic from './assests/pic.jpg';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="fixed-profile-wrapper">
            <div className="hero-profile">
              <div className="profile-image">
                <div className="image-placeholder" style={{ backgroundImage: `url(${profilePic})` }}></div>
              </div>
              <h1>Preetham K T</h1>
              <h2>Full Stack Developer</h2>
              <p>Bangalore, India</p>
              <div className="social-links">
                <a href="https://github.com/preethamkt46" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/preethamkt18" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/preetham-kt" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:preethamkt18@gmail.com" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <a href="#contact" className="cta-button" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                Let's Talk
              </a>
            </div>
          </div>
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
