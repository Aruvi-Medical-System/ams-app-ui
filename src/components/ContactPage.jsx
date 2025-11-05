import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaHeadset, FaArrowLeft } from 'react-icons/fa';
import { companyConfig } from '../config/company';
import './ContactPage.css';

const ContactPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Back Button */}
      <div className="contact-back-btn">
        <button onClick={onBack} className="btn btn-secondary">
          <FaArrowLeft /> Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get In Touch With Us</h1>
            <p className="contact-hero-subtitle">
              Ready to enhance your healthcare facility? Our team is here to help you find the perfect medical equipment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the contact page content remains the same */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Information - Left Side */}
            <div className="contact-info-side">
              <div className="contact-info-card">
                <h2>Contact Information</h2>
                <p>Get in touch with our medical equipment experts for personalized solutions.</p>
                
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-info-content">
                      <h4>Phone Number</h4>
                      <p>{companyConfig.contact.phone.primary}</p>
                      <span>Mon to Fri 9am to 6pm</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-info-content">
                      <h4>Email Address</h4>
                      <p>{companyConfig.contact.email.primary}</p>
                      <span>Send us your query anytime!</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info-content">
                      <h4>Office Address</h4>
                      <p>{companyConfig.contact.address.headOffice}</p>
                      <span>Visit our office</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaClock />
                    </div>
                    <div className="contact-info-content">
                      <h4>Business Hours</h4>
                      <p>Weekdays: {companyConfig.businessHours.weekdays}</p>
                      <p>Saturday: {companyConfig.businessHours.saturday}</p>
                      <p>Sunday: {companyConfig.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support Card */}
              <div className="emergency-support-card">
                <div className="emergency-icon">
                  <FaHeadset />
                </div>
                <div className="emergency-content">
                  <h3>24/7 Technical Support</h3>
                  <p>Emergency equipment support available round the clock for healthcare facilities.</p>
                  <div className="emergency-contact">
                    <FaPhone />
                    <span>{companyConfig.contact.phone.primary}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="contact-form-side">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and our team will get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="contact-page-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company/Hospital</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your requirements in detail..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-container">
            <h2>Find Us Here</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008550347066!2d80.165787!3d13.0861704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52637711ecf90f%3A0x128a33ea8f7bab52!2sSDBC%20UDHAYAM!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aruvi Medical Systems Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;