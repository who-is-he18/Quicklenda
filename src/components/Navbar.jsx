// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <header className="quicklenda-navbar" data-aos="fade-down">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://quicklenda1com.wordpress.com/wp-content/uploads/2025/02/screenshot-from-2025-02-09-15-41-11.png"
            alt="Quicklenda Logo"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" data-aos="fade-left">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links" data-aos="fade-right">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#overview">Overview</a>
          <a href="#demo-booking" className="signup-btn">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
