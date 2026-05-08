import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbLayoutGridFilled } from "react-icons/tb";
import { FiFolder, FiX } from "react-icons/fi"; // Menambahkan FiX untuk tombol close modal

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
        className="w-full h-fit xl:sticky xl:top-24 z-20"
      >
        <div className="relative overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-2xl">
          
          {/* GLOW EFFECT */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

          {/* HEADER SECTION */}
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <TbLayoutGridFilled />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wide">Categories</h2>
                <p className="text-gray-400 text-sm">Project Explorer</p>
              </div>
            </div>

            {/* TOTAL PROJECTS CARD */}
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Total Projects</p>
                <h3 className="text-3xl font-black text-white">{totalProjects}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl">
                <FiFolder />
              </div>
            </div>
          </div>

          {/* DESKTOP CATEGORY LIST */}
          <div className="hidden xl:flex flex-col gap-3 mb-10 relative z-10">
            {categories.map((category) => (
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                key={category}
                onClick={() => {

  setActiveTech("All")

  setActiveCategory(category)

}}
                className={`px-5 py-4 rounded-xl text-left transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-white/[0.02] border border-white/5 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-white/[0.05]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* MOBILE CATEGORY LIST (Horizontal Scroll) */}
          <div className="xl:hidden flex gap-3 overflow-x-auto pb-4 mb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap snap-center px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                    : "bg-white/[0.03] border border-white/10 text-gray-300 active:scale-95"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* TECHNOLOGIES SECTION */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-white">Technologies</h3>
              {technologies.length > 6 && (
                <button
                  onClick={() => setShowAllTech(true)}
                  className="text-cyan-400 text-sm font-medium hover:text-cyan-300 hover:underline transition"
                >
                  View All
                </button>
              )}
            </div>

            {/* PREVIEW TECH LIST */}
            <div className="flex flex-wrap gap-2.5">
              {technologies.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => {

  setActiveCategory("All")

  setActiveTech(tech)

}}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTech === tech
                      ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      : "bg-white/[0.03] border border-white/10 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

        </div>
      </motion.aside>

      {/* ANIMATED MODAL FOR ALL TECHNOLOGIES */}
      <AnimatePresence>
        {showAllTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setShowAllTech(false)} // Menutup modal jika background diklik
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam diklik
              className="w-full max-w-2xl bg-[#0b0b0b] border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Glow Effect */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* MODAL HEADER */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">All Technologies</h2>
                  <p className="text-gray-400 text-sm">Filter projects by specific tech stack</p>
                </div>
                <button
                  onClick={() => setShowAllTech(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* MODAL TECH LIST */}
              <div className="flex flex-wrap gap-3 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full pr-2 relative z-10">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setActiveTech(tech);
                      setShowAllTech(false);
                    }}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTech === tech
                        ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        : "bg-white/[0.05] border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5"
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