import React, { useState } from 'react';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay" />
      <Cursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Work />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
