import React from 'react';

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        
        <div className="project-grid">
          <div className="glass-panel project-card">
            <div className="project-header">
              <h3>Unified FMCG Data Lakehouse</h3>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
            <p className="tech-stack">Tech: AWS S3 • Databricks (Delta Lake, Workflows) • PySpark • Spark SQL</p>
            <ul>
              <li>Architected a Medallion lakehouse (Bronze/Silver/Gold) unifying post-M&A data across two companies.</li>
              <li>Built PySpark and Spark SQL ETL pipelines to cleanse, transform, deduplicate, and standardize data across Bronze, Silver, and Gold layers.</li>
              <li>Reconciled mismatched data grains using SQL window functions and Delta MERGE upserts for unified reporting.</li>
              <li>Automated a nightly incremental pipeline via Databricks Workflows, powering an executive BI dashboard.</li>
            </ul>
          </div>

          <div className="glass-panel project-card">
            <div className="project-header">
              <h3>Vendor Performance Analysis & Intelligence Copilot</h3>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
            <p className="tech-stack">Tech: Python (Pandas) • SQL • Power BI • Statistical Analysis • LLM • Function Calling • Streamlit • Git/GitHub</p>
            <ul>
              <li>Built an end-to-end analytics pipeline processing 12.85M+ purchase and sales records into a consolidated vendor dataset.</li>
              <li>Identified 65.69% supplier spend concentration and $2.71M in locked capital, surfacing key procurement insights.</li>
              <li>Built an LLM-powered copilot with function calling and multi-tool orchestration across six deterministic analytics tools.</li>
              <li>Implemented groundedness verification to validate LLM-generated claims against analytical tool evidence.</li>
            </ul>
          </div>

          <div className="glass-panel project-card">
            <div className="project-header">
              <h3>Serverless Cloud Portfolio and CI/CD Pipeline</h3>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
            <p className="tech-stack">Tech: AWS (S3, CloudFront, API Gateway, Lambda, DynamoDB, IAM) • Terraform • GitHub Actions • Python • Git/GitHub</p>
            <ul>
              <li>Built a serverless AWS portfolio using S3 and CloudFront for hosting and content delivery.</li>
              <li>Implemented a real-time visitor counter with API Gateway, Python Lambda, and DynamoDB.</li>
              <li>Automated CI/CD deployment with GitHub Actions, syncing code changes to S3 and invalidating CloudFront cache.</li>
              <li>Provisioned core AWS infrastructure using Terraform (Infrastructure as Code) and IAM.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
