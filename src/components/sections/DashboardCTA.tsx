import { motion } from "framer-motion";
import { FiGrid } from "react-icons/fi";

const DashboardCTA = () => {
  return (
    <section id="dashboard-cta" className="relative bg-[#020202] text-white px-5 sm:px-8 py-24 md:py-32 overflow-hidden border-t border-white/[0.02]">
      
      {/* AMBIENT GLOW DIBELAKANG CARD */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-8 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[32px] border border-white/5 bg-[#080808]/80 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 shadow-2xl"
        >
          {/* CAHAYA HALUS DI SUDUT KANAN ATAS CARD */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* ================= BAGIAN KIRI: TEKS ================= */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl relative z-10">
            
            {/* BADGE */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
              <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
                ENTERPRISE ACCESS
              </p>
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse md:hidden" />
            </div>
            
            {/* HEADLINE UTAMA (Kombinasi Black dan Gradient) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] sm:leading-tight mb-4 sm:mb-5">
              Explore the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
                Full Portfolio.
              </span>
            </h2>
            
            {/* DESCRIPTION (Font medium, tidak bold) */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              Explore industrial analytics projects, security monitoring systems, enterprise dashboards, and operational intelligence case studies through the complete portfolio experience.
            </p>
          </div>

          {/* ================= BAGIAN KANAN: TOMBOL DASHBOARD ================= */}
          <div className="relative z-10 shrink-0 w-full md:w-auto mt-4 md:mt-0">
            <motion.a
              href="/dashboard"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn flex items-center justify-center gap-3.5 w-full md:w-auto px-8 py-4 md:py-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:bg-white/[0.03] hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] active:scale-95"
            >
              {/* Ikon Grid Cyan */}
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover/btn:bg-cyan-400 group-hover/btn:text-black transition-colors duration-300">
                <FiGrid className="text-cyan-400 group-hover/btn:text-black text-lg transition-colors duration-300" />
              </div>
              
              {/* Teks Dashboard (Kombinasi Bold dan Uppercase) */}
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest group-hover/btn:text-cyan-50 transition-colors">
                 VIEW FULL PORTFOLIO
              </span>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default DashboardCTA;