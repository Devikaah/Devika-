import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn.jsx';

const ABOUT_TEXT = `With hands-on experience in data analytics, I focus on Power BI,
Python, and Tableau to transform raw data into actionable insights.
I truly enjoy working with businesses that want to make smarter decisions and present their best numbers.
Let's build something data-driven together!`;

export default function AboutSection() {
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = ABOUT_TEXT.split('');

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0C0C0C',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Images */}

      <FadeIn
        delay={0.1}
        x={-80}
        style={{
          position: 'absolute',
          top: '4%',
          left: '4%',
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          style={{
            width: 'clamp(80px,12vw,210px)',
            filter: 'hue-rotate(180deg) brightness(.7)',
          }}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '6%',
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          style={{
            width: 'clamp(60px,10vw,180px)',
            filter: 'brightness(.6)',
          }}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        style={{
          position: 'absolute',
          top: '4%',
          right: '4%',
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          style={{
            width: 'clamp(80px,12vw,210px)',
            filter: 'hue-rotate(180deg) brightness(.7)',
          }}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '6%',
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          style={{
            width: 'clamp(80px,12vw,220px)',
            filter: 'brightness(.6)',
          }}
        />
      </FadeIn>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(32px,5vw,56px)',
          maxWidth: 700,
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading"
            style={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontSize: 'clamp(3rem,12vw,120px)',
            }}
          >
            About Me
          </h2>
        </FadeIn>

        <p
          ref={textRef}
          style={{
            color: '#D7E2EA',
            fontWeight: 500,
            lineHeight: 1.8,
            fontSize: 'clamp(1rem,2vw,1.35rem)',
            textAlign: 'center',
          }}
        >
          {chars.map((char, i) => {
            // THIS FIX MAKES NEW LINES WORK
            if (char === '\n') {
              return <br key={i} />;
            }

            const start = i / chars.length;
            const end = (i + 1) / chars.length;

            return (
              <span
                key={i}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <span style={{ opacity: 0 }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>

                <motion.span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: useTransform(
                      scrollYProgress,
                      [start, end],
                      [0.15, 1]
                    ),
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              </span>
            );
          })}
        </p>
                {/* Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            width: '100%',
            marginTop: 8,
          }}
        >
          {[
            { val: 'Kochi, Kerala', label: 'Location' },
            { val: 'BCA 2025', label: 'Education' },
            { val: 'Open to Work', label: 'Status', green: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '16px 12px',
                background: '#111',
                border: '1px solid #1f1f1f',
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
                  fontWeight: 700,
                  color: item.green ? '#22c55e' : '#BBCCD7',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.val}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: '#555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <FadeIn delay={0.2} y={20}>
          <a
            href="mailto:devikakg22@gmail.com"
            data-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 36px',
              borderRadius: 9999,
              background:
                'linear-gradient(123deg, #18011F 7%, #6B1D1D 37%, #3D1B4A 72%, #8B2E00 100%)',
              color: '#fff',
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)',
              textDecoration: 'none',
              outline: '2px solid rgba(187,204,215,0.3)',
              outlineOffset: -3,
              boxShadow:
                '0px 4px 4px rgba(107,29,29,0.25), 4px 4px 12px #3D1B4A inset',
              transition: 'transform 0.2s',
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
        </FadeIn>
      </div>
    </section>
  );
}