/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Default language is English as requested ("buatkan bahasa inggris awalan untuk web")
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  // Real Profile Photos
  const heroImage = portfolioData.hero.defaultHeroImage;
  const aboutImage = portfolioData.about.defaultAboutImage;

  const handleToggleLanguage = (lang: 'en' | 'id') => {
    setLanguage(lang);
  };

  // Active section scroll tracking
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden maroon-canvas-bg text-white flex flex-col justify-between selection:bg-[#FF003C] selection:text-white">
      
      {/* Outer Atmospheric Red Depth Bloom */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF003C]/20 blur-[140px] rounded-full" 
        />
        <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] bg-[#8B001F]/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#FF003C]/15 blur-[150px] rounded-full" />
      </div>

      {/* Main Website Canvas Container (Centered Jet Black Container #050505 matching Reference) */}
      <div className="relative z-10 w-full py-4 sm:py-8 md:py-12 px-3 sm:px-6 lg:px-10 flex justify-center">
        <motion.main 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl bg-[#050505] rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border border-[#8B001F]/50 shadow-[0_20px_90px_rgba(0,0,0,0.85),0_0_40px_rgba(255,0,60,0.25)] overflow-hidden relative"
        >
          {/* Top Neon Red Accent Rim */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF003C] to-transparent shadow-[0_0_15px_#FF003C]" />

          {/* Sticky Navigation Bar */}
          <Navbar 
            activeSection={activeSection} 
            language={language}
            onToggleLanguage={handleToggleLanguage}
          />

          {/* 1. Hero Section (Clean English) */}
          <HeroSection 
            heroImage={heroImage} 
            language={language}
          />

          {/* 2. About Me Section (Clean English without Indonesian subtitle & without Download CV button) */}
          <AboutSection 
            aboutImage={aboutImage}
            language={language}
          />

          {/* 3. My Skills Section */}
          <SkillsSection language={language} />

          {/* 4. My Services Section */}
          <ServicesSection language={language} />

          {/* 5. Contact Section */}
          <ContactSection language={language} />

          {/* Footer */}
          <Footer />

        </motion.main>
      </div>

    </div>
  );
}
