import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

// ==========================================
// TIPE DATA
// ==========================================
export type Project = {
  id: number | string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex flex-col md:flex-row gap-6 p-5 md:p-6 rounded-[32px] bg-[#080808]/80 border border-white/5 hover:border-cyan-400/30 hover:bg-[#0a0d14] hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)] transition-all duration-500 group overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW (Hover) ================= */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* ================= WATERMARK NUMBER ================= */}
      <div className="absolute -bottom-6 right-6 text-[100px] font-black text-white/[0.02] group-hover:text-cyan-500/[0.04] transition-colors duration-500 pointer-events-none select-none z-0">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* ================= BAGIAN KIRI: THUMBNAIL KECIL ================= */}
      <div className="relative w-full md:w-[240px] xl:w-[280px] shrink-0 aspect-video md:aspect-[4/3] rounded-[24px] overflow-hidden bg-[#040404] border border-white/5 z-10">
        {/* Fallback Ikon jika gambar tidak ada/loading */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-800">
          <FiFolder size={32} />
        </div>
        
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="relative w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out z-10"
        />
        
        {/* Label Kategori */}
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-widest text-cyan-400 uppercase">
          {project.category}
        </div>
      </div>

      {/* ================= BAGIAN KANAN: KONTEN TEKS ================= */}
      {/* min-w-0 SANGAT PENTING agar teks tidak menjebol layout */}
      <div className="flex-1 min-w-0 flex flex-col justify-center relative z-10 py-1 pr-2">
        
        {/* Judul Project */}
        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h2>

        {/* Deskripsi (Dibatasi maksimal 3 baris agar tinggi seragam) */}
        <p className="text-sm md:text-base text-gray-400 font-medium mb-5 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-bold text-gray-300 uppercase tracking-widest group-hover:bg-cyan-500/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Action */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black tracking-widest uppercase hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            <FiExternalLink className="text-sm" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 text-[11px] font-black tracking-widest uppercase transition-all duration-300"
          >
            <FiGithub className="text-sm" />
            Repository
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;