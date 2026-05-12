import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiAward, 
  FiSearch, 
  FiExternalLink,
  FiCalendar,
  FiFilter,
  FiChevronRight
} from "react-icons/fi";

// IMPORT DATA DAN TYPE
import { certifications, type CertificateType } from "../../data/certifications";

// IMPORT SIDEBAR UTAMA & BREADCRUMB
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";
import Breadcrumb from "../../components/dashboard/Breadcrumb"; // <--- Import Komponen OOP Breadcrumb

const DashCertificates = () => {
  // ================= STATE UNTUK SIDEBAR =================
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

  // ================= STATE UNTUK FILTER =================
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeYear, setActiveYear] = useState<string>("All"); 
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Kategori Dinamis dari Data
  const categories = useMemo(() => {
    const cats = certifications.map(cert => cert.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  // Tahun Dinamis dari Data
  const availableYears = useMemo(() => {
    const years = certifications.map(cert => cert.year); 
    const uniqueYears = Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
    return ["All", ...uniqueYears];
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ================= LOGIKA FILTER =================
  const filteredCerts = certifications.filter((cert: CertificateType) => {
    const matchesCategory = activeCategory === "All" ? true : cert.category === activeCategory;
    const matchesYear = activeYear === "All" ? true : cert.year === activeYear; 
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  // ================= DATA BREADCRUMB OOP =================
  const breadcrumbData = [
    { label: "Dashboard", link: "/dashboard" }, 
    { label: "Certifications" }                
  ];

  return (
    // FIX RESPONSIVE: Penambahan w-full untuk memastikan container solid
    <div className="flex h-screen w-full bg-[#020202] text-white overflow-hidden font-sans">
      
      {/* 1. SIDEBAR TERINTEGRASI */}
      <DashboardSidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />

      {/* 2. AREA KONTEN */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar w-full">
        
        {/* FIX MOBILE OVERFLOW X: Bungkus khusus Glow agar tidak bikin layar bocor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/5 blur-[120px] md:blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/5 blur-[120px] md:blur-[150px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-28 lg:pt-12 pb-24"
        >
          {/* ================= BREADCRUMB OOP ================= */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Breadcrumb items={breadcrumbData} />
          </motion.div>

          {/* HEADER & SAKLAR KATEGORI */}
          <div className="flex flex-col gap-8 mb-12 mt-10">
            
            {/* Teks Header & Search */}
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Achievements</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight text-white">
                  Licenses & <br className="hidden md:block" /> Certifications
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed italic font-medium">
                  "Koleksi sertifikasi profesional dan pencapaian yang memvalidasi keahlian operasional dan analitik."
                </p>
              </div>

              {/* SEARCH BAR */}
              <div className="relative w-full xl:w-80 shrink-0">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#080808] border border-white/10 backdrop-blur-md rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 hover:border-white/20 transition-all shadow-lg"
                />
              </div>
            </div>

            {/* SAKLAR KATEGORI */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#080808] border border-white/10 relative z-20 w-fit max-w-full overflow-x-auto custom-scrollbar shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-lg text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 z-10 whitespace-nowrap ${
                    activeCategory === cat 
                      ? "text-cyan-400" 
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeCategoryGlow"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

          </div>

          {/* FILTER TAHUN & INDIKATOR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <FiAward className="text-cyan-400" /> Collection
            </h2>

            <div className="flex items-center gap-4 w-full md:w-auto">
              
              {/* DROPDOWN FILTER TAHUN */}
              <div className="relative group w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <FiFilter className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="w-full md:w-auto bg-[#080808] border border-white/10 group-hover:border-cyan-500/30 rounded-xl pl-10 pr-10 py-2.5 text-xs font-black tracking-widest uppercase text-gray-400 focus:outline-none focus:border-cyan-400 appearance-none cursor-pointer transition-all min-w-[140px] relative z-0"
                >
                  {availableYears.map((year: string) => (
                    <option key={year} value={year} className="bg-[#0a0d14] text-white font-medium">
                      {year === "All" ? "ALL YEARS" : year}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none z-10">
                  <FiChevronRight className="text-gray-500 rotate-90 text-sm group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* INDIKATOR JUMLAH SERTIFIKAT */}
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest">
                  <span className="text-white mx-1">{filteredCerts.length}</span> Certs
                </p>
              </div>

            </div>
          </div>

          {/* GRID KARTU SERTIFIKAT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCerts.length > 0 ? (
                filteredCerts.map((cert: CertificateType, index: number) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={cert.id}
                    className="flex flex-col p-1.5 rounded-[2rem] bg-[#0A0A0A] border border-white/5 group hover:border-cyan-400/30 hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative"
                  >
                    {/* SOFT CYAN GLOW HOVER */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* BAGIAN GAMBAR (DINAMIS DENGAN FALLBACK IKON) */}
                    <div className="w-full h-48 md:h-52 rounded-[1.5rem] bg-[#050505] relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors z-10">
                      
                      {cert.image ? (
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <FiAward className="text-6xl text-gray-700 group-hover:text-cyan-500/50 transition-colors duration-500 group-hover:scale-110" />
                        </>
                      )}

                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-widest text-white uppercase z-10 shadow-xl">
                        {cert.category}
                      </div>
                    </div>

                    {/* KONTEN KARTU */}
                    <div className="p-6 flex-1 flex flex-col relative z-10">
                      <h3 className="text-lg font-black text-white leading-snug mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                        {cert.issuer}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {cert.skills?.map(skill => (
                          <span key={skill} className="px-2.5 py-1 rounded-md bg-[#050505] border border-white/5 text-[9px] text-gray-400 font-bold uppercase tracking-wider group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <FiCalendar className="text-gray-600" />
                            <span>{cert.year}</span>
                          </div>
                          {cert.credentialId && (
                            <span className="font-mono text-[10px] bg-[#050505] border border-white/10 px-2.5 py-1 rounded-md text-gray-400 truncate max-w-[130px]">
                              ID: {cert.credentialId}
                            </span>
                          )}
                        </div>

                        <a 
                          href={cert.link || "#"} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#050505] border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-gray-400 text-[11px] font-black tracking-widest uppercase transition-all duration-300"
                        >
                          Show Credential
                          <FiExternalLink className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-[2rem] bg-[#050505]"
                >
                  <p className="text-gray-600 mb-4 text-5xl md:text-6xl">🏅</p>
                  <h3 className="text-xl md:text-2xl text-white font-black mb-2 tracking-tight">No Certificates Found</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium max-w-sm mx-auto">
                    Pencarian untuk kriteria ini tidak membuahkan hasil.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </main>
    </div>
  );
};

export default DashCertificates;