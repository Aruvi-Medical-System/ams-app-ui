import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { companyConfig } from '../config/company';
import './WhatsAppButton.css';
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Multiple phone number cleaning methods
    // let phoneNumber = companyConfig.contact.whatsapp;
    let phoneNumber = '+917550087406'; // Replace with actual number for testing
    
    // Method 1: Remove all non-digit characters
    // phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Method 2: If number starts with +, keep it, otherwise add country code
    // if (!phoneNumber.startsWith('+')) {
    //   // Assuming US number, adjust country code as needed
    //   phoneNumber = '1' + phoneNumber; // US country code
    // }
    
    // Method 3: For testing, you can use a known working number
    // phoneNumber = '15551234567'; // Test number
    
    const message = encodeURIComponent(
      `Hello Aruvi Medical Systems! 👋\n\nI visited your website and I'm interested in your medical equipment. Could you please provide me with more information?`
    );
    
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    console.log('WhatsApp URL:', url); // For debugging
    
    // Try multiple methods to open
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: direct link
      window.location.href = url;
    }
  };

  return (
    <div 
      className="whatsapp-float" 
      onClick={handleWhatsAppClick}
      style={{ cursor: 'pointer' }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppButton;