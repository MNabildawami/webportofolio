import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const BlogSection = () => {
  // Data Artikel Static yang disempurnakan visualnya
  const staticPosts = [
    {
      id: "post-1",
      title: "Corona Bergelora, Produksi Anime Sengsara",
      published: "May 14, 2020",
      link: "https://nabilbbbb.blogspot.com/2020/05/corona-bergelora-produksi-anime-sengsara.html",
      // Gambar bertema produksi studio/distopia yang dramatis
      thumbnail: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1000&auto=format&fit=crop",
      description: "Analisis mendalam mengenai krisis produksi di industri anime akibat pembatasan global, mencakup kendala teknis hingga penundaan rilis besar.",
    },
    {
      id: "post-2",
      title: "Dream - Shimizu Shota (Terjemahan Lirik)",
      published: "June 20, 2019",
      link: "https://nabilbbbb.blogspot.com/2019/06/dream-shimizu-shota-terjemahan-lirik.html",
      // Gambar bertema neon/city-pop yang sesuai dengan vibe lagu J-Pop
      thumbnail: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
      description: "Bedah lirik dan interpretasi makna lagu 'Dream'. Sebuah perjalanan melankolis tentang ambisi dan harapan di tengah hiruk-pikuk kehidupan.",
    }
  ];

  return (
    <section id="blog" className="relative bg-[#020202] text-white px-6 py-32 overflow-hidden border-t border-white/5">
      
      {/* BACKGROUND GLOW DYNAMICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Featured Articles
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Perspectives.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Eksplorasi ide melalui tulisan. Dari analisis industri kreatif hingga interpretasi karya musik pilihan.
            </p>
          </div>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {staticPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]"
            >
              {/* IMAGE CONTAINER DENGAN OVERLAY PREMIUM */}
              <div className="relative h-64 overflow-hidden m-4 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity z-10" />
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {post.published}
                </div>
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-col flex-grow p-6 pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                    Read Article
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://nabilbbbb.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-10 py-4 rounded-full bg-transparent border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <FiBookOpen className="text-cyan-400 text-lg group-hover:scale-110 transition-transform" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
              Explore Blogger
            </span>
            <FiArrowUpRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;