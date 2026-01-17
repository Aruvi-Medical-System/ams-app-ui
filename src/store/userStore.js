import { create } from 'zustand';
import { getUser, updateUser } from '../api/userApi';
import useAuthStore from './authStore';

const useUserStore = create((set, get) => ({
  // State
  currentUser: null,
  loading: false,
  error: null,
  
  // Actions
  fetchUser: async (userId) => {
    set({ loading: true, error: null });
    try {
      const user = await getUser(userId);
      set({ currentUser: user, loading: false });
      return user;
    } catch (error) {
      set({ 
        error: error.response?.data?.detail || 'Failed to fetch user',
        loading: false 
      });
      throw error;
    }
  },
  
  updateUserProfile: async (userId, userData) => {
    set({ loading: true, error: null });
    try {
      const updatedUser = await updateUser(userId, userData);
      set({ currentUser: updatedUser, loading: false });
      
      // Also update user in auth store if it's the same user
      const authStore = useAuthStore.getState();
      if (authStore.user?.id === userId) {
        authStore.updateUser(updatedUser);
      }
      
      return updatedUser;
    } catch (error) {
      set({ 
        error: error.response?.data?.detail || 'Failed to update user',
        loading: false 
      });
      throw error;
    }
  },
  
  clearUserData: () => {
    set({ currentUser: null, error: null });
  },
  setLoading: (loading) => set({ loading }),
  
  clearError: () => set({ error: null }),

}));

export default useUserStore;