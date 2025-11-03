import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './Contact.css';

const Contact = ({ company }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  useScrollAnimations();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section light-bg">
      <div className="container">
        <h2 
          className="section-title"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          Get In Touch
        </h2>
        <p 
          className="section-subtitle"
          data-animation="fadeInUp" 
          data-delay="300"
        >
          Ready to enhance your healthcare facility? Contact us today.
        </p>
        
        <div className="contact-content">
          {/* Contact Info */}
          <div 
            className="contact-info"
            data-animation="fadeInLeft" 
            data-delay="400"
          >
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>{company.contact.phone.primary}</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>{company.contact.email.primary}</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>{company.contact.address.headOffice}</p>
              </div>
            </div>
            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Weekdays: {company.businessHours.weekdays}</p>
              <p>Saturday: {company.businessHours.saturday}</p>
              <p>Sunday: {company.businessHours.sunday}</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            className="contact-form"
            onSubmit={handleSubmit}
            data-animation="fadeInRight" 
            data-delay="500"
          >
            <h3>Request a Quote</h3>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message or Equipment Requirements"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;