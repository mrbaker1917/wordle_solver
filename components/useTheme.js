import { useState } from 'react';

function applyTheme(theme) {
  if (typeof window === 'undefined') return;
  if (theme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
  return savedTheme;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
}
