import React from 'react';
import { BsMortarboardFill, BsAwardFill, BsCalendar3, BsGeoAltFill, BsCheck2Circle } from 'react-icons/bs';
import './Education.css';

export default function Education() {
  const educationHistory = [
    {
      degree: 'B.E. in Computer Science & Engineering',
      institution: 'Ballari Institute of Technology and Management (BITM)',
      location: 'Ballari, Karnataka, India',
      period: '2023 – 2027',
      status: 'Final Year Student',
      scoreLabel: 'CGPA',
      score: '8.59 / 10.0',
      description:
        'Rigorous curriculum focused on distributed systems, data warehousing, cloud infrastructure, and algorithm engineering.',
      coursework: [
        'Database Management Systems (DBMS)',
        'Cloud Computing & Distributed Systems',
        'Data Structures & Algorithms (DSA)',
        'Operating Systems & Networking',
        'Object-Oriented Programming (OOP)',
      ],
    },
    {
      degree: 'Pre-University Education (Class XII)',
      institution: 'Karnataka State Pre-University Board',
      location: 'Karnataka, India',
      period: 'Completed 2023',
      status: 'Distinction',
      scoreLabel: 'Score',
      score: '89.0%',
      description:
        'Strong foundational training in Mathematics, Physics, Chemistry, and Analytical Problem Solving.',
      coursework: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Computer Science Foundations'],
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-subtitle">
            Formal computer science training and academic journey.
          </p>
        </div>

        <div className="education-timeline-wrap">
          {educationHistory.map((item, idx) => (
            <div key={idx} className="edu-card-deluxe glass-panel">
              <div className="edu-card-sidebar">
                <div className="edu-icon-circle">
                  <BsMortarboardFill />
                </div>
                <div className="edu-score-pill">
                  <span className="score-lbl">{item.scoreLabel}</span>
                  <span className="score-val">{item.score}</span>
                </div>
              </div>

              <div className="edu-card-content">
                <div className="edu-meta-top">
                  <span className="edu-period">
                    <BsCalendar3 className="edu-meta-icon" />
                    {item.period}
                  </span>
                  <span className="edu-status-tag">{item.status}</span>
                </div>

                <h3 className="edu-degree">{item.degree}</h3>
                <div className="edu-institution">
                  <span>{item.institution}</span>
                  <span className="edu-location">
                    <BsGeoAltFill /> {item.location}
                  </span>
                </div>

                <p className="edu-desc">{item.description}</p>

                <div className="edu-coursework-block">
                  <span className="coursework-title">Key Coursework & Domains:</span>
                  <div className="coursework-chips">
                    {item.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="course-chip">
                        <BsCheck2Circle className="course-check" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
