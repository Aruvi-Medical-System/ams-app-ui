import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import './EnhancedHeader.css';
import ServicesDropdown from './ServicesDropdown';
import SearchSuggestions from './SearchSuggestions';

const EnhancedHeader = ({ company, searchQuery, setSearchQuery, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    if (section === 'home' || section === 'contact') {
      onNavigate(section);
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Navigation - No Top Bar */}
      <nav className={`main-nav ${isScrolled ? 'sticky' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              {company.logo.type === 'text' ? (
                <h2>{company.logo.text}</h2>
              ) : (
                <>
                  <img 
                    src={company.logo.image} 
                    alt={company.name}
                    className="header-logo"
                  />
                  <h2>Aruvi Medical System</h2>
                </>
              )}
            </div>
            
            {/* Desktop Navigation Links - No Search Here */}
            <div className="nav-links">
              <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
              <a href="#about" onClick={() => handleNavClick('about')}>About</a>
              <ServicesDropdown />
              <a href="#products" onClick={() => handleNavClick('products')}>Products</a>
              <a href="#certifications" onClick={() => handleNavClick('certifications')}>Certifications</a>
              <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
            </div>

            <div className="nav-actions">
              {/* Desktop Search - Only in nav actions */}
              <div className="search-box desktop-search">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search equipment..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchSuggestions 
                  searchQuery={searchQuery}
                  onSelect={(product) => {
                    setSearchQuery(product.name);
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
              
              <FaShoppingCart className="cart-icon" />
              
              {/* Mobile Search Toggle */}
              <button className="mobile-search-toggle" onClick={toggleMobileSearch}>
                <FaSearch />
              </button>
              
              {/* Mobile Menu Button */}
              <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Opens when search icon clicked */}
          {isMobileSearchOpen && (
            <div className="mobile-search-expanded">
              <div className="mobile-search-expanded-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search medical equipment, devices, and supplies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="close-search" onClick={toggleMobileSearch}>
                  <FaTimes />
                </button>
                <SearchSuggestions 
                  searchQuery={searchQuery}
                  onSelect={(product) => {
                    setSearchQuery(product.name);
                    setIsMobileSearchOpen(false);
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              {company.logo.type === 'text' ? (
                <h3>{company.logo.text}</h3>
              ) : (
                <>
                  <img 
                    src={company.logo.image} 
                    alt={company.name}
                    className="sidebar-logo-img"
                  />
                  <h3>Aruvi Medical System</h3>
                </>
              )}
            </div>
            <button className="sidebar-close" onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="sidebar-search">
            <div className="sidebar-search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchSuggestions 
                searchQuery={searchQuery}
                onSelect={(product) => {
                  setSearchQuery(product.name);
                  setIsMenuOpen(false);
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>
          </div>

          <nav className="sidebar-nav">
            <a href="#home" onClick={() => handleNavClick('home')} className="sidebar-nav-item">
              <span>🏠</span>
              <span>Home</span>
            </a>
            <a href="#about" onClick={() => handleNavClick('about')} className="sidebar-nav-item">
              <span>ℹ️</span>
              <span>About Us</span>
            </a>
            <a href="#services" onClick={() => handleNavClick('services')} className="sidebar-nav-item">
              <span>⚙️</span>
              <span>Services</span>
            </a>
            <a href="#products" onClick={() => handleNavClick('products')} className="sidebar-nav-item">
              <span>🛒</span>
              <span>Products</span>
            </a>
            <a href="#certifications" onClick={() => handleNavClick('certifications')} className="sidebar-nav-item">
              <span>🏆</span>
              <span>Certifications</span>
            </a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className="sidebar-nav-item">
              <span>📞</span>
              <span>Contact</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <div className="sidebar-contact">
              <p>📞 {company.contact.phone.primary}</p>
              <p>✉️ {company.contact.email.primary}</p>
            </div>
            <button className="btn btn-primary sidebar-quote-btn" onClick={() => {
              setIsMenuOpen(false);
              onNavigate('contact');
            }}>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;