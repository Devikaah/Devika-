import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/maqapaep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="section-line" />
          <p className="section-subtitle">
            Have a project in mind or want to hire me? I'd love to hear from you.
          </p>
        </div>

        <div ref={ref} className={`contact-grid reveal ${visible ? 'visible' : ''}`}>
          {/* Left: Info */}
          <div className="contact-info">
            <div className="glass-card info-card">
              <h3>Let's build something <span>data-driven</span> together 🚀</h3>
              <p>
                I'm actively looking for Data Analyst opportunities where I can contribute my skills in Power BI, Python, and data visualization. Open to full-time roles, internships, and freelance projects.
              </p>
              <div className="contact-methods">
                <a href="mailto:devikakg22@gmail.com" className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-text">
                    <span className="method-label">Email</span>
                    <span className="method-value">devikakg22@gmail.com</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/devika-kg" target="_blank" rel="noreferrer" className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-text">
                    <span className="method-label">LinkedIn</span>
                    <span className="method-value">linkedin.com/in/devika-kg</span>
                  </div>
                </a>
                <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer" className="contact-method">
                  <div className="method-icon">🐙</div>
                  <div className="method-text">
                    <span className="method-label">GitHub</span>
                    <span className="method-value">github.com/Devikaah</span>
                  </div>
                </a>
                <div className="contact-method no-link">
                  <div className="method-icon">📍</div>
                  <div className="method-text">
                    <span className="method-label">Location</span>
                    <span className="method-value">Kochi, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card contact-form-card">
            <h3 className="form-heading">Send a Message</h3>
            <p className="form-note">
              💡 <strong>Setup note:</strong> Replace <code>YOUR_FORM_ID</code> in Contact.jsx with your{' '}
              <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>Formspree</a> ID.
            </p>
            {status === 'success' ? (
              <div className="form-success">
                <span>🎉</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">⚠️ Something went wrong. Please try emailing directly.</p>
                )}
                <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-bracket">&lt;</span>
            <span>DKG</span>
            <span className="logo-bracket"> /&gt;</span>
          </div>
          <p className="footer-copy">
            © 2026 Devika KG. Crafted with 💙 and data.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/Devikaah" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/devika-kg" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:devikakg22@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 28px;
          align-items: start;
        }
        .info-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .info-card h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .info-card h3 span { color: var(--accent-cyan); }
        .info-card > p { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }
        .contact-methods { display: flex; flex-direction: column; gap: 12px; }
        .contact-method {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .contact-method:not(.no-link):hover {
          border-color: var(--glass-border);
          background: var(--accent-cyan-dim);
          transform: translateX(6px);
        }
        .method-icon { font-size: 22px; flex-shrink: 0; }
        .method-text { display: flex; flex-direction: column; }
        .method-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); font-weight: 600; }
        .method-value { font-size: 14px; color: var(--text-secondary); font-weight: 500; }

        .contact-form-card { padding: 36px; }
        .form-heading {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .form-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 24px;
          padding: 10px 14px;
          background: rgba(0,212,255,0.05);
          border: 1px dashed rgba(0,212,255,0.15);
          border-radius: var(--radius-sm);
          line-height: 1.6;
        }
        .form-note code {
          background: rgba(0,212,255,0.1);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11px;
          color: var(--accent-cyan);
        }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 13px; font-weight: 600; color: var(--text-secondary); }
        .form-group input,
        .form-group textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
          resize: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-cyan);
          background: rgba(0, 212, 255, 0.04);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: var(--text-muted); }
        .form-error { font-size: 13px; color: #ff6b6b; }
        .form-submit { width: 100%; justify-content: center; }
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 40px 0;
        }
        .form-success span { font-size: 48px; }
        .form-success h4 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .form-success p { color: var(--text-secondary); font-size: 14px; }

        /* Footer */
        .footer {
          margin-top: 80px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
        }
        .footer-copy { font-size: 13px; color: var(--text-muted); }
        .footer-socials { display: flex; gap: 20px; }
        .footer-socials a {
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-socials a:hover { color: var(--accent-cyan); }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  );
}
