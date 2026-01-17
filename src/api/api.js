import axios from "axios";

const api = axios.create({
  baseURL: "https://ams-chbcfyh6f6c9dedv.centralindia-01.azurewebsites.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper function to clear auth data
export const clearAuthData = () => {
  delete api.defaults.headers.common['Authorization'];
};

// Load token from localStorage on init
let authData = null;
try {
  const stored = localStorage.getItem('auth-storage');
  if (stored) {
    authData = JSON.parse(stored);
  }
} catch (e) {
  console.error("Error parsing auth storage:", e);
}

if (authData?.state?.token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${authData.state.token}`;
}

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    // Get fresh token from localStorage
    let token = null;
    try {
      const stored = localStorage.getItem('auth-storage');
      if (stored) {
        const authData = JSON.parse(stored);
        token = authData?.state?.token;
      }
    } catch (e) {
      console.error("Error parsing auth storage:", e);
    }
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      console.log("Unauthorized, clearing auth data");
      
      // Clear auth storage
      localStorage.removeItem('auth-storage');
      clearAuthData();
      
      // Optionally redirect to login
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }
    
    // Handle 422 validation errors
    if (error.response?.status === 422) {
      console.error("Validation error:", error.response.data);
    }
    
    return Promise.reject(error);
  }
);

export default api;
// export { clearAuthData };