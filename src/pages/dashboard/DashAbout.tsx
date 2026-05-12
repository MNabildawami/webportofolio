import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  FiMapPin, 
  FiMail, 
  FiGlobe, 
  FiLinkedin, 
  FiGithub, 
  FiDownload,
  FiTrendingUp,
  FiShield,
  FiLayout,
  FiTerminal,
  FiDatabase,
  FiArrowRight
} from "react-icons/fi";
import { Link } from "react-router-dom";

// ================= IMPORT KOMPONEN DASHBOARD =================
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";
// Pastikan path Breadcrumb sesuai dengan struktur folder Anda
import Breadcrumb from "../../components/dashboard/Breadcrumb"; 

// ================= IMPORT DATA DINAMIS =================
import { experiences } from "../../data/experiences";

// ================= ANIMASI VARIANTS =================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const DashAbout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(() => {
    return localStorage.getItem("sidebarCollapsed") === "true";
  });

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  // ================= DATA BREADCRUMB OOP =================
  const breadcrumbData = [
    { label: "Dashboard", link: "/dashboard" }, // Link kembali ke Overview
    { label: "About" }             // Halaman saat ini (Teks Cyan, No Link)
  ];

  // ================= DATA ENTERPRISE (Static untuk Core & Tech) =================
  const coreCompetencies = [
    { 
      name: "Industrial Analytics", 
      filterTag: "Industrial Analytics",
      icon: <FiTrendingUp />, 
      description: "Operational analytics, forecasting, monitoring, and enterprise data systems." 
    },
    { 
      name: "Security Monitoring", 
      filterTag: "Security Monitoring",
      icon: <FiShield />, 
      description: "SIEM, log analysis, threat monitoring, and operational security systems." 
    },
    { 
      name: "Dashboard Systems", 
      filterTag: "Industrial Analytics",
      icon: <FiLayout />, 
      description: "Analytics dashboards and secure web-based monitoring platforms." 
    },
  ];

  const techStack = ["Python", "SQL", "Power BI", "Linux", "React", "PostgreSQL", "SIEM", "Monitoring Tools"];

  // ================= DATA DINAMIS TIMELINE (Dari experiences.ts) =================
  const educationTimeline = experiences
    .filter((exp: any) => exp.type && exp.type.toLowerCase() === "education")
    .map((exp: any) => ({
      year: exp.period,      
      title: exp.role,       
      text: exp.company,     
      active: exp.isCurrent, 
    }));

  return (
    <div className="flex h-screen bg-[#020202] text-white overflow-hidden font-sans">
      
      {/* 1. SIDEBAR UTAMA */}
      <DashboardSidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />

      {/* 2. AREA KONTEN */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar overflow-x-hidden">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-28 lg:pt-12 pb-24 overflow-visible"
        >
          {/* ================= BREADCRUMB OOP ================= */}
          <motion.div variants={itemVariants}>
            <Breadcrumb items={breadcrumbData} />
          </motion.div>

          {/* ================= MAIN LAYOUT WRAPPER ================= */}
          <div className="flex flex-col gap-8">
            
            {/* ROW 1: PROFILE (Left) + CONTENT (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* === LEFT COLUMN: PROFILE CARD === */}
              <div className="lg:col-span-4 flex flex-col h-full">
                <motion.div variants={itemVariants} className="relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 shadow-2xl text-center flex flex-col group hover:border-cyan-500/20 transition-all duration-500 h-full">
                  
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#050505] p-1 border border-white/10">
                      <img 
                        src="/projects/nabilpic.jpg" 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-white mb-2">M. Nabil Dawami</h2>
                  <p className="text-cyan-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-5">
                    Industrial Data & Security Analyst
                  </p>

                  <div className="inline-flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full mb-8 text-green-400 text-[10px] font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> OPEN FOR COLLABORATION
                  </div>

                  <div className="w-full space-y-2 mb-8">
                    <ContactLink icon={<FiMapPin />} text="Pekanbaru, Indonesia" />
                    <ContactLink icon={<FiMail />} text="muhammadnabildawami@gmail.com" />
                    <ContactLink icon={<FiGlobe />} text="nabeelsite.vercel.app" />
                  </div>

                  <div className="flex flex-col gap-3 w-full mt-auto">
                    <motion.a 
                      href="/cv.pdf" 
                      target="_blank"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-transparent border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiDownload className="text-lg" /> Download CV
                    </motion.a>
                    <div className="flex gap-3 w-full">
                      <SocialBtn icon={<FiLinkedin />} href="https://www.linkedin.com/in/m-nabil-dawami-b55380215/?locale=in" />
                      <SocialBtn icon={<FiGithub />} href="https://github.com/MNabildawami" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* === RIGHT COLUMN: CONTENT === */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* 1. Professional Summary */}
                <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 shadow-xl">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                    <FiTerminal className="text-cyan-400" /> Professional Summary
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                    I am an Informatics Engineering student focused on <span className="text-white">Industrial Data Analytics</span>, <span className="text-white">enterprise monitoring systems</span>, and <span className="text-white">cybersecurity solutions</span>. My interests lie in operational intelligence, analytics-driven infrastructure, and secure data systems for enterprise environments.
                  </p>
                </motion.div>

                {/* 2. Core Competencies */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] ml-2 mt-2">Core Competencies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {coreCompetencies.map((comp, idx) => (
                      <Link 
                        key={idx} 
                        to="/dashboard/projects" 
                        state={{ category: comp.filterTag }}
                        className="group p-6 rounded-[24px] bg-[#0A0A0A] border border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.02] shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden"
                      >
                        <div className="absolute top-4 right-4 text-gray-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                          <FiArrowRight />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                          {comp.icon}
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2">{comp.name}</h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{comp.description}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* 3. Technology & Tools */}
                <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 shadow-xl mt-2">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">Technology & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <span key={tech} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#050505] border border-white/10 text-[11px] font-bold text-gray-400 uppercase tracking-wider hover:border-cyan-400/30 hover:text-cyan-400 transition-colors cursor-default shadow-inner">
                        <FiDatabase className="text-gray-600" /> {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>

            {/* ROW 2: JOURNEY TIMELINE (DYNAMIC DARI experiences.ts) */}
            <motion.div variants={itemVariants} className="w-full p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 shadow-2xl mt-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8 md:mb-12 flex items-center gap-3">
                <FiTrendingUp className="text-cyan-400" /> Educational Journey
              </h3>
              
              {/* Horizontal Timeline Container */}
              <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                
                {/* Garis Penghubung (Hanya muncul jika ada data & di Desktop) */}
                {educationTimeline.length > 1 && (
                  <div className="hidden md:block absolute top-[11px] left-[20px] right-[20px] h-[2px] bg-white/5 z-0" />
                )}
                
                {/* Garis Penghubung Vertikal (Hanya muncul jika ada data & di Mobile) */}
                {educationTimeline.length > 1 && (
                  <div className="md:hidden absolute top-[20px] bottom-[20px] left-[11px] w-[2px] bg-white/5 z-0" />
                )}

                {educationTimeline.length > 0 ? (
                  educationTimeline.map((item: any, idx: number) => (
                    <div key={idx} className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-6 flex-1 group">
                      
                      {/* Lingkaran Titik (Dot) */}
                      <div className="shrink-0 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full border-4 border-[#0A0A0A] flex items-center justify-center outline outline-2 transition-all duration-500 ${item.active ? 'bg-cyan-400 outline-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-[#1a1a1a] outline-white/10 group-hover:outline-cyan-500/30'}`}>
                          {item.active && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                        </div>
                      </div>

                      {/* Konten Timeline */}
                      <div className="flex flex-col md:text-center mt-0.5 md:mt-0">
                        <span className="text-cyan-400 font-black tracking-widest text-xs md:text-sm mb-1">{item.year}</span>
                        <span className="text-white font-bold text-sm mb-1.5">{item.title}</span>
                        <span className="text-gray-500 text-[11px] md:text-xs font-medium leading-relaxed max-w-[250px] mx-auto">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 font-medium italic">Educational timeline data is currently unavailable.</p>
                )}

              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </div>
  );
};

// ================= HELPERS =================
const ContactLink = ({ icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#050505] border border-white/5 text-gray-400 hover:text-white transition-all text-xs font-medium shadow-inner">
    <span className="text-cyan-400 text-sm">{icon}</span>
    <span className="truncate">{text}</span>
  </div>
);

const SocialBtn = ({ icon, href }: { icon: any, href: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center py-3.5 rounded-xl bg-transparent border border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-all text-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
    {icon}
  </a>
);

export default DashAbout;