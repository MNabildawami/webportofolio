import { Link, useLocation } from "react-router-dom";
import { 
  FiUser, 
  FiBriefcase, 
  FiFolder, 
  FiAward, 
  FiDownload,
  FiBarChart2 
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const DashboardSidebar = () => {
  const location = useLocation();

  // Daftar menu navigasi
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiBarChart2 />, exact: true },
    { name: "About", path: "/#about", icon: <FiUser />, isExternal: true },
    { name: "Experience", path: "/dashboard/experience", icon: <FiBriefcase /> },
    { name: "Projects", path: "/dashboard/projects", icon: <FiFolder /> },
    { name: "Certifications", path: "/dashboard/certifications", icon: <FiAward /> },
  ];

  return (
    <aside className="w-[280px] h-screen border-r border-white/5 bg-[#030303] flex flex-col justify-between p-6 shrink-0 z-20 overflow-y-auto custom-scrollbar">
      
      {/* ================= BAGIAN ATAS: PROFIL & MENU ================= */}
      <div>
        {/* Identitas / Profil */}
        <div className="flex items-center gap-3 mb-12 pl-2">
          {/* Logo 'N' Gradient */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-white text-xl shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            N
          </div>
          <div>
            <h1 className="font-bold text-white text-[15px] leading-tight">Nabil Dawami</h1>
            <p className="text-[11px] text-gray-400 mt-0.5">AI Engineer & Developer</p>
          </div>
        </div>

        {/* Navigasi Utama */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);

            if (item.isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                >
                  <span className="text-xl opacity-80">{item.icon}</span>
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all text-sm font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/40 text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
                    : "text-gray-400 border border-transparent hover:text-white hover:bg-white/5" 
                }`}
              >
                <span className={`text-xl ${isActive ? "text-blue-400" : "opacity-80"}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ================= BAGIAN BAWAH: PROMO & SOSIAL ================= */}
      <div className="mt-10">
        
        {/* Kotak Promo "Quantum Coder" */}
        <div className="p-5 rounded-2xl bg-[#080a10] border border-white/5 mb-6">
          <h3 className="text-white font-bold text-[13px] mb-2">Quantum Coder</h3>
          <p className="text-[11px] text-gray-400 mb-5 leading-relaxed pr-2">
            Building the future with code, AI, and security.
          </p>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0f2e53] to-[#24154a] border border-[#214b7e] hover:border-blue-400/50 text-white text-[11px] font-semibold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Download CV
            <FiDownload className="text-sm opacity-80" />
          </a>
        </div>

        {/* Ikon Sosial Media Terpusat */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <SocialIcon href="https://github.com" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
          <SocialIcon href="mailto:nabil@example.com" icon={<FaEnvelope />} />
        </div>

        <div className="text-center text-[10px] text-gray-500 space-y-1">
          <p>© 2026 Nabil Dawami.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      
    </aside>
  );
};

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm"
  >
    {icon}
  </a>
);

export default DashboardSidebar;