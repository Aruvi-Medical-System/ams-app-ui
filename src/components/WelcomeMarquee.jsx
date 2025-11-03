import React from 'react';
import './WelcomeMarquee.css';

const WelcomeMarquee = () => {
  const messages = [
    "🏥 Welcome to MedEquip Pro - Your Trusted Medical Equipment Partner",
    "⭐ Premium Quality Medical Equipment with 15+ Years Experience", 
    "🏆 Trusted by 500+ Hospitals & Healthcare Facilities Worldwide",
    "🔒 ISO Certified • FDA Approved • Quality Guaranteed",
    "🚚 Fast Delivery • Installation Support • 24/7 Customer Service"
  ];

  return (
    <div className="welcome-marquee">
      <div className="marquee-content">
        {messages.map((message, index) => (
          <span key={index} className="marquee-item">
            {message} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {messages.map((message, index) => (
          <span key={`dup-${index}`} className="marquee-item">
            {message} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMarquee;