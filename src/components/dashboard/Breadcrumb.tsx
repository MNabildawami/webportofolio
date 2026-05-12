import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

// ================= TYPES =================
interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

// ================= COMPONENT =================
const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav
      className="flex items-center gap-1.5 sm:gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8 sm:mb-10 whitespace-nowrap overflow-x-auto custom-scrollbar pb-2 sm:pb-0"
      aria-label="Breadcrumb"
    >
      {/* ================= HOME ICON (LINK KE LANDING PAGE) ================= */}
      <Link
        to="/"
        className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors duration-300 shrink-0 group"
      >
        <FiHome className="text-sm sm:text-base pb-[2px] group-hover:-translate-y-0.5 transition-transform" />
        <span>Portal</span>
      </Link>

      {/* ================= BREADCRUMB ITEMS (DINAMIS) ================= */}
      {items.map((item, index) => {
        // Logika OOP: Mengecek apakah ini item terakhir di array
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <FiChevronRight className="text-gray-700 text-sm" />

            {isLast || !item.link ? (
              // JIKA HALAMAN SAAT INI: Teks warna cyan, bercahaya, dan TIDAK BISA DIKLIK
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                {item.label}
              </span>
            ) : (
              // JIKA HALAMAN SEBELUMNYA: Teks abu-abu, BISA DIKLIK
              <Link
                to={item.link}
                className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;