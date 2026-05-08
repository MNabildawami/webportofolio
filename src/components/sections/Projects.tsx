import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiCode, FiGithub, FiArrowRight } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { TbBrain } from "react-icons/tb";
import { projects } from "../../data/projects";
import { Music } from "lucide-react";

const Projects = () => {
  const categories = [
    { name: "AI Engineer", icon: <TbBrain /> },
    { name: "Cybersecurity", icon: <HiOutlineShieldCheck /> },
    { name: "Fullstack", icon: <FiCode /> },
    { name: "Prod Music", icon: <Music /> },
  ];

  const [activeCategory, setActiveCategory] = useState("AI Engineer");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="relative bg-black text-white py-32 px-6 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Projects
            </p>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-500">
            Featured Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Selected projects across AI Engineering, Cybersecurity, and Fullstack Development.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105"
                  : "bg-white/[0.03] border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID DENGAN ANIMASI POP-UP */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, 3).map((project, index) => (
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
                  {/* Gradasi hitam dari bawah agar menyatu dengan background kartu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  
                  {/* Floating Icon (Opsional, pengganti tombol pojok kanan atas) */}
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
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all active:scale-95"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/projects"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 active:scale-95"
          >
            Show All Projects
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;