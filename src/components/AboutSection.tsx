import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutSectionProps {
  aboutImage: string;
  language: 'en' | 'id';
}

export function AboutSection({ 
  aboutImage, 
  language,
}: AboutSectionProps) {
  // Description based on active language, without duplicate secondary subtitle
  const descriptionText = language === 'id' 
    ? portfolioData.about.descriptionId 
    : portfolioData.about.description;

  return (
    <section id="about" className="py-24 px-6 sm:px-10 relative border-t border-[#8B001F]/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center md:text-left"
        >
          <div className="inline-block relative">
            <span className="text-xs font-bold tracking-widest text-[#FF003C] uppercase block mb-1">
              {language === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-wide">
              {language === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}
            </h2>
            <div className="h-1 w-14 bg-[#FF003C] rounded-full mt-2 mx-auto md:mx-0 shadow-[0_0_12px_#FF003C]" />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left: 3D Floating Profile Photo with Glowing Red Halo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              
              {/* Rotating Red Glow Ring behind the photo */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[#FF003C]/40 pointer-events-none" 
              />
              
              {/* Red Glow Core */}
              <motion.div 
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 bg-[#FF003C]/25 rounded-3xl blur-2xl pointer-events-none" 
              />

              {/* 3D Floating Photo Container */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[#FF003C]/50 bg-black/80 shadow-[0_0_40px_rgba(255,0,60,0.35)] transition-all duration-500 group-hover:border-[#FF003C] group-hover:shadow-[0_0_60px_rgba(255,0,60,0.6)]"
              >
                <img
                  src={aboutImage}
                  alt="Rahmat Mulyadi Fadillah"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/profile_a5a4fe06.jpeg';
                  }}
                />

                {/* Dark Vignette at base */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio and Mission (Clean without Indonesian subtitle block, without Download CV button) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2 tracking-tight">
              Rahmat Mulyadi Fadillah
            </h3>
            <div className="text-sm font-semibold tracking-wider text-[#FF003C] mb-6 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>WEB DEVELOPER · CREATIVE CODER</span>
            </div>

            {/* Clean Bio Description */}
            <div className="mb-8 max-w-xl">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                {descriptionText}
              </p>
            </div>

            {/* Academic Info Strip */}
            <div className="p-4 rounded-xl bg-[#0f0205] border border-[#8B001F]/40 flex items-center gap-4 max-w-md">
              <div className="w-10 h-10 rounded-lg bg-[#FF003C]/20 border border-[#FF003C]/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#FF003C]" />
              </div>
              <div className="text-left text-xs">
                <span className="text-gray-400 block">
                  {language === 'id' ? 'Pendidikan Akademik:' : 'Academic Education:'}
                </span>
                <span className="font-semibold text-white text-sm">
                  Teknik Informatika (Information Technology)
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
