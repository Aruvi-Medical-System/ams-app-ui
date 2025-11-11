// src/components/EnhancedProductCategories.jsx
import React, { useState } from 'react';
import { productCategories, allProducts } from '../config/products';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './EnhancedProductCategories.css';

const EnhancedProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  useScrollAnimations();

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setFilteredProducts([]);
    } else {
      setSelectedCategory(categoryId);
      const products = allProducts.filter(product => product.category === categoryId);
      setFilteredProducts(products);
    }
  };

  const getCategoryProducts = (categoryId) => {
    return allProducts.filter(product => product.category === categoryId);
  };

  const handleImageClick = (product) => {
    if (product.image && !imageErrors[product.id]) {
      setSelectedImage(product.image);
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  const handleCategoryImageError = (categoryId, event) => {
    event.target.style.display = 'none';
    // The fallback icon will be shown via CSS
  };

  return (
    <section id="products" className="section light-bg enhanced-product-categories">
      <div className="container">
        <h2 className="section-title" data-animation="fadeInUp" data-delay="200">
          Our Medical Products
        </h2>
        <p className="section-subtitle" data-animation="fadeInUp" data-delay="300">
          Premium quality medical equipment trusted by healthcare professionals
        </p>

        {/* Categories Grid */}
        <div className="categories-grid-enhanced">
          {productCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={`category-card-enhanced ${selectedCategory === category.id ? 'active' : ''}`}
              data-animation="zoomIn" 
              data-delay={400 + (index * 100)}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                  onError={(e) => handleCategoryImageError(category.id, e)}
                />
                {/* Fallback icon - shown when image fails to load */}
                <div className="category-icon-fallback">
                  {category.icon}
                </div>
              </div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <div className="product-count">
                {getCategoryProducts(category.id).length} products
              </div>
              <div className="category-arrow">
                {selectedCategory === category.id ? '▲' : '▼'}
              </div>
            </div>
          ))}
        </div>

        {/* Products Display */}
        {selectedCategory && (
          <div className="category-products-section" data-animation="fadeInUp">
            <div className="category-products-header">
              <h3>{productCategories.find(cat => cat.id === selectedCategory)?.name} Products</h3>
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedCategory(null)}
              >
                Close
              </button>
            </div>
            
            <div className="category-products-grid">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="product-card-category">
                  <div 
                    className="product-image-category"
                    onClick={() => handleImageClick(product)}
                  >
                    {product.image && !imageErrors[product.id] ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                        onError={() => handleImageError(product.id)}
                      />
                    ) : (
                      <div className="product-image-fallback">
                        {product.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="product-content-category">
                    <h4 className="product-name-category">{product.name}</h4>
                    <p className="product-description-category">{product.description}</p>
                    
                    {product.brands && (
                      <div className="product-brands">
                        <strong>Brands:</strong> {product.brands.join(', ')}
                      </div>
                    )}
                    
                    <div className="product-features-category">
                      {product.features?.map((feature, i) => (
                        <span key={i} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    
                    <div className="product-footer-category">
                      <div className="product-price-category">{product.price}</div>
                      <button className="btn btn-primary">
                        Add to Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-modal-close" onClick={closeImageModal}>
                ×
              </button>
              <img src={selectedImage} alt="Product" className="image-modal-img" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedProductCategories;