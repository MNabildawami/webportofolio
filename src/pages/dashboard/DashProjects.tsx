import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFolder } from "react-icons/fi";

// IMPORT DATA & TIPE
import { projects } from "../../data/projects";
import { type Project } from "../../types/Project";

// IMPORT KOMPONEN (Filter & Card)
import ProjectSidebar from "../../components/projects/ProjectSidebar";
import ProjectCard from "../../components/projects/ProjectCard";

// IMPORT SIDEBAR UTAMA & BREADCRUMB OOP
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";
import Breadcrumb from "../../components/dashboard/Breadcrumb"; // <--- Import Komponen OOP Breadcrumb

const DashProjects = () => {
  // ================= STATE UNTUK SIDEBAR UTAMA =================
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Industrial Analytics", "Security Monitoring", "Systems Development"];

  const technologies = [
    "All",
    ...new Set(projects.flatMap((project: Project) => project.tech)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* FILTER LOGIC */
  const filteredProjects = projects.filter((project: Project) => {
    const matchesCategory = activeCategory === "All" ? true : (project as any).category === activeCategory;
    const matchesTech = activeTech === "All" ? true : project.tech.includes(activeTech);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTech && matchesSearch;
  });

  // ================= DATA BREADCRUMB OOP =================
  const breadcrumbData = [
    { label: "Dashboard", link: "/dashboard" }, // Link kembali ke Overview
    { label: "Project Archive" }                // Halaman saat ini (Cyan, tidak bisa diklik)
  ];

  return (
    // FIX RESPONSIVE: Penambahan w-full untuk memastikan container mentok kanan-kiri
    <div className="flex h-screen w-full bg-[#020202] text-white overflow-hidden font-sans">
      
      {/* 1. SIDEBAR DASHBOARD UTAMA */}
      <DashboardSidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />

      {/* 2. AREA KONTEN PROJECT */}
      {/* FIX STICKY 1: Tetap biarkan overflow-x tidak di-hidden disini agar sticky Sidebar Filter bekerja */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar w-full">
        
        {/* FIX MOBILE OVERFLOW X: Bungkus khusus untuk Glow agar tidak bikin layar bocor ke samping */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/5 blur-[120px] md:blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 blur-[120px] md:blur-[150px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-28 lg:pt-12 pb-24"
        >
          
          {/* ================= BAGIAN ATAS: BREADCRUMB & HEADER ================= */}
          <div className="mb-10 xl:mb-14">
            
            {/* ================= BREADCRUMB OOP ================= */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Breadcrumb items={breadcrumbData} />
            </motion.div>

            <div>
              <p className="text-cyan-400 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 font-black">Projects</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-tight text-white">
                Featured Work
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed italic font-medium">
                "Selected works across Industrial Analytics, Enterprise Security, and Systems Development."
              </p>
            </div>
          </div>

          {/* ================= BAGIAN BAWAH: LAYOUT 2 KOLOM ================= */}
          {/* FIX STICKY 2: Gunakan items-start agar kolom kiri bisa menempel */}
          <div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-12 relative">
            
            {/* KOLOM KIRI: SIDEBAR FILTER (STICKY DI DESKTOP) */}
            {/* FIX STICKY 3: Tambahkan class sticky dan top-8 di pembungkus luarnya */}
            <div className="w-full xl:w-[280px] shrink-0 xl:sticky xl:top-8 z-20">
              <ProjectSidebar
                categories={categories}
                technologies={technologies}
                activeCategory={activeCategory}
                activeTech={activeTech}
                setActiveCategory={setActiveCategory}
                setActiveTech={setActiveTech}
                totalProjects={projects.length}
              />
            </div>

            {/* KOLOM KANAN: TOOLBAR SEARCH + LIST PROJECT */}
            <div className="flex-1 w-full min-w-0 flex flex-col gap-6">
              
              {/* === TOOLBAR (SEARCH & COUNT) === */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 bg-[#080808]/80 border border-white/5 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] shadow-xl">
                
                <div className="relative flex-1">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    placeholder="Search projects by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent pl-12 pr-4 py-3 sm:py-3.5 text-sm font-medium text-white placeholder:text-gray-600 focus:outline-none focus:text-cyan-400 transition-colors"
                  />
                </div>

                <div className="flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 bg-white/[0.03] border border-white/5 rounded-xl sm:rounded-full shrink-0">
                  <FiFolder className="text-cyan-400" />
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest">
                    <span className="text-white mx-1">{filteredProjects.length}</span> Results
                  </p>
                </div>
                
              </div>

              {/* === PROJECT LIST === */}
              <div className="flex flex-col gap-6 md:gap-8 mt-2">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project: Project, index: number) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-full py-20 px-6 text-center border-2 border-dashed border-white/10 rounded-[32px] bg-[#050505]"
                    >
                      <p className="text-gray-600 mb-4 text-5xl md:text-6xl">📭</p>
                      <h3 className="text-xl md:text-2xl text-white font-black mb-2 tracking-tight">No Projects Found</h3>
                      <p className="text-xs md:text-sm text-gray-500 font-medium max-w-sm mx-auto">
                        Coba gunakan kata kunci lain atau ubah filter kategori/teknologi Anda.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </motion.div>
      </main>
    </div>
  );
};

export default DashProjects;