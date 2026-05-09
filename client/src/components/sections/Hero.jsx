import React, { useEffect, useState } from 'react';

const ROLES = ['Data Analyst', 'Power BI Developer', 'Dashboard Designer', 'Python Enthusiast'];

export default function Hero({ active, goTo }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="section-inner hero-inner">
      {/* Big background name */}
      <div className="hero-bg-name" aria-hidden>DEVIKA</div>

      <div className="hero-left">
        <div className="section-label">Portfolio 2026</div>

        <div className="hero-title-wrap">
          <div className="reveal-wrap">
            <h1 className="reveal-text hero-name" style={{ transitionDelay: '0.1s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
              Devika
            </h1>
          </div>
          <div className="reveal-wrap">
            <h1 className="reveal-text hero-name hero-name-outline" style={{ transitionDelay: '0.22s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
              KG
            </h1>
          </div>
        </div>

        <div className="reveal-wrap" style={{ marginTop: 24 }}>
          <p className="reveal-text hero-role" style={{ transitionDelay: '0.4s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
            — {ROLES[roleIdx]}
          </p>
        </div>

        <div className="reveal-wrap" style={{ marginTop: 16 }}>
          <p className="reveal-text hero-tagline" style={{ transitionDelay: '0.52s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
            Transforming raw data into clear, actionable<br />
            insights that drive smarter decisions.
          </p>
        </div>

        <div className="reveal-wrap" style={{ marginTop: 40 }}>
          <div className="reveal-text hero-actions" style={{ transitionDelay: '0.64s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
            <button className="btn btn-dark" onClick={() => goTo(3)}>
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="/images/DEVIKA_KG_Resume.pdf" download className="btn btn-light">
              Resume ↓
            </a>
          </div>
        </div>

        <div className="reveal-wrap" style={{ marginTop: 48 }}>
          <div className="reveal-text hero-socials" style={{ transitionDelay: '0.76s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
            <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer">GitHub</a>
            <span className="social-dot" />
            <a href="https://linkedin.com/in/devika-kg" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="social-dot" />
            <a href="mailto:devikakg22@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="reveal-wrap" style={{ width: '100%', height: '100%' }}>
          <div className="reveal-text hero-photo-wrap" style={{ transitionDelay: '0.3s', ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}>
            <img src="/images/profile.jpg" alt="Devika KG" className="hero-photo" />
            <div className="hero-photo-badge">
              <span className="badge-dot" />
              <span>Open to Work</span>
            </div>
            <div className="hero-photo-stat">
              <span className="stat-val">4+</span>
              <span className="stat-lbl">Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint" onClick={() => goTo(1)}>
        Next <div className="scroll-hint-arrow" />
      </div>

      <style>{`
        .hero-inner {
          justify-content: space-between;
          gap: 60px;
        }
        .hero-bg-name {
          position: absolute;
          font-family: var(--font-d);
          font-size: clamp(100px, 20vw, 260px);
          font-weight: 800;
          color: rgba(17,17,17,0.035);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: -0.04em;
          user-select: none;
        }
        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 40px;
          z-index: 1;
        }
        .hero-right {
          flex: 0 0 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .hero-title-wrap {
          margin-top: 40px;
          line-height: 0.9;
        }
        .hero-name {
          font-family: var(--font-d);
          font-size: clamp(4rem, 9vw, 9rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text);
          line-height: 0.9;
        }
        .hero-name-outline {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }
        .hero-role {
          font-family: var(--font-d);
          font-size: clamp(1rem, 1.6vw, 1.4rem);
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.02em;
        }
        .hero-tagline {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.8;
          max-width: 380px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-socials a {
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.3s;
        }
        .hero-socials a:hover { color: var(--text); }
        .social-dot {
          width: 4px; height: 4px;
          background: var(--border);
          border-radius: 50%;
        }
        .hero-photo-wrap {
          position: relative;
          width: 360px; height: 460px;
        }
        .hero-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 200px 200px 12px 12px;
          filter: grayscale(10%);
        }
        .hero-photo-badge {
          position: absolute;
          bottom: -16px; left: -24px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }
        .badge-dot {
          width: 8px; height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-g 2s ease-in-out infinite;
        }
        @keyframes pulse-g {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
        .hero-photo-stat {
          position: absolute;
          top: 24px; right: -24px;
          background: var(--accent);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 30px rgba(201,168,76,0.35);
        }
        .stat-val {
          font-family: var(--font-d);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text);
          line-height: 1;
        }
        .stat-lbl {
          font-size: 11px;
          font-weight: 600;
          color: rgba(17,17,17,0.65);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 1000px) {
          .hero-right { flex: 0 0 300px; }
          .hero-photo-wrap { width: 280px; height: 360px; }
          .hero-bg-name { font-size: 15vw; }
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column-reverse; gap: 30px; padding-top: 100px; overflow-y: auto; }
          .hero-right { flex: none; }
          .hero-photo-wrap { width: 200px; height: 260px; margin: 0 auto; }
          .hero-bg-name { display: none; }
        }
      `}</style>
    </div>
  );
}
