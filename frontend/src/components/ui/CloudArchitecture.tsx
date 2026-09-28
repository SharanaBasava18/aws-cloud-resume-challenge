import React, { useState, useEffect } from 'react';
import { 
  BsGlobe2, 
  BsShieldLockFill, 
  BsFolderFill, 
  BsLightningChargeFill, 
  BsCpuFill, 
  BsDatabaseFill,
  BsCheckCircleFill,
  BsPlayFill
} from 'react-icons/bs';
import './CloudArchitecture.css';

const VISITOR_API_URL = 'https://kshl21djfl.execute-api.ap-south-2.amazonaws.com/visitor-count';

export default function CloudArchitecture() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isPulsing, setIsPulsing] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(VISITOR_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch visitor count');
        return res.json();
      })
      .then((data) => {
        if (isMounted && typeof data.count === 'number') {
          setVisitorCount(data.count);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch live visitor count:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const triggerSimulation = async () => {
    if (isPulsing) return;
    setIsPulsing(true);

    const steps = [1, 2, 4, 5, 6];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step);
      }, idx * 300);
    });

    try {
      const res = await fetch(VISITOR_API_URL);
      const data = await res.json();
      setTimeout(() => {
        if (typeof data.count === 'number') {
          setVisitorCount(data.count);
        } else {
          setVisitorCount((prev) => (prev !== null ? prev + 1 : 1));
        }
        setActiveStep(null);
        setIsPulsing(false);
      }, steps.length * 300 + 100);
    } catch {
      setTimeout(() => {
        setVisitorCount((prev) => (prev !== null ? prev + 1 : 1));
        setActiveStep(null);
        setIsPulsing(false);
      }, steps.length * 300 + 100);
    }
  };

  const nodes = [
    {
      id: 1,
      name: 'Visitor Browser',
      service: 'Client Device',
      icon: <BsGlobe2 />,
      desc: 'Initiates HTTPS request & loads React bundle',
    },
    {
      id: 2,
      name: 'Amazon CloudFront',
      service: 'Global CDN & SSL',
      icon: <BsShieldLockFill />,
      desc: 'Edge caching & fast sub-100ms TLS termination',
    },
    {
      id: 3,
      name: 'Amazon S3',
      service: 'Static Storage',
      icon: <BsFolderFill />,
      desc: 'Hosts compiled Vite + React static assets',
    },
    {
      id: 4,
      name: 'Amazon API Gateway',
      service: 'REST HTTP Endpoint',
      icon: <BsLightningChargeFill />,
      desc: 'Secure CORS-enabled API routing to Lambda',
    },
    {
      id: 5,
      name: 'AWS Lambda',
      service: 'Serverless Compute',
      icon: <BsCpuFill />,
      desc: 'Python function execution & atomic payload logic',
    },
    {
      id: 6,
      name: 'Amazon DynamoDB',
      service: 'NoSQL Database',
      icon: <BsDatabaseFill />,
      desc: 'Atomic counter incrementation with single-digit ms latency',
    },
  ];

  return (
    <section id="architecture" className="section architecture-section">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>AWS CLOUD RESUME ARCHITECTURE</span>
          </div>
          <h2 className="section-title">SERVERLESS PIPELINE</h2>
          <p className="section-subtitle">
            Interactive visualization of the event-driven AWS cloud architecture powering this portfolio.
          </p>
        </div>

        {/* Live Counter & Interactive Bar */}
        <div className="architecture-showcase glass-panel">
          <div className="arch-top-bar">
            <div className="counter-widget">
              <div className="counter-led"></div>
              <div className="counter-info">
                <span className="counter-title">LIVE DYNAMODB VISITOR COUNTER</span>
                <span className="counter-number">
                  {visitorCount !== null ? visitorCount.toLocaleString() : '...'} <span className="counter-unit">HITS</span>
                </span>
              </div>
            </div>

            <button 
              className={`simulate-btn ${isPulsing ? 'pulsing' : ''}`}
              onClick={triggerSimulation}
              disabled={isPulsing}
            >
              <BsPlayFill size={20} />
              <span>{isPulsing ? 'Tracing Request Flow...' : 'Simulate Live Cloud Hit'}</span>
            </button>
          </div>

          {/* Flow Grid */}
          <div className="nodes-flow-container">
            {nodes.map((node) => (
              <div 
                key={node.id} 
                className={`node-card ${activeStep === node.id ? 'is-active' : ''}`}
              >
                <div className="node-icon-wrap">{node.icon}</div>
                <div className="node-body">
                  <div className="node-service">{node.service}</div>
                  <h4 className="node-name">{node.name}</h4>
                  <p className="node-desc">{node.desc}</p>
                </div>
                {activeStep === node.id && <div className="node-pulse-ring"></div>}
              </div>
            ))}
          </div>

          {/* Infrastructure Specs Footer */}
          <div className="arch-specs-footer">
            <div className="spec-item">
              <BsCheckCircleFill className="spec-check" />
              <span><strong>Terraform IaC:</strong> 100% reproducible modular infrastructure</span>
            </div>
            <div className="spec-item">
              <BsCheckCircleFill className="spec-check" />
              <span><strong>GitHub Actions:</strong> Automated CI/CD test, build & cache invalidation</span>
            </div>
            <div className="spec-item">
              <BsCheckCircleFill className="spec-check" />
              <span><strong>Cost & Security:</strong> AWS Free-Tier optimized with IAM least-privilege</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
