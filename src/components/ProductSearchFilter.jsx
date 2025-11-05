import React, { useState, useMemo } from 'react';
import { FaSearch, FaFilter, FaTimes, FaSlidersH } from 'react-icons/fa';
import { allProducts, productCategories } from '../config/products';
import './ProductSearchFilter.css';

const ProductSearchFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Products' },
    ...productCategories
  ], []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    applyFilters(e.target.value, selectedCategory, priceRange);
  };

  const applyFilters = (search, category, price) => {
    let filtered = allProducts;

    // Search filter
    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= price[0] && product.price <= price[1]
    );

    onFilterChange(filtered);
  };

  return (
    <div className="product-search-filter">
      <div className="search-filter-header">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search medical equipment, instruments, devices..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <button 
          className={`filter-toggle ${showFilters ? 'active' : ''}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaSlidersH /> Filters
        </button>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-section">
            <h4>Categories</h4>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    applyFilters(searchTerm, category.id, priceRange);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range-display">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </div>
            <div className="price-slider-container">
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => {
                  const newRange = [parseInt(e.target.value), priceRange[1]];
                  setPriceRange(newRange);
                  applyFilters(searchTerm, selectedCategory, newRange);
                }}
                className="price-slider"
              />
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => {
                  const newRange = [priceRange[0], parseInt(e.target.value)];
                  setPriceRange(newRange);
                  applyFilters(searchTerm, selectedCategory, newRange);
                }}
                className="price-slider"
              />
            </div>
          </div>

          <div className="filter-actions">
            <button 
              className="clear-filters"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 10000]);
                applyFilters('', 'all', [0, 10000]);
              }}
            >
              <FaTimes /> Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearchFilter;