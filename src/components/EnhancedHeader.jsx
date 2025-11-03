// src/components/EnhancedHeader.jsx
import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './EnhancedHeader.css'; // Import the dedicated CSS

const EnhancedHeader = ({ company, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar - Enhanced like PVR Digital */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaPhone /> {company.contact.phone.primary}</span>
              <span><FaEnvelope /> {company.contact.email.primary}</span>
            </div>
            <div className="top-bar-actions">
                <ThemeToggle />
              <a href="#contact" className="btn-outline">Get Quote</a>
              <a href="#login" className="auth-link"><FaUser /> B2B Portal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation with Sticky Effect */}
      <nav className={`main-nav ${isScrolled ? 'sticky' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <h2>{company.name}</h2>
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            <div className="nav-actions">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search equipment..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <FaShoppingCart className="cart-icon" />
              <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default EnhancedHeader;