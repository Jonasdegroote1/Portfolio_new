// src/components/DarkModeToggle.js
'use client';

import { useEffect, useState } from 'react';
import '../styles/components/darkmode-toggle.css';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // check localStorage of system preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button className="darkmode-toggle" onClick={toggleDarkMode}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
