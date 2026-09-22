import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        SHARANABASAVA
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-pill active">HOME</a>
        <a href="#projects" className="nav-pill">PROJECTS</a>
        <a href="#skills" className="nav-pill">SKILLS</a>
        <a href="#certifications" className="nav-pill">CERTIFICATIONS</a>
        <a href="#education" className="nav-pill">EDUCATION</a>
        <a href="#contact" className="nav-pill">CONTACT</a>
      </div>
      <button className="navbar-btn">
        <FiArrowUpRight size={20} />
      </button>
    </nav>
  );
}
