import React, { useState, useEffect } from 'react';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    navLinks.forEach(link => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">DKG</span>
          <span className="logo-bracket"> /&gt;</span>
        </div>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link}>
              <button
                className={`nav-link ${active === link.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/images/DEVIKA_KG_Resume.pdf"
          download
          className="nav-resume-btn"
        >
          Resume ↓
        </a>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button key={link} className="mobile-link" onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
        <a href="#contact" className="btn-primary" style={{ marginTop: 12 }} onClick={() => setMenuOpen(false)}>
          Hire Me
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(5, 13, 26, 0.88);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
          padding: 14px 0;
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.4);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          cursor: pointer;
          user-select: none;
          margin-right: auto;
        }
        .logo-bracket { color: var(--accent-cyan); }
        .logo-name { color: var(--text-primary); margin: 0 2px; }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 4px;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 8px 14px;
          border-radius: 100px;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-cyan);
        }
        .nav-link.active::after, .nav-link:hover::after {
          width: 60%;
        }
        .nav-resume-btn {
          padding: 9px 22px;
          background: var(--accent-cyan-dim);
          border: 1px solid var(--glass-border);
          color: var(--accent-cyan);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nav-resume-btn:hover {
          background: var(--accent-cyan);
          color: var(--bg-primary);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 20px 24px;
          background: rgba(5, 13, 26, 0.97);
          border-top: 1px solid var(--glass-border);
        }
        .mobile-menu.open { display: flex; }
        .mobile-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: color 0.3s;
        }
        .mobile-link:hover { color: var(--accent-cyan); }

        @media (max-width: 768px) {
          .nav-links, .nav-resume-btn { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
}
