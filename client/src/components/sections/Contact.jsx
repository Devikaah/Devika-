import React, { useState, useEffect } from 'react';

export default function Contact({ active }) {
  const [shown, setShown] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (active) setTimeout(() => setShown(true), 100);
    else setShown(false);
  }, [active]);

  const s = (d) => ({ transitionDelay: d, ...(shown && { transform: 'translateY(0)', opacity: 1 }) });

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
    <div className="section-inner contact-inner">
      <div className="section-label">Get In Touch</div>
      <div className="section-num">05</div>

      <div className="contact-layout">
        <div className="contact-left">
          <div className="reveal-wrap">
            <h2 className="reveal-text contact-heading" style={s('0.1s')}>Let's</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text contact-heading contact-heading-out" style={s('0.2s')}>Work</h2>
          </div>
          <div className="reveal-wrap">
            <h2 className="reveal-text contact-heading" style={s('0.3s')}>Together</h2>
          </div>

          <div className="reveal-wrap" style={{ marginTop: 40 }}>
            <p className="reveal-text contact-desc" style={s('0.42s')}>
              Looking for Data Analyst opportunities — full-time roles, internships, or freelance projects. Let's connect!
            </p>
          </div>

          <div className="reveal-wrap" style={{ marginTop: 36 }}>
            <div className="reveal-text contact-links" style={s('0.54s')}>
              <a href="mailto:devikakg22@gmail.com" className="contact-link">
                <span className="link-icon">✉</span>
                <span>devikakg22@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/devika-kg" target="_blank" rel="noreferrer" className="contact-link">
                <span className="link-icon">in</span>
                <span>linkedin.com/in/devika-kg</span>
              </a>
              <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer" className="contact-link">
                <span className="link-icon">gh</span>
                <span>github.com/Devikaah</span>
              </a>
              <div className="contact-link no-hover">
                <span className="link-icon">📍</span>
                <span>Kochi, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="reveal-wrap">
            <div className="reveal-text contact-form-wrap" style={s('0.3s')}>
              {status === 'success' ? (
                <div className="success-box">
                  <div className="success-icon">🎉</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! I'll get back to you within 24 hours.</p>
                  <button className="btn btn-dark" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cform">
                  <h3 className="form-title">Send a Message</h3>
                  <div className="field">
                    <label>Name</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" required
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com" required
                    />
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea
                      name="message" value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the opportunity..." rows={5} required
                    />
                  </div>
                  {status === 'error' && <p className="form-err">⚠️ Something went wrong. Try emailing directly.</p>}
                  <button type="submit" className="btn btn-dark form-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <span>© 2026 Devika KG</span>
        <span className="footer-dot" />
        <span>Crafted with care</span>
        <span className="footer-dot" />
        <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/devika-kg" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <style>{`
        .contact-inner { align-items: flex-start; padding-top: 120px; flex-direction: column; justify-content: space-between; }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          width: 100%; max-width: 1200px;
          margin: 0 auto;
          padding-top: 60px;
          flex: 1;
        }
        .contact-heading {
          font-family: var(--font-d);
          font-size: clamp(2.5rem, 5vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--text);
        }
        .contact-heading-out {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }
        .contact-desc {
          font-size: 14px; color: var(--muted);
          line-height: 1.8; max-width: 340px;
        }
        .contact-links { display: flex; flex-direction: column; gap: 12px; }
        .contact-link {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          font-size: 13px; font-weight: 500; color: var(--text);
          transition: all 0.3s var(--ease);
        }
        .contact-link:not(.no-hover):hover {
          border-color: var(--accent);
          transform: translateX(6px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .link-icon {
          width: 32px; height: 32px;
          background: var(--bg-alt);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; color: var(--text);
          flex-shrink: 0;
        }
        .contact-form-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px;
        }
        .form-title {
          font-family: var(--font-d);
          font-size: 20px; font-weight: 700;
          color: var(--text); margin-bottom: 28px;
        }
        .cform { display: flex; flex-direction: column; gap: 18px; }
        .field { display: flex; flex-direction: column; gap: 6px; }
        .field label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
        .field input, .field textarea {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 16px;
          font-family: var(--font-b); font-size: 14px;
          color: var(--text); outline: none; resize: none;
          transition: border-color 0.3s;
        }
        .field input:focus, .field textarea:focus {
          border-color: var(--accent);
        }
        .field input::placeholder, .field textarea::placeholder { color: rgba(17,17,17,0.3); }
        .form-err { font-size: 13px; color: #dc2626; }
        .form-btn { width: 100%; justify-content: center; }
        .success-box {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          gap: 16px; padding: 40px 20px;
        }
        .success-icon { font-size: 48px; }
        .success-box h3 { font-family: var(--font-d); font-size: 1.5rem; font-weight: 700; }
        .success-box p { font-size: 14px; color: var(--muted); }
        .contact-footer {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 0 0;
          font-size: 12px; color: var(--muted);
          border-top: 1px solid var(--border);
          width: 100%; max-width: 1200px; margin: 0 auto;
          flex-wrap: wrap;
        }
        .contact-footer a { color: var(--muted); text-decoration: none; transition: color 0.3s; }
        .contact-footer a:hover { color: var(--text); }
        .footer-dot { width: 3px; height: 3px; background: var(--border); border-radius: 50%; }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; gap: 32px; overflow-y: auto; max-height: calc(100vh - 180px); }
        }
      `}</style>
    </div>
  );
}
