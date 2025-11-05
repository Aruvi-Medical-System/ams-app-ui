import React from 'react';
import { FaAward, FaGlobe, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './About.css';

const About = ({ company }) => {
  useScrollAnimations();
  
  const stats = [
    { icon: <FaAward />, number: company.stats.yearsExperience, label: 'Years Experience' },
    { icon: <FaGlobe />, number: company.stats.countriesServed, label: 'Countries Served' },
    { icon: <FaUsers />, number: company.stats.healthcarePartners, label: 'Healthcare Partners' },
    { icon: <FaShieldAlt />, number: '100%', label: 'Quality Certified' }
  ];

  // Updated features array with 2 new ones
  const updatedFeatures = [
    ...company.features,
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 
              className="section-title" 
              data-animation="fadeInUp" 
              data-delay="200"
            >
              About {company.name}
            </h2>
            <p 
              className="about-description"
              data-animation="fadeInUp" 
              data-delay="300"
            >
              Aruvi Medical System (AMS), founded in August 2022 by Mr. Elangovan, is dedicated to delivering advanced, reliable, and affordable medical equipment for Operation Theatres and ICUs. We combine innovation and quality to make world-class healthcare tools accessible to all. Our comprehensive product range includes OT instruments, patient monitors, defibrillators, diagnostic devices, and more. Backed by a skilled team, AMS ensures exceptional support and lasting partnerships built on trust and excellence.
            </p>
            <div 
              className="features-grid"
              data-animation="fadeInUp" 
              data-delay="400"
            >
              {updatedFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  data-animation="zoomIn" 
                  data-delay={500 + (index * 100)}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          className="stats-grid"
          data-animation="fadeInUp" 
          data-delay="700"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              data-animation="bounceIn" 
              data-delay={800 + (index * 100)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;