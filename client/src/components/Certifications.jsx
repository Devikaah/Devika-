import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    id: 1,
    name: 'Business and Data Analytics Internship',
    org: 'YBI Foundation',
    specialization: 'Data Analytics',
    year: 'May 2025',
    credentialId: '706KEH9GYQ06U',
    image: '/images/cert-ybi.png',
    color: '#00d4ff',
    icon: '📊',
    verified: true,
  },
];

const extraCerts = [
  { name: 'BCA — Ethical Hacking & Cloud Computing', org: "St. Paul's College, Bangalore", year: '2025', icon: '🔐' },
  { name: 'Data Analyst Internship', org: 'Tecolas Technologies', year: '2025 – Present', icon: '💼' },
];

export default function Certifications() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">Certifications & <span>Achievements</span></h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`certs-layout reveal ${visible ? 'visible' : ''}`}>
          {/* Featured Certificate */}
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card cert-featured" style={{ '--cert-color': cert.color }}>
              <div className="cert-image-side">
                <img src={cert.image} alt={cert.name} className="cert-img" />
                <div className="cert-img-overlay">
                  <span className="verified-badge">✅ ISO Certified</span>
                </div>
              </div>
              <div className="cert-info-side">
                <div className="cert-org-logo">
                  <span>{cert.icon}</span>
                  <span>{cert.org}</span>
                </div>
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-spec">
                  Specialization: <strong>{cert.specialization}</strong>
                </div>
                <div className="cert-details">
                  <div className="cert-detail-item">
                    <span className="detail-label">Issued</span>
                    <span className="detail-value">{cert.year}</span>
                  </div>
                  <div className="cert-detail-item">
                    <span className="detail-label">Credential ID</span>
                    <span className="detail-value credential-id">{cert.credentialId}</span>
                  </div>
                  <div className="cert-detail-item">
                    <span className="detail-label">Issuer</span>
                    <span className="detail-value">{cert.org}</span>
                  </div>
                </div>
                <div className="cert-actions">
                  <span className="cert-verified">
                    <span>🛡️</span> Verified Certificate
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Credentials */}
          <div className="extra-certs">
            <h3 className="extra-title">Additional Credentials</h3>
            <div className="extra-grid">
              {extraCerts.map((c, i) => (
                <div
                  key={i}
                  className="glass-card extra-cert-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="extra-icon">{c.icon}</span>
                  <div className="extra-text">
                    <h4>{c.name}</h4>
                    <p>{c.org}</p>
                    <span className="extra-year">{c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .certs-layout { display: flex; flex-direction: column; gap: 32px; }
        .cert-featured {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0;
          overflow: hidden;
          border-color: rgba(0, 212, 255, 0.2);
        }
        .cert-image-side {
          position: relative;
          overflow: hidden;
          min-height: 300px;
        }
        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }
        .cert-featured:hover .cert-img { transform: scale(1.03); }
        .cert-img-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
        }
        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(5, 13, 26, 0.85);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-cyan);
          backdrop-filter: blur(8px);
        }
        .cert-info-side { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
        .cert-org-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-cyan);
        }
        .cert-org-logo span:first-child { font-size: 24px; }
        .cert-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .cert-spec {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .cert-spec strong { color: var(--accent-cyan); }
        .cert-details { display: flex; flex-direction: column; gap: 10px; }
        .cert-detail-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .detail-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          font-weight: 600;
        }
        .detail-value {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .credential-id {
          font-family: monospace;
          color: var(--accent-cyan);
          font-size: 13px;
          letter-spacing: 1px;
        }
        .cert-actions { margin-top: auto; }
        .cert-verified {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .extra-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .extra-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .extra-cert-card {
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .extra-icon { font-size: 28px; flex-shrink: 0; }
        .extra-text h4 {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .extra-text p { font-size: 13px; color: var(--text-secondary); margin-bottom: 6px; }
        .extra-year {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-cyan);
          padding: 2px 10px;
          background: var(--accent-cyan-dim);
          border-radius: 100px;
        }

        @media (max-width: 800px) {
          .cert-featured { grid-template-columns: 1fr; }
          .cert-image-side { min-height: 220px; }
          .extra-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
