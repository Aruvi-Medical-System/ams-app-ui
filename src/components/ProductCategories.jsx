import React from 'react';
import { productCategories } from '../config/products';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './ProductCategories.css';

const ProductCategories = () => {
  useScrollAnimations();

  return (
    <section id="categories" className="section">
      <div className="container">
        <h2 
          className="section-title"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          Product Categories
        </h2>
        <p 
          className="section-subtitle"
          data-animation="fadeInUp" 
          data-delay="300"
        >
          Comprehensive range of medical equipment for all healthcare needs
        </p>
        
        <div className="categories-grid">
          {productCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-card"
              data-animation="zoomIn" 
              data-delay={400 + (index * 100)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <a href={`#${category.id}`} className="category-link">Explore Products →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;