// 1. Mendefinisikan tipe data props yang diterima komponen
export interface DashboardTimelineItemProps {
  role: string;
  company: string;
  active?: boolean; // Opsional: Jika true, titik timeline akan menyala cyan
}

const DashboardTimelineItem = ({ role, company, active = false }: DashboardTimelineItemProps) => {
  return (
    <div className="relative flex gap-5 group">
      
      {/* Node (Titik Timeline) */}
      {/* Jika active, warnanya Cyan dan menyala. Jika tidak, warnanya redup. */}
      <div 
        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 z-10 transition-all duration-500 ${
          active 
            ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
            : 'bg-[#0a0d14] border-white/10 group-hover:border-cyan-400/50'
        }`}
      >
        <span 
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            active 
              ? 'bg-cyan-400' 
              : 'bg-gray-600 group-hover:bg-cyan-400'
          }`} 
        />
      </div>
      
      {/* Konten Teks (Jabatan & Perusahaan) */}
      <div className="pb-2 flex-1">
        <h4 
          className={`text-sm font-bold transition-colors duration-300 ${
            active ? 'text-white' : 'text-gray-300 group-hover:text-white'
          }`}
        >
          {role}
        </h4>
        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
          {company}
        </p>
      </div>
      
    </div>
  );
};

export default DashboardTimelineItem;