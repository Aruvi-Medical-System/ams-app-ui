import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import { 
  FaUserCircle, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkedAlt, 
  FaCamera, 
  FaArrowLeft,
  FaBuilding,
  FaCalendarAlt,
  FaUser,
  FaSave,
  FaTimes
} from "react-icons/fa";
import useAuthStore from "../store/authStore";
import useUserStore from "../store/userStore";

const ProfilePage = ({ onBack }) => {
  const [editMode, setEditMode] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Get auth state
  const { user: authUser, logout, updateUser: updateAuthUser } = useAuthStore();
  // Get user store
  const { currentUser, fetchUser, updateUserProfile, loading, error, clearError } = useUserStore();
  
  const [tempUser, setTempUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    company_name: "",
    role: "user",
    created_at: ""
  });

  // Fetch user data when component mounts or authUser changes
  useEffect(() => {
    const loadUserData = async () => {
      if (authUser?.id) {
        try {
          console.log("Loading user data for ID:", authUser.id);
          await fetchUser(authUser.id);
        } catch (err) {
          console.error("Failed to fetch user:", err);
          // If fetch fails, use auth user data
          if (authUser) {
            setTempUser({
              fullname: authUser.fullname || authUser.name || "",
              email: authUser.email || "",
              phone: authUser.phone || "",
              address: authUser.address || "",
              company_name: authUser.company_name || "",
              role: authUser.role || "user",
              created_at: authUser.created_at || new Date().toISOString()
            });
          }
        }
      } else {
        console.warn("No user ID found in auth store");
      }
    };
    
    loadUserData();
  }, [authUser?.id, fetchUser]);

  // Update tempUser when currentUser changes
  useEffect(() => {
    if (currentUser) {
      console.log("Setting tempUser from currentUser:", currentUser);
      setTempUser({
        fullname: currentUser.fullname || currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
        company_name: currentUser.company_name || "",
        role: currentUser.role || "user",
        created_at: currentUser.created_at || new Date().toISOString()
      });
    } else if (authUser && !currentUser) {
      // Fallback to auth user data
      console.log("Using authUser data:", authUser);
      setTempUser({
        fullname: authUser.fullname || authUser.name || "",
        email: authUser.email || "",
        phone: authUser.phone || "",
        address: authUser.address || "",
        company_name: authUser.company_name || "",
        role: authUser.role || "user",
        created_at: authUser.created_at || new Date().toISOString()
      });
    }
  }, [currentUser, authUser]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // In a real app, you would upload to server
    const imageUrl = URL.createObjectURL(file);
    setTempUser(prev => ({ ...prev, profile_image: imageUrl }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser(prev => ({ ...prev, [name]: value }));
  };

  const saveChanges = async () => {
    if (!authUser?.id) {
      alert("User ID not found. Please login again.");
      return;
    }
    
    clearError(); // Clear any previous errors
    
    try {
      console.log("Saving changes for user:", authUser.id, tempUser);
      // Update user on server
      const updatedUser = await updateUserProfile(authUser.id, tempUser);
      
      // Update auth store with new user data
      updateAuthUser(updatedUser);
      
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(err?.response?.data?.detail || "Failed to update profile. Please try again.");
    }
  };

  const cancelChanges = () => {
    // Reset to current user data
    if (currentUser) {
      setTempUser({
        fullname: currentUser.fullname || currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
        company_name: currentUser.company_name || "",
        role: currentUser.role || "user",
        created_at: currentUser.created_at || new Date().toISOString()
      });
    } else if (authUser) {
      setTempUser({
        fullname: authUser.fullname || authUser.name || "",
        email: authUser.email || "",
        phone: authUser.phone || "",
        address: authUser.address || "",
        company_name: authUser.company_name || "",
        role: authUser.role || "user",
        created_at: authUser.created_at || new Date().toISOString()
      });
    }
    setEditMode(false);
  };

  const handleLogout = () => setShowLogoutConfirm(true);

  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
    onBack();
  };

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  if (!authUser) {
    return (
      <div className="profile-wrapper">
        <div className="profile-container">
          <button className="back-btn" onClick={handleBack}>
            <FaArrowLeft /> Back
          </button>
          <div className="no-user-message">
            <FaUserCircle size={50} />
            <h3>Please login to view profile</h3>
            <p>You need to be logged in to access this page</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`profile-wrapper ${isExiting ? "slide-out" : "slide-in"}`}>
      <div className="profile-container">
        {/* Back Button */}
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-img-wrapper">
            {tempUser.profile_image ? (
              <img 
                src={tempUser.profile_image} 
                className="profile-img" 
                alt={`${tempUser.fullname}'s profile`}
              />
            ) : (
              <FaUserCircle className="profile-icon" />
            )}

            {editMode && (
              <label className="upload-btn" title="Change photo">
                <FaCamera />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          <h2>{tempUser.fullname || tempUser.email || "User"}</h2>
          {/* <p className="user-role">{tempUser.role || "Customer"}</p> */}
          <p className="join-date">
            <FaCalendarAlt /> Member since {formatDate(tempUser.created_at)}
          </p>
        </div>

        {/* Display error if any */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {/* Profile Info */}
        <div className="profile-info">
          {/* Full Name */}
          <div className="info-item">
            <FaUser className="info-icon" />
            <div>
              <label>Full Name</label>
              {!editMode ? (
                <p>{tempUser.fullname || "Not set"}</p>
              ) : (
                <input 
                  type="text"
                  name="fullname"
                  value={tempUser.fullname}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="edit-input"
                />
              )}
            </div>
          </div>

          {/* Email (Read-only) */}
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <label>Email</label>
              <p className="email-text">{tempUser.email || "Not set"}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <label>Phone Number</label>
              {!editMode ? (
                <p>{tempUser.phone || "Not set"}</p>
              ) : (
                <input 
                  type="tel"
                  name="phone"
                  value={tempUser.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="edit-input"
                />
              )}
            </div>
          </div>

          {/* Company (if exists) */}
          {(tempUser.company_name || editMode) && (
            <div className="info-item">
              <FaBuilding className="info-icon" />
              <div>
                <label>Company</label>
                {!editMode ? (
                  <p>{tempUser.company_name || "Not set"}</p>
                ) : (
                  <input 
                    type="text"
                    name="company_name"
                    value={tempUser.company_name || ""}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="edit-input"
                  />
                )}
              </div>
            </div>
          )}

          {/* Address */}
          <div className="info-item">
            <FaMapMarkedAlt className="info-icon" />
            <div>
              <label>Address</label>
              {!editMode ? (
                <p className="address-text">{tempUser.address || "Not set"}</p>
              ) : (
                <textarea 
                  name="address"
                  value={tempUser.address || ""}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="edit-textarea"
                  rows="3"
                />
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          {!editMode ? (
            <>
              <button 
                className="btn edit-btn" 
                onClick={() => setEditMode(true)}
                disabled={loading}
              >
                <FaUser /> Edit Profile
              </button>
              <button 
                className="btn logout-btn" 
                onClick={handleLogout}
                disabled={loading}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn save-btn" 
                onClick={saveChanges}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-spinner-small"></span>
                ) : (
                  <>
                    <FaSave /> Save Changes
                  </>
                )}
              </button>
              <button 
                className="btn cancel-btn" 
                onClick={cancelChanges}
                disabled={loading}
              >
                <FaTimes /> Cancel
              </button>
            </>
          )}
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="logout-confirm-overlay">
            <div className="logout-confirm-box">
              <h4>Confirm Logout</h4>
              <p>Are you sure you want to logout?</p>
              <div className="logout-confirm-buttons">
                <button 
                  className="btn confirm-logout-btn" 
                  onClick={confirmLogout}
                >
                  Yes, Logout
                </button>
                <button 
                  className="btn cancel-btn" 
                  onClick={() => setShowLogoutConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;