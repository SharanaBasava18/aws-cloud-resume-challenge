import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import Education from './components/ui/Education';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Certifications from './components/ui/Certifications';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const sections = mainRef.current.querySelectorAll('.section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      
      {/* HTML Content Overlays */}
      <main className="content-container" ref={mainRef}>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
      </main>
    </div>
  );
}

export default App;
