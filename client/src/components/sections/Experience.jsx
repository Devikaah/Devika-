import React, { useEffect, useState } from 'react';

const EXP = [
  {
    role: 'Data Analyst Intern',
    co: 'Tecolas Technologies',
    loc: 'Kochi, Kerala',
    period: 'Nov 2025 — Present',
    status: 'current',
    points: [
      'Analyzed raw datasets using Python and Excel to identify trends and actionable insights',
      'Developed and maintained Power BI dashboards with DAX to monitor KPIs and performance',
      'Collaborated with cross-functional teams to translate business needs into reporting solutions',
      'Conducted ad-hoc analysis and communicated findings to stakeholders',
    ],
    tags: ['Python', 'Power BI', 'DAX', 'Excel'],
  },
  {
    role: 'Business & Data Analyst Intern',
    co: 'YBI Foundation',
    loc: 'Remote',
    period: 'May 2025',
    status: 'done',
    points: [
      'Cleaned and prepared datasets using Python and Excel for downstream analysis',
      'Created Power BI dashboards and visualizations to communicate key business metrics',
    ],
    tags: ['Python', 'Power BI', 'Data Cleaning'],
  },
];

const CERTS = [
  {
    name: 'Business & Data Analytics',
    org: 'YBI Foundation',
    year: 'May 2025',
    id: '706KEH9GYQ06U',
  },
];

export default function Experience({ active, goTo }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  const s = (d) => ({ transitionDelay: d, ...(shown && { transform: 'translateY(0)', opacity: 1 }) });

  return (
    <div className="section-inner exp-inner">
      <div className="section-label">Work History</div>
      <div className="section-num">04</div>

      <div className="exp-layout">
        <div className="exp-left">
          <div className="reveal-wrap">
            <h2 className="reveal-text exp-heading" style={s('0.1s')}>Experience</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text exp-heading exp-heading-out" style={s('0.2s')}>&amp; Certs</h2>
          </div>

          <div className="reveal-wrap" style={{ marginTop: 48 }}>
            <div className="reveal-text" style={s('0.35s')}>
              <div className="cert-card">
                <div className="cert-badge">🏆</div>
                <div>
                  <div className="cert-name">{CERTS[0].name}</div>
                  <div className="cert-org">{CERTS[0].org} · {CERTS[0].year}</div>
                  <div className="cert-id">ID: {CERTS[0].id}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="exp-right">
          {EXP.map((e, i) => (
            <div className="reveal-wrap" key={e.co}>
              <div className="reveal-text exp-item" style={s(`${0.25 + i * 0.15}s`)}>
                <div className="exp-item-top">
                  <div>
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-co">
                      <span className="co-name">{e.co}</span>
                      <span className="co-sep">·</span>
                      <span className="co-loc">{e.loc}</span>
                    </div>
                  </div>
                  <div className="exp-right-meta">
                    <div className="exp-period">{e.period}</div>
                    <div className={`exp-status ${e.status}`}>
                      {e.status === 'current' ? '● Current' : '✓ Done'}
                    </div>
                  </div>
                </div>
                <ul className="exp-points">
                  {e.points.map((pt, pi) => (
                    <li key={pi}>
                      <span className="pt-arrow">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {e.tags.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint" onClick={() => goTo(5)}>
        Next <div className="scroll-hint-arrow" />
      </div>

      <style>{`
        .exp-inner { align-items: flex-start; padding-top: 120px; }
        .exp-layout {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        gap: 40px;
        width: 100%; max-width: 1200px;
        margin: 0 auto;
        padding-top: 40px;
        height: calc(100vh - 160px);
        overflow: hidden;
        }
        .exp-heading {
          font-family: var(--font-d);
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--text);
        }
        .exp-heading-out {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }
        .cert-card {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 24px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          margin-top: 8px;
        }
        .cert-badge { font-size: 28px; }
        .cert-name { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .cert-org { font-size: 13px; color: var(--muted); margin-bottom: 6px; }
        .cert-id {
          font-family: monospace; font-size: 11px;
          color: var(--accent); letter-spacing: 0.05em;
        }
        .exp-right { display: flex; flex-direction: column; gap: 28px; overflow-y: auto; max-height: calc(100vh - 200px); padding-right: 8px; }
        .exp-item {
          padding: 28px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex; flex-direction: column; gap: 16px;
          transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
        }
        .exp-item:hover {
          transform: translateX(6px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .exp-item-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
        .exp-role { font-family: var(--font-d); font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .exp-co { display: flex; align-items: center; gap: 8px; font-size: 13px; }
        .co-name { color: var(--accent2); font-weight: 600; }
        .co-sep { color: var(--muted); }
        .co-loc { color: var(--muted); }
        .exp-right-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .exp-period { font-size: 12px; font-weight: 600; color: var(--muted); }
        .exp-status { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .exp-status.current { background: rgba(34,197,94,0.1); color: #16a34a; }
        .exp-status.done { background: rgba(201,168,76,0.1); color: #8a6f1e; }
        .exp-points { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .exp-points li { display: flex; gap: 10px; font-size: 13px; color: var(--muted); line-height: 1.7; }
        .pt-arrow { color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          display: inline-flex; padding: 5px 14px;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 12px; font-weight: 500; color: var(--text);
          transition: all 0.3s;
        }
        .pill:hover { background: var(--accent); border-color: var(--accent); }
        @media (max-width: 900px) {
          .exp-layout { grid-template-columns: 1fr; gap: 32px; overflow-y: auto; max-height: calc(100vh - 140px); }
          .exp-right { max-height: none; overflow-y: visible; }
        }
      `}</style>
    </div>
  );
}
