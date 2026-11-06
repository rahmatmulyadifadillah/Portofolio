import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  LayoutTemplate, 
  Smartphone, 
  Layers, 
  Wrench,
  ArrowUpRight 
} from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'id';
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const servicesList = [
    {
      id: "web-dev",
      title: "Web Development",
      titleId: "Pengembangan Website",
      description: "Building modern websites with clean code, fast loading, and scalable architecture.",
      descriptionId: "Membangun website modern dengan arsitektur kode bersih, performa tinggi, dan struktur modular yang siap dikembangkan.",
      icon: Code2,
    },
    {
      id: "web-design",
      title: "Website Design",
      titleId: "Desain Website",
      description: "Crafting bespoke website visuals tailored to brand identity for lasting impressions.",
      descriptionId: "Merancang visual website eksklusif dan selaras dengan identitas brand untuk menciptakan kesan profesional yang kuat.",
      icon: Palette,
    },
    {
      id: "landing-page",
      title: "Landing Page",
      titleId: "Halaman Landing Page",
      description: "High-conversion landing pages with sharp messaging and focused user pathways.",
      descriptionId: "Pembuatan halaman landing page fokus konversi tinggi dengan copywriting tajam, loading cepat, dan navigasi terarah.",
      icon: LayoutTemplate,
    },
    {
      id: "responsive-web",
      title: "Responsive Website",
      titleId: "Website Responsif",
      description: "Flawless responsiveness across all devices: smartphones, tablets, laptops, and 4K displays.",
      descriptionId: "Optimalisasi tampilan presisi di semua perangkat: smartphone, tablet, laptop, hingga monitor ultra-wide tanpa kompromi.",
      icon: Smartphone,
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      titleId: "Desain Antarmuka UI/UX",
      description: "Intuitive user journeys, systematic wireframes, and engaging interactive prototypes.",
      descriptionId: "Perancangan alur pengguna yang intuitif, wireframe sistematis, dan prototype interaktif yang memanjakan calon klien.",
      icon: Layers,
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      titleId: "Pemeliharaan Website",
      description: "Regular maintenance, bug resolutions, security audits, and continuous performance tuning.",
      descriptionId: "Layanan pemeliharaan berkala, perbaikan bug, audit keamanan sistem, dan optimasi kecepatan website secara berkelanjutan.",
      icon: Wrench,
    },
  ];

  const handleConsultService = (serviceTitle: string) => {
    const message = encodeURIComponent(`Halo Rahmat, saya ingin berdiskusi mengenai layanan: ${serviceTitle}`);
    window.open(`https://wa.me/6281339638842?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-24 px-6 sm:px-10 relative border-t border-[#8B001F]/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with Dual Subtitles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#FF003C] uppercase block mb-1">
            {language === 'id' ? 'SOLUSI DIGITAL PROFESIONAL · DIGITAL SOLUTIONS' : 'WHAT I CAN DO FOR YOU · SOLUSI DIGITAL'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-wide">
            {language === 'id' ? 'LAYANAN SAYA' : 'MY SERVICES'}
          </h2>
          <div className="h-1 w-14 bg-[#FF003C] rounded-full mt-2 mx-auto shadow-[0_0_12px_#FF003C]" />
          
          <div className="max-w-lg mx-auto mt-4 text-xs sm:text-sm text-gray-300 font-light space-y-1">
            <p>Six pillars of comprehensive web development for your brand and business growth.</p>
            <p className="text-gray-400 italic text-xs">
              Enam pilar solusi digital profesional untuk memperkuat citra dan efektivitas bisnis Anda.
            </p>
          </div>
        </motion.div>

        {/* 6 Service Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const primaryTitle = language === 'id' ? service.titleId : service.title;
            const secondaryTitle = language === 'id' ? service.title : service.titleId;
            const primaryDesc = language === 'id' ? service.descriptionId : service.description;
            const secondaryDesc = language === 'id' ? service.description : service.descriptionId;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 14px 40px rgba(255, 0, 60, 0.35), 0 0 1px 1px #FF003C" 
                }}
                onClick={() => handleConsultService(primaryTitle)}
                className="p-7 rounded-2xl bg-[#090204]/95 border border-[#8B001F]/50 hover:border-[#FF003C] transition-colors duration-300 group relative flex flex-col justify-between cursor-pointer"
              >
                {/* Background neon bloom on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF003C]/0 group-hover:bg-[#FF003C]/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Circular Icon Container matching reference */}
                  <div className="w-13 h-13 rounded-2xl bg-[#050505] border border-[#FF003C]/40 group-hover:bg-[#FF003C] flex items-center justify-center mb-6 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
                    <Icon className="w-6 h-6 text-[#FF003C] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FF003C] transition-colors duration-300 mb-1">
                    {primaryTitle}
                  </h3>
                  <div className="text-[11px] font-mono text-gray-400 mb-3 tracking-wider">
                    {secondaryTitle}
                  </div>

                  {/* Primary Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-2">
                    {primaryDesc}
                  </p>

                  {/* Alternate Language Subtitle */}
                  <p className="text-gray-500 text-[11px] leading-relaxed italic mb-6">
                    {secondaryDesc}
                  </p>
                </div>

                {/* Consultation Affordance */}
                <div className="pt-4 border-t border-[#8B001F]/40 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#FF003C] transition-colors duration-300">
                  <span>{language === 'id' ? 'Konsultasi Proyek' : 'Discuss Project'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
