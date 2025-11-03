// src/components/ProductComparison.jsx
import React, { useState } from 'react';
import { FaTimes, FaChartBar, FaBalanceScale } from 'react-icons/fa';

const ProductComparison = () => {
  const [comparisonItems, setComparisonItems] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const addToComparison = (product) => {
    if (comparisonItems.length >= 4) {
      alert('Maximum 4 products can be compared at once');
      return;
    }
    
    if (!comparisonItems.find(item => item.id === product.id)) {
      setComparisonItems(prev => [...prev, product]);
    }
  };

  const removeFromComparison = (productId) => {
    setComparisonItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  return (
    <>
      {/* Comparison Button */}
      <div 
        className="comparison-btn"
        onClick={() => setShowComparison(true)}
      >
        <FaBalanceScale />
        {comparisonItems.length > 0 && (
          <span className="comparison-badge">{comparisonItems.length}</span>
        )}
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <div className="comparison-modal">
          <div className="comparison-header">
            <h3>
              <FaChartBar /> Product Comparison
            </h3>
            <div className="comparison-actions">
              <button onClick={clearComparison} className="btn btn-secondary">
                Clear All
              </button>
              <button onClick={() => setShowComparison(false)}>
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="comparison-content">
            {comparisonItems.length === 0 ? (
              <p className="empty-comparison">
                Add products to compare their features and specifications
              </p>
            ) : (
              <div className="comparison-table">
                <div className="comparison-row header">
                  <div className="comparison-cell">Feature</div>
                  {comparisonItems.map(item => (
                    <div key={item.id} className="comparison-cell product-header">
                      <button 
                        className="remove-comparison"
                        onClick={() => removeFromComparison(item.id)}
                      >
                        <FaTimes />
                      </button>
                      <h4>{item.name}</h4>
                      <p className="price">${item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Price Comparison */}
                <div className="comparison-row">
                  <div className="comparison-cell">Price</div>
                  {comparisonItems.map(item => (
                    <div key={item.id} className="comparison-cell">
                      ${item.price.toLocaleString()}
                    </div>
                  ))}
                </div>

                {/* Category */}
                <div className="comparison-row">
                  <div className="comparison-cell">Category</div>
                  {comparisonItems.map(item => (
                    <div key={item.id} className="comparison-cell">
                      {item.category}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="comparison-row">
                  <div className="comparison-cell">Key Features</div>
                  {comparisonItems.map(item => (
                    <div key={item.id} className="comparison-cell">
                      <ul>
                        {item.features?.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="comparison-row">
                  <div className="comparison-cell">Specifications</div>
                  {comparisonItems.map(item => (
                    <div key={item.id} className="comparison-cell">
                      {item.specifications && Object.entries(item.specifications).map(([key, value]) => (
                        <div key={key} className="spec">
                          <strong>{key}:</strong> {value}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Add to Product Card component
const ProductCard = ({ product, onAddToQuote, onAddToComparison }) => {
  return (
    <div className="product-card card">
      {/* ... existing product card content ... */}
      
      <div className="product-actions">
        <button 
          className="btn btn-primary"
          onClick={() => onAddToQuote(product)}
        >
          Add to Quote
        </button>
        <button 
          className="btn btn-secondary comparison-btn"
          onClick={() => onAddToComparison(product)}
        >
          <FaBalanceScale /> Compare
        </button>
      </div>
    </div>
  );
};

export default ProductComparison;