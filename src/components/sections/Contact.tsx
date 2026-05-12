import { motion, type Variants } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="contact" className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 overflow-hidden border-t border-white/[0.02] scroll-mt-20">
      
      {/* Dynamic Background Glows (Konsisten dengan section lain) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* ================= KOLOM KIRI: BRANDING & SOSMED ================= */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div variants={itemVariants} className="w-full flex flex-col items-center lg:items-start">
              
              {/* BADGE ENTERPRISE */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
                  OPEN FOR COLLABORATION
                </p>
                {/* Titik kanan hanya muncul di mobile agar simetris jika teks rata tengah */}
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse lg:hidden" />
              </div>

              {/* MAIN HEADLINE */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] sm:leading-tight mb-5 sm:mb-6">
                Let's Build <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  Intelligent Systems.
                </span>
              </h2>
              
              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed font-medium">
                Open for collaboration in <span className="text-gray-200">industrial analytics</span>, <span className="text-gray-200">enterprise monitoring systems</span>, and <span className="text-gray-200">cybersecurity solutions</span>. Focused on building secure, data-driven, and operationally efficient systems.
              </p>
            </motion.div>

            {/* SOCIAL CARDS */}
            <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4 mt-2">
              {[
                { icon: <FiGithub />, url: "https://github.com/MNabildawami", label: "GitHub" },
                { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/m-nabil-dawami-b55380215/", label: "LinkedIn" },
                { icon: <FiMail />, url: "mailto:muhammadnabildawami@gmail.com", label: "Email" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  title={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ================= KOLOM KANAN: FORM ================= */}
          <motion.div 
            variants={itemVariants}
            className="relative group w-full"
          >
            {/* Neon Border Glow Effect - Sangat tipis & elegan */}
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-[2rem] sm:rounded-[32px] blur-md opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            
            <form 
              action="https://formspree.io/f/mvzlwzjr"
              method="POST"
              className="relative bg-[#080808] border border-white/5 p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[32px] space-y-5 shadow-2xl transition-all duration-500 hover:border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#020202] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.02] transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#020202] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.02] transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Share your project or collaboration idea..."
                  className="w-full bg-[#020202] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.02] transition-all resize-none shadow-inner"
                />
              </div>

              <button 
                type="submit"
                className="w-full group/submit relative flex items-center justify-center gap-3 bg-cyan-400 text-black font-black text-xs sm:text-sm uppercase tracking-widest py-4 md:py-4 mt-2 rounded-xl hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                <span className="relative z-10">START COLLABORATION</span>
                <FiSend className="relative z-10 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;