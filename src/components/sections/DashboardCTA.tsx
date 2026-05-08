import { motion } from "framer-motion";
import { FiGrid, FiTerminal } from "react-icons/fi";

const DashboardCTA = () => {
  return (
    <section className="relative bg-[#020202] px-6 py-24 overflow-hidden border-t border-white/5">
      
      {/* AMBIENT GLOW DIBELAKANG CARD */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-cyan-400/20 transition-colors duration-500 shadow-2xl"
        >
          {/* CAHAYA HALUS DI SUDUT KANAN ATAS CARD */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* ================= BAGIAN KIRI: TEKS ================= */}
          <div className="flex flex-col items-start text-left max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <FiTerminal />
              <span>Explore More</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Access the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Full System.
              </span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Website ini hanya menampilkan sebagian dari portofolio saya. Masuk ke halaman Dashboard untuk melihat arsitektur proyek, galeri sertifikasi, dan analitik teknis secara menyeluruh.
            </p>
          </div>

          {/* ================= BAGIAN KANAN: TOMBOL DASHBOARD (SEPERTI GAMBAR) ================= */}
          <div className="relative z-10 shrink-0 w-full md:w-auto mt-6 md:mt-0">
            <motion.a
              href="/dashboard"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn flex items-center justify-center gap-3 w-full md:w-auto px-7 py-4 rounded-xl bg-black/50 border border-white/10 hover:bg-white/[0.05] hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              {/* Ikon Grid Cyan */}
              <FiGrid className="text-cyan-400 text-xl group-hover/btn:scale-110 transition-transform duration-300" />
              
              {/* Teks Dashboard Putih */}
              <span className="text-white font-bold text-sm uppercase tracking-widest group-hover/btn:text-cyan-50 transition-colors">
                 kunjungi Dashboard
              </span>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default DashboardCTA;