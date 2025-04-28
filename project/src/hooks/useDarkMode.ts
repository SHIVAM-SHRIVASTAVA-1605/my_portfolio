import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Check for user preference (system preference or previously stored)
  const getInitialMode = (): boolean => {
    if (typeof window !== 'undefined') {
      // Check for stored preference
      const savedMode = localStorage.getItem('dark-mode');
      if (savedMode) {
        return savedMode === 'true';
      }
      
      // Check for system preference
      const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark;
    }
    return false;
  };

  const [darkMode, setDarkMode] = useState<boolean>(getInitialMode);

  // Update the HTML element class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('dark-mode', String(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};