import React from 'react';
import './Partners.css'; 
const Partners = ({ company }) => {
  return (
    <section id="partners" className="section light-bg">
      <div className="container">
        <h2 className="section-title">Our Partner Hospitals</h2>
        <p className="section-subtitle">
          Trusted by leading healthcare institutions worldwide
        </p>
        
        <div className="partners-grid">
          {company.partnerHospitals.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <h4>{partner.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;