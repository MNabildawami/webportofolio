import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

// 1. Tipe Data untuk TypeScript (Biar tidak error)
interface ExperienceType {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  desc: string;
  skills: string[];
  isCurrent?: boolean;
}

// 2. Data Dummy Experience (Bisa Anda ganti nanti)
const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "Tech Company X",
    location: "Remote",
    period: "Jan 2024 - Present",
    type: "Internship",
    desc: "Mengembangkan solusi berbasis AI, melakukan optimasi model LLM, dan membangun sistem otomatisasi cerdas untuk efisiensi operasional.",
    skills: ["Python", "TensorFlow", "OpenAI API", "FastAPI"],
    isCurrent: true,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Freelance",
    location: "Pekanbaru, Indonesia",
    period: "Mar 2023 - Present",
    type: "Freelance",
    desc: "Membangun aplikasi web modern skala menengah, merancang arsitektur database, dan mengembangkan RESTful API untuk berbagai klien.",
    skills: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    isCurrent: true,
  },
  {
    id: 3,
    role: "Mahasiswa S1 Teknik Informatika",
    company: "Universitas",
    location: "Pekanbaru, Indonesia",
    period: "2022 - 2026 (Expected)",
    type: "Education",
    desc: "Fokus pada penelitian di bidang Artificial Intelligence dan Keamanan Siber. Aktif dalam berbagai kepanitiaan dan proyek kampus.",
    skills: ["C++", "Data Structures", "Algorithms", "Cybersecurity"],
  }
];

const DashExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pb-20"
    >
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">
          Experience & Education
        </h1>
        <p className="text-gray-400 text-sm max-w-2xl">
          Jejak langkah profesional dan akademis saya dalam membangun karir di dunia teknologi.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-4xl">
        
        {/* Garis vertikal timeline */}
        <div className="absolute left-[28px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500/50 to-transparent" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={exp.id}
              className="relative pl-20 group"
            >
              {/* Ikon Bulat di Garis Timeline */}
              <div className={`absolute left-0 top-1 w-14 h-14 rounded-full flex items-center justify-center border-4 border-[#020202] z-10 transition-colors duration-500 ${
                exp.isCurrent 
                  ? "bg-cyan-500 text-[#020202] shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                  : "bg-white/[0.05] border-white/10 text-gray-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400"
              }`}>
                {exp.type === "Education" ? <FiAward className="text-xl" /> : <FiBriefcase className="text-xl" />}
              </div>

              {/* Box Konten Experience */}
              <div className="p-8 rounded-[24px] bg-[#0a0d14] border border-white/5 group-hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-cyan-500/5">
                
                {/* Header Kotak: Role & Badge Current */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-cyan-500 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  {exp.isCurrent && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Info Detail: Tanggal & Lokasi */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Skills/Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-gray-300 font-medium group-hover:border-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DashExperience;