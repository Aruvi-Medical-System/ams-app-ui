import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaPaperPlane, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const QuoteCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('medical_quote_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('medical_quote_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add product to quote (will be called from product cards)
  const addToQuote = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        ...product, 
        quantity: 1,
        addedAt: new Date().toISOString()
      }];
    });
    setIsOpen(true);
  };

  const removeFromQuote = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromQuote(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Cart Button */}
      <div className="quote-cart-btn" onClick={() => setIsOpen(true)}>
        <FaShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="quote-cart-sidebar">
          <div className="cart-header">
            <h3>Quote Request</h3>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="cart-content">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your quote request is empty</p>
                <p className="empty-cart-subtitle">Add products to get a quote</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image">
                        <div className="product-image-placeholder-small">
                          {item.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                        </div>
                      </div>
                      <div className="item-details">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-price">${item.price.toLocaleString()}</p>
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <FaMinus />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromQuote(item.id)}
                        title="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-summary">
                    <div className="total-line">
                      <span>Total:</span>
                      <span className="total-amount">${totalAmount.toLocaleString()}</span>
                    </div>
                    <button 
                      className="clear-cart-btn"
                      onClick={clearCart}
                    >
                      Clear All
                    </button>
                  </div>
                  <button 
                    className="btn btn-primary request-quote-btn"
                    onClick={() => setShowQuoteForm(true)}
                  >
                    <FaPaperPlane /> Request Quote
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Quote Request Form */}
      {showQuoteForm && (
        <QuoteRequestForm 
          cartItems={cartItems}
          totalAmount={totalAmount}
          onClose={() => {
            setShowQuoteForm(false);
            setIsOpen(false);
            setCartItems([]);
          }}
        />
      )}
    </>
  );
};

// Quote Request Form Component
const QuoteRequestForm = ({ cartItems, totalAmount, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create quote data
    const quoteData = {
      ...formData,
      items: cartItems,
      totalAmount,
      timestamp: new Date().toISOString(),
      quoteId: 'Q' + Date.now()
    };
    
    // In a real app, you would send this to your backend
    console.log('Quote Request Submitted:', quoteData);
    
    // Show success message
    alert(`Thank you ${formData.name}! Your quote request has been submitted. We will contact you within 24 hours.`);
    
    // Close the form and clear cart
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="quote-form-overlay">
      <div className="quote-form-modal">
        <div className="form-header">
          <h3>Request Quote</h3>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company / Hospital</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message">Additional Requirements</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements, delivery timeline, or questions..."
            />
          </div>
          
          <div className="quote-summary">
            <h4>Quote Summary</h4>
            <div className="quote-items">
              {cartItems.map(item => (
                <div key={item.id} className="quote-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">x {item.quantity}</span>
                  </div>
                  <span className="item-total">
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="quote-total">
              <strong>Total Amount: ${totalAmount.toLocaleString()}</strong>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Submit Quote Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteCart;