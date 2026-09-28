import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import Projects from './components/ui/Projects';
import CloudArchitecture from './components/ui/CloudArchitecture';
import Certifications from './components/ui/Certifications';
import Education from './components/ui/Education';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
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
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="content-container" ref={mainRef}>
        <Hero />
        <Projects />
        <Certifications />
        <Education />
        <CloudArchitecture />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
