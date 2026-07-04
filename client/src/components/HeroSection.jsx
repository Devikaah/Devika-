import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnet from './Magnet.jsx';
import FadeIn from './FadeIn.jsx';

const NAV = ['About', 'Projects', 'Skills', 'Contact'];
const ROLES = ['Data Analyst', 'BI Developer', 'Dashboard Designer'];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }, 2200);

    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: '#0C0C0C',
      }}
    >
      {/* ================= NAVBAR ================= */}
      <FadeIn delay={0} y={-20}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 40px 0',
            position: 'relative',
            zIndex: 200,
          }}
        >
          {NAV.map((link) => (
            <button
              key={link}
              data-hover
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                color: '#D7E2EA',
                fontFamily: 'Kanit, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(.8rem,1.4vw,1.4rem)',
                textTransform: 'uppercase',
                letterSpacing: '.1em',
                cursor: 'none',
                transition: '.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '.5')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* ================= HEADING (Above Image) ================= */}
      {/* ================= HEADING (Moved Up) ================= */}
<div
  style={{
    position: 'absolute',
    top: '16%',              // Move heading upward (adjust between 12%-20%)
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: 100,             // Above image
    pointerEvents: 'none',
  }}
>
  <FadeIn delay={0.15} y={40}>
    <div
      style={{
        overflow: 'hidden',
        padding: '0 20px',
      }}
    >
      <h1
        className="hero-heading"
        style={{
          color: '#F5F5F5',
          fontFamily: 'Kanit, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(13vw,17vw,18vw)',
          textTransform: 'uppercase',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          margin: 0,
          userSelect: 'none',
          mixBlendMode: 'screen',
        }}
      >
        DEVIKA KG
      </h1>
    </div>
  </FadeIn>
</div>

      {/* ================= PROFILE IMAGE (Behind Heading) ================= */}
     {/* ================= PROFILE IMAGE ================= */}
<div
  style={{
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    transform: 'translateX(-50%)',
    zIndex: 5,
  }}
>
  <FadeIn delay={0.6} y={30}>
    <Magnet padding={150} strength={3}>
      <img
        src="/images/profile.jpg"
        alt="Devika KG"
        style={{
          width: 'clamp(170px,22vw,300px)',
          height: 'clamp(250px,35vw,430px)',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '12px 12px 0 0',
          display: 'block',
          filter: 'grayscale(15%)',
        }}
      />
    </Magnet>
  </FadeIn>
</div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 40px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 150,
        }}
      >
        <FadeIn delay={0.35} y={20}>
          <div style={{ maxWidth: 230 }}>
            <p
              style={{
                color: '#D7E2EA',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '.05em',
                lineHeight: 1.5,
                fontSize: 'clamp(.7rem,1.2vw,1rem)',
              }}
            >
              A{' '}
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontWeight: 700,
                  color: '#BBCCD7',
                  display: 'inline-block',
                }}
              >
                {ROLES[roleIdx]}
              </motion.span>{' '}
              driven by crafting clear insights from complex data.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                color: '#888',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                }}
              />
              Open to Work
            </div>

            <a
              href="mailto:devikakg22@gmail.com"
              data-hover
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
                color: '#fff',
                background:
                  'linear-gradient(123deg,#18011F 7%,#6B1D1D 37%,#3D1B4A 72%,#8B2E00 100%)',
                fontFamily: 'Kanit,sans-serif',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                fontSize: 'clamp(.65rem,1vw,.9rem)',
                transition: '.3s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .hero-heading{
          font-family:'Kanit',sans-serif;
        }

        @media (max-width:768px){

          nav{
            padding:20px;
          }

          .hero-heading{
            font-size:22vw !important;
          }

        }
      `}</style>
    </section>
  );
}