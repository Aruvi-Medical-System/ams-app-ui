import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './ReviewsCarousel.css';

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useScrollAnimations();

  const reviews = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      position: 'Chief Medical Officer',
      hospital: 'Metropolitan General Hospital',
      content: 'Their equipment reliability and after-sales support have been exceptional. A trusted partner for our hospital.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Robert Kim',
      position: 'Procurement Manager',
      hospital: 'Unity Healthcare System',
      content: 'Competitive pricing and timely delivery. The quality of medical equipment exceeds our expectations.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      position: 'Head of ICU',
      hospital: 'City Medical Center',
      content: 'The technical support team is always available and responsive. Great service experience.',
      rating: 4,
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      position: 'Surgical Director',
      hospital: 'Regional Medical Center',
      content: 'Excellent range of laparoscopic instruments. The quality is consistently high across all products.',
      rating: 5,
      image: '👨‍⚕️'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="section light-bg">
      <div className="container">
        <h2 
          className="section-title"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          Client Testimonials
        </h2>
        <p 
          className="section-subtitle"
          data-animation="fadeInUp" 
          data-delay="300"
        >
          What healthcare professionals say about our services
        </p>

        <div 
          className="reviews-carousel"
          data-animation="fadeInUp" 
          data-delay="400"
        >
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="carousel-slide">
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-content">"{review.content}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {review.image}
                    </div>
                    <div className="author-info">
                      <h4>{review.name}</h4>
                      <p>{review.position}</p>
                      <p className="hospital">{review.hospital}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < review.rating ? 'star filled' : 'star'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;