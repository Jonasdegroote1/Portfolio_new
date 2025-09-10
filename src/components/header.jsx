'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/components/header.css';
import { DarkModeToggle } from './DarkModeToggle';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Over mij', href: '#about' },
  { name: 'Projecten', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (href) => {
    setMenuOpen(false); // sluit mobiel menu bij navigatie
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Logo click handler
  const handleLogoClick = () => {
    if (pathname === '/') {
      // Als je al op home bent → scroll smooth naar boven
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Als je op een andere pagina bent → ga naar /
      window.location.href = '/';
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <button className="logo" onClick={handleLogoClick}>
          Jonas<span className="dot">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {pathname === '/' &&
            navItems.map((item) => (
              <button
                key={item.name}
                className="nav-button"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile nav */}
        <div className="nav-mobile">
          {pathname === '/' && (
            <>
              <button className="mobile-button" onClick={toggleMenu}>
                <svg
                  className="mobile-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {menuOpen && (
                <div className="mobile-menu">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      className="nav-button"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </button>
                  ))}
                  <DarkModeToggle />
                </div>
              )}
            </>
          )}

          {/* Toon darkmode knop altijd, ook buiten home */}
          {pathname !== '/' && <DarkModeToggle />}
        </div>
      </div>
    </header>
  );
}
