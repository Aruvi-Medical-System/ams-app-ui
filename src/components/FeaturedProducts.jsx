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

  // Function to handle image loading errors
  const handleImageError = (e, product) => {
    console.warn(`Image failed to load for ${product.name}:`, e.target.src);
    e.target.style.display = 'none';
    
    // Create fallback with product initials
    const fallback = document.createElement('div');
    fallback.className = 'product-image-fallback';
    fallback.textContent = getProductInitials(product.name);
    fallback.style.display = 'flex';
    fallback.style.alignItems = 'center';
    fallback.style.justifyContent = 'center';
    fallback.style.width = '100%';
    fallback.style.height = '100%';
    fallback.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    fallback.style.color = 'white';
    fallback.style.fontWeight = '700';
    fallback.style.fontSize = '1.5rem';
    fallback.style.textShadow = '0 2px 4px rgba(0,0,0,0.3)';
    
    e.target.parentNode.appendChild(fallback);
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
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-real-image"
                  onError={(e) => handleImageError(e, product)}
                />
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
                    onClick={() => handleAddToQuote(product)}
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