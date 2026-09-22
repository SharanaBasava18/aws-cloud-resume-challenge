import React from 'react';

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="glass-panel skill-card">
            <h3>Programming</h3>
            <p>Python, SQL</p>
          </div>
          <div className="glass-panel skill-card">
            <h3>Data Analysis & BI</h3>
            <p>Pandas, NumPy, Exploratory Data Analysis (EDA), Power BI</p>
          </div>
          <div className="glass-panel skill-card">
            <h3>Data Engineering</h3>
            <p>ETL, ELT, PySpark</p>
          </div>
          <div className="glass-panel skill-card">
            <h3>Cloud & Data Platforms</h3>
            <p>AWS, Databricks, PostgreSQL</p>
          </div>
          <div className="glass-panel skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
}
