import React from 'react';
import { FiArrowRight, FiLinkedin, FiGithub, FiMail, FiCode } from 'react-icons/fi';
import { BsBarChartFill, BsCloudFill, BsDatabaseFill, BsCpuFill } from 'react-icons/bs';
import './Hero.css';
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Authentic 3D Central Backdrop */}
      <div className="hero-backdrop">
        <img src="/hero_exact_wide.jpg" alt="Data Cloud 3D Scene" className="hero-bg-art" />
      </div>
      
      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-left">
          <p className="hero-tagline">FINAL-YEAR CSE STUDENT</p>
          <h1 className="hero-headline">
            TURNING<br/>
            DATA INTO<br/>
            REAL-WORLD<br/>
            IMPACT
          </h1>
          <p className="hero-description">
            Focused on Data and Cloud technologies,
            with hands-on experience building data
            pipelines, analytics solutions, and
            cloud infrastructure.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><FiGithub /></a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="social-icon" title="LeetCode"><FiCode /></a>
            <a href="mailto:sharananetekal18@gmail.com" className="social-icon" title="Email"><FiMail /></a>
          </div>
        </div>

        {/* Center Spacer to showcase the 3D art */}
        <div className="hero-center-spacer"></div>

        {/* Right Column */}
        <div className="hero-right">
          <h3 className="hero-cursive">
            Same<br/>Curiosity<br/>Bigger<br/>Possibilities
          </h3>
          
          <div className="hero-skills">
            <div className="skill-pill">
              <div className="skill-icon"><BsBarChartFill /></div>
              <span>Data Engineering</span>
            </div>
            <div className="skill-pill">
              <div className="skill-icon"><BsCloudFill /></div>
              <span>Cloud Platforms</span>
            </div>
            <div className="skill-pill">
              <div className="skill-icon"><BsDatabaseFill /></div>
              <span>Analytics & BI</span>
            </div>
            <div className="skill-pill">
              <div className="skill-icon"><BsCpuFill /></div>
              <span>AI / LLM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <div className="footer-line"></div>
        <div className="footer-text">BUILD &nbsp;&nbsp;&nbsp; ANALYZE &nbsp;&nbsp;&nbsp; SOLVE &nbsp;&nbsp;&nbsp; REPEAT</div>
        <div className="footer-line"></div>
      </div>
    </section>
  );
}
