import React from 'react';
import { motion } from 'framer-motion';

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

const STATS = [
  { val: '2+', label: 'Internships' },
  { val: '4+', label: 'Projects' },
  { val: '5+', label: 'Tools Mastered' },
];

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'hsl(var(--bg))', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          variants={inView} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: 'hsl(var(--stroke))' }} />
            <span style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Work History</span>
          </div>
          <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1, color: 'hsl(var(--text))' }}>
            Experience & <em style={{ color: '#E8A598' }}>Credentials</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {EXP.map((e, i) => (
              <motion.div
                key={e.co}
                variants={inView} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 6, borderColor: '#E8A598' }}
                style={{
                  padding: 28,
                  background: 'hsl(var(--surface))',
                  border: '1px solid hsl(var(--stroke))',
                  borderRadius: 20,
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 18, fontWeight: 600, color: 'hsl(var(--text))', marginBottom: 4 }}>{e.role}</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
                      <span style={{ color: '#E8A598', fontWeight: 600 }}>{e.co}</span>
                      <span style={{ color: 'hsl(var(--muted))' }}>·</span>
                      <span style={{ color: 'hsl(var(--muted))' }}>{e.loc}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{ fontSize: 12, color: 'hsl(var(--muted))', fontWeight: 500 }}>{e.period}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 9999,
                      background: e.status === 'current' ? 'rgba(34,197,94,0.1)' : 'rgba(123,29,29,0.1)',
                      color: e.status === 'current' ? '#22c55e' : '#E8A598',
                    }}>
                      {e.status === 'current' ? '● Current' : '✓ Done'}
                    </span>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  {e.points.map((pt, pi) => (
                    <li key={pi} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'hsl(var(--muted))', lineHeight: 1.7 }}>
                      <span style={{ color: '#C4736A', fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {e.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '4px 12px', background: 'rgba(232,165,152,0.08)', border: '1px solid rgba(232,165,152,0.2)', borderRadius: 9999, color: '#E8A598' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Stats + Cert */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={inView} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: '#E8A598' }}
                  style={{
                    padding: '28px 20px', textAlign: 'center',
                    background: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--stroke))',
                    borderRadius: 20, transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '2.2rem', fontWeight: 700, background: 'linear-gradient(90deg, #E8A598, #C4736A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certification */}
            <motion.div
              variants={inView} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                padding: 28,
                background: 'hsl(var(--surface))',
                border: '1px solid hsl(var(--stroke))',
                borderRadius: 20,
              }}
            >
              <div style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>Certification</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 36 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 16, color: 'hsl(var(--text))', marginBottom: 4 }}>Business & Data Analytics</div>
                  <div style={{ fontSize: 13, color: 'hsl(var(--muted))', marginBottom: 8 }}>YBI Foundation · May 2025</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#E8A598', letterSpacing: '0.05em' }}>ID: 706KEH9GYQ06U</div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={inView} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                padding: 28,
                background: 'hsl(var(--surface))',
                border: '1px solid hsl(var(--stroke))',
                borderRadius: 20,
              }}
            >
              <div style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>Education</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { year: '2022–2025', deg: 'BCA · Ethical Hacking & Cloud Computing', school: "St. Paul's College, Bangalore" },
                  { year: '2020–2022', deg: 'Higher Secondary · Commerce & Maths', school: "St. Philomena's College, Kerala" },
                ].map((edu, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 14, borderBottom: i === 0 ? '1px solid hsl(var(--stroke))' : 'none' }}>
                    <div style={{ fontSize: 11, color: '#E8A598', fontWeight: 700, whiteSpace: 'nowrap', paddingTop: 2 }}>{edu.year}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'hsl(var(--text))', marginBottom: 3 }}>{edu.deg}</div>
                      <div style={{ fontSize: 12, color: 'hsl(var(--muted))' }}>{edu.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
