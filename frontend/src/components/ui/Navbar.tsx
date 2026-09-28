import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiMenu, FiX, FiCloud } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'certifications', 'education', 'architecture', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'architecture', label: 'ARCHITECTURE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar">
        <a href="#home" className="navbar-logo">
          <div className="logo-header-row">
            <span className="logo-text">SHARANABASAVA</span>
            <span className="logo-badge-live">
              AWS LIVE
            </span>
          </div>
          <span className="logo-badge">
            <span className="pulsing-dot"></span>
            FINAL-YEAR CSE • BITM '27
          </span>
        </a>

        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-pill ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="#contact" className="navbar-cta-btn">
            <span>GET IN TOUCH</span>
            <FiArrowUpRight className="cta-arrow" />
          </a>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
