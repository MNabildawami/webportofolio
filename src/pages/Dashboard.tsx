import React from "react";
import { 
  FiHome, FiUser, FiCode, FiFolder, FiBriefcase, 
  FiAward, FiMail, FiGithub, FiLinkedin, FiExternalLink, 
  FiGrid, FiShield, FiLayout 
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#06080D] text-white font-sans overflow-hidden">
      
      {/* ================= SIDEBAR (KIRI) ================= */}
      <aside className="w-[280px] border-r border-white/10 flex flex-col justify-between p-6 bg-[#06080D] z-20">
        
        <div>
          {/* Logo Profile */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              N
            </div>
            <div>
              <h1 className="font-bold text-sm">Nabil Dawami</h1>
              <p className="text-[10px] text-gray-400">AI Engineer & Developer</p>
            </div>
          </div>

          {/* Navigasi Sidebar */}
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<FiHome />} label="Home" />
            <SidebarItem icon={<FiUser />} label="About" />
            <SidebarItem icon={<FiCode />} label="Skills" />
            {/* Active Item */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] cursor-pointer transition-all">
              <FiFolder />
              <span className="font-semibold text-sm">Projects</span>
            </div>
            <SidebarItem icon={<FiBriefcase />} label="Experience" />
            <SidebarItem icon={<FiAward />} label="Certificates" />
            <SidebarItem icon={<FiMail />} label="Contact" />
          </nav>
        </div>

        {/* Footer Sidebar (Stats & Socials) */}
        <div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 blur-[30px] rounded-full" />
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
              <FiFolder className="text-blue-400" />
            </div>
            <p className="text-xs text-gray-400 mb-1">Total Projects</p>
            <h2 className="text-4xl font-black text-cyan-400 mb-1">12</h2>
            <p className="text-[10px] text-gray-500">Across 3 Categories</p>
          </div>

          <div className="flex items-center justify-center gap-6 text-gray-500">
            <FiGithub className="hover:text-white cursor-pointer transition-colors" />
            <FiLinkedin className="hover:text-white cursor-pointer transition-colors" />
            <FiMail className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT (KANAN) ================= */}
      <main className="flex-1 overflow-y-auto p-10 relative">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-40 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Content */}
        <div className="mb-10 relative z-10">
          <h1 className="text-4xl font-black tracking-tight mb-2">All Projects</h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            Selected works across AI Engineering, Cybersecurity, and Fullstack Development that solve real-world problems.
          </p>
        </div>

        <div className="flex gap-8 relative z-10">
          
          {/* PANEL FILTER (TENGAH) */}
          <div className="w-[240px] shrink-0">
            <h3 className="text-sm font-semibold mb-4 text-gray-300">Filter Projects</h3>
            <div className="flex flex-col gap-2 mb-8">
              <FilterItem icon={<FiGrid />} label="All Projects" count="" active />
              <FilterItem icon={<FiFolder />} label="AI Engineer" count="5" />
              <FilterItem icon={<FiShield />} label="Cybersecurity" count="4" />
              <FilterItem icon={<FiLayout />} label="Fullstack" count="3" />
            </div>

            <h3 className="text-sm font-semibold mb-4 text-gray-300">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <TechBadge label=".NET" />
              <TechBadge label="ASP.NET" />
              <TechBadge label="C#" />
              <TechBadge label="MySQL" />
              <TechBadge label="SQL Server" />
              <TechBadge label="React" />
              <TechBadge label="Python" />
              <TechBadge label="TensorFlow" />
            </div>
            <a href="#" className="text-cyan-400 text-xs font-semibold hover:underline">View All Technologies →</a>
          </div>

          {/* LIST PROJECT CARD (KANAN) */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Showing <strong className="text-white">12</strong> projects</span>
              <select className="bg-transparent border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-cyan-400">
                <option className="bg-[#06080D]">Newest</option>
                <option className="bg-[#06080D]">Oldest</option>
              </select>
            </div>

            {/* DUMMY PROJECT CARDS */}
            <ProjectCard 
              num="01"
              tag="WEB APPLICATION"
              title="Sistem Informasi Magang IT (SIMIT)"
              company="PT. Kilang Pertamina Internasional RU II Dumai"
              desc="Web aplikasi untuk membantu kegiatan magang mahasiswa secara terintegrasi. Sistem ini mendukung pengelolaan data mahasiswa dan pembimbing, pencatatan aktivitas..."
              tech={["C#", "ASP.NET", "MySQL", "Swagger"]}
            />
            
            <ProjectCard 
              num="02"
              tag="AI APPLICATION"
              title="AI Chat Assistant"
              company=""
              desc="Chatbot AI berbasis LLM yang dapat menjawab pertanyaan, memberikan rekomendasi, dan membantu menyelesaikan berbagai tugas dengan pemrosesan bahasa alami."
              tech={["Python", "FastAPI", "OpenAI", "MongoDB"]}
            />

            <ProjectCard 
              num="03"
              tag="CYBERSECURITY"
              title="Threat Detection System"
              company=""
              desc="Sistem deteksi ancaman siber secara real-time menggunakan machine learning untuk menganalisis pola serangan dan memberikan peringatan dini."
              tech={["Python", "Scikit-learn", "TensorFlow", "ELK Stack"]}
            />

            {/* Pagination Placeholder */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-8 h-8 flex items-center justify-center rounded bg-cyan-500 text-black font-bold text-xs">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 text-xs">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 text-xs">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 text-xs">&gt;</button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

// ================= KOMPONEN KECIL PENDUKUNG =================

const SidebarItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const FilterItem = ({ icon, label, count, active }: { icon: React.ReactNode, label: string, count: string, active?: boolean }) => (
  <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${active ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'border-white/5 bg-white/[0.02] text-gray-400 hover:bg-white/5'} cursor-pointer transition-colors`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </div>
    {count && <span className="text-[10px] font-bold opacity-50">{count}</span>}
  </div>
);

const TechBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] text-gray-300">
    {label}
  </span>
);

const ProjectCard = ({ num, tag, title, company, desc, tech }: any) => (
  <div className="relative flex gap-6 p-6 rounded-2xl bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors overflow-hidden group">
    
    {/* Big Number Background */}
    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-500">
      {num}
    </div>

    {/* Placeholder Gambar Project */}
    <div className="w-[280px] shrink-0 h-[180px] rounded-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 flex items-center justify-center">
      <span className="text-white/20 text-xs">Image Placeholder</span>
    </div>

    {/* Project Info */}
    <div className="flex-1 flex flex-col py-2 relative z-10">
      <div className="mb-3">
        <span className="inline-block px-2.5 py-1 rounded border border-cyan-500/30 text-cyan-400 text-[9px] font-bold tracking-widest mb-2 bg-cyan-500/5">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        {company && <p className="text-xs text-cyan-400 mb-2">{company}</p>}
      </div>
      
      <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-xl">
        {desc}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <div className="flex gap-2">
          {tech.map((t: string) => (
            <span key={t} className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-gray-300">{t}</span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-semibold transition-colors">
            <FiGithub /> GitHub
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors">
            <FiExternalLink /> Live Demo
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;