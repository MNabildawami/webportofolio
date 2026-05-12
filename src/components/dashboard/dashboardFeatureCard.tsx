import { motion } from "framer-motion";
import { FiArrowRight, FiLayers } from "react-icons/fi";

// 1. Mendefinisikan tipe data yang wajib diisi (TypeScript)
export interface DashboardFeatureCardProps {
  tag: string;
  title: string;
  tech: string;
  onClick?: () => void;
}

const DashboardFeatureCard = ({ tag, title, tech, onClick }: DashboardFeatureCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5 }} // Efek melayang saat hover
      whileTap={{ scale: 0.98 }} // Efek menekan saat diklik
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(34,211,238,0.05)]"
    >
      {/* 1. Ambient Glow Overlay */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-[50px] transition-all duration-500 group-hover:bg-cyan-500/20" />
      
      {/* 2. Top Section: Tag & Icon */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-cyan-400 uppercase ring-1 ring-cyan-500/20 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
          {tag}
        </span>
        <FiLayers className="text-gray-600 transition-colors duration-300 group-hover:text-cyan-400" />
      </div>

      {/* 3. Main Content: Title */}
      <div className="relative z-10 mb-6">
        <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400">
          {title}
        </h3>
      </div>

      {/* 4. Footer Section: Tech & Animated Arrow */}
      <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex flex-col">
          <span className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-gray-500">Tech Stack</span>
          <span className="line-clamp-1 text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-200">
            {tech}
          </span>
        </div>

        {/* Panah Interaktif yang lebih dinamis */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:translate-x-1">
          <FiArrowRight className="text-gray-400 transition-colors duration-300 group-hover:text-black" />
        </div>
      </div>

      {/* 5. Bottom Reflection Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
};

export default DashboardFeatureCard;