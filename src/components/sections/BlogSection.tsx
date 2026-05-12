import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

// Definisi Tipe Data untuk TypeScript
interface BlogPost {
  id: string;
  title: string;
  published: string;
  link: string;
  thumbnail: string;
  description: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // URL Blog kamu
  const BLOG_URL = "nabilnexus.blogspot.com";

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        // Menggunakan RSS2JSON API untuk Bypass CORS di Localhost
        const rssUrl = `https://${BLOG_URL}/feeds/posts/default?alt=rss`;
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();

        // Cek apakah status 'ok' dan array items tersedia
        if (data.status === "ok" && data.items) {
          
          // Ambil maksimal 2 artikel menggunakan .slice(0, 2)
          const fetchedPosts: BlogPost[] = data.items.slice(0, 2).map((item: any, index: number) => {
            
            // 1. Format Tanggal
            const dateObj = new Date(item.pubDate.replace(/-/g, "/"));
            const formattedDate = dateObj.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });

            // 2. Ekstrak Thumbnail
            let thumbnail = item.thumbnail || "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1000&auto=format&fit=crop";
            
            // Jika rss2json gagal mendeteksi thumbnail, cari paksa tag <img> di dalam konten artikel
            if (!item.thumbnail && item.content) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) thumbnail = imgMatch[1];
            }

            // Tingkatkan resolusi gambar dari Blogger agar tidak buram
            if(thumbnail.includes('blogger.googleusercontent.com')) {
              thumbnail = thumbnail.replace(/\/s[0-9]+(\-c)?\//, '/s800/');
              thumbnail = thumbnail.replace(/\/w[0-9]+-h[0-9]+(-c)?\//, '/s800/');
            }

            // 3. Ekstrak Deskripsi (Hapus semua tag HTML dan ambil 120 huruf pertama)
            const strippedHTML = item.content.replace(/(<([^>]+)>)/gi, "");
            const description = strippedHTML.substring(0, 120) + "...";

            return {
              id: item.guid || `post-${index}`,
              title: item.title,
              published: formattedDate,
              link: item.link,
              thumbnail: thumbnail,
              description: description,
            };
          });

          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Gagal mengambil data dari RSS2JSON:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <section id="blog" className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 overflow-hidden scroll-mt-20">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
              Writing & Research
            </p>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Insights & <span className="text-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Perspectives</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Eksplorasi ide melalui tulisan. Dari analisis teknologi, AI Security, hingga interpretasi karya sastra .
          </p>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {loading ? (
            // Skeleton Loading
            [1, 2].map((n) => (
              <div key={n} className="h-[400px] bg-[#080808] border border-white/5 rounded-[2rem] animate-pulse"></div>
            ))
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] active:scale-[0.98]"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] overflow-hidden m-4 sm:m-5 rounded-[1.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-[#020202]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity z-10" />
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* DATE BADGE */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {post.published}
                  </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex flex-col flex-grow p-6 sm:p-8 pt-2 sm:pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 flex-grow">
                    {post.description}
                  </p>
                  
                  {/* BOTTOM ACTION */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      Read Story
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                      <FiArrowUpRight className="text-lg sm:text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500">Belum ada artikel yang dipublikasikan.</div>
          )}
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <a
            href={`https://${BLOG_URL}/`}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-transparent border border-white/10 text-white transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-95"
          >
            <FiBookOpen className="text-cyan-400 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] group-hover:text-cyan-400 transition-colors">
              Explore Blogger
            </span>
            <FiArrowUpRight className="text-gray-500 text-lg group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;