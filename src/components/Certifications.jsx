import React from 'react';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './Certifications.css';

const Certifications = ({ company }) => {
  useScrollAnimations();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 
          className="section-title"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          Certifications & Quality
        </h2>
        <p 
          className="section-subtitle"
          data-animation="fadeInUp" 
          data-delay="300"
        >
          Committed to the highest standards of quality and safety
        </p>
        
        <div className="certifications-grid">
          {company.certifications.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card"
              data-animation="zoomIn" 
              data-delay={400 + (index * 100)}
            >
              <FaCertificate className="cert-icon" />
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="quality-standards"
          data-animation="fadeInUp" 
          data-delay="700"
        >
          <h3>Our Quality Promise</h3>
          <div className="standards-list">
            <div className="standard-item">
              <FaCheckCircle className="check-icon" />
              <span>Rigorous Quality Control</span>
            </div>
            <div className="standard-item">
              <FaCheckCircle className="check-icon" />
              <span>Regular Equipment Calibration</span>
            </div>
            <div className="standard-item">
              <FaCheckCircle className="check-icon" />
              <span>Comprehensive Documentation</span>
            </div>
            <div className="standard-item">
              <FaCheckCircle className="check-icon" />
              <span>Continuous Staff Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;