import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    title: 'Sports Sales Analysis Dashboard',
    subtitle: 'Tableau · April 2026',
    description:
      'Developed an interactive dashboard to analyze sports sales data across multiple regions and product categories. Includes KPI metrics for total sales ($22.18M), units sold (200K+), and regional performance with brand-wise breakdown.',
    impact: 'Enabled data-driven decisions for brand optimization and regional targeting.',
    image: '/images/sports-dashboard.png',
    tags: ['Tableau', 'Data Visualization', 'KPI Analysis', 'Sales Analytics'],
    color: '#00d4ff',
    github: 'https://github.com/Devikaah',
    live: null,
  },
  {
    id: 2,
    title: 'Indian Dairy Sales Analysis',
    subtitle: 'Power BI · March 2026',
    description:
      'Built a comprehensive Power BI dashboard to analyze Indian dairy market — covering ₹58.73M revenue, 1M+ units sold, and channel-wise distribution. Includes geo-map, product treemap, brand comparison, and revenue trend analysis.',
    impact: 'Uncovered key sales channel insights, supporting inventory and marketing strategy.',
    image: '/images/dairy-dashboard.png',
    tags: ['Power BI', 'Data Cleaning', 'DAX', 'Market Analysis'],
    color: '#ff8c42',
    github: 'https://github.com/Devikaah',
    live: null,
  },
  {
    id: 3,
    title: 'Nifty 50 Performance Dashboard',
    subtitle: 'Power BI · 2025',
    description:
      'Built a Power BI dashboard analyzing Nifty 50 stock market performance from Apr 2024 to Apr 2025 using NSE India data. Tracks all-time highs (26,277), lows (21,281), overall return of +19.79%, and bullish vs bearish day distribution.',
    impact: '57% bullish days identified vs 43% bearish — supporting trend-based investment insights.',
    image: null,
    placeholder: { icon: '📈', label: 'Nifty 50' },
    tags: ['Power BI', 'DAX', 'Stock Analysis', 'NSE Data'],
    color: '#00ff88',
    github: 'https://github.com/Devikaah/nifty50-powerbi-dashboard',
    live: null,
  },
  {
    id: 4,
    title: 'Curezy — Doctor Appointment System',
    subtitle: 'Next.js + MySQL · May 2025',
    description:
      'Designed and developed a user-friendly online doctor appointment booking system. Created the UI/UX in Figma, built the frontend with Next.js, and managed appointment scheduling data with MySQL. Improved usability through user testing sessions.',
    impact: 'Streamlined appointment scheduling, reducing manual booking effort significantly.',
    image: '/images/nifty50-dashboard.png' ,
    placeholder: { icon: '🏥', label: 'Curezy' },
    tags: ['Next.js', 'MySQL', 'Figma', 'UI/UX Design'],
    color: '#a78bfa',
    github: 'https://github.com/Devikaah',
    live: null,
  },
];

export default function Projects() {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-line" />
          <p className="section-subtitle">
            Real-world data problems, turned into visual solutions.
          </p>
        </div>

        <div ref={ref} className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`glass-card project-card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s`, '--proj-color': project.color }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Project Image */}
              <div className="project-image-wrap">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.placeholder.icon}</span>
                    <span>{project.placeholder.label}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="overlay-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                        🔗 Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn">
                      <GhIcon /> GitHub
                    </a>
                  </div>
                </div>
                <div className="project-num">0{project.id}</div>
              </div>

              {/* Project Info */}
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-impact">
                  <span className="impact-icon">✨</span>
                  <span>{project.impact}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13, padding: '9px 18px' }}>
                    <GhIcon /> View Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 13, padding: '9px 18px' }}>
                      🔗 Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-subtitle { color: var(--text-muted); font-size: 15px; margin-top: 12px; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; }
        .project-card { display: flex; flex-direction: column; overflow: hidden; position: relative; border-color: rgba(255,255,255,0.08); }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--proj-color), transparent); opacity: 0; transition: opacity 0.4s ease; }
        .project-card:hover::before { opacity: 1; }
        .project-card:hover { border-color: rgba(var(--proj-color), 0.3); box-shadow: 0 8px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,212,255,0.1); }
        .project-image-wrap { position: relative; height: 220px; overflow: hidden; background: var(--bg-secondary); }
        .project-img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform 0.6s ease; }
        .project-card:hover .project-img { transform: scale(1.05); }
        .project-placeholder { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,212,255,0.05)); font-size: 14px; color: var(--text-secondary); font-weight: 600; }
        .project-placeholder span:first-child { font-size: 48px; }
        .project-overlay { position: absolute; inset: 0; background: rgba(5,13,26,0.85); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.4s ease; backdrop-filter: blur(4px); }
        .project-card:hover .project-overlay { opacity: 1; }
        .overlay-actions { display: flex; gap: 12px; }
        .overlay-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; background: var(--accent-cyan-dim); border: 1px solid var(--glass-border); border-radius: 100px; color: var(--accent-cyan); font-size: 13px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .overlay-btn:hover { background: var(--accent-cyan); color: var(--bg-primary); }
        .overlay-btn svg { width: 14px; height: 14px; }
        .project-num { position: absolute; top: 12px; right: 16px; font-family: var(--font-display); font-size: 42px; font-weight: 800; color: rgba(255,255,255,0.06); line-height: 1; pointer-events: none; }
        .project-body { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .project-meta { display: flex; align-items: center; gap: 8px; }
        .project-subtitle { font-size: 12px; color: var(--text-muted); font-weight: 500; }
        .project-title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
        .project-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.75; }
        .project-impact { display: flex; align-items: flex-start; gap: 8px; padding: 10px 14px; background: rgba(0,212,255,0.05); border-left: 2px solid var(--accent-cyan); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 13px; color: var(--text-secondary); font-style: italic; }
        .impact-icon { flex-shrink: 0; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .project-links { display: flex; gap: 10px; margin-top: 4px; }
      `}</style>
    </section>
  );
}

function GhIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, display: 'inline', verticalAlign: 'middle' }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}