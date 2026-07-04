import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Analyze', 'Visualize', 'Insight', 'Data'];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2700;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCount(Math.floor(eased * 100));
      if (progress < 1) requestAnimationFrame(tick);
      else setTimeout(() => { setHiding(true); setTimeout(onComplete, 700); }, 400);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      animate={hiding ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#0C0C0C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ position: 'absolute', top: 32, left: 40, fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.3em', fontFamily: 'Kanit, sans-serif' }}
      >
        Portfolio 2026
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.span
          key={wordIdx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35 }}
          style={{ fontFamily: 'Kanit, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, color: 'rgba(187,204,215,0.8)', display: 'block', textTransform: 'uppercase', letterSpacing: '-0.02em' }}
        >
          {WORDS[wordIdx]}
        </motion.span>
      </AnimatePresence>

      <div style={{ position: 'absolute', bottom: 48, right: 40, fontFamily: 'Kanit, sans-serif', fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
        {String(count).padStart(3, '0')}
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#1a1a1a' }}>
        <div style={{ height: '100%', width: count + '%', background: 'linear-gradient(90deg, #646973, #BBCCD7)', transition: 'width 0.05s linear', boxShadow: '0 0 8px rgba(187,204,215,0.4)' }} />
      </div>
    </motion.div>
  );
}
