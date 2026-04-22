import React, { useState, useEffect } from 'react';

const roles = ['Data Analyst', 'Power BI Developer', 'Dashboard Designer', 'Python Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
          <div className="hero-greeting">
            <span className="greeting-dot" />
            <span>Hello, I'm</span>
          </div>
          <h1 className="hero-name">Devika KG</h1>
          <div className="hero-role-wrapper">
            <span className="role-static">I am a </span>
            <span className="role-typed">
              {displayed}
              <span className="cursor">|</span>
            </span>
          </div>
          <p className="hero-tagline">
            Transforming raw data into clear insights — through dashboards, visualizations, and analytics that drive smarter business decisions.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Tools</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2 12h20M15 6l6 6-6 6"/>
              </svg>
              View My Work
            </button>
            <a href="/images/DEVIKA_KG_Resume.pdf" download className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer" className="social-link">
              <GithubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/devika-kg" target="_blank" rel="noreferrer" className="social-link">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="mailto:devikakg22@gmail.com" className="social-link">
              <MailIcon /> Email
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className={`hero-image-wrapper ${loaded ? 'loaded' : ''}`}>
          <div className="image-ring-outer">
            <div className="image-ring-inner">
              <img
                src="/images/profile.jpg"
                alt="Devika KG"
                className="hero-photo"
              />
            </div>
          </div>
          <div className="image-badge badge-1">
            <span>📊</span> Power BI
          </div>
          <div className="image-badge badge-2">
            <span>🐍</span> Python
          </div>
          <div className="image-badge badge-3">
            <span>📈</span> Tableau
          </div>
          {/* Orbiting ring decoration */}
          <div className="orbit-ring orbit-1" />
          <div className="orbit-ring orbit-2" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll down</span>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 60px;
          position: relative;
        }
        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-content {
          opacity: 0;
          transform: translateX(-60px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hero-content.loaded {
          opacity: 1;
          transform: translateX(0);
        }
        .hero-greeting {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .greeting-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--accent-cyan);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #ffffff 30%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }
        .hero-role-wrapper {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 20px;
          min-height: 40px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }
        .role-typed {
          color: var(--accent-cyan);
          font-weight: 700;
          font-family: var(--font-display);
        }
        .cursor {
          animation: blink 0.9s step-end infinite;
          color: var(--accent-cyan);
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hero-tagline {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 36px;
        }
        .stat-item { text-align: center; }
        .stat-num {
          display: block;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--glass-border);
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .hero-socials {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          color: var(--accent-cyan);
          border-color: var(--glass-border);
          background: var(--accent-cyan-dim);
        }
        .social-link svg { width: 14px; height: 14px; }

        /* Image area */
        .hero-image-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(60px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }
        .hero-image-wrapper.loaded {
          opacity: 1;
          transform: translateX(0);
        }
        .image-ring-outer {
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, var(--accent-cyan), var(--accent-blue), var(--accent-cyan));
          padding: 3px;
          animation: spin-ring 8s linear infinite;
          box-shadow: 0 0 60px rgba(0, 212, 255, 0.25);
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .image-ring-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-primary);
          padding: 10px;
          overflow: hidden;
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
          animation: spin-ring 8s linear infinite reverse;
        }
        .image-badge {
          position: absolute;
          background: rgba(5, 13, 26, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          animation: float-badge 3s ease-in-out infinite;
        }
        .badge-1 { top: 15%; left: -30px; animation-delay: 0s; }
        .badge-2 { bottom: 20%; left: -20px; animation-delay: 1s; }
        .badge-3 { top: 20%; right: -20px; animation-delay: 0.5s; }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 212, 255, 0.12);
          pointer-events: none;
        }
        .orbit-1 { width: 460px; height: 460px; animation: orbit-rotate 20s linear infinite; }
        .orbit-2 { width: 540px; height: 540px; animation: orbit-rotate 30s linear infinite reverse; }
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .scroll-indicator:hover { color: var(--accent-cyan); }
        .scroll-mouse {
          width: 22px;
          height: 36px;
          border: 2px solid currentColor;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }
        .scroll-dot {
          width: 4px;
          height: 8px;
          background: currentColor;
          border-radius: 100px;
          animation: scroll-anim 2s ease-in-out infinite;
        }
        @keyframes scroll-anim {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 900px) {
          .hero-container { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .hero-greeting, .hero-role-wrapper, .hero-actions, .hero-socials, .hero-stats {
            justify-content: center;
          }
          .hero-tagline { margin: 0 auto 32px; }
          .hero-image-wrapper { order: -1; }
          .image-ring-outer { width: 280px; height: 280px; }
          .orbit-1 { width: 360px; height: 360px; }
          .orbit-2 { width: 440px; height: 440px; }
          .badge-1 { left: 0; top: 5%; }
          .badge-2 { left: 0; bottom: 10%; }
          .badge-3 { right: 0; top: 10%; }
        }
      `}</style>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
