import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiClock, FiBriefcase, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";

// IMPORT KOMPONEN SIDEBAR YANG SUDAH DIBUAT TADI
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";

const Overview = () => {
  return (
    <div className="flex h-screen bg-[#020202] text-white overflow-hidden font-sans">
      
      {/* ================= PANGGIL SIDEBAR DI SINI ================= */}
      <DashboardSidebar />

      {/* ================= AREA KONTEN UTAMA (KANAN) ================= */}
      <main className="flex-1 relative overflow-y-auto p-6 md:p-10">
        
        {/* Efek Glow Global untuk area background kanan */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

        {/* BUNGKUS KONTEN DENGAN ANIMASI MUNCUL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-7xl mx-auto pb-20"
        >
          
          {/* ================= HEADER ================= */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">
              Welcome Back! 👋
            </h1>
            <p className="text-gray-400 text-sm max-w-2xl">
              Explore my journey, projects, and achievements in AI, Cybersecurity, and Fullstack Development.
            </p>
          </div>

          {/* ================= STAT CARDS ROW ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Projects" value="12" desc="Completed" color="bg-blue-500" />
            <StatCard label="Experience" value="2+" desc="Years" color="bg-purple-500" />
            <StatCard label="Certifications" value="8+" desc="Earned" color="bg-cyan-500" />
            <StatCard label="Control Hub" value="1" desc="Dashboard" color="bg-green-500" />
          </div>

          {/* ================= MIDDLE ROW (ABOUT & TIMELINE) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* ABOUT ME (Kiri - Makan 2 Kolom) */}
            <div className="lg:col-span-2 p-6 md:p-8 rounded-[24px] bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors">
              <h2 className="text-lg font-bold mb-6 text-white">About Me</h2>
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Foto Profil / Avatar */}
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400 p-1">
                    <div className="w-full h-full rounded-full bg-[#06080D] flex items-center justify-center text-3xl font-black text-cyan-400 shadow-inner">
                      N
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0a0d14] shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                </div>

                {/* Info Biodata */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">M. Nabil Dawami</h3>
                  <p className="text-sm text-cyan-400 mb-4">AI Engineer & Fullstack Developer</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Undergraduate IT student with a strong focus on building intelligent systems, securing digital environments, and developing scalable applications. Passionate about AI Security, digital forensics, and modern web architectures.
                  </p>
                  
                  {/* Kontak & Lokasi */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoItem icon={<FiMapPin />} title="Location" value="Pekanbaru, Indonesia" />
                    <InfoItem icon={<FiBriefcase />} title="Freelance" value="Available" />
                    <InfoItem icon={<FiMail />} title="Email" value="Contact via Form" />
                    <InfoItem icon={<FiClock />} title="Response Time" value="< 24 hours" />
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE TIMELINE MINI (Kanan - Makan 1 Kolom) */}
            <div className="p-6 md:p-8 rounded-[24px] bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white">Experience Timeline</h2>
                <Link to="/dashboard/experience" className="text-xs text-cyan-400 hover:underline">View All →</Link>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/5 flex-1">
                <MiniTimelineItem 
                  role="AI Engineer Intern" 
                  company="Tech Company • 2024 - Present" 
                  active 
                />
                <MiniTimelineItem 
                  role="Fullstack Developer" 
                  company="Freelance • 2023 - Present" 
                />
                <MiniTimelineItem 
                  role="Cybersecurity Learner" 
                  company="Self-Study • 2022 - Present" 
                />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ROW (PROJECTS & CERTS) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* FEATURED PROJECTS */}
            <div className="lg:col-span-2 p-6 md:p-8 rounded-[24px] bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white">Featured Projects</h2>
                <Link to="/dashboard/projects" className="text-xs text-cyan-400 hover:underline">View All Projects →</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MiniProjectCard 
                  tag="AI APPLICATION" 
                  title="Medical AI Diagnosis" 
                  tech="Python, FastAPI, OpenAI" 
                />
                <MiniProjectCard 
                  tag="CYBERSECURITY" 
                  title="Post-Quantum ML-DSA" 
                  tech="Digital Forensics, Crypto" 
                />
              </div>
            </div>

            {/* LATEST CERTIFICATIONS */}
            <div className="p-6 md:p-8 rounded-[24px] bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white">Latest Certs</h2>
                <Link to="/dashboard/certifications" className="text-xs text-cyan-400 hover:underline">View All →</Link>
              </div>

              <div className="space-y-4">
                <MiniCertItem title="IDCamp Gen AI Engineer" issuer="Dicoding" year="2025" />
                <MiniCertItem title="MLOps Engineer" issuer="Dicoding" year="2025" />
                <MiniCertItem title="Odoo Partner Onboarding" issuer="Odoo" year="2025" />
              </div>
            </div>

          </div>
        </motion.div>
      </main>
    </div>
  );
};

// ================= KOMPONEN BANTUAN (UI) =================

const StatCard = ({ label, value, desc, color }: any) => (
  <div className="p-5 rounded-2xl bg-[#0a0d14] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors">
    <div className={`w-8 h-8 rounded-lg ${color}/10 flex items-center justify-center mb-3`}>
      <FiAward className={`text-${color.split('-')[1]}-400`} />
    </div>
    <span className="text-3xl font-black text-white mb-1">{value}</span>
    <span className="text-[11px] font-semibold text-gray-400 mb-1">{label}</span>
    <div className="flex items-center gap-1.5 text-[9px] text-gray-500 uppercase tracking-wider">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      {desc}
    </div>
  </div>
);

const InfoItem = ({ icon, title, value }: any) => (
  <div className="flex items-center gap-3">
    <div className="text-cyan-400 text-lg opacity-70">{icon}</div>
    <div>
      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{title}</p>
      <p className="text-xs text-white font-medium">{value}</p>
    </div>
  </div>
);

const MiniTimelineItem = ({ role, company, active }: any) => (
  <div className="relative flex gap-5 group">
    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 z-10 transition-colors ${active ? 'bg-cyan-500/20 border-cyan-400' : 'bg-[#0a0d14] border-white/10 group-hover:border-white/30'}`}>
      <span className={`w-2 h-2 rounded-full ${active ? 'bg-cyan-400' : 'bg-gray-600 group-hover:bg-gray-400'}`} />
    </div>
    <div className="pb-2">
      <h4 className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-300'}`}>{role}</h4>
      <p className="text-[11px] text-gray-500 mt-0.5">{company}</p>
    </div>
  </div>
);

const MiniProjectCard = ({ tag, title, tech }: any) => (
  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-colors group cursor-pointer">
    <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[8px] font-bold tracking-widest mb-2">
      {tag}
    </span>
    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-[10px] text-gray-500">{tech}</p>
  </div>
);

const MiniCertItem = ({ title, issuer, year }: any) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
        <FiAward />
      </div>
      <div>
        <h4 className="text-xs font-bold text-white line-clamp-1">{title}</h4>
        <p className="text-[10px] text-gray-500">{issuer}</p>
      </div>
    </div>
    <span className="text-[10px] text-gray-400 font-medium">{year}</span>
  </div>
);

export default Overview;