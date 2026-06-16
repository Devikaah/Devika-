import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = ['Home', 'Work', 'Skills', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 500, display: 'flex', justifyContent: 'center',
      paddingTop: 20, paddingLeft: 16, paddingRight: 16,
    }}>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          borderRadius: 9999,
          backdropFilter: 'blur(16px)',
          background: 'hsla(var(--surface), 0.9)',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '8px 8px',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Logo */}
        <div
          data-hover
          onClick={() => scrollTo('home')}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7B1D1D, #E8A598)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'none', transition: 'transform 0.3s',
            flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            background: 'hsl(var(--bg))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic', fontSize: 13,
              background: 'linear-gradient(90deg, #E8A598, #C4736A)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>DK</span>
          </div>
        </div>

        <div style={{ width: 1, height: 20, background: 'hsl(var(--stroke))', margin: '0 4px' }} />

        {/* Nav links */}
        {NAV_LINKS.map(link => (
          <button
            key={link}
            data-hover
            onClick={() => scrollTo(link)}
            style={{
              background: active === link ? 'hsla(var(--stroke), 0.5)' : 'transparent',
              border: 'none', borderRadius: 9999,
              padding: '7px 14px',
              fontSize: 13, fontWeight: 500,
              color: active === link ? 'hsl(var(--text))' : 'hsl(var(--muted))',
              cursor: 'none', transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'hsl(var(--text))';
              e.currentTarget.style.background = 'hsla(var(--stroke), 0.5)';
            }}
            onMouseLeave={e => {
              if (active !== link) {
                e.currentTarget.style.color = 'hsl(var(--muted))';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {link}
          </button>
        ))}

        <div style={{ width: 1, height: 20, background: 'hsl(var(--stroke))', margin: '0 4px' }} />

        {/* Say hi */}
        <a
          href="mailto:devikakg22@gmail.com"
          data-hover
          style={{
            position: 'relative',
            background: 'hsl(var(--surface))',
            border: 'none', borderRadius: 9999,
            padding: '7px 16px',
            fontSize: 13, fontWeight: 500,
            color: 'hsl(var(--text))',
            textDecoration: 'none', cursor: 'none',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: 6,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #7B1D1D, #E8A598)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'hsl(var(--surface))';
            e.currentTarget.style.color = 'hsl(var(--text))';
          }}
        >
          Say hi ↗
        </a>
      </motion.div>
    </div>
  );
}
