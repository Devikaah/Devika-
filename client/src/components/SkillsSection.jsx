import React from 'react';
import FadeIn from './FadeIn.jsx';

const SKILLS = [
  { num: '01', name: 'Power BI & DAX', desc: 'Building interactive dashboards and KPI reports with Power BI, DAX measures, and Power Query for business intelligence.' },
  { num: '02', name: 'Data Visualization', desc: 'Creating clear, compelling visual stories using Tableau, Excel, and Power BI to communicate insights effectively.' },
  { num: '03', name: 'Python & SQL', desc: 'Cleaning, transforming, and analyzing datasets using Python (Pandas, NumPy) and SQL queries for data pipelines.' },
  { num: '04', name: 'Dashboard Design', desc: 'Designing user-friendly, interactive dashboards with intuitive layouts, filters, and KPI metrics for decision-making.' },
  { num: '05', name: 'R Programming', desc: 'Statistical analysis and data exploration using R for deeper analytical insights and reporting.' },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: '#fff', borderRadius: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px) 0 0', padding: 'clamp(60px, 8vw, 128px) clamp(20px, 4vw, 40px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <FadeIn delay={0} y={40}>
          <h2 style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 140px)', textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 112px)' }}>
            Skills
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.num} delay={i * 0.1} y={24}>
              <div
                style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: 'clamp(24px, 4vw, 48px) 0', borderTop: '1px solid rgba(12,12,12,0.15)', borderBottom: i === SKILLS.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(12,12,12,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#0C0C0C', lineHeight: 0.9, flexShrink: 0 }}>{skill.num}</span>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 500, textTransform: 'uppercase', fontSize: 'clamp(1rem, 2vw, 1.8rem)', color: '#0C0C0C', marginBottom: 8 }}>{skill.name}</div>
                  <div style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 300, lineHeight: 1.7, color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)', maxWidth: 560 }}>{skill.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
