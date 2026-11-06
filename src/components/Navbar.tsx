import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  language: 'en' | 'id';
  onToggleLanguage: (lang: 'en' | 'id') => void;
}

export function Navbar({ activeSection, language, onToggleLanguage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: language === 'id' ? 'BERANDA' : 'HOME', href: '#home', id: 'home' },
    { label: language === 'id' ? 'TENTANG' : 'ABOUT', href: '#about', id: 'about' },
    { label: language === 'id' ? 'KEAHLIAN' : 'SKILLS', href: '#skills', id: 'skills' },
    { label: language === 'id' ? 'LAYANAN' : 'SERVICES', href: '#services', id: 'services' },
    { label: language === 'id' ? 'KONTAK' : 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 px-6 sm:px-10 py-5 ${
        isScrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#8B001F]/40 shadow-[0_4px_25px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Desktop Navigation Links - Centered/Left without 'Rahmat' brand text */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs sm:text-sm font-semibold tracking-widest font-heading">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? 'text-[#FF003C] font-bold drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF003C] shadow-[0_0_10px_#FF003C]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Language Switcher (Subtitel Bahasa Indonesia & Inggris) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#0d0204] p-1 rounded-full border border-[#8B001F]/60 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onToggleLanguage('id')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                language === 'id' 
                  ? 'bg-[#FF003C] text-white shadow-[0_0_10px_rgba(255,0,60,0.5)] font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en' 
                  ? 'bg-[#FF003C] text-white shadow-[0_0_10px_rgba(255,0,60,0.5)] font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg bg-[#8B001F]/30 border border-[#FF003C]/40 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF003C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[#0a0204]/98 border border-[#FF003C]/40 rounded-2xl px-6 py-5 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-sm font-heading tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-2 px-3 rounded-lg transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#FF003C]/20 text-[#FF003C] font-bold border-l-4 border-[#FF003C]' 
                      : 'text-gray-300 hover:text-white hover:bg-[#8B001F]/20'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF003C] shadow-[0_0_6px_#FF003C]" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
