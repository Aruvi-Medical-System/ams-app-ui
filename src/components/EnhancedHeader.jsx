import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './EnhancedHeader.css';

const EnhancedHeader = ({ company, searchQuery, setSearchQuery, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaPhone /> {company.contact.phone.primary}</span>
              <span><FaEnvelope /> {company.contact.email.primary}</span>
            </div>
            <div className="top-bar-actions">
              <ThemeToggle />
              <button onClick={() => handleNavigation('contact')} className="btn-outline">
                Get Quote
              </button>
              <a href="#login" className="auth-link"><FaUser /> B2B Portal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${isScrolled ? 'sticky' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              {company.logo.type === 'text' ? (
                <h2>{company.logo.text}</h2>
              ) : (
                <img 
                  src={company.logo.image} 
                  alt={company.name}
                  className="header-logo"
                />
              )}
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <div className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
                <FaTimes />
              </div>
              
              <button onClick={() => handleNavigation('home')} className="nav-link-btn">Home</button>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
              <button onClick={() => handleNavigation('contact')} className="nav-link-btn">Contact</button>
              
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
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