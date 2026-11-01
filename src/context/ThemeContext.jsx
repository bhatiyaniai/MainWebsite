import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored with safe try/catch
    try {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        setDarkMode(JSON.parse(savedTheme) === true);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    } catch {
      // Fallback in case of restricted sandbox or corrupt localStorage
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to root document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage safely
    try {
      localStorage.setItem('darkMode', JSON.stringify(Boolean(darkMode)));
    } catch {
      // Ignore if localStorage is blocked by privacy mode or sandboxed iframe
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
