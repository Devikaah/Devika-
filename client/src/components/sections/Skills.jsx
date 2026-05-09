import React, { useEffect, useState } from 'react';

const SKILLS = [
  { cat: 'BI & Visualization', items: ['Power BI', 'Tableau', 'Microsoft Excel', 'DAX', 'Power Query'] },
  { cat: 'Languages & Query', items: ['Python', 'SQL', 'R Programming'] },
  { cat: 'Data Skills', items: ['Data Cleaning', 'Dashboard Design', 'KPI Analysis', 'Data Modeling', 'Trend Analysis'] },
  { cat: 'Design & Dev', items: ['Figma', 'Next.js', 'MySQL'] },
];

const TOOLS = [
  { name: 'Power BI', pct: 85 },
  { name: 'Excel',    pct: 88 },
  { name: 'Python',   pct: 70 },
  { name: 'Tableau',  pct: 75 },
  { name: 'SQL',      pct: 65 },
  { name: 'R',        pct: 55 },
];

export default function Skills({ active, goTo }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  const s = (d) => ({ transitionDelay: d, ...(shown && { transform: 'translateY(0)', opacity: 1 }) });

  return (
    <div className="section-inner skills-inner">
      <div className="section-label">Tech Stack</div>
      <div className="section-num">02</div>

      <div className="skills-layout">
        <div className="skills-left">
          <div className="reveal-wrap">
            <h2 className="reveal-text skills-heading" style={s('0.1s')}>Skills &</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text skills-heading skills-heading-out" style={s('0.2s')}>Expertise</h2>
          </div>

          <div className="reveal-wrap" style={{ marginTop: 48 }}>
            <div className="reveal-text" style={s('0.35s')}>
              <p className="skills-desc">
                Tools and technologies I work with to transform raw data into meaningful insights.
              </p>
              <div className="tools-bars">
                {TOOLS.map((t, i) => (
                  <div key={t.name} className="tool-bar-item">
                    <div className="tool-bar-top">
                      <span>{t.name}</span>
                      <span className="tool-pct">{shown ? `${t.pct}%` : '—'}</span>
                    </div>
                    <div className="tool-track">
                      <div
                        className="tool-fill"
                        style={{
                          width: shown ? `${t.pct}%` : '0%',
                          transitionDelay: `${0.5 + i * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="skills-right">
          {SKILLS.map((cat, ci) => (
            <div className="reveal-wrap" key={cat.cat}>
              <div
                className="reveal-text skill-cat"
                style={s(`${0.25 + ci * 0.1}s`)}
              >
                <div className="cat-name">{cat.cat}</div>
                <div className="cat-pills">
                  {cat.items.map(item => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint" onClick={() => goTo(3)}>
        Next <div className="scroll-hint-arrow" />
      </div>

      <style>{`
        .skills-inner { align-items: flex-start; padding-top: 120px; }
        .skills-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          width: 100%; max-width: 1200px;
          margin: 0 auto;
          padding-top: 60px;
        }
        .skills-heading {
          font-family: var(--font-d);
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--text);
        }
        .skills-heading-out {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }
        .skills-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 320px;
        }
        .tools-bars { display: flex; flex-direction: column; gap: 16px; }
        .tool-bar-item {}
        .tool-bar-top {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 6px;
        }
        .tool-pct { color: var(--accent); }
        .tool-track {
          height: 3px;
          background: rgba(17,17,17,0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        .tool-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          border-radius: 2px;
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .skills-right {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-top: 8px;
          overflow-y: auto;
          max-height: calc(100vh - 200px);
          padding-right: 8px;
        }
        .skill-cat {}
        .cat-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }
        .cat-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          display: inline-flex;
          padding: 7px 16px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          transition: all 0.3s var(--ease);
        }
        .pill:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--text);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .skills-layout { grid-template-columns: 1fr; gap: 32px; overflow-y: auto; max-height: calc(100vh - 140px); }
          .skills-right { max-height: none; overflow-y: visible; }
        }
      `}</style>
    </div>
  );
}
