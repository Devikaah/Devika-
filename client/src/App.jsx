import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Generate particle data once
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  duration: `${Math.random() * 15 + 10}s`,
  delay: `${Math.random() * 15}s`,
  opacity: Math.random() * 0.4 + 0.1,
}));

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--accent-cyan-dim)',
        border: '1px solid var(--glass-border)',
        color: 'var(--accent-cyan)',
        fontSize: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.4s ease',
        zIndex: 999,
        backdropFilter: 'blur(16px)',
        boxShadow: show ? '0 4px 24px var(--accent-glow)' : 'none',
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

export default function App() {
  return (
    <>
      {/* Background layers */}
      <div className="grid-overlay" />
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="particles">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* App */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
