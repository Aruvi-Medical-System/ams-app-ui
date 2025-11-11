// src/context/ThemeContext.jsx - SIMPLIFIED VERSION
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Force light mode always
  const isDarkMode = false;
  
  const toggleTheme = () => {
    // Do nothing - theme is always light
    console.log('Dark mode is disabled');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDarkMode: false, toggleTheme: () => {} };
  }
  return context;
};