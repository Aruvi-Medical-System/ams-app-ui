import React from 'react';
import './Solutions.css';
const Solutions = () => {
  const solutions = [
    {
      icon: '🔪',
      title: 'Surgical Solutions',
      description: 'Complete range of laparoscopic and surgical instruments for modern operating theaters',
      features: ['Laparoscopic Instruments', 'Surgical Sets', 'Sterilization Ready', 'Precision Engineered']
    },
    {
      icon: '🏥',
      title: 'Hospital Equipment',
      description: 'Full hospital setup and equipment packages for healthcare facilities',
      features: ['ICU Equipment', 'Operation Theater', 'Patient Monitoring', 'Emergency Care']
    },
    {
      icon: '🩺',
      title: 'Diagnostic Equipment',
      description: 'Advanced diagnostic and imaging solutions for accurate medical assessments',
      features: ['Digital Imaging', 'Portable Options', 'Laboratory Equipment', 'Training Included']
    }
  ];

  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <h2 className="section-title">Complete Healthcare Solutions</h2>
        <p className="section-subtitle">
          End-to-end medical equipment solutions for hospitals, clinics, and healthcare facilities worldwide
        </p>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="solution-features">
                {solution.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
              <a href="#contact" className="solution-link">Learn More →</a>
            </div>
          ))}
        </div>

        {/* Process Steps like PVR Digital */}
        <div className="process-section">
          <h3 className="process-title">Our Simple Process</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>Understand your requirements and needs</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Solution Design</h4>
              <p>Customized equipment recommendations</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Delivery & Setup</h4>
              <p>Installation and staff training</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Support</h4>
              <p>Ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;