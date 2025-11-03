import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Medical Officer',
      hospital: 'Metropolitan General Hospital',
      content: 'Their equipment reliability and after-sales support have been exceptional. A trusted partner for our hospital.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      position: 'Procurement Manager',
      hospital: 'Unity Healthcare System',
      content: 'Competitive pricing and timely delivery. The quality of medical equipment exceeds our expectations.',
      rating: 5
    },
    {
      name: 'Dr. Maria Rodriguez',
      position: 'Head of ICU',
      hospital: 'City Medical Center',
      content: 'The technical support team is always available and responsive. Great service experience.',
      rating: 4
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What healthcare professionals say about our services
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <p className="hospital">{testimonial.hospital}</p>
                </div>
              </div>
              <div className="rating">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;