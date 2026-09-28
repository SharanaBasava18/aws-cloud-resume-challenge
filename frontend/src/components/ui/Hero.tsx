import React, { useState } from 'react';
import { FiArrowRight, FiLinkedin, FiGithub, FiMail, FiCode, FiCopy, FiCheck } from 'react-icons/fi';
import { 
  BsBarChartFill, 
  BsCloudFill, 
  BsDatabaseFill, 
  BsCpuFill, 
  BsLayersFill, 
  BsCodeSquare,
  BsMortarboardFill,
  BsCloudCheckFill,
  BsBriefcaseFill,
  BsDatabaseCheck,
  BsAwardFill
} from 'react-icons/bs';
import './Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'profile' | 'lakehouse' | 'cloud'>('profile');
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="home" className="hero-section">
      {/* 3D Central Backdrop Scene with hdimage.jpeg */}
      <div className="hero-backdrop" aria-hidden="true">
        <img
          src="/hdimage.jpeg"
          alt="Sharanabasava 3D Character with Data Cloud Scene"
          className="hero-bg-art"
          loading="eager"
          decoding="async"
        />
        
        {/* Ambient floating tech badges */}
        <div className="hero-floating-badge badge-aws">
          <div className="badge-glow"></div>
          <BsCloudFill className="badge-icon icon-aws" />
          <div className="badge-text">
            <span className="badge-title">AWS</span>
            <span className="badge-sub">Cloud & Serverless</span>
          </div>
        </div>

        <div className="hero-floating-badge badge-databricks">
          <div className="badge-glow"></div>
          <BsLayersFill className="badge-icon icon-databricks" />
          <div className="badge-text">
            <span className="badge-title">Databricks</span>
            <span className="badge-sub">Lakehouse & Delta</span>
          </div>
        </div>

        <div className="hero-floating-badge badge-python">
          <div className="badge-glow"></div>
          <BsCodeSquare className="badge-icon icon-python" />
          <div className="badge-text">
            <span className="badge-title">Python</span>
            <span className="badge-sub">PySpark & Analytics</span>
          </div>
        </div>

        <div className="hero-floating-badge badge-sql">
          <div className="badge-glow"></div>
          <BsDatabaseFill className="badge-icon icon-sql" />
          <div className="badge-text">
            <span className="badge-title">SQL</span>
            <span className="badge-sub">Queries & Modeling</span>
          </div>
        </div>
      </div>

      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-status-tag">
            <span className="status-ping"></span>
            <span className="status-text">FINAL-YEAR CSE • BITM '27</span>
          </div>

          <div className="hero-identity-group">
            <span className="hero-eyebrow-tag">PORTFOLIO & WORKSPACE</span>
            <h1 className="hero-punchy-headline">
              BUILD.<br />
              <span className="text-glow-accent">ANALYZE.</span><br />
              SCALE.
            </h1>
          </div>

          {/* Interactive Developer Runtime Console */}
          <div className="hero-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-tabs">
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  profile.sh
                </button>
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'lakehouse' ? 'active' : ''}`}
                  onClick={() => setActiveTab('lakehouse')}
                >
                  lakehouse.py
                </button>
                <button
                  type="button"
                  className={`term-tab ${activeTab === 'cloud' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cloud')}
                >
                  cloud.tf
                </button>
              </div>
              <button 
                type="button" 
                className="terminal-copy-btn" 
                onClick={copySnippet} 
                title="Copy Terminal Snippet"
                aria-label="Copy Terminal Snippet"
              >
                {copied ? <FiCheck size={12} className="copy-success" /> : <FiCopy size={12} />}
              </button>
            </div>

            <div className="terminal-body">
              {activeTab === 'profile' && (
                <div className="terminal-code">
                  <div className="term-line">
                    <span className="c-prompt">sharan@bitm:~$</span> <span className="c-cmd">whoami --focus</span>
                  </div>
                  <div className="term-line"><span className="c-key">Candidate:</span> <span className="c-val">Sharanabasava</span></div>
                  <div className="term-line"><span className="c-key">Education:</span> <span className="c-val">B.E. Computer Science ('27)</span></div>
                  <div className="term-line"><span className="c-key">Academics:</span> <span className="c-val">8.59 CGPA • BITM</span></div>
                  <div className="term-line"><span className="c-key">Core Stack:</span> <span className="c-tag">AWS</span> <span className="c-tag">Databricks</span> <span className="c-tag">Python</span> <span className="c-tag">SQL</span></div>
                </div>
              )}

              {activeTab === 'lakehouse' && (
                <div className="terminal-code">
                  <div className="term-line">
                    <span className="c-prompt">spark@databricks:~$</span> <span className="c-cmd">pyspark --pipeline</span>
                  </div>
                  <div className="term-line"><span className="c-accent">from</span> delta.tables <span className="c-accent">import</span> DeltaTable</div>
                  <div className="term-line"><span className="c-success">✓ Ingest:</span> Bronze Raw Stream [S3]</div>
                  <div className="term-line"><span className="c-success">✓ Transform:</span> Silver Deduplication [MERGE]</div>
                  <div className="term-line"><span className="c-success">✓ Aggregate:</span> Gold Business Marts [Spark SQL]</div>
                </div>
              )}

              {activeTab === 'cloud' && (
                <div className="terminal-code">
                  <div className="term-line">
                    <span className="c-prompt">aws@terraform:~$</span> <span className="c-cmd">terraform apply -auto-approve</span>
                  </div>
                  <div className="term-line"><span className="c-key">provider:</span> <span className="c-val">"aws" ~&gt; us-east-1</span></div>
                  <div className="term-line"><span className="c-success">✓ CDN + Static:</span> CloudFront + S3 Website</div>
                  <div className="term-line"><span className="c-success">✓ Backend:</span> API Gateway + Python Lambda</div>
                  <div className="term-line"><span className="c-success">✓ Database:</span> DynamoDB Atomic Visitor Counter</div>
                </div>
              )}
            </div>

            <div className="terminal-footer">
              <span className="terminal-status-dot"></span>
              <span className="terminal-status-text">INTERACTIVE TERMINAL • READY FOR DEPLOYMENT</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FiArrowRight className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" title="GitHub" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="social-icon" title="LeetCode" aria-label="LeetCode">
              <FiCode />
            </a>
            <a href="mailto:sharananetekal18@gmail.com" className="social-icon" title="Email" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Center Spacer to showcase the 3D art */}
        <div className="hero-center-spacer"></div>

        {/* Right Column */}
        <div className="hero-right">
          <h3 className="hero-cursive">
            Same<br />Curiosity<br />Bigger<br />Possibilities
          </h3>

          <div className="hero-skills">
            <a href="#education" className="highlight-capsule" title="View Education & Academics">
              <div className="capsule-icon"><BsMortarboardFill /></div>
              <div className="capsule-info">
                <span className="capsule-title">Academic Merit</span>
                <span className="capsule-sub">8.59 CGPA • BITM CSE</span>
              </div>
              <span className="capsule-badge">'23–'27</span>
            </a>

            <a href="#certifications" className="highlight-capsule" title="View Verified Certifications">
              <div className="capsule-icon"><BsAwardFill /></div>
              <div className="capsule-info">
                <span className="capsule-title">AWS Certified</span>
                <span className="capsule-sub">Cloud Practitioner</span>
              </div>
              <span className="capsule-badge">Verified</span>
            </a>

            <a href="#projects" className="highlight-capsule" title="View Hands-on Projects">
              <div className="capsule-icon"><BsCodeSquare /></div>
              <div className="capsule-info">
                <span className="capsule-title">Technical Focus</span>
                <span className="capsule-sub">Python, SQL & Data Pipelines</span>
              </div>
              <span className="capsule-badge">Hands-on</span>
            </a>

            <a href="#contact" className="highlight-capsule" title="Get in Touch & Connect">
              <div className="capsule-icon"><BsBriefcaseFill /></div>
              <div className="capsule-info">
                <span className="capsule-title">Ready to Contribute</span>
                <span className="capsule-sub">Open to Roles & Relocation</span>
              </div>
              <span className="capsule-badge status-open">
                <span className="pulse-dot-mini"></span>
                Available
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Marquee Bottom Ribbon */}
      <div className="hero-marquee-wrapper">
        <div className="hero-marquee-track">
          <span>BUILD ✦ ANALYZE ✦ SOLVE ✦ REPEAT ✦ MEDALLION ARCHITECTURE ✦ APACHE SPARK ✦ AWS SERVERLESS ✦ DELTA LAKE ✦ TERRAFORM IaC ✦ DYNAMODB ✦ LLM COPILOTS ✦ POWER BI ✦ </span>
          <span>BUILD ✦ ANALYZE ✦ SOLVE ✦ REPEAT ✦ MEDALLION ARCHITECTURE ✦ APACHE SPARK ✦ AWS SERVERLESS ✦ DELTA LAKE ✦ TERRAFORM IaC ✦ DYNAMODB ✦ LLM COPILOTS ✦ POWER BI ✦ </span>
        </div>
      </div>
    </section>
  );
}
