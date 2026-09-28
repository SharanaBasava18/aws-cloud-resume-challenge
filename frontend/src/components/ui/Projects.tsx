import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiLayers, FiCpu, FiCloud, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import './Projects.css';

interface Project {
  id: string;
  category: 'lakehouse' | 'ai' | 'cloud';
  title: string;
  subtitle: string;
  architectureType: string;
  icon: React.ReactNode;
  metrics: { label: string; value: string }[];
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  featured: boolean;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lakehouse' | 'ai' | 'cloud'>('all');

  const projects: Project[] = [
    {
      id: 'lakehouse',
      category: 'lakehouse',
      title: 'Unified FMCG Data Lakehouse',
      subtitle: 'Post-M&A Multi-Company Data Modernization',
      architectureType: 'Medallion Lakehouse Architecture (Bronze ➔ Silver ➔ Gold)',
      icon: <FiLayers />,
      featured: true,
      metrics: [
        { label: 'Architecture', value: 'Bronze / Silver / Gold' },
        { label: 'Workflows', value: 'Nightly Automated' },
        { label: 'Reconciliation', value: 'Delta MERGE' },
      ],
      description:
        'Architected an enterprise Medallion Lakehouse unifying disparate transaction and inventory systems across two merged FMCG organizations into a single source of truth.',
      highlights: [
        'Built PySpark and Spark SQL ETL pipelines to cleanse, transform, deduplicate, and standardize transaction data across Bronze, Silver, and Gold layers.',
        'Reconciled mismatched historical data grains using SQL window functions, surrogate keys, and idempotent Delta MERGE upserts.',
        'Automated nightly incremental ETL orchestration via Databricks Workflows, drastically reducing pipeline failure rates.',
        'Structured Gold layer semantic aggregates powering executive Power BI reporting with sub-second analytical query performance.',
      ],
      techStack: ['AWS S3', 'Databricks', 'Delta Lake', 'Apache Spark', 'PySpark', 'Spark SQL', 'Databricks Workflows'],
      githubUrl: 'https://github.com/SharanaBasava18/aws-cloud-resume-challenge',
    },
    {
      id: 'ai-copilot',
      category: 'ai',
      title: 'Vendor Performance Intelligence & Copilot',
      subtitle: 'LLM Multi-Tool Orchestration & Advanced Analytics',
      architectureType: 'Deterministic Analytics Engine + Function Calling Copilot',
      icon: <FiCpu />,
      featured: true,
      metrics: [
        { label: 'Records Analyzed', value: '12.85M+' },
        { label: 'Capital Optimized', value: '$2.71M' },
        { label: 'Spend Concentration', value: '65.69%' },
      ],
      description:
        'Built an end-to-end analytics platform processing 12.85M+ purchase and sales transactions, paired with an LLM copilot that executes deterministic Python statistical tools.',
      highlights: [
        'Processed and harmonized 12.85M+ transaction records using Pandas and SQL into unified supplier performance metrics.',
        'Identified 65.69% supplier spend concentration and surfaced $2.71M in locked working capital for executive procurement action.',
        'Engineered an LLM-powered analytics copilot with OpenAI function calling orchestrating 6 deterministic calculation tools.',
        'Implemented a groundedness verification layer that cross-checks LLM responses directly against quantitative data evidence.',
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'LLM Function Calling', 'Power BI', 'Streamlit', 'Statistical Analysis'],
      githubUrl: 'https://github.com/SharanaBasava18/aws-cloud-resume-challenge',
    },
    {
      id: 'cloud-resume',
      category: 'cloud',
      title: 'Serverless Cloud Portfolio & Automated CI/CD',
      subtitle: 'Production AWS Infrastructure as Code',
      architectureType: '100% Serverless Event-Driven AWS Architecture',
      icon: <FiCloud />,
      featured: true,
      metrics: [
        { label: 'Hosting', value: 'S3 + CloudFront CDN' },
        { label: 'Backend', value: 'Lambda & DynamoDB' },
        { label: 'IaC & CI/CD', value: 'Terraform & GitHub Actions' },
      ],
      description:
        'Engineered a high-performance serverless cloud portfolio following the AWS Cloud Resume Challenge specifications, fully provisioned as code and deployed automatically.',
      highlights: [
        'Configured globally distributed static hosting via Amazon S3 bucket with CloudFront CDN for sub-100ms worldwide delivery.',
        'Built a serverless visitor tracking backend using Amazon API Gateway, Python AWS Lambda, and DynamoDB atomic item counters.',
        'Provisioned 100% of AWS infrastructure using Terraform (IaC) with parameterized configurations and least-privilege IAM policies.',
        'Constructed end-to-end GitHub Actions CI/CD workflows executing automated linting, unit tests, S3 sync, and CloudFront cache invalidation.',
      ],
      techStack: ['AWS Lambda', 'Amazon DynamoDB', 'API Gateway', 'CloudFront', 'Amazon S3', 'Terraform', 'GitHub Actions', 'Python'],
      githubUrl: 'https://github.com/SharanaBasava18/aws-cloud-resume-challenge',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">
            Selected engineering projects demonstrating enterprise data lakehouses, AI copilots, and resilient AWS serverless systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Portfolio Work ({projects.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'lakehouse' ? 'active' : ''}`}
            onClick={() => setActiveFilter('lakehouse')}
          >
            Data Lakehouse
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI & Analytics
          </button>
          <button
            className={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cloud')}
          >
            AWS Serverless
          </button>
        </div>

        {/* Project Showcase Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-premium glass-panel">
              {/* Card Top Banner */}
              <div className="project-card-top">
                <div className="project-type-tag">
                  <span className="type-icon">{project.icon}</span>
                  <span>{project.architectureType}</span>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                  title="View GitHub Repository"
                  aria-label="View GitHub Repository"
                >
                  <FiGithub size={18} />
                  <span>GitHub</span>
                  <FiArrowUpRight size={14} className="link-arrow" />
                </a>
              </div>

              {/* Title & Subtitle */}
              <div className="project-title-block">
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-subheading">{project.subtitle}</p>
              </div>

              {/* Metrics Strip */}
              <div className="project-metrics-strip">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="project-metric-pill">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <p className="project-summary">{project.description}</p>

              {/* Key Architecture Highlights */}
              <div className="project-highlights-box">
                <h4 className="highlights-title">Key Architectural Implementations:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <FiCheckCircle className="check-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-footer">
                <div className="tech-tags-list">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
