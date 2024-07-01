import React, { useState } from 'react';
import './App.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <a href="/contact" className="header-Logo">
        RestMyPet
      </a>
      <div className="header-links">
        <a href="/contact">Contact Us</a>
        <a href="/join">Join As User</a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-links">
          <a href="/contact">Contact Us</a>
          <a href="/join">Join As User</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      )}
    </header>
  );
};

export default Header;
