import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    window.addEventListener('mousemove', move);

    const update = () => {
      const els = document.querySelectorAll('a, button, [data-hover]');
      els.forEach(el => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    update();
    const ob = new MutationObserver(update);
    ob.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px';
        dotRef.current.style.top = pos.current.y + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
      ob.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 640) return null;

  return (
    <>
      <div ref={dotRef} style={{ position: 'fixed', width: 6, height: 6, background: '#BBCCD7', borderRadius: '50%', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%,-50%)', transition: 'background 0.2s' }} />
      <div ref={ringRef} style={{ position: 'fixed', width: hovered ? 48 : 32, height: hovered ? 48 : 32, border: '1px solid rgba(187,204,215,0.5)', borderRadius: '50%', pointerEvents: 'none', zIndex: 99998, transform: 'translate(-50%,-50%)', transition: 'width 0.3s ease, height 0.3s ease, background 0.3s', background: hovered ? 'rgba(187,204,215,0.08)' : 'transparent' }} />
    </>
  );
}
