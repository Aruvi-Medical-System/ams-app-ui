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
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Popular medical equipment and accessories
        </p>
        
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                <div className="product-badge">Featured</div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-brand">{product.description}</div>
                
                {product.brands && (
                  <div className="product-brands-small">
                    <strong>Brands:</strong> {product.brands.join(', ')}
                  </div>
                )}
                
                <div className="product-features">
                  {product.features?.slice(0, 2).map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="product-footer">
                  <div className="price-section">
                    <div className="product-price">₹{product.price}</div>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => onAddToQuote(product)}
                  >
                    Add to Quote
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