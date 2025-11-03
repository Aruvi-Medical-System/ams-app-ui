import React, { useEffect, useRef } from 'react';
import { FaSearch, FaArrowDown } from 'react-icons/fa';
import { useParallax } from '../hooks/useParallax';

const AdvancedHero = ({ company, searchQuery, setSearchQuery }) => {
  const parallaxRef = useParallax(0.3);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Scroll indicator animation
    const indicator = scrollIndicatorRef.current;
    if (indicator) {
      const animateIndicator = () => {
        indicator.style.transform = 'translateY(0px)';
        setTimeout(() => {
          indicator.style.transform = 'translateY(10px)';
        }, 800);
      };
      
      const interval = setInterval(animateIndicator, 1600);
      return () => clearInterval(interval);
    }
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero morphing-bg">
      {/* Animated Background Particles */}
      <div className="particles" id="hero-particles"></div>
      
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="text-reveal">
                <h1 className="hero-title gradient-text typewriter">
                  Premium Medical Equipment for Healthcare Excellence
                </h1>
              </div>
              
              <div className="text-reveal" style={{ animationDelay: '0.5s' }}>
                <p className="hero-subtitle">
                  {company.tagline} Trusted by {company.stats.healthcarePartners} hospitals and clinics worldwide.
                </p>
              </div>

              <div className="hero-buttons stagger-children" data-delay="1000">
                <a href="#products" className="btn btn-primary magnetic-btn">
                  Browse Products
                </a>
                <a href="#contact" className="btn btn-secondary magnetic-btn">
                  Request Quote
                </a>
              </div>
            </div>

            <div className="hero-image" ref={parallaxRef}>
              <div className="medical-banner advanced-card floating">
                <div className="banner-content">
                  <h3>Advanced Healthcare Solutions</h3>
                  <p>Cutting-edge equipment for modern medical facilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search Section */}
          <div className="search-section fade-in" data-delay="1500">
            <div className="search-container">
              <div className="search-input-group glow">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for medical equipment, devices, and supplies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn magnetic-btn">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div 
            ref={scrollIndicatorRef}
            className="scroll-indicator"
            onClick={handleScrollDown}
          >
            <FaArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;