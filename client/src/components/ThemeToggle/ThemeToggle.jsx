import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/themeSlice';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button className="theme-toggle" onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
