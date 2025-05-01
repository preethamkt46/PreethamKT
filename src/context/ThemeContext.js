import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Create provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create hook for using the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
}; 