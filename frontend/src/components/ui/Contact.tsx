import React, { useState } from 'react';
import { 
  FiMail, 
  FiLinkedin, 
  FiGithub, 
  FiCode, 
  FiCopy, 
  FiCheck, 
  FiArrowUpRight, 
  FiSend,
  FiMapPin
} from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'sharananetekal18@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card-master glass-panel">
          <div className="contact-header-block">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="contact-main-heading">
              READY TO BUILD SOMETHING<br />IMPACTFUL TOGETHER?
            </h2>
            <p className="contact-sub-text">
              I am actively seeking Data Engineering, Cloud Platforms, and Analytics opportunities. Whether you have an open role, an exciting project, or just want to discuss lakehouse architecture, my inbox is open!
            </p>
          </div>

          {/* Interactive Email Bar */}
          <div className="email-action-bar">
            <div className="email-display">
              <FiMail className="mail-icon" />
              <span className="email-string">{email}</span>
            </div>
            <div className="email-buttons">
              <button 
                className="email-btn-copy" 
                onClick={copyToClipboard}
                title="Copy email to clipboard"
              >
                {copied ? <FiCheck className="copied-icon" /> : <FiCopy />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
              <a 
                href={`mailto:${email}`} 
                className="email-btn-send"
              >
                <span>Send Email</span>
                <FiSend />
              </a>
            </div>
          </div>

          {/* Social & Status Strip */}
          <div className="contact-status-strip">
            <div className="status-location-pill">
              <FiMapPin className="pin-icon" />
              <span>Ballari, Karnataka, India • Open to Relocation & Remote</span>
            </div>

            <div className="contact-social-pills">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
                <FiArrowUpRight className="mini-arrow" />
              </a>
              <a 
                href="https://github.com/SharanaBasava18" 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill"
              >
                <FiGithub />
                <span>GitHub</span>
                <FiArrowUpRight className="mini-arrow" />
              </a>
              <a 
                href="https://leetcode.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-pill"
              >
                <FiCode />
                <span>LeetCode</span>
                <FiArrowUpRight className="mini-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
