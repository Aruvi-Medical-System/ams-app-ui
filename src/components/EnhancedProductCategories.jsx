// src/components/EnhancedProductCategories.jsx
import React, { useState } from 'react';
import { productCategories, allProducts } from '../config/products';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './EnhancedProductCategories.css';

const EnhancedProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  return (
    <section id="products" className="section light-bg">
      <div className="container">
        <h2 className="section-title" data-animation="fadeInUp" data-delay="200">
          Our Product Categories
        </h2>
        <p className="section-subtitle" data-animation="fadeInUp" data-delay="300">
          Comprehensive range of medical equipment and accessories
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
              <div className="category-icon">{category.icon}</div>
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
                  <div className="product-image-category">
                    {product.name.split(' ').map(word => word[0]).join('').toUpperCase()}
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
                      <div className="product-price-category">₹{product.price}</div>
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
      </div>
    </section>
  );
};

export default EnhancedProductCategories;