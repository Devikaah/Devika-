import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Hls from 'hls.js';

const ROLES = ['Creative', 'Analytical', 'Data-driven', 'Insightful'];
const VIDEO_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function Hero() {
  const videoRef = useRef(null);
  const nameRef  = useRef(null);
  const blurRefs = useRef([]);
  const [roleIdx, setRoleIdx] = useState(0);

  // HLS Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC;
    }
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ ease: 'power3.out' });
    if (nameRef.current) {
      tl.fromTo(nameRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
    }
    blurRefs.current.forEach((el, i) => {
      if (el) {
        tl.fromTo(el,
          { opacity: 0, filter: 'blur(10px)', y: 20 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1 },
          0.3 + i * 0.1
        );
      }
    });
  }, []);

  // Role cycling
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Video BG */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%', minHeight: '100%',
            objectFit: 'cover', opacity: 0.35,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, hsl(var(--bg)), transparent)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 900, width: '100%' }}>
        <div ref={el => blurRefs.current[0] = el} style={{ fontSize: 11, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: 32, opacity: 0 }}>
          Data Analyst · Portfolio 2026
        </div>

        <h1 ref={nameRef} style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'hsl(var(--text))', marginBottom: 24, opacity: 0 }}>
          Devika KG
        </h1>

        <div ref={el => blurRefs.current[1] = el} style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'hsl(var(--muted))', marginBottom: 16, opacity: 0 }}>
          A{' '}
          <span
            key={roleIdx}
            className="animate-role-fade-in"
            style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'hsl(var(--text))', display: 'inline-block' }}
          >
            {ROLES[roleIdx]}
          </span>
          {' '}data analyst based in Kochi.
        </div>

        <div ref={el => blurRefs.current[2] = el} style={{ fontSize: 14, color: 'hsl(var(--muted))', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7, opacity: 0 }}>
          Transforming raw data into clear, actionable insights through dashboards, visualizations, and analytics.
        </div>

        <div ref={el => blurRefs.current[3] = el} style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
          <a
            href="#work"
            data-hover
            onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              position: 'relative',
              background: 'hsl(var(--text))',
              color: 'hsl(var(--bg))',
              borderRadius: 9999, padding: '14px 32px',
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none', cursor: 'none',
              transition: 'all 0.3s', display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #7B1D1D, #E8A598)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'hsl(var(--text))';
              e.currentTarget.style.color = 'hsl(var(--bg))';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            See My Work
          </a>
          <a
            href="/images/DEVIKA_KG_Resume.pdf"
            download
            data-hover
            style={{
              border: '2px solid hsl(var(--stroke))',
              background: 'hsl(var(--bg))',
              color: 'hsl(var(--text))',
              borderRadius: 9999, padding: '13px 32px',
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none', cursor: 'none',
              transition: 'all 0.3s', display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#E8A598';
              e.currentTarget.style.color = '#E8A598';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'hsl(var(--stroke))';
              e.currentTarget.style.color = 'hsl(var(--text))';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, color: 'hsl(var(--muted))', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'hsl(var(--stroke))', overflow: 'hidden', position: 'relative' }}>
          <div className="animate-scroll-down" style={{ position: 'absolute', inset: 0, background: '#E8A598' }} />
        </div>
      </div>
    </section>
  );
}
