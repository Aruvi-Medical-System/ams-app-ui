import React, { useState, useEffect } from "react";
import { FaGoogle, FaPaperPlane, FaEye, FaEyeSlash } from "react-icons/fa";
import "./AuthModal.css";
import { createUser } from "../api/userApi";
import useAuthStore from "../store/authStore";
import { validatePassword, validateEmail } from "../utils/validation";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const { isAuthenticated, login, loading, error, clearError } = useAuthStore();
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    accountType: "individual",
    company_name: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  // Show modal only if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => setIsVisible(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      handleClose();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
    clearError();
    setValidationErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // Password validation
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    
    // Signup specific validations
    if (authMode === "signup") {
      // Password strength
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        errors.password = passwordValidation.errors[0];
      }
      
      // Confirm password
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      
      // Required fields
      if (!formData.fullname.trim()) {
        errors.fullname = "Full name is required";
      }
      
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
      }
      
      if (!formData.addressLine.trim()) {
        errors.addressLine = "Address is required";
      }
      
      if (!formData.city.trim()) {
        errors.city = "City is required";
      }
      
      if (!formData.state.trim()) {
        errors.state = "State is required";
      }
      
      if (!formData.pincode.trim() || formData.pincode.length < 6) {
        errors.pincode = "Valid pincode (6 digits) is required";
      }
      
      if (formData.accountType === "company" && !formData.company_name.trim()) {
        errors.company_name = "Company name is required";
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  clearError();
  
  if (!validateForm()) {
    return;
  }
  
  if (authMode === "signup") {
    // Handle signup
    const fullAddress = `${formData.addressLine}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
    
    const payload = {
      fullname: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      address: fullAddress,
      company_name: formData.accountType === "company" ? formData.company_name : "",
      role: "user",
      password: formData.password,
    };
    
    try {
      // Create user
      const createdUser = await createUser(payload);
      
      // Store the created user data with ID
      if (createdUser && createdUser.id) {
        useAuthStore.getState().setUser(createdUser);
        useAuthStore.getState().signupSuccess(createdUser);
        
        alert("Account created successfully!");
        handleClose();
        resetForm();
      } else {
        // Auto login after signup
        const result = await login(formData.email, formData.password);
        
        if (result.success) {
          alert("Account created and logged in successfully!");
          handleClose();
          resetForm();
        }
      }
    } catch (err) {
      console.error("Signup error:", err);
      const errorMsg = err.response?.data?.detail || 
                      (Array.isArray(err.response?.data?.detail) 
                        ? err.response.data.detail.map(d => d.msg || d).join(', ')
                        : "Signup failed. Please try again.");
      alert(errorMsg);
    }
  } else {
    // Handle login
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        alert("Login successful!");
        handleClose();
        resetForm();
      }
    } catch (err) {
      console.error("Login error:", err);
      // Error is already set in the store
    }
  }
};

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      accountType: "individual",
      company_name: "",
      addressLine: "",
      city: "",
      state: "",
      pincode: "",
      password: "",
      confirmPassword: "",
    });
    setValidationErrors({});
  };

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
    clearError();
    setValidationErrors({});
  };

  if (!isOpen || isAuthenticated) return null;

  return (
    <div className={`lead-modal-overlay ${isVisible ? "visible" : ""}`}>
      <div className="lead-modal">
        <div className="lead-modal-header">
          <div className="modal-logo">
            <h2>Aruvi Medical System</h2>
            <p>Your Trusted Healthcare Partner</p>
          </div>
          {/* <button className="close-modal-btn" onClick={handleClose}>×</button> */}
        </div>

        <div className="lead-modal-content">
          <div className="modal-welcome">
            <h3>{authMode === "login" ? "Welcome Back!" : "Create Your Account"}</h3>
            <p>{authMode === "login" ? "Login to access your dashboard" : "Join us and enjoy a personalized experience"}</p>
          </div>

          <button className="google-btn" onClick={() => alert("Google login coming soon")}>
            <FaGoogle /> Continue with Google
          </button>

          <div className="separator">
            <span>OR</span>
          </div>

          {/* Display error from store */}
          {error && (
            <div className="auth-error-message">
              <p>{error}</p>
            </div>
          )}

          <form className="lead-form" onSubmit={handleSubmit} noValidate>
            {authMode === "signup" && (
              <>
                <div className="form-group">
                  <select name="accountType" value={formData.accountType} onChange={handleChange}>
                    <option value="individual">Individual</option>
                    <option value="company">Company</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name *"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {validationErrors.fullname && <span className="error-text">{validationErrors.fullname}</span>}
                </div>

                {formData.accountType === "company" && (
                  <div className="form-group">
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Company Name *"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                    {validationErrors.company_name && <span className="error-text">{validationErrors.company_name}</span>}
                  </div>
                )}

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {validationErrors.phone && <span className="error-text">{validationErrors.phone}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="addressLine"
                    placeholder="Address Line *"
                    value={formData.addressLine}
                    onChange={handleChange}
                  />
                  {validationErrors.addressLine && <span className="error-text">{validationErrors.addressLine}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {validationErrors.city && <span className="error-text">{validationErrors.city}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {validationErrors.state && <span className="error-text">{validationErrors.state}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode *"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                  {validationErrors.pincode && <span className="error-text">{validationErrors.pincode}</span>}
                </div>
              </>
            )}

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />
              {validationErrors.email && <span className="error-text">{validationErrors.email}</span>}
            </div>

            <div className="form-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {validationErrors.password && <span className="error-text">{validationErrors.password}</span>}
              
              {authMode === "signup" && (
                <div className="password-hints">
                  <p>Password must contain:</p>
                  <ul>
                    <li className={formData.password.length >= 8 ? "valid" : ""}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(formData.password) ? "valid" : ""}>One uppercase letter</li>
                    <li className={/[a-z]/.test(formData.password) ? "valid" : ""}>One lowercase letter</li>
                    <li className={/\d/.test(formData.password) ? "valid" : ""}>One number</li>
                    <li className={/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? "valid" : ""}>One special character</li>
                  </ul>
                </div>
              )}
            </div>

            {authMode === "signup" && (
              <div className="form-group password-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {validationErrors.confirmPassword && <span className="error-text">{validationErrors.confirmPassword}</span>}
              </div>
            )}

            <button className="btn btn-primary submit-btn" type="submit" disabled={loading}>
              {loading ? (
                <span className="loading-spinner-small"></span>
              ) : (
                <>
                  <FaPaperPlane />
                  {authMode === "login" ? "Login" : "Create Account"}
                </>
              )}
            </button>
          </form>

          <div className="auth-switch">
            {authMode === "login" ? (
              <>
                Don't have an account?{" "}
                <span onClick={() => toggleAuthMode("signup")}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => toggleAuthMode("login")}>Login</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;