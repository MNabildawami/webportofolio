import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiTerminal } from "react-icons/fi";
import { Activity, ShieldCheck } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = () => {
  const categories = [
    { name: "Industrial Analytics", icon: <Activity className="w-5 h-5" /> },
    { name: "Security Monitoring", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const [activeCategory, setActiveCategory] = useState("Industrial Analytics");

  // Filter Data Murni - Mengambil data terbaru (reverse) dan difilter sesuai kategori aktif
  const filteredProjects = useMemo(() => {
    return [...projects]
      .reverse() 
      .filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 overflow-hidden scroll-mt-20 border-t border-white/[0.02]">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
              Industrial Case Studies
            </p>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            A curated portfolio of industrial analytics, security monitoring, and enterprise operational systems.
          </p>
        </motion.div>

        {/* ================= TABS / FILTERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-14"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "bg-[#080808] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.02]"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* ================= PROJECT GRID & EMPTY STATE ================= */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            
            {/* LOGIKA JIKA PROYEK ADA (Tampilkan Kartu Maksimal 3) */}
            {filteredProjects.length > 0 ? (
              filteredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-[32px] bg-[#0a0a0a] border border-white/5 overflow-hidden hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.15)] transition-all duration-500"
                >
                  {/* IMAGE & OVERLAY */}
                  <div className="relative h-[260px] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FiExternalLink />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-grow p-8 pt-2 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 text-xs font-semibold bg-white/[0.03] border border-white/10 rounded-full text-cyan-50/70 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white text-sm font-medium transition-all active:scale-95"
                      >
                        <FiGithub className="text-lg" />
                        Repository
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all active:scale-95"
                      >
                        <FiExternalLink className="text-lg" />
                        View System
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              
              /* LOGIKA JIKA PROYEK KOSONG (Empty State) */
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center p-10 sm:p-16 rounded-[32px] bg-[#050505] border-2 border-dashed border-white/10 min-h-[300px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6">
                  <FiTerminal className="text-3xl text-gray-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  No Projects Yet.
                </h3>
                <p className="text-gray-500 text-sm sm:text-base max-w-md">
                  The portfolio for <strong className="text-cyan-400 font-semibold">{activeCategory}</strong> is currently being updated...
                </p>
              </motion.div>

            )}
          </AnimatePresence>
        </motion.div>

        {/* ================= VIEW ALL BUTTON (Dikembalikan ke Desain Lama) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/dashboard/projects"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/10 text-white font-bold text-sm hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
          >
            EXPLORE ENTERPRISE PORTFOLIO
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;