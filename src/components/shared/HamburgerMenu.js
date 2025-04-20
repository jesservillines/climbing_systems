import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HamburgerMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.hamburger-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <div className="hamburger-menu-container">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="nav-link"
                >
                  {item.icon && (
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="nav-icon" 
                      width={24} 
                      height={24} 
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
