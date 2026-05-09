import React, { useState, useEffect, useCallback } from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const SECTIONS = [Hero, About, Skills, Projects, Experience, Contact];
const TOTAL = SECTIONS.length;

export default function App() {
  const [current, setCurrent]   = useState(0);
  const [loading, setLoading]   = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const r = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);

  // Hide loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= TOTAL) return;
    setCurrent(idx);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, goTo]);

  // Mouse wheel navigation (debounced)
  useEffect(() => {
    let locked = false;
    const onWheel = (e) => {
      if (locked) return;
      locked = true;
      if (e.deltaY > 40)  goTo(current + 1);
      if (e.deltaY < -40) goTo(current - 1);
      setTimeout(() => { locked = false; }, 1100);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [current, goTo]);

  // Touch swipe
  useEffect(() => {
    let startY = 0;
    const onStart = (e) => { startY = e.touches[0].clientY; };
    const onEnd   = (e) => {
      const dy = startY - e.changedTouches[0].clientY;
      if (dy > 50)  goTo(current + 1);
      if (dy < -50) goTo(current - 1);
    };
    window.addEventListener('touchstart', onStart);
    window.addEventListener('touchend',   onEnd);
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend',   onEnd);
    };
  }, [current, goTo]);

  const getState = (idx) => {
    if (idx === current) return 'active';
    if (idx < current)  return 'before';
    return 'after';
  };

  return (
    <>
      {/* Noise texture */}
      <div className="noise" />

      {/* Custom cursor (desktop only) */}
      {!isMobile && <Cursor />}

      {/* Loading screen */}
      {loading && (
        <div className="loader">
          <div className="loader-name">
            {'DEVIKA KG'.split('').map((c, i) => (
              <span key={i}>{c === ' ' ? '\u00A0' : c}</span>
            ))}
          </div>
          <div className="loader-bar-wrap">
            <div className="loader-bar" />
          </div>
        </div>
      )}

      {/* Navigation */}
      {!loading && (
        <Nav current={current} total={TOTAL} goTo={goTo} />
      )}

      {/* Sections */}
      <div className="sections-wrapper">
        {SECTIONS.map((Section, i) => (
          <div key={i} className={`slide-section state-${getState(i)}`}>
            <Section active={current === i} goTo={goTo} />
          </div>
        ))}
      </div>

      {/* Side dot navigation */}
      {!loading && (
        <div className="side-dots">
          {SECTIONS.map((_, i) => (
            <button
              key={i}
              className={`side-dot ${current === i ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>
      )}

      <style>{`
        .side-dots {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 400;
        }
        .side-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(17,17,17,0.2);
          border: none; cursor: none;
          transition: all 0.4s var(--ease);
          padding: 0;
        }
        .side-dot.active {
          background: var(--accent);
          transform: scale(1.4);
          box-shadow: 0 0 8px rgba(201,168,76,0.5);
        }
        .side-dot:hover { background: var(--text); }
        @media (max-width: 768px) {
          .side-dots { display: none; }
          .side-dot { cursor: pointer; }
        }
      `}</style>
    </>
  );
}
