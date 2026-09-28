import React from 'react';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { BsCloudCheckFill } from 'react-icons/bs';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-brand">SHARANABASAVA</span>
            <p className="footer-tag">Final-Year CSE Student • Data & Cloud Engineer</p>
            <div className="footer-cloud-badge">
              <BsCloudCheckFill className="cloud-icon" />
              <span>AWS Cloud Resume Challenge Verified • 100% Serverless</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#education">Education</a>
            <a href="#architecture">Architecture</a>
            <a href="#contact">Contact</a>
          </div>

          <button 
            className="footer-top-btn" 
            onClick={scrollToTop}
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FiArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Sharanabasava. All rights reserved.</p>
          <p>Built with React, Vite, GSAP & AWS Serverless Infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}
