import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'Tecolas Technologies',
    location: 'Kochi, Kerala',
    period: 'Nov 2025 — Present',
    type: 'Current',
    color: '#00d4ff',
    icon: '🏢',
    points: [
      'Cleaned, transformed, and analyzed datasets using Python and Excel to ensure data accuracy and consistency.',
      'Developed dynamic Power BI dashboards to monitor KPIs and business performance metrics.',
      'Generated actionable insights from data analysis to support strategic business decisions.',
    ],
    skills: ['Python', 'Power BI', 'Excel', 'KPI Dashboards'],
  },
  {
    id: 2,
    role: 'Business & Data Analyst Intern',
    company: 'YBI Foundation',
    location: 'Remote',
    period: 'May 2025',
    type: 'Completed',
    color: '#0066ff',
    icon: '📚',
    points: [
      'Cleaned and prepared datasets using Python and Excel for downstream analysis.',
      'Created foundational charts and dashboards in Power BI to visualize business metrics.',
      'Gained hands-on experience in the full data analysis workflow.',
    ],
    skills: ['Python', 'Power BI', 'Data Cleaning', 'Visualization'],
  },
];

export default function Experience() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work History</div>
          <h2 className="section-title">Experience & <span>Internships</span></h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`exp-timeline reveal ${visible ? 'visible' : ''}`}>
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="exp-item"
              style={{ '--exp-color': exp.color, transitionDelay: `${i * 0.2}s` }}
            >
              {/* Timeline node */}
              <div className="exp-node">
                <div className="node-icon">{exp.icon}</div>
                {i < experiences.length - 1 && <div className="node-line" />}
              </div>

              {/* Card */}
              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="exp-dot">·</span>
                      <span className="exp-location">📍 {exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className={`exp-badge ${exp.type === 'Current' ? 'current' : 'done'}`}>
                      {exp.type === 'Current' ? '🟢 Current' : '✅ Completed'}
                    </span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, pi) => (
                    <li key={pi}>
                      <span className="point-arrow">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
        }
        .exp-item {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 24px;
          position: relative;
        }
        .exp-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 28px;
        }
        .node-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent-cyan-dim);
          border: 2px solid var(--exp-color, var(--accent-cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 0 20px var(--accent-glow);
          flex-shrink: 0;
          z-index: 1;
        }
        .node-line {
          width: 2px;
          flex: 1;
          min-height: 40px;
          background: linear-gradient(180deg, var(--exp-color, var(--accent-cyan)), transparent);
          margin-top: 8px;
        }
        .exp-card {
          padding: 28px;
          margin-bottom: 24px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .exp-role {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .exp-company {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .company-name {
          font-size: 15px;
          font-weight: 600;
          color: var(--exp-color, var(--accent-cyan));
        }
        .exp-dot { color: var(--text-muted); }
        .exp-location { font-size: 13px; color: var(--text-muted); }
        .exp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          flex-shrink: 0;
        }
        .exp-period {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          font-family: var(--font-display);
        }
        .exp-badge {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
        }
        .exp-badge.current {
          background: rgba(0, 255, 100, 0.1);
          border: 1px solid rgba(0, 255, 100, 0.25);
          color: #00ff88;
        }
        .exp-badge.done {
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          color: var(--accent-cyan);
        }
        .exp-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .exp-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .point-arrow {
          color: var(--exp-color, var(--accent-cyan));
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .exp-skills { display: flex; flex-wrap: wrap; gap: 8px; }

        @media (max-width: 600px) {
          .exp-item { grid-template-columns: 50px 1fr; gap: 16px; }
          .node-icon { width: 40px; height: 40px; font-size: 18px; }
          .exp-header { flex-direction: column; }
          .exp-meta { align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
