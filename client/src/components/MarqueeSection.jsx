import React, { useEffect, useRef, useState } from 'react';

const ROW1 = [
  '/images/sports-full.png',
  '/images/dairy-dashboard.png',
  '/images/sports-trend.png',
  '/images/curezy-1.jpg',
  '/images/curezy-3.jpg',
  '/images/sports-brand.png',
  '/images/dairy-dashboard.png',
  '/images/curezy-4.jpg',
  '/images/sports-product.png',
  '/images/curezy-2.jpg',
  '/images/sports-full.png',
];

const ROW2 = [
  '/images/dairy-dashboard.png',
  '/images/curezy-1.jpg',
  '/images/sports-trend.png',
  '/images/curezy-2.jpg',
  '/images/sports-full.png',
  '/images/sports-brand.png',
  '/images/curezy-3.jpg',
  '/images/dairy-dashboard.png',
  '/images/sports-product.png',
  '/images/curezy-4.jpg',
];

export default function MarqueeSection() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      setOffset(val);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageStyle = {
    width: '300px',      // Reduced from 420px
    height: '190px',     // Reduced from 270px
    borderRadius: '12px',
    objectFit: 'cover',
    objectPosition: 'top',
    flexShrink: 0,
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0C0C0C',
        padding: 'clamp(50px, 8vw, 120px) 0 30px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {[...ROW1, ...ROW1, ...ROW1].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              style={imageStyle}
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {[...ROW2, ...ROW2, ...ROW2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              style={imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}