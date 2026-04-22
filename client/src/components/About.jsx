import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">The Mind Behind <span>The Data</span></h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`about-grid reveal ${visible ? 'visible' : ''}`}>
          {/* Main About Card */}
          <div className="glass-card about-card">
            <div className="about-avatar">
              <img src="/images/profile.jpg" alt="Devika KG" />
              <div className="avatar-status">
                <span className="status-dot" />
                <span>Open to Work</span>
              </div>
            </div>
            <div className="about-text">
              <h3>Hi, I'm Devika KG 👋</h3>
              <p>
                I'm a BCA graduate from St. Paul's College, Bangalore, with a specialization in Ethical Hacking and Cloud Computing. I'm passionate about turning complex datasets into clear, actionable stories.
              </p>
              <p>
                Currently interning as a <strong>Data Analyst at Tecolas Technologies, Kochi</strong>, I work with Python, Power BI, and Excel daily to build dashboards that help businesses make smarter decisions.
              </p>
              <p>
                I enjoy every step of the data journey — from cleaning messy raw data to designing interactive visualizations that tell a compelling story.
              </p>
              <div className="about-info-row">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Kochi, Kerala</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <span>devikakg22@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <span>BCA Graduate</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <span>Available for Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="education-section">
            <h3 className="edu-title">Education Journey</h3>
            <div className="timeline">
              <div className="timeline-item" style={{ animationDelay: '0.1s' }}>
                <div className="timeline-dot" />
                <div className="timeline-line" />
                <div className="glass-card timeline-card">
                  <span className="timeline-year">2022 — 2025</span>
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p className="timeline-school">St. Paul's College, Bangalore</p>
                  <span className="tech-badge" style={{ marginTop: 8, display: 'inline-flex' }}>
                    Ethical Hacking & Cloud Computing
                  </span>
                </div>
              </div>
              <div className="timeline-item" style={{ animationDelay: '0.3s' }}>
                <div className="timeline-dot" />
                <div className="glass-card timeline-card">
                  <span className="timeline-year">2020 — 2022</span>
                  <h4>Higher Secondary Education</h4>
                  <p className="timeline-school">St. Philomena's College, Kerala</p>
                  <span className="tech-badge" style={{ marginTop: 8, display: 'inline-flex' }}>
                    Commerce & Mathematics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 28px;
          align-items: start;
        }
        .about-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .about-avatar {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .about-avatar img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--glass-border);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .avatar-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-cyan);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          box-shadow: 0 0 8px #00ff88;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .about-text h3 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 14px;
          color: var(--text-primary);
        }
        .about-text p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 12px;
          font-size: 15px;
        }
        .about-text strong { color: var(--accent-cyan); font-weight: 600; }
        .about-info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 8px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .info-icon { font-size: 14px; }

        /* Education */
        .education-section { display: flex; flex-direction: column; }
        .edu-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 28px;
          padding-left: 20px;
        }
        .timeline { position: relative; display: flex; flex-direction: column; gap: 20px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan), var(--accent-blue));
          border-radius: 2px;
        }
        .timeline-item { position: relative; padding-left: 36px; }
        .timeline-dot {
          position: absolute;
          left: 3px;
          top: 18px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-cyan);
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 12px var(--accent-cyan);
          z-index: 1;
        }
        .timeline-card {
          padding: 24px;
        }
        .timeline-year {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }
        .timeline-card h4 {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .timeline-school {
          font-size: 14px;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .about-info-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
