import React from 'react';
import { BsAwardFill, BsCheckCircleFill, BsShieldCheck, BsArrowUpRight } from 'react-icons/bs';
import './Certifications.css';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  badgeColor: string;
  code: string;
  date: string;
  description: string;
  skills: string[];
  verifyUrl: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 'aws-ccp',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      badgeColor: '#ff9900',
      code: 'AWS-CCP',
      date: 'Active Credential',
      description:
        'Validation of overall AWS Cloud platform fluency, core services (S3, EC2, Lambda, DynamoDB), IAM security, and serverless architectures.',
      skills: ['AWS Cloud Architecture', 'IAM Security', 'Serverless Compute', 'CloudFront & S3', 'Cost Optimization'],
      verifyUrl: 'https://aws.amazon.com/verification',
    },
    {
      id: 'google-data',
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      badgeColor: '#4285f4',
      code: 'GOOGLE-DA',
      date: 'Professional Credential',
      description:
        'Comprehensive data ecosystem training covering analytical problem solving, data cleansing, SQL modeling, and executive storytelling.',
      skills: ['SQL Data Manipulation', 'Data Cleansing', 'Exploratory Data Analysis', 'Tableau', 'Data Ethics'],
      verifyUrl: 'https://coursera.org/verify/professional-cert',
    },
    {
      id: 'msft-fabric',
      name: 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
      issuer: 'Microsoft',
      badgeColor: '#00a4ef',
      code: 'DP-600',
      date: 'Associate Credential',
      description:
        'Designing and implementing enterprise lakehouses, medallion architecture, Delta Lake tables, and Power BI semantic models.',
      skills: ['Medallion Architecture', 'Delta Lake', 'Power BI DAX', 'Dataflows Gen2', 'Lakehouse Security'],
      verifyUrl: 'https://learn.microsoft.com/credentials',
    },
    {
      id: 'ibm-de',
      name: 'Introduction to Data Engineering',
      issuer: 'IBM',
      badgeColor: '#1261fe',
      code: 'IBM-DE',
      date: 'Foundational Credential',
      description:
        'Core principles of data engineering, big data pipelines, distributed systems, relational databases, and data warehousing.',
      skills: ['ETL / ELT Pipelines', 'Data Warehouses', 'Relational & NoSQL', 'Big Data Architecture'],
      verifyUrl: 'https://coursera.org/verify',
    },
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>VERIFIED ACCREDITATIONS</span>
          </div>
          <h2 className="section-title">CERTIFICATIONS</h2>
          <p className="section-subtitle">
            Industry-standard cloud, data analytics, and data engineering accreditations.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card-deluxe glass-panel">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <BsAwardFill className="cert-award-icon" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="cert-status-badge">
                  <BsCheckCircleFill className="check-dot" />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills-wrap">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cert-card-bottom">
                <span className="cert-code-tag">{cert.code}</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-btn"
                  title="Verify Credential"
                >
                  <span>Verify Credential</span>
                  <BsArrowUpRight className="verify-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
