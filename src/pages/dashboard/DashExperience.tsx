import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiAward
} from "react-icons/fi";

// IMPORT DATA DARI FOLDER DATA
import { experiences } from "../../data/experiences";

// IMPORT KOMPONEN DASHBOARD
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";
import Breadcrumb from "../../components/dashboard/Breadcrumb";

const DashExperience = () => {
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

  const [activeTab, setActiveTab] = useState<"All" | "Experience" | "Education">("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = experiences.filter((exp) => {
    if (activeTab === "All") return true;
    return exp.type === activeTab;
  });

  // ================= DATA BREADCRUMB OOP =================
  const breadcrumbData = [
    { label: "Dashboard", link: "/dashboard" }, 
    { label: "Experience" }         
  ];

  return (
    <div className="flex h-screen w-full bg-[#020202] text-white overflow-hidden font-sans">
      
      {/* 1. SIDEBAR TERINTEGRASI */}
      <DashboardSidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />

      {/* 2. AREA KONTEN (SCROLLABLE) */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden custom-scrollbar w-full">
        
        {/* EFEK BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/5 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 pt-28 lg:pt-12 pb-24"
        >
          {/* ================= BREADCRUMB OOP ================= */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Breadcrumb items={breadcrumbData} />
          </motion.div>

          {/* HEADER & TAB SAKLAR */}
          <div className="flex flex-col gap-8 mb-16">
            
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Professional Record</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight text-white">
                Operational <br className="hidden md:block" /> Experience
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                A detailed log of professional roles, industrial research, and academic milestones in data analytics and enterprise security.
              </p>
            </div>

            {/* SAKLAR (SEGMENTED CONTROL) - DIKEMBALIKAN KE SOFT GLOW */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative z-20 w-fit flex-wrap">
              {(["All", "Experience", "Education"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 z-10 ${
                    activeTab === tab 
                      ? "text-cyan-400" 
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {/* Background Soft Glow saat Aktif */}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === "Experience" && <FiBriefcase className="hidden sm:block text-sm" />}
                    {tab === "Education" && <FiAward className="hidden sm:block text-sm" />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* TIMELINE CONTAINER */}
          <div className="relative">
            
            {/* GARIS VERTIKAL TIMELINE BERCAHAYA */}
            <div className="absolute left-[24px] md:left-[36px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500/30 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

            <div className="flex flex-col gap-8">
              <AnimatePresence mode="popLayout">
                {filteredData.length > 0 ? (
                  filteredData.map((exp, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      key={exp.id}
                      className="relative pl-16 md:pl-24 group pb-2"
                    >
                      {/* IKON BULAT DI GARIS */}
                      <div className={`absolute left-0 md:left-2 top-2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 border-[#020202] z-10 transition-all duration-500 ${
                        exp.isCurrent 
                          ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105" 
                          : "bg-[#0a0d14] border-white/10 text-gray-500 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-400"
                      }`}>
                        {exp.type === "Education" ? <FiAward className="text-lg md:text-xl" /> : <FiBriefcase className="text-lg md:text-xl" />}
                      </div>

                      {/* BOX KONTEN EXPERIENCE (SOFT GLOW DIKEMBALIKAN) */}
                      <div className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.15)] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
                        
                        {/* SOFT CYAN GLOW HOVER */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5 relative z-10">
                          <div>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">
                              {exp.role}
                            </h3>
                            <p className="text-sm md:text-base text-blue-400 font-bold">
                              {exp.company}
                            </p>
                          </div>
                          
                          {exp.isCurrent && (
                            <span className="shrink-0 px-3.5 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                              Active Status
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-y-3 gap-x-6 mb-6 text-xs text-gray-400 font-medium relative z-10">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMapPin className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider font-bold group-hover:bg-white/10 transition-colors duration-300">
                              {exp.badge}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8 relative z-10 max-w-3xl">
                          {exp.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 rounded-md bg-[#050505] border border-white/5 text-[10px] uppercase tracking-wider text-gray-400 font-bold group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  ))
                ) : (
                  /* EMPTY STATE */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-10 text-center rounded-[2rem] border-2 border-dashed border-white/10 bg-[#050505] ml-16 md:ml-24"
                  >
                    <p className="text-gray-500 font-medium">No records found for the selected category.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashExperience;