import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Database, 
  Layers, 
  Boxes, 
  Terminal,
  Cpu 
} from 'lucide-react';

interface SkillsSectionProps {
  language: 'en' | 'id';
}

export function SkillsSection({ language }: SkillsSectionProps) {
  const technicalSkills = [
    {
      name: "HTML",
      icon: FileCode2,
      level: "Modern & Semantic",
      levelId: "Semantik & Standar W3C",
      focus: "Accessible DOM architecture, SEO-friendly markup, and high-standard web semantics.",
      focusId: "Struktur DOM aksesibel, markup ramah SEO, dan kepatuhan standar web modern.",
      tag: "Markup",
    },
    {
      name: "CSS",
      icon: Palette,
      level: "Fluid & Modern",
      levelId: "Responsif & Fleksibel",
      focus: "Flexbox, Grid systems, keyframe animations, CSS variables, and modern styling.",
      focusId: "Sistem Grid, Flexbox, animasi transisi halus, dan arsitektur token CSS.",
      tag: "Styling",
    },
    {
      name: "JavaScript",
      icon: Terminal,
      level: "ES6+ Modern JS",
      levelId: "JavaScript Modern",
      focus: "Asynchronous programming, DOM manipulation, clean algorithms, and API integration.",
      focusId: "Pemrograman asynchronous, manipulasi DOM, logika bersih, dan integrasi API.",
      tag: "Language",
    },
    {
      name: "PHP",
      icon: Code2,
      level: "Backend & Logic",
      levelId: "Logika Server-Side",
      focus: "Server-side scripts, modular MVC patterns, form handling, and authentication flow.",
      focusId: "Skrip server, pola modular MVC, pemrosesan formulir, dan alur autentikasi.",
      tag: "Backend",
    },
    {
      name: "MySQL",
      icon: Database,
      level: "Relational DB",
      levelId: "Basis Data Relasional",
      focus: "Database design, structured queries, table indexing, normalization, and data integrity.",
      focusId: "Desain database, query terstruktur, normalisasi tabel, dan integritas data.",
      tag: "Database",
    },
    {
      name: "React",
      icon: Boxes,
      level: "Component Driven",
      levelId: "Berbasis Komponen",
      focus: "Custom hooks, state management, SPA architecture, dynamic rendering, and performance.",
      focusId: "Custom hooks, manajemen state terpusat, arsitektur SPA, dan render cepat.",
      tag: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: Layers,
      level: "Utility-First",
      levelId: "Desain Cepat & Bersih",
      focus: "Rapid UI prototyping, responsive layouts, design tokens, and modular utility classes.",
      focusId: "Prototyping antarmuka kilat, desain responsif, dan kelas utilitas modular.",
      tag: "Framework",
    },
    {
      name: "UI/UX Design",
      icon: Cpu,
      level: "Human Centered",
      levelId: "Fokus Pengalaman Pengguna",
      focus: "Interactive wireframes, user experience hierarchy, dark-mode aesthetics, and clean prototypes.",
      focusId: "Wireframe interaktif, estetika dark-mode eksklusif, dan prototipe terarah.",
      tag: "Design",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 relative border-t border-[#8B001F]/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with Dual Language Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#FF003C] uppercase block mb-1">
            {language === 'id' ? 'KEAHLIAN TEKNIS · TECH STACK' : 'TECH STACK & EXPERTISE · KEAHLIAN TEKNIS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-wide">
            {language === 'id' ? 'KEAHLIAN SAYA' : 'MY SKILLS'}
          </h2>
          <div className="h-1 w-14 bg-[#FF003C] rounded-full mt-2 mx-auto shadow-[0_0_12px_#FF003C]" />
          
          <div className="max-w-lg mx-auto mt-4 text-xs sm:text-sm text-gray-300 font-light space-y-1">
            <p>Technical competencies based on Information Technology curriculum & clean coding.</p>
            <p className="text-gray-400 italic text-xs">
              Kompetensi teknis berbasis kurikulum Teknik Informatika dan pengembangan kode bersih.
            </p>
          </div>
        </motion.div>

        {/* 3D Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 12px 35px rgba(255, 0, 60, 0.35), 0 0 1px 1px #FF003C" 
                }}
                className="p-6 rounded-2xl bg-[#090204]/95 border border-[#8B001F]/50 hover:border-[#FF003C] transition-colors duration-300 group relative flex flex-col justify-between"
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF003C]/0 group-hover:bg-[#FF003C]/10 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#FF003C]/40 group-hover:bg-[#FF003C] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
                      <Icon className="w-6 h-6 text-[#FF003C] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#8B001F]/30 text-gray-300 border border-[#8B001F]/60">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FF003C] transition-colors mb-1">
                    {skill.name}
                  </h3>

                  {/* Level in active language */}
                  <div className="text-xs font-semibold text-[#FF003C] mb-3">
                    {language === 'id' ? skill.levelId : skill.level}
                  </div>

                  {/* Description in active language */}
                  <p className="text-gray-300 text-xs leading-relaxed font-light mb-2">
                    {language === 'id' ? skill.focusId : skill.focus}
                  </p>

                  {/* Subtitle in the alternate language */}
                  <p className="text-gray-500 text-[11px] leading-relaxed italic mb-6">
                    {language === 'id' ? skill.focus : skill.focusId}
                  </p>
                </div>

                {/* Animated Progress Indicator Wave */}
                <div className="pt-3 border-t border-[#8B001F]/40">
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#8B001F] to-[#FF003C] rounded-full shadow-[0_0_8px_#FF003C]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
