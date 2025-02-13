import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header className="quicklenda-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://quicklenda1com.wordpress.com/wp-content/uploads/2025/02/screenshot-from-2025-02-09-15-41-11.png"
            alt="Quicklenda Logo"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#overview" onClick={() => setMenuOpen(false)}>Overview</a>
          <a href="#demo-booking" className="signup-btn" onClick={() => setMenuOpen(false)}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
