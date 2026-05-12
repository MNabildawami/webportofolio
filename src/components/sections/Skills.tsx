import { motion } from "framer-motion";
import { Database, ShieldCheck, LayoutDashboard } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 overflow-hidden scroll-mt-20"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
              Enterprise Capabilities
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Expertise</span>
          </h2>
        </motion.div>

        {/* ================= HIERARCHICAL GRID SYSTEM ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          
          {/* --- CARD 1: PRIMARY FOCUS (DATA ANALYTICS) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-cyan-400/40 transition-all duration-500 overflow-hidden shadow-lg"
          >
            {/* Dominant Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#020202] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-500 shadow-inner">
                <Database className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-50 transition-colors">
                Industrial Data Analytics
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 font-medium flex-grow">
                Building data-driven solutions through analytics, forecasting, visualization, and operational intelligence for enterprise environments.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["Python", "SQL", "Power BI", "Forecasting"].map((tool, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 text-[10px] sm:text-xs font-bold text-gray-400 bg-white/[0.03] border border-white/5 rounded-md group-hover:border-cyan-400/20 group-hover:text-cyan-300 transition-all duration-300 tracking-wider uppercase">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- CARD 2: PRIMARY FOCUS (CYBERSECURITY) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-blue-400/40 transition-all duration-500 overflow-hidden shadow-lg"
          >
            {/* Dominant Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#020202] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-400/10 transition-all duration-500 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-50 transition-colors">
                Cybersecurity & Monitoring
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 font-medium flex-grow">
                Developing secure monitoring systems, log analysis workflows, and operational security solutions for enterprise infrastructure.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["Linux", "SIEM", "Wireshark", "Security+"].map((tool, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 text-[10px] sm:text-xs font-bold text-gray-400 bg-white/[0.03] border border-white/5 rounded-md group-hover:border-blue-400/20 group-hover:text-blue-300 transition-all duration-300 tracking-wider uppercase">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- CARD 3: SUPPORTING SKILL (DASHBOARD DEV) --- */}
          {/* Membentang 2 kolom penuh di tablet/desktop untuk menegaskan ini fondasi/supporting skill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }} // Efek hover lebih subtle
            className="group relative md:col-span-2 p-8 sm:p-10 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
              
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#020202] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.05] group-hover:border-white/20 transition-all duration-500">
                <LayoutDashboard className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-white transition-colors">
                  Dashboard & System Development
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  Building modern dashboards and secure web-based systems to support analytics and monitoring operations.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-nowrap shrink-0 gap-2 mt-4 md:mt-0">
                {["React", "Next.js", "TypeScript", "Tailwind"].map((tool, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-[#020202] border border-white/5 rounded-md group-hover:border-white/10 group-hover:text-gray-300 transition-all duration-300 tracking-wider uppercase">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;