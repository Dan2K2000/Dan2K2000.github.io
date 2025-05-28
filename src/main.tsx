import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = () => {
    const menuOpen = !document.getElementById('mobile-menu')?.classList.contains('hidden');
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };
  
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[aria-label="Menu"]') || target.closest('[aria-label="Close menu"]')) {
      setTimeout(toggleMenu, 100);
    }
    
    if (target.closest('a[href^="#"]')) {
      document.getElementById('mobile-menu')?.classList.add('hidden');
      document.body.classList.remove('menu-open');
    }
  });
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
)