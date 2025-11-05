import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </div>
      <span className="toggle-label mobile-hidden">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;