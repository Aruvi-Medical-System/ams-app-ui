import api from "./api";

// Login - your FastAPI expects JSON with 'email' field
export const loginUser = async (credentials) => {
  console.log("Sending login request with:", credentials);
  
  const response = await api.post("/auth/login", {
    email: credentials.email,
    password: credentials.password
  });
  
  console.log("Login response:", response.data);
  return response.data;
};

// Get user by email to find user ID
export const getUserByEmail = async (email) => {
  try {
    // First, get all users
    const response = await api.get("/users/");
    const users = response.data;
    
    // Find user by email
    const user = users.find(u => u.email === email);
    console.log("Found user by email:", user);
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error);
    return null;
  }
};

// Get user by ID
export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};