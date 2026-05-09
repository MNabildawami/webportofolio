import { FiAward, FiBriefcase, FiFolder, FiGrid } from "react-icons/fi";

// Mendefinisikan tipe data props yang dibutuhkan oleh komponen ini
export interface StatCardProps {
  label: string;
  value: string | number;
  desc: string;
  color: "bg-blue-500" | "bg-purple-500" | "bg-cyan-500" | "bg-green-500" | "bg-orange-500" | "bg-pink-500"; // Pilihan warna
  iconType: "award" | "briefcase" | "folder" | "grid"; // Pilihan ikon
}

const DashboardStatCard = ({ label, value, desc, color, iconType }: StatCardProps) => {
  
  // Fungsi untuk menentukan Ikon apa yang akan dirender berdasarkan props 'iconType'
  const renderIcon = () => {
    switch (iconType) {
      case "award": return <FiAward />;
      case "briefcase": return <FiBriefcase />;
      case "folder": return <FiFolder />;
      case "grid": return <FiGrid />;
      default: return <FiAward />;
    }
  };

  // Mengambil warna teks dari warna background yang dikirim
  // Contoh: 'bg-blue-500' -> akan mengambil kata 'blue' saja, menjadi 'text-blue-400'
  const textColorClass = color.replace('bg-', 'text-').replace('500', '400');

  return (
    <div className="p-5 rounded-2xl bg-[#0a0d14] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1">
      
      {/* Container Ikon */}
      <div className={`w-10 h-10 rounded-xl ${color}/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <span className={`text-xl ${textColorClass}`}>
          {renderIcon()}
        </span>
      </div>
      
      {/* Angka Utama */}
      <span className="text-3xl font-black text-white mb-1 tracking-tight">
        {value}
      </span>
      
      {/* Label (Contoh: Total Projects) */}
      <span className="text-[11px] font-semibold text-gray-400 mb-2 tracking-wide">
        {label}
      </span>
      
      {/* Deskripsi Kecil di Bawah */}
      <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-[0.2em] mt-auto">
        <span className={`w-1.5 h-1.5 rounded-full ${color} shadow-[0_0_8px_currentColor]`} />
        {desc}
      </div>

    </div>
  );
};

export default DashboardStatCard;