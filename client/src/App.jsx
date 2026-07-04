import React, { useState } from 'react';
import Cursor from './components/Cursor.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import HeroSection from './components/HeroSection.jsx';
import MarqueeSection from './components/MarqueeSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <Cursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}
