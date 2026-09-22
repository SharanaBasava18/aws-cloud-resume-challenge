import React from 'react';

export default function Education() {
  return (
    <section className="section education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="glass-panel">
          <div className="edu-item">
            <div className="edu-header">
              <h3>B.E. in Computer Science Engineering</h3>
              <span>2023 – 2027</span>
            </div>
            <p>Ballari Institute of Technology and Management (BITM), Ballari</p>
            <p className="highlight">CGPA: 8.59 / 10.0</p>
          </div>
          
          <div className="divider"></div>
          
          <div className="edu-item">
            <div className="edu-header">
              <h3>Pre-University Education (Class XII)</h3>
              <span>2023</span>
            </div>
            <p>Karnataka State Board</p>
            <p className="highlight">Percentage: 89%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
