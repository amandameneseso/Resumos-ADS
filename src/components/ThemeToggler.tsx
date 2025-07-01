// src/components/ThemeToggler.tsx
import React from 'react';

interface ThemeTogglerProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, toggleTheme }) => {
  const style: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    cursor: 'pointer',
    fontSize: '24px',
    background: '#3d6575',
    color: 'var(--azul-medio)',
    border: '1px solid var(--azul-claro)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  return (
    <button onClick={toggleTheme} style={style} aria-label="Trocar tema">
      {theme === 'light' ? '🌑' : '🌕'}
    </button>
  );
};

export default ThemeToggler;