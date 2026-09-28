import React from 'react';
import { BsDatabaseCheck, BsCloudCheck, BsAward, BsMortarboard } from 'react-icons/bs';
import './ImpactStats.css';

export default function ImpactStats() {
  const stats = [
    {
      icon: <BsDatabaseCheck />,
      value: '12.85M+',
      label: 'DATA RECORDS PROCESSED',
      description: 'End-to-end Medallion lakehouse & PySpark ETL pipelines',
      tag: 'Delta Lake',
    },
    {
      icon: <BsCloudCheck />,
      value: '100%',
      label: 'SERVERLESS AWS DEPLOYMENT',
      description: 'Zero-maintenance architecture deployed via Terraform IaC',
      tag: 'CloudFront & Lambda',
    },
    {
      icon: <BsAward />,
      value: '4+',
      label: 'GLOBAL CERTIFICATIONS',
      description: 'AWS, Google Analytics, Microsoft Fabric & IBM Data Eng',
      tag: 'Verified',
    },
    {
      icon: <BsMortarboard />,
      value: '8.59',
      label: 'ACADEMIC CGPA',
      description: 'B.E. in Computer Science Engineering at BITM (2023–2027)',
      tag: 'Top Tier',
    },
  ];

  return (
    <section className="impact-stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <div className="stat-header">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <span className="stat-tag">{stat.tag}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
