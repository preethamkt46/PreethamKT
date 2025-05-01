import React from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="mobile-menu-btn" onClick={toggleMenu}>
      <div className={`burger ${isOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MobileMenu; 