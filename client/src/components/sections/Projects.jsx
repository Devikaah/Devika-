import React, { useEffect, useState } from 'react';

const PROJECTS = [
  {
    num: '01',
    title: 'Sports Sales Analysis',
    sub: 'Tableau · April 2026',
    desc: 'Interactive dashboard analyzing $22M+ in sports sales revenue. Covers product performance, regional trends, and brand-wise KPI breakdown.',
    tags: ['Tableau', 'KPI Analysis', 'Sales Analytics'],
    img: '/images/sports-dashboard.png',
    github: 'https://github.com/Devikaah',
    color: '#C9A84C',
  },
  {
    num: '02',
    title: 'Indian Dairy Sales',
    sub: 'Power BI · March 2026',
    desc: 'Comprehensive dashboard analyzing ₹58.73M dairy market revenue. Includes geo-map, product treemap, brand comparison, and channel distribution.',
    tags: ['Power BI', 'DAX', 'Market Analysis'],
    img: '/images/dairy-dashboard.png',
    github: 'https://github.com/Devikaah',
    color: '#2A9D8F',
  },
  {
    num: '03',
    title: 'Nifty 50 Performance',
    sub: 'Power BI ·  May 2026',
    desc: 'Stock market performance dashboard tracking Nifty 50 from Apr 2024–Apr 2025. Shows +19.79% return, ATH 26,277, and bullish/bearish day analysis.',
    tags: ['Power BI', 'DAX', 'NSE Data'],
    img: '/images/nifty50-dashboard.png' ,
    github: 'https://github.com/Devikaah/nifty50-powerbi-dashboard',
    color: '#E9A84C',
  },
  {
    num: '04',
    title: 'Curezy — Doctor Booking',
    sub: 'Next.js + MySQL · May 2025',
    desc: 'Online appointment booking system. UI designed in Figma, frontend in Next.js, and appointment data managed with MySQL.',
    tags: ['Next.js', 'MySQL', 'Figma'],
    img: '/images/curzy.jpeg' ,
    github: 'https://github.com/Devikaah',
    color: '#9D8F2A',
  },
];

export default function Projects({ active, goTo }) {
  const [shown, setShown] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  const s = (d) => ({ transitionDelay: d, ...(shown && { transform: 'translateY(0)', opacity: 1 }) });

  return (
    <div className="section-inner proj-inner">
      <div className="section-label">Featured Work</div>
      <div className="section-num">03</div>

      <div className="proj-layout">
        <div className="proj-header">
          <div className="reveal-wrap">
            <h2 className="reveal-text proj-heading" style={s('0.1s')}>Projects</h2>
          </div>
          <div className="reveal-wrap">
            <p className="reveal-text proj-sub" style={s('0.22s')}>
              Real data problems. Visual solutions.
            </p>
          </div>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className="reveal-wrap"
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div
                className={`reveal-text proj-card ${shown ? 'show' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s`, ...(shown && { transform: 'translateY(0)', opacity: 1 }) }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="proj-img-wrap" style={{ '--pc': p.color }}>
                  {p.img
                    ? <img src={p.img} alt={p.title} className="proj-img" />
                    : <div className="proj-placeholder" style={{ background: `${p.color}18` }}>
                        <span style={{ color: p.color, fontSize: 32 }}>📊</span>
                      </div>
                  }
                  <div className="proj-num-badge">{p.num}</div>
                  <div className={`proj-hover-overlay ${hovered === i ? 'show' : ''}`}>
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-dark" style={{ fontSize: 13 }}>
                      View on GitHub →
                    </a>
                  </div>
                </div>
                <div className="proj-info">
                  <div className="proj-meta">
                    <span className="proj-date">{p.sub}</span>
                  </div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint" onClick={() => goTo(4)}>
        Next <div className="scroll-hint-arrow" />
      </div>

      <style>{`
        .proj-inner { align-items: flex-start; padding-top: 120px; overflow: hidden; }
        .proj-layout {
          width: 100%; max-width: 1300px;
          margin: 0 auto;
          display: flex; flex-direction: column;
          gap: 32px;
          padding-top: 30px;
        }
        .proj-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
        .proj-heading {
          font-family: var(--font-d);
          font-size: clamp(2.5rem, 6vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text);
          line-height: 1;
        }
        .proj-sub {
          font-size: 14px; color: var(--muted);
          padding-bottom: 8px;
          max-width: 280px; text-align: right;
        }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .proj-card {
          display: flex; flex-direction: column; gap: 0;
          border-radius: 12px; overflow: hidden;
          background: var(--white);
          border: 1px solid var(--border);
          transition: transform 0.45s var(--ease), box-shadow 0.45s var(--ease);
        }
        .proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
        }
        .proj-img-wrap {
          position: relative;
          height: 160px;
          overflow: hidden;
          background: var(--bg-alt);
        }
        .proj-img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.6s var(--ease);
        }
        .proj-card:hover .proj-img { transform: scale(1.06); }
        .proj-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        .proj-num-badge {
          position: absolute; top: 10px; left: 12px;
          font-family: var(--font-d); font-size: 11px;
          font-weight: 800; letter-spacing: 0.1em;
          color: var(--white);
          background: rgba(0,0,0,0.5);
          padding: 3px 8px; border-radius: 4px;
          backdrop-filter: blur(4px);
        }
        .proj-hover-overlay {
          position: absolute; inset: 0;
          background: rgba(17,17,17,0.82);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transition: opacity 0.35s ease;
          backdrop-filter: blur(2px);
        }
        .proj-hover-overlay.show { opacity: 1; }
        .proj-info { padding: 18px; display: flex; flex-direction: column; gap: 8px; }
        .proj-meta { display: flex; align-items: center; gap: 8px; }
        .proj-date { font-size: 11px; color: var(--muted); font-weight: 500; }
        .proj-title {
          font-family: var(--font-d);
          font-size: 15px; font-weight: 700;
          color: var(--text); line-height: 1.25;
        }
        .proj-desc { font-size: 12px; color: var(--muted); line-height: 1.7; }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        @media (max-width: 1100px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-inner { overflow-y: auto; }
          .proj-header { flex-direction: column; align-items: flex-start; }
          .proj-sub { text-align: left; }
        }
      `}</style>
    </div>
  );
}
