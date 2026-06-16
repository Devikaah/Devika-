import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Sports Sales Analysis',
    sub: 'Tableau · April 2026',
    desc: 'Interactive dashboard analyzing $22M+ in sports sales revenue with KPI metrics and regional breakdown.',
    img: '/images/sports-dashboard.png',
    tags: ['Tableau', 'KPI Analysis', 'Sales Analytics'],
    github: 'https://github.com/Devikaah',
    span: 7,
  },
  {
    title: 'Indian Dairy Sales',
    sub: 'Power BI · March 2026',
    desc: 'Power BI dashboard covering ₹58.73M revenue with geo-map, treemap, and brand analysis.',
    img: '/images/dairy-dashboard.png',
    tags: ['Power BI', 'DAX', 'Market Analysis'],
    github: 'https://github.com/Devikaah',
    span: 5,
  },
  {
    title: 'Nifty 50 Performance',
    sub: 'Power BI · 2025',
    desc: 'Stock market dashboard tracking Nifty 50 performance with bullish/bearish day analysis.',
    img: '/images/nifty50-dashboard.png',
    tags: ['Power BI', 'DAX', 'NSE Data'],
    github: 'https://github.com/Devikaah/nifty50-powerbi-dashboard',
    span: 5,
  },
  {
    title: 'Curezy — Doctor Booking',
    sub: 'Next.js + MySQL · 2025',
    desc: 'Online appointment booking system with Figma UI, Next.js frontend, MySQL backend.',
    img: null,
    tags: ['Next.js', 'MySQL', 'Figma'],
    github: 'https://github.com/Devikaah',
    span: 7,
  },
];

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Work() {
  return (
    <section id="work" style={{ background: 'hsl(var(--bg))', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          variants={inView} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: 'hsl(var(--stroke))' }} />
            <span style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Selected Work</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1, color: 'hsl(var(--text))' }}>
              Featured <em style={{ color: '#E8A598' }}>projects</em>
            </h2>
            <p style={{ fontSize: 13, color: 'hsl(var(--muted))', maxWidth: 320 }}>
              Data dashboards and analytics projects — from concept to insight.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={inView} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              style={{
                gridColumn: `span ${p.span}`,
                aspectRatio: p.span === 7 ? '16/10' : '4/5',
                background: 'hsl(var(--surface))',
                border: '1px solid hsl(var(--stroke))',
                borderRadius: 24, overflow: 'hidden',
                position: 'relative', cursor: 'none',
                transition: 'border-color 0.3s, transform 0.4s',
              }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#E8A598'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'hsl(var(--stroke))'}
            >
              {p.img ? (
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.6s ease' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(123,29,29,0.2), rgba(232,165,152,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>
                  🏥
                </div>
              )}

              {/* Halftone */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px', opacity: 0.15, mixBlendMode: 'multiply', pointerEvents: 'none' }} />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', inset: 0, background: 'rgba(10,4,4,0.8)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 }}
              >
                <h3 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'hsl(var(--text))', textAlign: 'center' }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'hsl(var(--muted))', textAlign: 'center', lineHeight: 1.6, maxWidth: 280 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '4px 12px', background: 'rgba(232,165,152,0.15)', border: '1px solid rgba(232,165,152,0.3)', borderRadius: 9999, color: '#E8A598', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" data-hover style={{ marginTop: 8, padding: '10px 24px', background: 'linear-gradient(90deg, #7B1D1D, #E8A598)', borderRadius: 9999, color: 'white', fontSize: 13, fontWeight: 600, textDecoration: 'none', cursor: 'none' }}>
                  View on GitHub →
                </a>
              </motion.div>

              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{p.title}</span>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
