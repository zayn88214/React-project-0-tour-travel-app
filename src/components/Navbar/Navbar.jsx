import React, { useState } from 'react';
import { FaCompass, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


const navLinks = ['Home', 'Destinations', 'Packages', 'About', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <FaCompass className="navbar__logo-icon" />
          <span>WanderWorld</span>
        </a>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="btn btn-primary navbar__cta">Book Now</button>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
