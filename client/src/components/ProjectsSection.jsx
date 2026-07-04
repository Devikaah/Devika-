import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROJECTS = [
  {
    num: '01',
    category: 'Sales Analytics · Tableau',
    name: 'Sports Sales Analysis',
    sub: 'April 2026',
    col1img1: '/images/sports-trend.png',
    col1img2: '/images/sports-brand.png',
    col2img: '/images/sports-full.png',
    github: 'https://github.com/Devikaah',
  },
  {
    num: '02',
    category: 'Business Intelligence · Power BI',
    name: 'Indian Dairy Sales',
    sub: 'March 2026',
    col1img1: '/images/dairy-dashboard.png',
    col1img2: '/images/dairy-dashboard.png',
    col2img: '/images/dairy-dashboard.png',
    github: 'https://github.com/Devikaah',
  },
  {
    num: '03',
    category: 'Stock Market Analytics · Power BI',
    name: 'Nifty 50 Dashboard',
    sub: '2025',
    col1img1: '/images/sports-product.png',
    col1img2: '/images/sports-trend.png',
    col2img: '/images/sports-full.png',
    github: 'https://github.com/Devikaah/nifty50-powerbi-dashboard',
  },
  {
    num: '04',
    category: 'Web Development · Next.js + MySQL',
    name: 'Curezy — Doctor Booking',
    sub: 'May 2025',
    col1img1: '/images/curezy-1.jpg',
    col1img2: '/images/curezy-2.jpg',
    col2img: '/images/curezy-3.jpg',
    github: 'https://github.com/Devikaah',
  },
];

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 96 }}>
      <motion.div
        style={{
          scale,
          width: '100%',
          maxWidth: 1100,
          marginTop: index * 28,
          borderRadius: 'clamp(24px, 4vw, 48px)',
          border: '2px solid #D7E2EA',
          background: '#0C0C0C',
          padding: 'clamp(16px, 3vw, 32px)',
          overflow: 'hidden',
        }}
      >
        {/* Top Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(12px, 2vw, 20px)', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 24px)' }}>
            <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 8vw, 100px)', color: '#D7E2EA', lineHeight: 0.9, opacity: 0.2 }}>{project.num}</span>
            <div>
              <div style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)', color: '#555', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>{project.category}</div>
              <div style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 2rem)', color: '#D7E2EA', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{project.name}</div>
              <div style={{ fontSize: 12, color: '#444', marginTop: 2 }}>{project.sub}</div>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-hover
            style={{ display: 'inline-flex', alignItems: 'center', padding: 'clamp(8px, 1.5vw, 14px) clamp(16px, 3vw, 32px)', borderRadius: 9999, border: '2px solid #D7E2EA', color: '#D7E2EA', fontFamily: 'Kanit, sans-serif', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 'clamp(0.65rem, 1vw, 0.85rem)', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(215,226,234,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            View Project
          </a>
        </div>

        {/* Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: 'clamp(8px, 1.5vw, 16px)', height: 'clamp(220px, 32vw, 460px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 1vw, 12px)' }}>
            <img src={project.col1img1} alt="" style={{ flex: 1, width: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: 'clamp(12px, 2vw, 32px)', minHeight: 0 }} />
            <img src={project.col1img2} alt="" style={{ flex: 1.4, width: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: 'clamp(12px, 2vw, 32px)', minHeight: 0 }} />
          </div>
          <img src={project.col2img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: 'clamp(12px, 2vw, 32px)' }} />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" style={{ background: '#0C0C0C', borderRadius: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px) 0 0', marginTop: 'clamp(-28px, -4vw, -56px)', position: 'relative', zIndex: 10, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px) 0' }}>
      <h2 className="hero-heading" style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, fontSize: 'clamp(3rem, 12vw, 140px)', textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
        Projects
      </h2>

      <div ref={containerRef} style={{ height: PROJECTS.length * 85 + 'vh' }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
