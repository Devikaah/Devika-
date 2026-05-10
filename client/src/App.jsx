import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const locked = useRef(false);
  const currentRef = useRef(0);

  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const r = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= TOTAL) return;
    if (locked.current) return;
    locked.current = true;
    setCurrent(idx);
    setTimeout(() => { locked.current = false; }, 1100);
  }, []);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentRef.current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(currentRef.current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);


 // Mouse wheel
useEffect(() => {
  let lastScroll = 0;
  const onWheel = (e) => {
    const target = e.target;
    const scrollable = target.closest('.section-inner');

    if (scrollable) {
      const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 10;
      const atTop = scrollable.scrollTop <= 10;

      if (e.deltaY > 0 && !atBottom) {
        scrollable.scrollTop += e.deltaY;
        return;
      }
      if (e.deltaY < 0 && !atTop) {
        scrollable.scrollTop += e.deltaY;
        return;
      }
    }

    const now = Date.now();
    if (now - lastScroll < 1200) return;
    lastScroll = now;

    if (e.deltaY > 40)  goTo(currentRef.current + 1);
    if (e.deltaY < -40) goTo(currentRef.current - 1);
  };
  window.addEventListener('wheel', onWheel, { passive: true });
  return () => window.removeEventListener('wheel', onWheel);
}, [goTo]);

  // Touch swipe
  useEffect(() => {
    let startY = 0;
    let startX = 0;
    const onStart = (e) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };
    const onEnd = (e) => {
      const dy = startY - e.changedTouches[0].clientY;
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy > 40)  goTo(currentRef.current + 1);
        if (dy < -40) goTo(currentRef.current - 1);
      }
    };
    window.addEventListener('touchstart', onStart);
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [goTo]);

  const getState = (idx) => {
    if (idx === current) return 'active';
    if (idx < current)  return 'before';
    return 'after';
  };

  return (
    <>
      <div className="noise" />
      {!isMobile && <Cursor />}

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

      {!loading && <Nav current={current} total={TOTAL} goTo={goTo} />}

      <div className="sections-wrapper">
        {SECTIONS.map((Section, i) => (
          <div key={i} className={`slide-section state-${getState(i)}`}>
            <Section active={current === i} goTo={goTo} />
          </div>
        ))}
      </div>

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
          position: fixed; right: 32px; top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 10px;
          z-index: 400;
        }
        .side-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(123,29,29,0.2);
          border: none; cursor: pointer;
          transition: all 0.4s var(--ease); padding: 0;
        }
        .side-dot.active {
          background: var(--accent);
          transform: scale(1.5);
          box-shadow: 0 0 8px rgba(123,29,29,0.4);
        }
        .side-dot:hover { background: var(--accent); }
        @media (max-width: 768px) {
          .side-dots { right: 16px; }
        }
      `}</style>
    </>
  );
}