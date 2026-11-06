import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';
import { ParticleCanvas3D } from './ParticleCanvas3D';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  heroImage: string;
  language: 'en' | 'id';
}

export function HeroSection({ heroImage, language }: HeroSectionProps) {
  // Typing animation for Web Developer
  const fullProfText = language === 'id' ? "SAYA WEB DEVELOPER" : "I'M A WEB DEVELOPER";
  const [displayedProf, setDisplayedProf] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0);
    setDisplayedProf('');
    setIsDeleting(false);
  }, [language, fullProfText]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullProfText.length) {
        setDisplayedProf(fullProfText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullProfText.length) {
        setTimeout(() => setIsDeleting(true), 2400);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedProf(fullProfText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullProfText]);

  // 3D Mouse Parallax
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const photoTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const photoTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);
  const ringTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const ringTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCollaborateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pure single description based on selected language (No clutter subtitle)
  const currentDescription = language === 'id' ? portfolioData.hero.descriptionId : portfolioData.hero.description;

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[75vh] lg:min-h-[82vh] px-6 sm:px-10 pt-4 pb-12 flex flex-col justify-between overflow-hidden card-3d-perspective"
    >
      {/* 3D Floating Particles */}
      <ParticleCanvas3D />

      {/* Main Grid: Left Typo + Center/Right 3D Neon Ring & Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center flex-1 z-20">
        
        {/* Left Column: Heading, Subtitle, Description, CTA Button */}
        <div className="lg:col-span-5 flex flex-col items-start text-left z-30 pt-4 lg:pt-0">
          
          {/* Main Title: HI, I'M RAHMAT MULYADI FADILLAH */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.08]">
              {language === 'id' ? "HALO, SAYA " : "HI, I'M "}
              <span className="text-[#FF003C] drop-shadow-[0_0_20px_rgba(255,0,60,0.8)]">RAHMAT</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-200 block mt-1 tracking-normal">
                MULYADI FADILLAH
              </span>
            </h1>
          </motion.div>

          {/* Profession: Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-5 inline-flex items-center"
          >
            <span className="font-heading font-bold text-sm sm:text-base tracking-widest text-[#FF003C] uppercase bg-[#FF003C]/10 border border-[#FF003C]/30 px-3.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(255,0,60,0.2)]">
              {displayedProf}
              <span className="inline-block w-2 h-4 bg-[#FF003C] ml-1.5 animate-pulse" />
            </span>
          </motion.div>

          {/* Clean English Hero Description (Without Indonesian secondary sentence) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-8 max-w-md"
          >
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
              {currentDescription}
            </p>
          </motion.div>

          {/* Primary Button: LET'S COLLABORATE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.button
              type="button"
              onClick={handleCollaborateClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-[#FF003C] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-neon-button transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>{language === 'id' ? 'MARI BERKOLABORASI' : "LET'S COLLABORATE"}</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

        </div>

        {/* Center / Right Column: Massive Red Neon Ring & 3D Parallax Portrait */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-0">
          <motion.div 
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-[320px] h-[360px] sm:w-[420px] sm:h-[460px] md:w-[460px] md:h-[500px] flex items-center justify-center"
          >
            
            {/* The Big Red Neon Ring matching reference */}
            <motion.div 
              style={{ x: ringTranslateX, y: ringTranslateY }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] md:w-[420px] md:h-[420px] rounded-full border-[12px] sm:border-[16px] md:border-[20px] neon-ring-3d pointer-events-none z-10"
            />

            {/* Glowing red back-light core */}
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#FF003C]/25 blur-[60px] pointer-events-none" />

            {/* Floating Portrait Assembly */}
            <motion.div 
              style={{ x: photoTranslateX, y: photoTranslateY }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[240px] sm:w-[310px] md:w-[340px] h-[320px] sm:h-[400px] md:h-[440px] flex items-end justify-center"
            >
              {/* Profile Image with subtle red rim glow */}
              <img
                src={heroImage}
                alt="Rahmat Mulyadi Fadillah"
                className="w-full h-full object-cover object-top rounded-b-[40px] filter contrast-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/profile_a5a4fe06.jpeg';
                }}
              />

              {/* Bottom Dark Gradient Fade matching reference container edge */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
            </motion.div>

          </motion.div>
        </div>

        {/* Far Right Sidebar Strip (Vertical divider, social buttons) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-end h-full pb-8 text-xs text-gray-400 z-30">
          
          {/* Vertical line indicator */}
          <div className="w-[1px] h-20 bg-[#8B001F] mb-6 relative">
            <span className="absolute bottom-0 -left-[3px] w-2 h-2 rounded-full bg-[#FF003C] shadow-[0_0_6px_#FF003C]" />
          </div>

          {/* Vertical Social Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/6281339638842"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#0d0204] hover:bg-[#FF003C] text-gray-300 hover:text-white border border-[#FF003C]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_10px_rgba(255,0,60,0.3)]"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/rhmtmlydifdllh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#0d0204] hover:bg-[#FF003C] text-gray-300 hover:text-white border border-[#FF003C]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_10px_rgba(255,0,60,0.3)]"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Bar: Stats matching reference */}
      <div className="flex items-center justify-between gap-6 pt-6 border-t border-[#8B001F]/30 z-20">
        
        {/* Left Metrics matching reference */}
        <div className="flex items-center gap-8 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-black font-heading text-white">
              +10
            </div>
            <div className="text-[11px] text-gray-400 tracking-wider uppercase font-medium">
              {language === 'id' ? 'Konsep Web Selesai' : 'Web Concepts Built'}
            </div>
          </div>

          <div className="w-[1px] h-8 bg-[#8B001F]/40" />

          <div>
            <div className="text-2xl sm:text-3xl font-black font-heading text-white">
              +100%
            </div>
            <div className="text-[11px] text-gray-400 tracking-wider uppercase font-medium">
              {language === 'id' ? 'Standar Kode Bersih' : 'Clean Code Standard'}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
