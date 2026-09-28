import React from 'react';
import { 
  BsLayersFill, 
  BsCloudCheckFill, 
  BsBarChartLineFill, 
  BsCpuFill, 
  BsCodeSquare, 
  BsCheck2Circle 
} from 'react-icons/bs';
import './Skills.css';

interface SkillGroup {
  id: string;
  category: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; level: string; core?: boolean }[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      id: 'lakehouse',
      category: 'Data Lakehouse & Big Data',
      badge: 'Core Expertise',
      icon: <BsLayersFill />,
      description: 'Architecting scalable medallion lakehouses, PySpark ETL pipelines, and ACID Delta Lake tables.',
      skills: [
        { name: 'PySpark', level: 'Advanced', core: true },
        { name: 'Delta Lake (ACID)', level: 'Advanced', core: true },
        { name: 'Medallion Architecture', level: 'Advanced', core: true },
        { name: 'Databricks Workflows', level: 'Proficient', core: true },
        { name: 'Spark SQL', level: 'Advanced' },
        { name: 'ETL / ELT Pipelines', level: 'Advanced' },
        { name: 'Data Deduplication & Upsert', level: 'Advanced' },
      ],
    },
    {
      id: 'cloud',
      category: 'AWS Cloud & Infrastructure',
      badge: 'Certified',
      icon: <BsCloudCheckFill />,
      description: 'Designing resilient serverless architectures, automated CI/CD pipelines, and infrastructure as code.',
      skills: [
        { name: 'AWS Lambda (Python)', level: 'Advanced', core: true },
        { name: 'Amazon S3 & CloudFront', level: 'Advanced', core: true },
        { name: 'Amazon DynamoDB', level: 'Proficient', core: true },
        { name: 'API Gateway', level: 'Advanced' },
        { name: 'Terraform (IaC)', level: 'Proficient', core: true },
        { name: 'IAM Security & Least-Privilege', level: 'Advanced' },
        { name: 'GitHub Actions (CI/CD)', level: 'Advanced' },
      ],
    },
    {
      id: 'analytics',
      category: 'Analytics & Business Intelligence',
      badge: 'Decision Support',
      icon: <BsBarChartLineFill />,
      description: 'Extracting actionable business intelligence, KPI dashboards, and statistical insights from raw records.',
      skills: [
        { name: 'Power BI & DAX', level: 'Advanced', core: true },
        { name: 'SQL Window Functions & CTEs', level: 'Expert', core: true },
        { name: 'Pandas & NumPy', level: 'Expert', core: true },
        { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced' },
        { name: 'Supplier Spend Analytics', level: 'Proficient' },
        { name: 'Statistical Distribution Testing', level: 'Proficient' },
      ],
    },
    {
      id: 'ai',
      category: 'Applied AI & LLM Systems',
      badge: 'Cutting Edge',
      icon: <BsCpuFill />,
      description: 'Engineering multi-tool deterministic copilot agents with groundedness verification.',
      skills: [
        { name: 'LLM Function Calling', level: 'Advanced', core: true },
        { name: 'Tool Orchestration', level: 'Advanced', core: true },
        { name: 'Groundedness Verification', level: 'Advanced' },
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'Streamlit UI Prototyping', level: 'Proficient' },
        { name: 'OpenAI API Integration', level: 'Advanced' },
      ],
    },
    {
      id: 'programming',
      category: 'Programming & Databases',
      badge: 'Foundations',
      icon: <BsCodeSquare />,
      description: 'Strong algorithmic problem solving, clean system design, and database administration.',
      skills: [
        { name: 'Python 3', level: 'Expert', core: true },
        { name: 'SQL (PostgreSQL / MySQL)', level: 'Expert', core: true },
        { name: 'TypeScript / JavaScript', level: 'Intermediate' },
        { name: 'Docker Containerization', level: 'Proficient' },
        { name: 'Git & Version Control', level: 'Advanced' },
        { name: 'Linux / Shell Scripting', level: 'Proficient' },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">SKILLS & ARCHITECTURE MATRIX</h2>
          <p className="section-subtitle">
            A comprehensive overview of production tooling, cloud infrastructure, and data platforms.
          </p>
        </div>

        <div className="skills-matrix-grid">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-card-deluxe glass-panel">
              <div className="skill-card-top">
                <div className="skill-icon-bubble">{group.icon}</div>
                <span className="skill-badge-pill">{group.badge}</span>
              </div>

              <h3 className="skill-group-name">{group.category}</h3>
              <p className="skill-group-desc">{group.description}</p>

              <div className="skill-items-wrap">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={`skill-chip ${skill.core ? 'is-core' : ''}`}>
                    {skill.core && <BsCheck2Circle className="chip-check" />}
                    <span className="chip-name">{skill.name}</span>
                    <span className="chip-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
