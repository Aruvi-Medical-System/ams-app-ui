import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginUser, getUserByEmail } from '../api/authApi';
import api from '../api/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      
      // Actions
      login: async (email, password) => {
        set({ loading: true, error: null });
        
        try {
          console.log("Attempting login with:", { email, password });
          const response = await loginUser({ email, password });
          
          console.log("Login successful, response:", response);
          
          // Extract token
          const token = response.access_token || response.token;
          
          if (!token) {
            throw new Error("No token received from server");
          }
          
          // Set token in axios headers
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Try to find user by email to get user ID
          let userData = { email };
          
          try {
            const userFromApi = await getUserByEmail(email);
            if (userFromApi) {
              userData = {
                ...userFromApi,
                id: userFromApi.id || userFromApi.user_id,
                email: userFromApi.email || email
              };
            } else {
              // If can't find user, create minimal user data
              console.warn("Could not find user by email, creating minimal user data");
              userData = { 
                email: email,
                id: Date.now(), // Temporary ID
                fullname: email.split('@')[0] // Generate name from email
              };
            }
          } catch (userError) {
            console.warn("Could not fetch user data:", userError);
            userData = { 
              email: email,
              id: Date.now(),
              fullname: email.split('@')[0]
            };
          }
          
          set({
            user: userData,
            token: token,
            isAuthenticated: true,
            loading: false,
            error: null
          });
          
          return { success: true, data: response };
          
        } catch (error) {
          console.error("Login error details:", error);
          
          let errorMsg = 'Login failed. Please check your credentials.';
          
          if (error.response?.data?.detail) {
            const detail = error.response.data.detail;
            
            if (Array.isArray(detail)) {
              // FastAPI validation errors
              errorMsg = detail.map(err => {
                if (err.msg) return err.msg;
                if (typeof err === 'string') return err;
                return JSON.stringify(err);
              }).join(', ');
            } else if (typeof detail === 'string') {
              errorMsg = detail;
            } else if (detail.message) {
              errorMsg = detail.message;
            }
          } else if (error.message) {
            errorMsg = error.message;
          }
          
          set({
            error: errorMsg,
            loading: false
          });
          
          return { success: false, error: errorMsg };
        }
      },
      
      signupSuccess: (userData) => {
        // After signup, we should have user data including ID
        set({ 
          user: userData,
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        console.log("Logging out...");
        
        // Clear token from axios headers
        delete api.defaults.headers.common['Authorization'];
        
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null
        });
      },
      
      updateUser: (userData) => {
        set({ user: { ...get().user, ...userData } });
      },
      
      setUser: (userData) => {
        set({ user: userData });
      },
      
      setError: (error) => set({ error }),
      
      setLoading: (loading) => set({ loading }),
      
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default useAuthStore;