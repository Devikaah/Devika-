import React, { useRef, useState } from 'react';

export default function Magnet({ children, padding = 100, strength = 3 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setTransform({ x: dx / strength, y: dy / strength });
  };

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => {
    setActive(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <div style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}>
        {children}
      </div>
    </div>
  );
}
