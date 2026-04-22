import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Languages & Query',
    icon: '💻',
    color: '#00d4ff',
    skills: ['Python', 'SQL (Basic)', 'R Programming'],
  },
  {
    title: 'Analytics & BI Tools',
    icon: '📊',
    color: '#0099ff',
    skills: ['Power BI', 'Tableau', 'Microsoft Excel'],
  },
  {
    title: 'Data Skills',
    icon: '🔍',
    color: '#0066ff',
    skills: ['Data Cleaning', 'Data Visualization', 'Dashboard Design', 'KPI Analysis', 'Trend Analysis'],
  },
  {
    title: 'Design & Dev',
    icon: '🎨',
    color: '#00bfff',
    skills: ['Figma', 'Next.js', 'MySQL'],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    color: '#00e5ff',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Attention to Detail'],
  },
];

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">Skills & <span>Expertise</span></h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`skills-grid reveal ${visible ? 'visible' : ''}`}>
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className="glass-card skill-cat-card"
              style={{ '--cat-color': cat.color, transitionDelay: `${ci * 0.1}s` }}
            >
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ animationDelay: `${(ci * 0.1) + (si * 0.07)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className={`proficiency-section reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <h3 className="prof-title">Tool Proficiency</h3>
          <div className="prof-bars">
            {[
              { name: 'Power BI', level: 85, color: '#f2c811' },
              { name: 'Microsoft Excel', level: 88, color: '#21a366' },
              { name: 'Python', level: 70, color: '#3776ab' },
              { name: 'Tableau', level: 75, color: '#e97627' },
              { name: 'SQL', level: 65, color: '#00d4ff' },
              { name: 'R Programming', level: 55, color: '#2765ae' },
            ].map((item) => (
              <div key={item.name} className="prof-bar-item">
                <div className="prof-bar-label">
                  <span>{item.name}</span>
                  <span className="prof-percent">{item.level}%</span>
                </div>
                <div className="prof-bar-track">
                  <div
                    className="prof-bar-fill"
                    style={{
                      width: visible ? `${item.level}%` : '0%',
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`,
                      boxShadow: visible ? `0 0 10px ${item.color}55` : 'none',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }
        .skill-cat-card {
          padding: 28px;
        }
        .cat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .cat-icon {
          font-size: 28px;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(var(--cat-color), 0.08);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(0, 212, 255, 0.15);
        }
        .cat-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          background: rgba(0, 212, 255, 0.06);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(0, 212, 255, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        /* Proficiency bars */
        .proficiency-section {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 36px;
        }
        .prof-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 28px;
          text-align: center;
        }
        .prof-bars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 40px;
        }
        .prof-bar-item {}
        .prof-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .prof-percent { color: var(--accent-cyan); font-weight: 700; }
        .prof-bar-track {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 100px;
          overflow: hidden;
        }
        .prof-bar-fill {
          height: 100%;
          border-radius: 100px;
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;
        }

        @media (max-width: 700px) {
          .prof-bars { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
