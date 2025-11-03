import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './LocationMap.css';

const LocationMap = () => {
  useScrollAnimations();
  
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008550347066!2d80.165787!3d13.0861704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52637711ecf90f%3A0x128a33ea8f7bab52!2sSDBC%20UDHAYAM!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin";

  return (
    <section id="location" className="section">
      <div className="container">
        <div className="section-header">
          <h2 
            className="section-title"
            data-animation="fadeInUp" 
            data-delay="200"
          >
            Visit Our Location
          </h2>
          <p 
            className="section-subtitle"
            data-animation="fadeInUp" 
            data-delay="300"
          >
            Find us easily in Chennai - We're here to serve you
          </p>
        </div>

        <div 
          className="map-container-full"
          data-animation="zoomIn" 
          data-delay="400"
        >
          <div className="map-wrapper-full">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aruvi Medical Systems Location"
              className="location-map-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;