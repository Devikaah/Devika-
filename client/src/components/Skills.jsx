import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { cat: 'BI & Visualization', items: ['Power BI', 'Tableau', 'DAX', 'Power Query', 'Excel'] },
  { cat: 'Languages & Query', items: ['Python', 'SQL', 'R Programming'] },
  { cat: 'Data Skills', items: ['Data Cleaning', 'Dashboard Design', 'KPI Analysis', 'Data Modeling', 'Trend Analysis'] },
  { cat: 'Design & Dev', items: ['Figma', 'Next.js', 'MySQL'] },
];

const TOOLS = [
  { name: 'Power BI', pct: 85 },
  { name: 'Excel', pct: 88 },
  { name: 'Python', pct: 70 },
  { name: 'Tableau', pct: 75 },
  { name: 'SQL', pct: 65 },
  { name: 'R Programming', pct: 55 },
];

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'hsl(var(--bg))', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          variants={inView} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: 'hsl(var(--stroke))' }} />
            <span style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Tech Stack</span>
          </div>
          <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1, color: 'hsl(var(--text))' }}>
            Skills & <em style={{ color: '#E8A598' }}>Expertise</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: Skill Categories */}
          <motion.div
            variants={inView} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            {SKILLS.map((cat, ci) => (
              <div key={cat.cat}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--muted))', marginBottom: 12 }}>
                  {cat.cat}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.items.map(item => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, borderColor: '#E8A598', color: '#E8A598' }}
                      style={{
                        display: 'inline-flex', padding: '6px 16px',
                        background: 'hsl(var(--surface))',
                        border: '1px solid hsl(var(--stroke))',
                        borderRadius: 9999, fontSize: 13, fontWeight: 500,
                        color: 'hsl(var(--text))', cursor: 'none',
                        transition: 'all 0.3s',
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Proficiency Bars */}
          <motion.div
            variants={inView} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '1.4rem', color: 'hsl(var(--text))', marginBottom: 8 }}>
              Tool Proficiency
            </h3>
            {TOOLS.map((tool, i) => (
              <div key={tool.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'hsl(var(--text))' }}>{tool.name}</span>
                  <span style={{ fontSize: 12, color: '#E8A598', fontWeight: 600 }}>{tool.pct}%</span>
                </div>
                <div style={{ height: 3, background: 'hsl(var(--stroke))', borderRadius: 9999, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #7B1D1D, #E8A598)',
                      borderRadius: 9999,
                      boxShadow: '0 0 8px rgba(232,165,152,0.3)',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
