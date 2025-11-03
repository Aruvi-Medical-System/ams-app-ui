import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { featuredProducts } from '../config/products';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './FeaturedProducts.css';

const FeaturedProducts = ({ onAddToQuote }) => {
  useScrollAnimations();

  const handleAddToQuote = (product) => {
    if (onAddToQuote) {
      onAddToQuote(product);
    } else {
      alert(`Added ${product.name} to quote request!`);
    }
  };

  const getProductInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section className="section light-bg">
      <div className="container">
        <h2 
          className="section-title"
          data-animation="fadeInUp" 
          data-delay="200"
        >
          Featured Products
        </h2>
        <p 
          className="section-subtitle"
          data-animation="fadeInUp" 
          data-delay="300"
        >
          Top-quality medical equipment trusted by healthcare professionals
        </p>
        
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              data-animation="fadeInUp" 
              data-delay={400 + (index * 100)}
            >
              <div className="product-image">
                {getProductInitials(product.name)}
                <div className="product-badge">Featured</div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                {product.variants && (
                  <div className="product-variants">
                    <small>Variants: {product.variants.join(', ')}</small>
                  </div>
                )}
                <div className="product-brand">{product.description}</div>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating || 4.5) ? 'star filled' : 'star'} 
                    />
                  ))}
                  <span>({product.rating || 4.5})</span>
                </div>
                <div className="product-features">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="product-footer">
                  <div className="price-section">
                    <div className="product-price">${product.price}</div>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleAddToQuote(product)}
                  >
                    <FaShoppingCart /> Add to Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;