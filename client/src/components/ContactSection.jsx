import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import FadeIn from './FadeIn.jsx';

const MARQUEE_TEXT = 'OPEN TO WORK • DATA ANALYST • POWER BI • PYTHON • TABLEAU • KOCHI • ';

export default function ContactSection() {
  const marqueeRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
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

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#111',
    border: '1px solid #222',
    borderRadius: 8,
    color: '#D7E2EA',
    fontFamily: 'Kanit, sans-serif',
    fontSize: 15,
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ background: '#0C0C0C', paddingTop: 0 }}>
      {/* Marquee Banner */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', display: 'flex', alignItems: 'center', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}>
          {Array(10).fill(MARQUEE_TEXT).map((t, i) => (
            <span key={i} style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'rgba(187,204,215,0.06)', textTransform: 'uppercase', letterSpacing: '-0.02em', paddingRight: '2rem' }}>{t}</span>
          ))}
        </div>
        {/* CTA email centered */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <a
            href="mailto:devikakg22@gmail.com"
            data-hover
            style={{ fontFamily: 'Kanit, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#D7E2EA', textDecoration: 'none', padding: '14px 40px', border: '1px solid #333', borderRadius: 9999, backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)', transition: 'all 0.3s', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#BBCCD7'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(187,204,215,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#D7E2EA'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
          >
            devikakg22@gmail.com ↗
          </a>
        </div>
      </div>

      {/* Form + Info */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

          {/* Left */}
          <FadeIn delay={0} y={30}>
            <div>
              <h2 className="hero-heading" style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9, fontSize: 'clamp(2.5rem, 7vw, 7rem)', marginBottom: 24 }}>
                Let&apos;s<br />Work<br />Together
              </h2>
              <p style={{ color: '#555', fontSize: 14, fontWeight: 300, lineHeight: 1.8, marginBottom: 32, maxWidth: 360 }}>
                Looking for Data Analyst opportunities — full-time roles, internships, and freelance projects. Let's connect!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '✉', label: 'Email', val: 'devikakg22@gmail.com', href: 'mailto:devikakg22@gmail.com' },
                  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/devika-kg', href: 'https://linkedin.com/in/devika-kg' },
                  { icon: '🐙', label: 'GitHub', val: 'github.com/Devikaah', href: 'https://github.com/Devikaah' },
                  { icon: '📍', label: 'Location', val: 'Kochi, Kerala, India', href: null },
                ].map(item => (
                  <a
                    key={item.label}
                    href={item.href || undefined}
                    target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
                    rel="noreferrer"
                    data-hover
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: '#111', border: '1px solid #1a1a1a', borderRadius: 10, textDecoration: 'none', transition: 'border-color 0.3s', cursor: item.href ? 'none' : 'default' }}
                    onMouseEnter={e => { if (item.href) e.currentTarget.style.borderColor = '#BBCCD7'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginBottom: 2, fontWeight: 600 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: '#888', fontWeight: 400 }}>{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Form */}
          <FadeIn delay={0.15} y={30}>
            <div style={{ padding: 28, background: '#111', border: '1px solid #1a1a1a', borderRadius: 16 }}>
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16, textAlign: 'center', padding: '40px 0' }}>
                  <span style={{ fontSize: 48 }}>🎉</span>
                  <h3 style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#D7E2EA' }}>Message Sent!</h3>
                  <p style={{ fontSize: 13, color: '#555' }}>I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    data-hover
                    style={{ padding: '10px 24px', background: '#D7E2EA', color: '#0C0C0C', border: 'none', borderRadius: 9999, fontFamily: 'Kanit, sans-serif', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h3 style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#D7E2EA', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Send a Message
                  </h3>
                  {[
                    { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginBottom: 6, fontWeight: 600 }}>{f.label}</label>
                      <input
                        type={f.type}
                        value={form[f.name]}
                        onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                        placeholder={f.placeholder}
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#BBCCD7'}
                        onBlur={e => e.target.style.borderColor = '#222'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginBottom: 6, fontWeight: 600 }}>Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the opportunity..."
                      rows={4}
                      required
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = '#BBCCD7'}
                      onBlur={e => e.target.style.borderColor = '#222'}
                    />
                  </div>
                  {status === 'error' && <p style={{ fontSize: 13, color: '#ef4444' }}>⚠️ Something went wrong. Try emailing directly.</p>}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    data-hover
                    style={{ padding: '14px', background: '#D7E2EA', color: '#0C0C0C', border: 'none', borderRadius: 8, fontFamily: 'Kanit, sans-serif', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'opacity 0.2s', opacity: status === 'sending' ? 0.6 : 1 }}
                    onMouseEnter={e => e.currentTarget.style.background = '#BBCCD7'}
                    onMouseLeave={e => e.currentTarget.style.background = '#D7E2EA'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, fontSize: 20, color: '#D7E2EA', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>Devika KG</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="pulse-dot" style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ fontSize: 12, color: '#444', fontFamily: 'Kanit, sans-serif' }}>Available for projects</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { l: 'LinkedIn', h: 'https://linkedin.com/in/devika-kg' },
              { l: 'GitHub', h: 'https://github.com/Devikaah' },
              { l: 'Email', h: 'mailto:devikakg22@gmail.com' },
            ].map(s => (
              <a key={s.l} href={s.h} target={s.h.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" data-hover
                style={{ fontSize: 13, color: '#333', textDecoration: 'none', fontFamily: 'Kanit, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D7E2EA'}
                onMouseLeave={e => e.currentTarget.style.color = '#333'}
              >
                {s.l}
              </a>
            ))}
          </div>
          <span style={{ fontSize: 12, color: '#222', fontFamily: 'Kanit, sans-serif' }}>© 2026 Devika KG</span>
        </div>
      </div>
    </section>
  );
}
