import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
const Footer = ({ company }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{company.name}</h3>
            <p>
              {company.tagline} Your trusted partner in medical equipment supply, 
              delivering excellence in healthcare solutions worldwide.
            </p>
            <div className="social-links">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={company.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#diagnostic">Diagnostic Equipment</a></li>
              <li><a href="#surgical">Surgical Instruments</a></li>
              <li><a href="#monitoring">Patient Monitoring</a></li>
              <li><a href="#icu">ICU Equipment</a></li>
              <li><a href="#lab">Laboratory Equipment</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 {company.contact.phone.primary}</p>
              <p>✉️ {company.contact.email.primary}</p>
              <p>📍 {company.contact.address.headOffice}</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;