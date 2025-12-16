import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaPaperPlane,
} from "react-icons/fa";
import "./AuthModal.css";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // const shown = sessionStorage.getItem("authModalShown");
    // if (!shown) {
      const t = setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => setIsVisible(true), 50);
        // sessionStorage.setItem("authModalShown", "true");
      }, 1500);
      return () => clearTimeout(t);
    // }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }, 300);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authMode === "signup" && formData.password !== formData.confirmPassword)
      return alert("Passwords don’t match!");

    alert(
      authMode === "login"
        ? `Logged in as ${formData.email}`
        : `Signup successful! Welcome, ${formData.name}`
    );

    handleClose();
  };

  const handleGoogle = () => {
    alert("Google Login (dummy)");
  };

  if (!isOpen) return null;

  return (
    <div className={`lead-modal-overlay ${isVisible ? "visible" : ""}`}>
      <div className="lead-modal">

        {/* HEADER */}
        <div className="lead-modal-header">
          <div className="modal-logo">
            <h2>Aruvi Medical System</h2>
            <p>Your Trusted Healthcare Partner</p>
          </div>

          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <div className="lead-modal-content">

          {/* TITLE */}
          <div className="modal-welcome">
            <h3>{authMode === "login" ? "Welcome Back!" : "Create Your Account"}</h3>
            <p>
              {authMode === "login"
                ? "Login to access your dashboard & personalized features"
                : "Join us and enjoy a personalized healthcare experience"}
            </p>
          </div>

          {/* GOOGLE BUTTON */}
          <button className="google-btn" onClick={handleGoogle}>
            <FaGoogle /> Continue with Google
          </button>

          <div className="separator">
            <span>OR</span>
          </div>

          {/* FORM */}
          <form className="lead-form" onSubmit={handleSubmit}>
            {authMode === "signup" && (
              <div className="form-group">
                {/* <div className="input-icon"><FaUser /></div> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="form-group">
              {/* <div className="input-icon"><FaEnvelope /></div> */}
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              {/* <div className="input-icon"><FaLock /></div> */}
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {authMode === "signup" && (
              <div className="form-group">
                {/* <div className="input-icon"><FaLock /></div> */}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button className="btn btn-primary submit-btn" type="submit">
              <FaPaperPlane />
              {authMode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <div className="auth-switch">
            {authMode === "login" ? (
              <>
                Don't have an account?{" "}
                <span onClick={() => setAuthMode("signup")}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setAuthMode("login")}>Login</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;