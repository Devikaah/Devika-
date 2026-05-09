import React, { useEffect, useState } from 'react';

export default function About({ active, goTo }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  const s = (delay) => ({
    transitionDelay: delay,
    ...(shown && { transform: 'translateY(0)', opacity: 1 }),
  });

  return (
    <div className="section-inner about-inner">
      <div className="section-label">About Me</div>
      <div className="section-num">01</div>

      <div className="about-layout">
        <div className="about-left">
          <div className="reveal-wrap">
            <h2 className="reveal-text about-heading" style={s('0.1s')}>The Mind</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text about-heading about-heading-outline" style={s('0.2s')}>Behind</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text about-heading" style={s('0.3s')}>the Data</h2>
          </div>

          <div className="reveal-wrap" style={{ marginTop: 32 }}>
            <div className="reveal-text about-image-wrap" style={s('0.4s')}>
              <img src="/images/profile.jpg" alt="Devika" className="about-photo" />
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-scroll-area">
            <div className="reveal-wrap">
              <p className="reveal-text about-intro" style={s('0.3s')}>
                Hi, I'm Devika KG — a BCA graduate from St. Paul's College, Bangalore, passionate about transforming complex datasets into clear, visual stories.
              </p>
            </div>

            <div className="reveal-wrap" style={{ marginTop: 16 }}>
              <p className="reveal-text about-body" style={s('0.42s')}>
                Currently interning as a <strong>Data Analyst at Tecolas Technologies, Kochi</strong>, I work daily with Python, Power BI, and Excel to build dashboards that help businesses make smarter decisions.
              </p>
            </div>

            <div className="reveal-wrap" style={{ marginTop: 28 }}>
              <div className="reveal-text about-info-grid" style={s('0.54s')}>
                <div className="info-block">
                  <span className="info-label">Location</span>
                  <span className="info-val">Kochi, Kerala</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Degree</span>
                  <span className="info-val">BCA — 2025</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Status</span>
                  <span className="info-val info-open">Open to Work ✦</span>
                </div>
                <div className="info-block">
                  <span className="info-label">Focus</span>
                  <span className="info-val">Data Analytics</span>
                </div>
              </div>
            </div>

            <div className="reveal-wrap" style={{ marginTop: 32 }}>
              <div className="reveal-text" style={s('0.66s')}>
                <div className="about-divider" />
                <h3 className="about-edu-title">Education</h3>
                <div className="edu-list">
                  <div className="edu-item">
                    <div className="edu-year">2022 — 2025</div>
                    <div className="edu-detail">
                      <div className="edu-deg">BCA · Ethical Hacking & Cloud Computing</div>
                      <div className="edu-school">St. Paul's College, Bangalore</div>
                    </div>
                  </div>
                  <div className="edu-item">
                    <div className="edu-year">2020 — 2022</div>
                    <div className="edu-detail">
                      <div className="edu-deg">Higher Secondary · Commerce & Maths</div>
                      <div className="edu-school">St. Philomena's College, Kerala</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint" onClick={() => goTo(2)}>
        Next <div className="scroll-hint-arrow" />
      </div>

      <style>{`
        .about-inner {
          align-items: flex-start;
          padding-top: 120px;
        }
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 60px;
          height: calc(100vh - 160px);
        }
        .about-left {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .about-right {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .about-scroll-area {
          overflow-y: auto;
          height: 100%;
          padding-right: 12px;
          padding-bottom: 40px;
        }
        .about-scroll-area::-webkit-scrollbar { width: 3px; }
        .about-scroll-area::-webkit-scrollbar-track { background: transparent; }
        .about-scroll-area::-webkit-scrollbar-thumb { background: var(--accent2); border-radius: 2px; }
        .about-heading {
          font-family: var(--font-d);
          font-size: clamp(2.2rem, 4.5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--text);
        }
        .about-heading-outline {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }
        .about-image-wrap {
          width: 180px;
          height: 220px;
          border-radius: 100px 100px 8px 8px;
          overflow: hidden;
          margin-top: 8px;
        }
        .about-photo {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .about-intro {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.7;
          color: var(--text);
          border-left: 2px solid var(--accent2);
          padding-left: 16px;
        }
        .about-body {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.9;
        }
        .about-body strong { color: var(--accent); font-weight: 600; }
        .about-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .info-block { display: flex; flex-direction: column; gap: 4px; }
        .info-label {
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--muted);
        }
        .info-val { font-size: 14px; font-weight: 600; color: var(--text); }
        .info-open { color: var(--accent); }
        .about-divider {
          width: 100%; height: 1px;
          background: var(--border); margin-bottom: 20px;
        }
        .about-edu-title {
          font-family: var(--font-d);
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
          color: var(--muted); margin-bottom: 16px;
        }
        .edu-list { display: flex; flex-direction: column; gap: 14px; }
        .edu-item {
          display: flex; gap: 20px; align-items: flex-start;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .edu-item:last-child { border-bottom: none; }
        .edu-year {
          font-size: 11px; font-weight: 700;
          color: var(--accent2); white-space: nowrap;
          padding-top: 2px;
        }
        .edu-deg { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 3px; }
        .edu-school { font-size: 12px; color: var(--muted); }

        @media (max-width: 900px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 24px;
            height: calc(100vh - 140px);
          }
          .about-left { flex-direction: row; align-items: center; gap: 24px; flex-shrink: 0; }
          .about-image-wrap { width: 100px; height: 120px; margin-top: 0; }
        }
      `}</style>
    </div>
  );
}