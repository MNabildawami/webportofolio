import { motion, type Variants } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="contact" className="relative bg-black text-white py-32 px-6 overflow-hidden">
      
      {/* Background Neon Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          
          {/* KOLOM KIRI: BRANDING & SOSMED */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                Connect With Me
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Let's Start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  Great Project
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Terbuka untuk kolaborasi strategis di bidang <span className="text-white">AI Security</span> dan pengembangan sistem. Membawa dedikasi lulusan <span className="text-cyan-400">UIN Suska Riau</span> untuk solusi digital Anda.
              </p>
            </motion.div>

            {/* Social Cards */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: <FiGithub />, url: "https://github.com/nabeeldawami", label: "GitHub" },
                { icon: <FiLinkedin />, url: "https://linkedin.com/in/nabieldawami", label: "LinkedIn" },
                { icon: <FiMail />, url: "mailto:muhammadnabildawami@gmail.com", label: "Email" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                  title={link.label}
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* KOLOM KANAN: PESAN LANGSUNG (FORM) */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            {/* Neon Border Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[35px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <form 
              action="https://formspree.io/f/mvzlwzjr" // <-- GANTI DENGAN ID FORMSPREE ANDA
              method="POST"
              className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[32px] space-y-6 backdrop-blur-xl"
            >
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Hello Nabil, I have a project..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-cyan-400 text-black font-bold py-5 rounded-2xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] active:scale-95"
              >
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;