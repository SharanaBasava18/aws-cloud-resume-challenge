import React from 'react';

export default function Certifications() {
  return (
    <section className="section certifications-section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="glass-panel">
          <ul className="cert-list">
            <li>
              <div className="cert-info">
                <strong>AWS Certified Cloud Practitioner</strong>
                <span>— Amazon Web Services</span>
              </div>
              <a href="#" className="verify-link">Verify</a>
            </li>
            <div className="divider"></div>
            <li>
              <div className="cert-info">
                <strong>Google Data Analytics Professional Certificate</strong>
                <span>— Google</span>
              </div>
              <a href="#" className="verify-link">Verify</a>
            </li>
            <div className="divider"></div>
            <li>
              <div className="cert-info">
                <strong>Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)</strong>
                <span>— Microsoft</span>
              </div>
              <a href="#" className="verify-link">Verify</a>
            </li>
            <div className="divider"></div>
            <li>
              <div className="cert-info">
                <strong>Introduction to Data Engineering</strong>
                <span>— IBM</span>
              </div>
              <a href="#" className="verify-link">Verify</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
