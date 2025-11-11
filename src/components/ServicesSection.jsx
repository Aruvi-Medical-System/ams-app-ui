import React, { useState } from 'react';
import './ServicesSection.css';

// Import all product images
import otTable from '../assets/services/ot_table.jpg';
import otLight from '../assets/services/ot_light.jpg';
import ecgMachine from '../assets/services/ecg_machine.jpg';
import multiParaMonitor from '../assets/services/multi_para_monitor.jpg';
import labMicroscopes from '../assets/services/lab_microscopes.jpg';
import babyWarmer from '../assets/services/baby_warmer.jpg';
import boylesApparatus from '../assets/services/boyles_apparatus.jpg';
import oxygenPipeLine from '../assets/services/oxygen_pipe_line.jpg';
import autoClave from '../assets/services/auto_clave.jpg';
import foggerMachine from '../assets/services/fogger_machine.jpg';
import hospitalCurtain from '../assets/services/hospital_curtain.jpg';
import defibrillator from '../assets/services/defibrillator.jpg';
import diathermyMachine from '../assets/services/diathermy_machine.jpg';

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      category: "Operation Theater Equipment",
      items: [
        { name: "OT Table", image: otTable, description: "Advanced operation theater tables with precision controls" },
        { name: "OT Light", image: otLight, description: "Surgical lights with shadow reduction technology" }
      ]
    },
    {
      category: "Diagnostic Equipment", 
      items: [
        { name: "ECG Machine", image: ecgMachine, description: "Digital ECG machines for accurate cardiac monitoring" },
        { name: "Multi Para Monitor", image: multiParaMonitor, description: "Multi-parameter patient monitors for comprehensive vital tracking" },
        { name: "Lab Microscopes", image: labMicroscopes, description: "Professional laboratory microscopes for clinical diagnostics" }
      ]
    },
    {
      category: "Patient Care Equipment",
      items: [
        { name: "Baby Warmer", image: babyWarmer, description: "Radiant warmers for neonatal care" },
        { name: "Boyle's Apparatus", image: boylesApparatus, description: "Anesthesia machines for surgical procedures" },
        { name: "Oxygen Pipe Line", image: oxygenPipeLine, description: "Medical gas pipeline systems for hospital infrastructure" }
      ]
    },
    {
      category: "Sterilization & Maintenance",
      items: [
        { name: "Auto Clave", image: autoClave, description: "Sterilization autoclaves for medical equipment" },
        { name: "Fogger Machine", image: foggerMachine, description: "Disinfection fogging machines for infection control" },
        { name: "Hospital Curtain Screen Work", image: hospitalCurtain, description: "Hospital privacy curtains and screening solutions" }
      ]
    },
    {
      category: "Other Equipment",
      items: [
        { name: "Defibrillator", image: defibrillator, description: "Emergency defibrillators for cardiac resuscitation" },
        { name: "Diathermy Machine", image: diathermyMachine, description: "Electrosurgical units for precise tissue cutting" }
      ]
    }
  ];

  const handleImageClick = (item) => {
    setSelectedImage({
      src: item.image,
      alt: item.name,
      title: item.name,
      description: item.description
    });
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Add event listener for ESC key
  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <section id="services" className="section light-bg">
      <div className="container">
        <h2 className="section-title">Our Medical Equipment Services</h2>
        <p className="section-subtitle">
          Comprehensive range of medical equipment and healthcare solutions trusted by hospitals nationwide
        </p>
        
        <div className="services-categories">
          {services.map((category, index) => (
            <div key={index} className="service-category" data-animation="fadeInUp" data-delay={index * 100}>
              <h3 className="category-title">{category.category}</h3>
              <div className="service-items">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="service-item"
                    data-animation="zoomIn" 
                    data-delay={itemIndex * 50}
                  >
                    <div 
                      className="service-image-container"
                      onClick={() => handleImageClick(item)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="service-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="service-image-fallback">
                        <span className="service-icon">⚕️</span>
                      </div>
                      <div className="image-overlay">
                        <span className="view-icon">👁️</span>
                        <span className="view-text">View Image</span>
                      </div>
                    </div>
                    <div className="service-content">
                      <h4 className="service-name">{item.name}</h4>
                      <p className="service-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="services-extra" data-animation="fadeInUp" data-delay="500">
          <div className="services-features">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h4>Free Installation</h4>
              <p>Professional installation included with all equipment</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h4>Maintenance Support</h4>
              <p>Comprehensive maintenance and repair services</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h4>Staff Training</h4>
              <p>Complete training for hospital staff</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h4>Warranty</h4>
              <p>Extended warranty on all medical equipment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="image-modal-overlay" 
          onClick={handleOverlayClick}
        >
          <div className="image-modal">
            <div className="modal-header">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <button 
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <span className="close-icon">×</span>
              </button>
            </div>
            
            <div className="modal-content">
              <div className="image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="modal-image"
                />
              </div>
              
              <div className="image-details">
                <p className="image-description">{selectedImage.description}</p>
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    Request Quote
                  </button>
                  <button className="btn btn-secondary">
                    Product Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;