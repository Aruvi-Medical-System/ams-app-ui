import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './VisionMission.css';

const VisionMission = ({ company }) => {
  useScrollAnimations();

  if (!company || !company.visionMission) {
    return (
      <section style={{ padding: '80px 20px', textAlign: 'center', background: '#f7fafc' }}>
        <div className="container">
          <h2>Our Vision & Mission</h2>
          <p>Vision and Mission section - Data loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="vision-mission" className="section light-bg">
      <div className="container">
        <div 
          className="vision-mission-header"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          <h2 className="section-title">Our Vision & Mission</h2>
          <p className="section-subtitle">
            Driving healthcare excellence through clear purpose and unwavering values
          </p>
        </div>

        <div className="vm-cards">
          {/* Vision Card */}
          <div 
            className="vm-card vision-card"
            data-animation="fadeInLeft" 
            data-delay="300"
          >
            <div className="vm-icon">🚀</div>
            <h3>{company.visionMission.vision.title}</h3>
            <p>{company.visionMission.vision.description}</p>
          </div>

          {/* Mission Card */}
          <div 
            className="vm-card mission-card"
            data-animation="fadeInRight" 
            data-delay="400"
          >
            <div className="vm-icon">🎯</div>
            <h3>{company.visionMission.mission.title}</h3>
            <p>{company.visionMission.mission.description}</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 
            className="values-title"
            data-animation="fadeInUp" 
            data-delay="500"
          >
            Our Core Values
          </h3>
          
          <div className="values-grid">
            {company.visionMission.values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                data-animation="zoomIn" 
                data-delay={600 + (index * 100)}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;