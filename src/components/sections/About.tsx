import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

// ================= IMPORT DATA DINAMIS =================
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      const current = audio.currentTime;
      const duration = audio.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  // ================= SUB-COMPONENT: MUSIC PLAYER UI =================
  const MusicPlayer = () => (
    <div 
      // Menggunakan efek glassmorphism (backdrop-blur) dan kondisional hover
      className={`relative w-full max-w-[340px] sm:max-w-[380px] bg-white/[0.03] border border-white/10 rounded-[2rem] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 ${!isPlaying ? "hover:border-cyan-500/30 hover:bg-white/[0.05]" : ""}`}
    >
      
      {/* Cahaya statis di latar, tidak berubah saat di-hover */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
      
      {/* Piringan Hitam (Vinyl) / CD */}
      <div className="flex justify-center mb-8 relative z-10">
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center bg-[#030303] shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/5 ${!isPlaying && "opacity-80"}`}
        >
          {/* Garis-garis vinyl (Grooves) */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/[0.03]" />
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-white/[0.03]" />
          <div className="absolute inset-8 sm:inset-11 rounded-full border border-white/[0.03]" />
          
          {/* Label Tengah */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-950 border-[3px] border-cyan-800 flex items-center justify-center z-10 shadow-inner">
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>
        </motion.div>
      </div>

      {/* Info & Progress */}
      <div className="text-center mb-6 relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-wide">Nabeel Vibes</h3>
        <p className="text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">DATA • SECURITY • ANALYTICS</p>
      </div>

      <div className="mb-8 relative z-10">
        {/* Track Bar yang lebih clean */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-cyan-400" style={{ width: `${progress}%` }} layout />
        </div>
        <div className="flex justify-between mt-2.5 text-[9px] sm:text-[10px] text-gray-500 font-bold tracking-widest">
          <span>LIVE</span>
          <span>HD AUDIO</span>
        </div>
      </div>

      {/* Play/Pause Button */}
      <div className="flex items-center justify-center relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMusic}
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-black transition-colors duration-500 ease-in-out ${
            isPlaying 
              ? "bg-cyan-300" // Saat nyala: Warna cyan solid yang lebih terang
              : "bg-cyan-500 hover:bg-cyan-400" // Saat mati: Cyan normal
          }`}
        >
          {isPlaying ? <FaPause className="text-lg sm:text-xl" /> : <FaPlay className="text-lg sm:text-xl ml-1" />}
        </motion.button>
      </div>
    </div>
  );

  return (
    <>
      <audio ref={audioRef} src="/music/videoplayback.m4a" />

      <section id="about" className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 scroll-mt-20 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-cyan-500/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            
            {/* ================= LEFT COLUMN ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              {/* 1. Header Teks */}
              <div className="order-1 flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">About Me</p>
              </div>

              {/* 2. Judul */}
              <h2 className="order-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 sm:mb-6 text-white">
                Building Intelligent & <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Secure Industrial Systems</span>
              </h2>

              {/* 3. Badge Kampus */}
              <div className="order-3 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 w-fit mb-6 lg:mb-8 shadow-sm">
                <span className="text-base sm:text-lg">🎓</span>
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  Informatics Engineering • <span className="text-cyan-400 font-bold">UIN Suska Riau</span>
                </span>
              </div>

              {/* 4. Deskripsi */}
              <div className="order-4 text-gray-400 text-sm sm:text-base leading-relaxed mb-8 lg:mb-10 max-w-2xl space-y-4 font-medium">
                <p>As an Informatics Engineering graduate, I focus on Industrial Data Analytics and Cybersecurity to build secure, data-driven, and operationally efficient systems. My interests lie in energy analytics, security monitoring, and operational intelligence for enterprise environments.</p>
                <p>My core expertise is centered around data analytics, security monitoring, and intelligent operational systems. I build analytics dashboards, monitoring platforms, and secure data-driven applications using Python, SQL, Power BI, and cybersecurity tools to solve real-world industrial problems.</p>
              </div>

              {/* 5. STATS GRID */}
              <div className="order-5 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mb-8 lg:mb-0">
                <StatBox value={projects.length}  label="Projects" />
                <StatBox value={certifications.length}  label="Certifications" />
                <StatBox value={3.59} label="GPA" isHighlight />
              </div>

              {/* 6. SCHOLAR BUTTON */}
              <div className="order-6 lg:order-6 lg:mt-12 flex justify-center lg:justify-start w-full">
                <motion.a
                  href="https://scholar.google.com/citations?user=oCv1v7UAAAAJ&hl=id" 
                  target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-6 py-3.5 rounded-xl sm:rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-bold tracking-wide hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                >
                  <SiGooglescholar className="text-lg" /> View Academic Publications
                </motion.a>
              </div>

            </motion.div>

            {/* ================= RIGHT COLUMN (Desktop Only) ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="hidden lg:flex justify-end w-full"
            >
              <MusicPlayer />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

// ================= SUB-COMPONENT: STAT BOX =================
interface StatBoxProps {
  value: string | number;
  label: string;
  suffix?: string;
  isHighlight?: boolean;
}

const StatBox = ({ value, label, suffix, isHighlight = false }: StatBoxProps) => (
  <motion.div
    whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.4)" }}
    className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 overflow-hidden shadow-lg flex flex-col items-center justify-center text-center ${isHighlight ? 'col-span-2 sm:col-span-1' : ''}`}
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <h3 className="text-3xl sm:text-4xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
      {value}
      {suffix && <span className="text-cyan-400">{suffix}</span>}
    </h3>
    <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{label}</p>
  </motion.div>
);

export default About;