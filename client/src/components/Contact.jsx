import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Hls from 'hls.js';

const MARQUEE_TEXT = 'OPEN TO WORK • DATA ANALYST • POWER BI • PYTHON • TABLEAU • ';
const VIDEO_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/devika-kg' },
  { label: 'GitHub', href: 'https://github.com/Devikaah' },
  { label: 'Email', href: 'mailto:devikakg22@gmail.com' },
];

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Contact() {
  const videoRef   = useRef(null);
  const marqueeRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  // HLS Video (flipped)
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

  // GSAP Marquee
  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/maqapaep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" style={{ background: 'hsl(var(--bg))', paddingTop: 80, overflow: 'hidden' }}>

      {/* Video BG */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden', marginBottom: 0 }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) scaleY(-1)',
            minWidth: '100%', minHeight: '100%',
            objectFit: 'cover', opacity: 0.25,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, hsl(var(--bg)), transparent)' }} />

        {/* Marquee */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}>
            {Array(10).fill(MARQUEE_TEXT).map((t, i) => (
              <span key={i} style={{
                fontFamily: 'Instrument Serif, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: 'rgba(232,165,152,0.15)',
                paddingRight: '2rem',
                letterSpacing: '-0.02em',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA Email */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <motion.a
            href="mailto:devikakg22@gmail.com"
            data-hover
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
              color: 'hsl(var(--text))',
              textDecoration: 'none',
              padding: '16px 40px',
              border: '1px solid rgba(232,165,152,0.3)',
              borderRadius: 9999,
              backdropFilter: 'blur(8px)',
              background: 'rgba(123,29,29,0.2)',
              cursor: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #7B1D1D, #E8A598)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(123,29,29,0.2)';
              e.currentTarget.style.borderColor = 'rgba(232,165,152,0.3)';
              e.currentTarget.style.color = 'hsl(var(--text))';
            }}
          >
            devikakg22@gmail.com ↗
          </motion.a>
        </div>
      </div>

      {/* Contact Form + Info */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60 }}>

          {/* Left Info */}
          <motion.div
            variants={inView} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95, color: 'hsl(var(--text))', marginBottom: 20 }}>
              Let's build something<br /><em style={{ color: '#E8A598' }}>data-driven</em> together
            </h2>
            <p style={{ fontSize: 14, color: 'hsl(var(--muted))', lineHeight: 1.8, marginBottom: 32, maxWidth: 360 }}>
              I'm actively looking for Data Analyst opportunities. Open to full-time roles, internships, and freelance projects.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉', label: 'Email', val: 'devikakg22@gmail.com', href: 'mailto:devikakg22@gmail.com' },
                { icon: '📍', label: 'Location', val: 'Kochi, Kerala, India', href: null },
                { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/devika-kg', href: 'https://linkedin.com/in/devika-kg' },
              ].map(item => (
                <motion.a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-hover
                  whileHover={{ x: 6, borderColor: '#E8A598' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    background: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--stroke))',
                    borderRadius: 12, textDecoration: 'none',
                    cursor: item.href ? 'none' : 'default',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(232,165,152,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted))', fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: 'hsl(var(--text))', fontWeight: 500 }}>{item.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={inView} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              padding: 32,
              background: 'hsl(var(--surface))',
              border: '1px solid hsl(var(--stroke))',
              borderRadius: 20,
            }}
          >
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16, textAlign: 'center', padding: '40px 0' }}>
                <span style={{ fontSize: 48 }}>🎉</span>
                <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.5rem', color: 'hsl(var(--text))' }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: 'hsl(var(--muted))' }}>I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  data-hover
                  style={{ padding: '10px 24px', background: 'linear-gradient(90deg, #7B1D1D, #E8A598)', border: 'none', borderRadius: 9999, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'none' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.4rem', color: 'hsl(var(--text))', marginBottom: 8 }}>Send a Message</h3>
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted))', fontWeight: 700, display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input
                      type={f.type} name={f.name} value={form[f.name]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      placeholder={f.placeholder} required
                      style={{ width: '100%', padding: '12px 16px', background: 'hsl(var(--bg))', border: '1px solid hsl(var(--stroke))', borderRadius: 10, color: 'hsl(var(--text))', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }}
                      onFocus={e => e.target.style.borderColor = '#E8A598'}
                      onBlur={e => e.target.style.borderColor = 'hsl(var(--stroke))'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted))', fontWeight: 700, display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity..." rows={4} required
                    style={{ width: '100%', padding: '12px 16px', background: 'hsl(var(--bg))', border: '1px solid hsl(var(--stroke))', borderRadius: 10, color: 'hsl(var(--text))', fontSize: 14, outline: 'none', resize: 'none', fontFamily: 'Inter, sans-serif' }}
                    onFocus={e => e.target.style.borderColor = '#E8A598'}
                    onBlur={e => e.target.style.borderColor = 'hsl(var(--stroke))'}
                  />
                </div>
                {status === 'error' && <p style={{ fontSize: 13, color: '#ef4444' }}>⚠️ Something went wrong. Try emailing directly.</p>}
                <button
                  type="submit"
                  data-hover
                  disabled={status === 'sending'}
                  style={{ padding: '14px', background: 'linear-gradient(90deg, #7B1D1D, #E8A598)', border: 'none', borderRadius: 10, color: 'white', fontSize: 14, fontWeight: 600, cursor: 'none', transition: 'opacity 0.2s', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid hsl(var(--stroke))', paddingTop: 24, paddingBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 18, color: 'hsl(var(--text))' }}>Devika KG</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="animate-pulse-dot" style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }} />
            <span style={{ fontSize: 12, color: 'hsl(var(--muted))' }}>Available for projects</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" data-hover
                style={{ fontSize: 13, color: 'hsl(var(--muted))', textDecoration: 'none', transition: 'color 0.3s', cursor: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8A598'}
                onMouseLeave={e => e.currentTarget.style.color = 'hsl(var(--muted))'}
              >
                {s.label}
              </a>
            ))}
          </div>
          <span style={{ fontSize: 12, color: 'hsl(var(--muted))' }}>© 2026 Devika KG</span>
        </div>
      </div>
    </section>
  );
}
