import React from 'react';
import { FaPlay, FaArrowDown, FaSearch } from 'react-icons/fa';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './EnhancedHero.css';

const EnhancedHero = ({ company, searchQuery, setSearchQuery }) => {
  useScrollAnimations();

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero enhanced-hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content enhanced-hero-content">
            {/* Left Text Content */}
            <div className="hero-text">
              <div 
                className="hero-badge" 
                data-animation="bounceIn" 
                data-delay="200"
              >
                <span>Trusted by {company.stats.healthcarePartners}+ Healthcare Facilities</span>
              </div>
              
              <h1 
                className="hero-title enhanced-title"
                data-animation="fadeInUp" 
                data-delay="400"
              >
                Advanced <span className="highlight">Medical Equipment</span> 
                for Modern Healthcare
              </h1>
              
              <p 
                className="hero-subtitle enhanced-subtitle"
                data-animation="fadeInUp" 
                data-delay="600"
              >
                {company.tagline} Premium surgical instruments, diagnostic equipment, 
                and healthcare solutions trusted by medical professionals worldwide.
              </p>

              <div 
                className="hero-stats"
                data-animation="fadeInUp" 
                data-delay="800"
              >
                <div className="stat">
                  <span className="number">{company.stats.yearsExperience}</span>
                  <span className="label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="number">{company.stats.countriesServed}</span>
                  <span className="label">Countries Served</span>
                </div>
                <div className="stat">
                  <span className="number">{company.stats.healthcarePartners}</span>
                  <span className="label">Healthcare Partners</span>
                </div>
              </div>

              <div 
                className="hero-buttons enhanced-buttons"
                data-animation="fadeInUp" 
                data-delay="1000"
              >
                <a href="#products" className="btn btn-primary">
                  Explore Products
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <FaPlay /> Watch Demo
                </a>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="hero-visual">
              <div className="floating-elements">
                <div 
                  className="floating-card card-1"
                  data-animation="zoomIn" 
                  data-delay="1200"
                >
                  <div className="card-icon">🔪</div>
                  <h4>Surgical Instruments</h4>
                  <p>Precision tools for modern surgery</p>
                </div>
                <div 
                  className="floating-card card-2"
                  data-animation="zoomIn" 
                  data-delay="1400"
                >
                  <div className="card-icon">📊</div>
                  <h4>Diagnostic Equipment</h4>
                  <p>Advanced imaging & monitoring</p>
                </div>
                <div 
                  className="floating-card card-3"
                  data-animation="zoomIn" 
                  data-delay="1600"
                >
                  <div className="card-icon">🏥</div>
                  <h4>Hospital Solutions</h4>
                  <p>Complete healthcare packages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div 
            className="search-section enhanced-search"
            data-animation="fadeInUp" 
            data-delay="1800"
          >
            <div className="search-container">
              <div className="search-input-group enhanced-search-group">
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

          {/* Scroll Indicator */}
          <div 
            className="scroll-indicator enhanced-scroll"
            onClick={handleScrollDown}
            data-animation="fadeInUp" 
            data-delay="2000"
          >
            <FaArrowDown />
            <span>Scroll to Explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;