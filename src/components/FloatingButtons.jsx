import React, { useState } from 'react';
import { FaComment, FaQuoteRight, FaTimes } from 'react-icons/fa';
import './FloatingButtons.css';
const FloatingButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="floating-buttons">
      {/* Request Quote Button */}
      <a href="#contact" className="floating-btn quote-btn">
        <FaQuoteRight />
        <span>Request Quote</span>
      </a>
      
      {/* Live Chat Button */}
      <div className="chat-widget">
        <button 
          className="floating-btn chat-btn"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <FaComment />
        </button>
        
        {chatOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <h4>Live Chat Support</h4>
              <button onClick={() => setChatOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="chat-messages">
              <div className="message agent">
                <p>Hello! How can we help you today?</p>
              </div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;