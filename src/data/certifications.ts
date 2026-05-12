// File: src/data/certifications.ts

export interface CertificateType {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  credentialId?: string;
  link?: string;
  skills: string[];
  image?: string; // <-- Tempat menaruh link gambar (Bisa URL atau dari folder lokal)
}

export const certifications: CertificateType[] = [
  {
    id: "CERT-01",
    title: "IDCamp 2025 Gen AI Engineer",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Artificial Intelligence",
    credentialId: "DIC-GENAI-2025",
    link: "https://dicoding.com/cert",
    skills: ["Generative AI", "LLM", "Prompt Engineering"],
    // Contoh jika ingin menggunakan gambar (bisa pakai link web luar):
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500" 
  },
];