import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  FiMapPin, 
  FiBriefcase, 
  FiAward, 
  FiArrowRight, 
  FiExternalLink,
  FiClock
} from "react-icons/fi";
import { Link } from "react-router-dom";

// ================= IMPORT KOMPONEN DASHBOARD =================
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";
import DashboardStatCard from "../../components/dashboard/dashboardStatCard";
import DashboardFeatureCard from "../../components/dashboard/dashboardFeatureCard";
import Breadcrumb from "../../components/dashboard/Breadcrumb"; 

// ================= IMPORT DATA ASLI (DINAMIS) =================
import { experiences } from "../../data/experiences";
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";

// ================= ANIMASI VARIANTS =================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Overview = () => {
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

  // ================= AMBIL DATA TERBARU =================
  const recentExperiences = experiences.slice(0, 3);
  const recentProjects = projects.slice(0, 2);
  const recentCerts = certifications.slice(0, 3);

  // ================= DATA BREADCRUMB (Hanya butuh ini saja) =================
  const breadcrumbData = [
  { label: "Dashboard", href: "/dashboard" }
];

  return (
    // Background utama gelap pekat
    <div className="flex h-screen bg-[#020202] text-white overflow-hidden font-sans selection:bg-cyan-500/30">
      
      {/* SIDEBAR UTAMA */}
      <DashboardSidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />

      {/* AREA KONTEN KANAN */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar overflow-x-hidden">
        
        {/* ================= AMBIENT GLOW ================= */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-28 lg:pt-12 pb-24"
        >
          {/* ================= BREADCRUMB OOP ================= */}
          <motion.div variants={itemVariants}>
            <Breadcrumb items={breadcrumbData} />
          </motion.div>

          {/* ================= HEADER COPYWRITING ================= */}
          <motion.div variants={itemVariants} className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 mb-14">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                </span>
                <p className="text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase">Operations Status: Active</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Enterprise Analytics Workspace
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Explore industrial analytics projects, enterprise monitoring systems, cybersecurity case studies, and operational intelligence solutions across my professional workspace.
              </p>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full xl:w-auto">
              <DashboardStatCard label="Projects" value={projects.length.toString()} desc="Finished" color="bg-blue-500" iconType="folder" />
              <DashboardStatCard label="Certifications" value={certifications.length.toString()} desc="Earned" color="bg-orange-500" iconType="award" />
              <DashboardStatCard label="Experience" value={experiences.filter((exp) => exp.type === "Experience").length.toString()} desc="Journey" color="bg-purple-500" iconType="briefcase" />
            </div>
          </motion.div>

          {/* ================= BENTO GRID LAYOUT ================= */}
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6">
            
            {/* 1. CORE PROFILE */}
            <motion.div variants={itemVariants} className="xl:col-span-2 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 shadow-2xl flex flex-col hover:border-white/10 transition-all duration-500 group">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-cyan-400" />
                  <h2 className="text-sm font-semibold text-white tracking-widest uppercase">Professional Profile</h2>
                </div>
                <Link to="/dashboard/about" className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10">
                  FULL DETAILS <FiExternalLink />
                </Link>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start flex-1">
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-[30px] rounded-full group-hover:bg-cyan-500/30 transition-all" />
                  <div className="relative w-32 h-32 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-indigo-600 p-[2px]">
                    <div className="w-full h-full rounded-[30px] overflow-hidden bg-[#050505] group-hover:scale-[0.98] transition-transform">
                      <img
                        src="/projects/nabilpic.jpg"
                        alt="M. Nabil Dawami"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">M. Nabil Dawami</h3>
                  <p className="text-cyan-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-5">
                    Industrial Data & Security Analyst
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl font-medium">
                    Focused on industrial analytics, enterprise monitoring systems, and cybersecurity solutions to build secure, operationally efficient, and data-driven infrastructures.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <InfoBox title="Location" value="Pekanbaru, ID" />
                    <InfoBox title="Status" value="Open for collaboration" />
                    <InfoBox title="Contact" value="@naabildawami" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. CAREER JOURNEY */}
            <motion.div variants={itemVariants} className="xl:col-span-1 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 shadow-2xl flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <FiClock className="text-purple-400" />
                  <h2 className="text-sm font-semibold text-white tracking-widest uppercase">Career Journey</h2>
                </div>
                <Link to="/dashboard/experience" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                  <FiArrowRight />
                </Link>
              </div>

              <div className="relative flex-1 mt-2">
                <div className="absolute left-[9px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/50 via-white/5 to-transparent" />

                {recentExperiences.length > 0 ? (
                  recentExperiences.map((exp: any, index: number) => (
                    <div key={index} className="relative flex gap-5 mb-8 last:mb-0 group/timeline">
                      <div className="relative z-10 shrink-0 mt-1">
                        <div className={`w-5 h-5 rounded-full border-[4px] border-[#0A0A0A] flex items-center justify-center transition-colors duration-300 ${exp.isCurrent ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]' : 'bg-gray-700 group-hover/timeline:bg-gray-500'}`}>
                          {exp.isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1 group-hover/timeline:text-cyan-400 transition-colors">{exp.role}</h4>
                        <p className="text-[11px] font-medium text-gray-500">{exp.company} • {exp.period}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No operational experience logged.</p>
                )}
              </div>
            </motion.div>

            {/* 3. PROJECTS SHOWCASE */}
            <motion.div variants={itemVariants} className="xl:col-span-2 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 shadow-2xl flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <FiBriefcase className="text-blue-400" />
                  <h2 className="text-sm font-semibold text-white tracking-widest uppercase">Featured Case Studies</h2>
                </div>
                <Link to="/dashboard/projects" className="text-[10px] font-bold text-cyan-400 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
                  BROWSE REPO <FiArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                {recentProjects.length > 0 ? (
                  recentProjects.map((project: any, index: number) => (
                    <Link to="/dashboard/projects" key={index} className="block group">
                      <div className="h-full group-hover:-translate-y-1 transition-transform duration-300">
                        <DashboardFeatureCard 
                          tag={project.category === "AI Engineer" ? "Industrial Analytics" : (project.category || "Enterprise System")} 
                          title={project.title} 
                          tech={project.tech ? project.tech.join(", ") : "Various Technologies"} 
                        />
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No enterprise projects deployed.</p>
                )}
              </div>
            </motion.div>

            {/* 4. CERTIFICATIONS */}
            <motion.div variants={itemVariants} className="xl:col-span-1 rounded-[32px] bg-[#0A0A0A] border border-white/5 p-8 shadow-2xl flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <FiAward className="text-orange-400" />
                  <h2 className="text-sm font-semibold text-white tracking-widest uppercase">Achievements</h2>
                </div>
                <Link to="/dashboard/certifications" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                  <FiArrowRight />
                </Link>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {recentCerts.length > 0 ? (
                  recentCerts.map((cert: any, index: number) => (
                    <Link to="/dashboard/certifications" key={index} className="block group">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#111111] border border-white/5 group-hover:bg-[#151515] group-hover:border-orange-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                            <FiAward />
                          </div>
                          <div className="truncate">
                            <h4 className="text-xs font-semibold text-white truncate group-hover:text-orange-400 transition-colors">{cert.title}</h4>
                            <p className="text-[10px] font-medium text-gray-500 truncate mt-1">{cert.issuer}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-600 font-bold ml-2 shrink-0">{cert.year}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No certification data.</p>
                )}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </div>
  );
};

// ================= SUB-COMPONENTS =================
interface InfoBoxProps { title: string; value: string; }
const InfoBox = ({ title, value }: InfoBoxProps) => (
  <div className="flex flex-col gap-1 p-3 rounded-xl bg-[#111111] border border-white/5">
    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">{title}</p>
    <p className="text-[11px] md:text-xs text-white font-medium">{value}</p>
  </div>
);

export default Overview;