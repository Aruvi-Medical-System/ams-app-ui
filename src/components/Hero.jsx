import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = ({ company, searchQuery, setSearchQuery }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Premium Medical Equipment for Healthcare Excellence
              </h1>
              <p className="hero-subtitle">
                {company.tagline} Trusted by {company.stats.healthcarePartners} hospitals and clinics worldwide.
              </p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">Browse Products</a>
                <a href="#contact" className="btn btn-secondary">Request Quote</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="medical-banner">
                <div className="banner-content">
                  <h3>Advanced Healthcare Solutions</h3>
                  <p>Cutting-edge equipment for modern medical facilities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-container">
              <div className="search-input-group">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for medical equipment, devices, and supplies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;