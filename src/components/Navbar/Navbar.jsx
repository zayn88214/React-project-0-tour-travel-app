import React, { useState, useEffect, useCallback } from 'react';
import { FaCompass, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home',         id: 'home' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Packages',     id: 'packages' },
  { label: 'About',        id: 'about' },
  { label: 'Contact',      id: 'contact' },
];

function Navbar({ onBookNow }) {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);   // navbar bg transition
  const [active,   setActive]   = useState('home');  // highlighted section
  const [progress, setProgress] = useState(0);       // scroll progress bar

  /* ── Scroll listener: navbar bg + progress bar ──────────────── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY   = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 40);
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver: active section highlight ─────────── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers  = [];

    // We track which sections are "visible" and pick the topmost one
    const visibleSet = new Set();

    const pickActive = () => {
      // Go through sections in document order and pick first visible
      for (const id of sectionIds) {
        if (visibleSet.has(id)) {
          setActive(id);
          return;
        }
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSet.add(id);
          } else {
            visibleSet.delete(id);
          }
          pickActive();
        },
        { threshold: 0.25 }  // section is "active" when 25 % visible
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = useCallback(
    (id) => {
      setIsOpen(false);
      setActive(id);
      // smooth-scroll manually so we can also close the mobile menu
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  const handleBookNow = useCallback(() => {
    setIsOpen(false);
    if (onBookNow) onBookNow();
  }, [onBookNow]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <div className="navbar__progress" style={{ width: `${progress}%` }} />

      <div className="container navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
        >
          <FaCompass className="navbar__logo-icon" />
          <span>WanderWorld</span>
        </a>

        {/* Desktop + mobile nav */}
        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(id); }}
            >
              {label}
              {active === id && <span className="navbar__link-dot" />}
            </a>
          ))}

          <button className="btn btn-primary navbar__cta" onClick={handleBookNow}>
            Book Now
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
