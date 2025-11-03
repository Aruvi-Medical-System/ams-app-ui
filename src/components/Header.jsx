import React from 'react';
import { FaPhone, FaEnvelope, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = ({ company, searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaPhone /> {company.contact.phone.primary}</span>
              <span><FaEnvelope /> {company.contact.email.primary}</span>
            </div>
            <div className="auth-links">
              <a href="#login"><FaUser /> B2B Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              {company.logo.type === 'text' ? (
                <h2>{company.logo.text}</h2>
              ) : (
                <img src={company.logo.image} alt={company.name} style={{ height: '40px' }} />
              )}
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-actions">
              <FaShoppingCart className="cart-icon" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;