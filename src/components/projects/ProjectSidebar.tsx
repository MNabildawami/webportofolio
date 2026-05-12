import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbLayoutGridFilled } from "react-icons/tb";
import { FiFolder, FiX } from "react-icons/fi"; 

type ProjectSidebarProps = {
  categories: string[];
  technologies: string[];
  activeCategory: string;
  activeTech: string;
  setActiveCategory: (category: string) => void;
  setActiveTech: (tech: string) => void;
  totalProjects: number;
};

const ProjectSidebar = ({
  categories,
  technologies,
  activeCategory,
  activeTech,
  setActiveCategory,
  setActiveTech,
  totalProjects,
}: ProjectSidebarProps) => {
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        // Sticky di layar besar agar tetap di tempat saat card di-scroll
        className="w-full h-fit xl:sticky xl:top-24 z-20"
      >
        <div className="relative overflow-hidden bg-[#080808]/80 border border-white/5 backdrop-blur-2xl rounded-[32px] p-5 xl:p-7 shadow-2xl">
          
          {/* ================= GLOW EFFECT ================= */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

          {/* ================= HEADER SECTION ================= */}
          {/* Di Mobile: Berjajar Kiri-Kanan. Di Desktop (xl): Bertumpuk Atas-Bawah */}
          <div className="relative z-10 flex flex-row xl:flex-col justify-between items-center xl:items-stretch gap-4 mb-6 xl:mb-8">
            
            {/* Teks Kategori */}
            <div className="flex items-center gap-3 xl:gap-4">
              <div className="w-12 h-12 xl:w-14 xl:h-14 shrink-0 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl xl:text-2xl shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <TbLayoutGridFilled />
              </div>
              <div>
                <h2 className="text-xl xl:text-2xl font-black text-white tracking-wide">Filters</h2>
                <p className="text-gray-500 text-[10px] xl:text-xs font-bold uppercase tracking-widest mt-0.5">Explorer</p>
              </div>
            </div>

            {/* Total Projects Card (Mengecil di Mobile) */}
            <div className="flex items-center gap-3 xl:justify-between p-3 xl:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="hidden xl:block">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Total Archive</p>
                <h3 className="text-3xl font-black text-white">{totalProjects}</h3>
              </div>
              
              {/* Tampilan Mobile untuk Total Data */}
              <div className="xl:hidden text-right">
                <h3 className="text-xl font-black text-white">{totalProjects}</h3>
                <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">Items</p>
              </div>

              <div className="w-10 h-10 xl:w-12 xl:h-12 shrink-0 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 text-lg xl:text-xl">
                <FiFolder />
              </div>
            </div>
          </div>

          {/* ================= CATEGORY LIST ================= */}
          {/* Di Mobile: Horizontal Scroll. Di Desktop: List Vertikal */}
          <div className="relative z-10 mb-8">
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3 xl:mb-4">Role / Focus</h3>
            <div className="flex xl:flex-col gap-2.5 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 custom-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveTech("All");
                    setActiveCategory(category);
                  }}
                  className={`shrink-0 xl:w-full px-5 py-3 xl:py-3.5 rounded-xl xl:text-left text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      : "bg-white/[0.02] border border-white/5 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-500/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* ================= TECHNOLOGIES SECTION ================= */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3 xl:mb-4">
              <h3 className="text-white text-xs font-black uppercase tracking-widest">Tech Stack</h3>
              {technologies.length > 6 && (
                <button
                  onClick={() => setShowAllTech(true)}
                  className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  View All
                </button>
              )}
            </div>

            {/* Di Mobile: Horizontal Scroll. Di Desktop: Wrap (membungkus ke bawah) */}
            <div className="flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 custom-scrollbar">
              {technologies.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveTech(tech);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-lg border text-[11px] font-bold tracking-wider transition-all duration-300 ${
                    activeTech === tech
                      ? "bg-cyan-400 border-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

        </div>
      </motion.aside>

      {/* ================= ANIMATED MODAL FOR ALL TECHNOLOGIES ================= */}
      <AnimatePresence>
        {showAllTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setShowAllTech(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Glow Effect */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* MODAL HEADER */}
              <div className="flex items-center justify-between mb-8 relative z-10 border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-2xl font-black text-white mb-1">All Technologies</h2>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Filter by specific tech stack</p>
                </div>
                <button
                  onClick={() => setShowAllTech(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* MODAL TECH LIST */}
              <div className="flex flex-wrap gap-2.5 max-h-[50vh] overflow-y-auto custom-scrollbar pr-2 relative z-10">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setActiveTech(tech);
                      setShowAllTech(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl border text-[11px] font-bold tracking-widest uppercase transition-all ${
                      activeTech === tech
                        ? "bg-cyan-400 border-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                        : "bg-white/[0.03] border-white/5 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSidebar;