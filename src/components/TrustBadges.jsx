import React from 'react';
import { FaShieldAlt, FaAward, FaShippingFast, FaHeadset } from 'react-icons/fa';
import './TrustBadges.css';

const TrustBadges = () => {
  const badges = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Certified',
      description: 'ISO 13485:2016 Certified'
    },
    {
      icon: <FaAward />,
      title: 'Award Winning',
      description: 'Best Medical Supplier 2023'
    },
    {
      icon: <FaShippingFast />,
      title: 'Fast Delivery',
      description: 'Pan India Shipping'
    },
    {
      icon: <FaHeadset />,
      title: '24/7/365 Support',
      description: 'Expert Technical Support'
    }
  ];

  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge" data-animation="fadeInUp" data-delay={index * 100}>
              <div className="trust-icon">{badge.icon}</div>
              <h4>{badge.title}</h4>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;