/**
 * Portfolio Data for RAHMAT MULYADI FADILLAH
 * Web Developer & UI/UX Designer
 * Dual Language (Indonesian & English)
 */

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'design';
}

export interface ServiceItem {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  iconName: string;
}

export interface PortfolioData {
  identity: {
    fullName: string;
    nickName: string;
    profession: string;
    professionId: string;
    education: string;
    educationId: string;
    email: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    instagram: string;
    instagramUrl: string;
  };
  hero: {
    greeting: string;
    greetingId: string;
    leadTitle: string;
    leadTitleId: string;
    highlightRole: string;
    description: string;
    descriptionId: string;
    defaultHeroImage: string;
  };
  about: {
    title: string;
    titleId: string;
    subtitle: string;
    subtitleId: string;
    description: string;
    descriptionId: string;
    defaultAboutImage: string;
  };
  skillsIntro: {
    title: string;
    titleId: string;
    lead: string;
    leadId: string;
    description: string;
    descriptionId: string;
  };
  skills: SkillItem[];
  services: ServiceItem[];
}

export const portfolioData: PortfolioData = {
  identity: {
    fullName: "RAHMAT MULYADI FADILLAH",
    nickName: "Rahmat",
    profession: "WEB DEVELOPER",
    professionId: "PENGEMBANG WEB",
    education: "Information Technology",
    educationId: "Teknik Informatika",
    email: "rahmatmulyadifadillah@gmail.com",
    whatsapp: "081339638842",
    whatsappDisplay: "081339638842",
    whatsappUrl: "https://wa.me/6281339638842",
    instagram: "@rhmtmlydifdllh",
    instagramUrl: "https://instagram.com/rhmtmlydifdllh",
  },
  hero: {
    greeting: "HI, I'M RAHMAT",
    greetingId: "HALO, SAYA RAHMAT",
    leadTitle: "I'M A",
    leadTitleId: "SAYA SEORANG",
    highlightRole: "WEB DEVELOPER",
    description: "I create modern, responsive, and engaging digital experiences through creative design and technology.",
    descriptionId: "Saya menciptakan pengalaman digital modern, responsif, dan interaktif melalui perpaduan desain kreatif dan teknologi web terkini.",
    defaultHeroImage: "/assets/aistudio/profile_a5a4fe06.jpeg",
  },
  about: {
    title: "ABOUT ME",
    titleId: "TENTANG SAYA",
    subtitle: "Designing Is My Passion",
    subtitleId: "Desain dan Kode Adalah Dedikasi Saya",
    description: "I am an Information Technology student passionate about website development, modern UI/UX design, and creating interactive digital experiences.",
    descriptionId: "Saya adalah mahasiswa Teknik Informatika yang memiliki dedikasi mendalam pada pengembangan website modern, desain UI/UX interaktif, serta implementasi teknologi digital berkinerja tinggi.",
    defaultAboutImage: "/assets/aistudio/profile_a5a4fe06.jpeg",
  },
  skillsIntro: {
    title: "Skills Reflect Our Knowledge",
    titleId: "Keahlian Mencerminkan Dedikasi",
    lead: "Dedicated to building high-performance, responsive, and user-friendly web solutions with modern web standards.",
    leadId: "Mendedikasikan diri untuk membangun website berperforma tinggi, responsif, dan ramah pengguna dengan standar web modern.",
    description: "Deep focus on clean code, modular architecture, and captivating digital interfaces.",
    descriptionId: "Fokus mendalam pada penulisan kode yang bersih, arsitektur modular, dan antarmuka visual yang berkelas.",
  },
  skills: [
    { id: "html", name: "HTML", percentage: 90, category: 'frontend' },
    { id: "css", name: "CSS", percentage: 85, category: 'frontend' },
    { id: "javascript", name: "JavaScript", percentage: 80, category: 'frontend' },
    { id: "php", name: "PHP", percentage: 75, category: 'backend' },
    { id: "mysql", name: "MySQL", percentage: 75, category: 'backend' },
    { id: "react", name: "React", percentage: 85, category: 'frontend' },
    { id: "tailwind", name: "Tailwind CSS", percentage: 90, category: 'frontend' },
    { id: "uiux", name: "UI/UX Design", percentage: 80, category: 'design' },
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      titleId: "Pengembangan Website",
      description: "Building modern websites with clean code, fast loading, and scalable architecture.",
      descriptionId: "Membangun website modern dengan arsitektur kode bersih, performa tinggi, dan struktur modular yang siap dikembangkan.",
      iconName: "Code2",
    },
    {
      id: "web-design",
      title: "Website Design",
      titleId: "Desain Website",
      description: "Crafting bespoke website visuals tailored to brand identity for lasting impressions.",
      descriptionId: "Merancang visual website eksklusif dan selaras dengan identitas brand untuk menciptakan kesan profesional yang kuat.",
      iconName: "Palette",
    },
    {
      id: "landing-page",
      title: "Landing Page",
      titleId: "Halaman Landing Page",
      description: "High-conversion landing pages with sharp messaging and focused user pathways.",
      descriptionId: "Pembuatan halaman landing page fokus konversi tinggi dengan copywriting tajam, loading cepat, dan navigasi terarah.",
      iconName: "LayoutTemplate",
    },
    {
      id: "responsive-web",
      title: "Responsive Website",
      titleId: "Website Responsif",
      description: "Flawless responsiveness across all devices: smartphones, tablets, laptops, and 4K displays.",
      descriptionId: "Optimalisasi tampilan presisi di semua perangkat: smartphone, tablet, laptop, hingga monitor ultra-wide tanpa kompromi.",
      iconName: "Smartphone",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      titleId: "Desain Antarmuka UI/UX",
      description: "Intuitive user journeys, systematic wireframes, and engaging interactive prototypes.",
      descriptionId: "Perancangan alur pengguna yang intuitif, wireframe sistematis, dan prototype interaktif yang memanjakan calon klien.",
      iconName: "Figma",
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      titleId: "Pemeliharaan Website",
      description: "Regular maintenance, bug resolutions, security audits, and continuous performance tuning.",
      descriptionId: "Layanan pemeliharaan berkala, perbaikan bug, audit keamanan sistem, dan optimasi kecepatan website secara berkelanjutan.",
      iconName: "Wrench",
    },
  ],
};
