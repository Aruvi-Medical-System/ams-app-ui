import React, { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './LeadCaptureModal.css';

const LeadCaptureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: ''
  });

  useEffect(() => {
    console.log('Modal useEffect running...');
    
    // Check if modal was shown in current session
    const sessionShown = sessionStorage.getItem('modalShownInSession');
    console.log('Session shown:', sessionShown);
    
    if (!sessionShown) {
      console.log('Showing modal for first time in this session');
      const timer = setTimeout(() => {
        console.log('Setting modal to open');
        setIsOpen(true);
        // Small delay for animation
        setTimeout(() => setIsVisible(true), 100);
        // Mark as shown in this session
        sessionStorage.setItem('modalShownInSession', 'true');
      }, 1500); // Show after 1.5 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
    // Validate form data
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Lead captured:', formData);
    
    // Store in localStorage to prevent showing again
    localStorage.setItem('leadFormSubmitted', 'true');
    
    // Show success message
    alert(`Thank you ${formData.name}! We'll contact you within 24 hours.`);
    
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    console.log('Closing modal');
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      console.log('Modal is open, disabling scroll');
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Add event listener to prevent closing on overlay click
  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('lead-modal-overlay')) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Overlay click prevented');
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`lead-modal-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="lead-modal">
        <div className="lead-modal-header">
          <div className="modal-logo">
            <h2>Aruvi Medical Systems</h2>
            <p>Your Trusted Healthcare Partner</p>
          </div>
          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <div className="lead-modal-content">
          <div className="modal-welcome">
            <h3>Welcome to Aruvi Medical Systems! 🏥</h3>
            <p>Get personalized medical equipment recommendations and exclusive offers</p>
          </div>

          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <FaPhone />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="requirement"
                placeholder="Tell us about your medical equipment requirements (Optional)..."
                rows="3"
                value={formData.requirement}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FaPaperPlane /> Get Personalized Quote
            </button>
          </form>

          <div className="modal-benefits">
            <div className="benefit-item">
              <span>🎯</span>
              <span>Personalized Recommendations</span>
            </div>
            <div className="benefit-item">
              <span>💰</span>
              <span>Best Price Guarantee</span>
            </div>
            <div className="benefit-item">
              <span>🚚</span>
              <span>Free Installation Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;