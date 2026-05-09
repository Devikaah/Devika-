import React from 'react';

const SECTIONS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Nav({ current, total, goTo }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => goTo(0)}>
        DK<span>G</span>
      </div>

      <ul className="nav-links">
        {SECTIONS.map((s, i) => (
          <li key={s}>
            <button
              className={`nav-btn ${current === i ? 'active' : ''}`}
              onClick={() => goTo(i)}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-progress">
        <span>{String(current + 1).padStart(2, '0')}</span>
        <div className="nav-progress-bar">
          <div className="nav-progress-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    </nav>
  );
}
