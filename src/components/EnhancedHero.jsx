import React from 'react';
import { FaPlay, FaArrowDown, FaHeartbeat, FaStethoscope, FaHospital } from 'react-icons/fa';
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

  const features = [
    {
      icon: <FaStethoscope />,
      title: 'Surgical Instruments',
      description: 'Precision tools for modern surgery'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Diagnostic Equipment',
      description: 'Advanced imaging & monitoring'
    },
    {
      icon: <FaHospital />,
      title: 'Hospital Solutions',
      description: 'Complete healthcare packages'
    }
  ];

  return (
    <section className="hero enhanced-hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content enhanced-hero-content">
            {/* Left Text Content */}
            <div className="hero-text">
              <div 
                className="hero-badge" 
                data-animation="fadeInUp" 
                data-delay="100"
                style={{ marginTop: '40px' }}
              >
                <span>Trusted by {company.stats.healthcarePartners}+ Healthcare Facilities</span>
              </div>
              
              <h1 
                className="hero-title enhanced-title"
                data-animation="fadeInUp" 
                data-delay="200"
              >
                Advanced <span className="highlight">Medical Equipment </span> 
                 for Modern Healthcare
              </h1>
              
              <p 
                className="hero-subtitle enhanced-subtitle"
                data-animation="fadeInUp" 
                data-delay="300"
              >
                {company.tagline} Premium surgical instruments, diagnostic equipment, 
                and healthcare solutions trusted by medical professionals worldwide.
              </p>

              <div 
                className="hero-stats"
                data-animation="fadeInUp" 
                data-delay="400"
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
                data-delay="500"
              >
                <a href="#products" className="btn btn-primary">
                  Explore Products
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <FaPlay /> Watch Demo
                </a>
              </div>
            </div>

            {/* Right Visual Content - IMPROVED FOR MOBILE */}
            <div className="hero-visual">
              <div className="features-grid-mobile">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="feature-item-mobile"
                    data-animation="zoomIn" 
                    data-delay={600 + (index * 100)}
                  >
                    <div className="feature-icon-mobile">
                      {feature.icon}
                    </div>
                    <div className="feature-content-mobile">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;