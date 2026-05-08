import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si"; // Import ikon Scholar

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

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/music/videoplayback.m4a" />

      <section
        id="about"
        className="relative bg-black text-white py-32 px-6 scroll-mt-20 overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            
            {/* LEFT COLUMN: TEXT & STATS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Top Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
                <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">
                  About Me
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                Building Intelligent & Secure Digital Systems
              </h2>

              {/* University Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 w-fit mb-6 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
                <span className="text-lg">🎓</span>
                <span className="text-sm font-medium text-gray-300">
                  Informatics Engineering • <span className="text-cyan-400">UIN Suska Riau</span>
                </span>
              </div>

              {/* Copywriting */}
              <div className="text-gray-400 leading-relaxed text-lg mb-8 max-w-2xl space-y-4">
                <p>
                  As an Informatics Engineering graduate, I bridge the gap between complex algorithms and scalable digital architectures. My passion lies in solving real-world problems through modern technology.
                </p>
                <p>
                  My core expertise is anchored in three main pillars: architecting predictive models as an <strong className="text-white font-semibold tracking-wide">AI Engineer</strong>, fortifying system perimeters through advanced <strong className="text-white font-semibold tracking-wide">Cybersecurity</strong> practices, and developing robust, end-to-end applications as a <strong className="text-white font-semibold tracking-wide">Fullstack Developer</strong>.
                </p>
              </div>

              {/* SCHOLAR BUTTON */}
              <div className="mb-10">
                <a
                  href="https://scholar.google.com/" // MASUKKAN LINK SCHOLAR ANDA
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  <SiGooglescholar className="text-lg" />
                  View Academic Publications
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    10<span className="text-cyan-400">+</span>
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Projects</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    15<span className="text-cyan-400">+</span>
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Certifications</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden col-span-2 sm:col-span-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    3.59
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">GPA</p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: MUSIC PLAYER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[380px] bg-white/[0.02] border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                
                {/* Glow di belakang player */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

                {/* ANIMATED RECORD/CD */}
                <div className="flex justify-center mb-8 relative z-10">
                  <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className={`w-48 h-48 rounded-full p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)] ${!isPlaying && "opacity-80 grayscale-[30%]"}`}
                  >
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 border-[4px] border-white/5 rounded-full m-4" />
                      <div className="absolute inset-0 border-[2px] border-white/5 rounded-full m-8" />
                      <div className="w-12 h-12 rounded-full bg-black border-2 border-cyan-400/50 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* SONG INFO */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                    Nabeel Vibes
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest">
                    AI • Cyber • Code
                  </p>
                </div>

                {/* PROGRESS BAR */}
                <div className="mb-8 relative z-10">
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                    <motion.div
                      className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      style={{ width: `${progress}%` }}
                      layout
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-medium">
                    <span>LIVE</span>
                    <span>HD AUDIO</span>
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center justify-center relative z-10">
                  <button
                    onClick={toggleMusic}
                    className="relative group/btn flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {isPlaying && (
                      <span className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-75" />
                    )}
                    {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;