// Hukuk Bürosu Kadrosu ve Çalışan Bilgileri
// TBB Meslek Kuralları ve Reklam Yasağı Yönetmeliği uyarınca düzenlenmiştir.

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: "Kurucu Avukat" | "Avukat" | "Stajyer Avukat" | "İdari Kadro";
  bar?: string;
  education: string;
  graduationYear?: string;
  languages: string[];
  areasOfFocus: string[];
  bio: string;
  email: string;
  phone?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ismail-guzel",
    name: "Av. İsmail Güzel",
    title: "Kurucu & Yönetici Avukat",
    role: "Kurucu Avukat",
    bar: "Kocaeli Barosu",
    education: "Marmara Üniversitesi Hukuk Fakültesi",
    graduationYear: "2017",
    languages: ["Türkçe", "İngilizce"],
    areasOfFocus: [
      "Ceza Hukuku & Ağır Ceza Yargılaması",
      "Gayrimenkul & Kira Uyuşmazlıkları",
      "Ticaret ve Şirketler Hukuku",
      "Stratejik Dava Yönetimi",
      "İçtihat ve Temyiz Süreçleri",
    ],
    bio: "Kocaeli Barosu bünyesinde 2018 yılından bu yana bağımsız avukatlık faaliyetlerini sürdürmektedir. Özellikle karmaşık ceza soruşturmaları, tahliye ve kira tespit davaları ile şirketler arası sözleşme uyuşmazlıklarında analitik ve titiz dava stratejileri geliştirmektedir.",
    email: "av.ismailguzel@hukuk.av.tr",
    image: "/images/portrait.jpg",
  },
  {
    id: "hazal-kaya",
    name: "Av. Hazal Kaya",
    title: "Kıdemli Avukat / Arabulucu",
    role: "Avukat",
    bar: "Kocaeli Barosu",
    education: "İstanbul Üniversitesi Hukuk Fakültesi",
    graduationYear: "2019",
    languages: ["Türkçe", "İngilizce"],
    areasOfFocus: [
      "İş ve Sosyal Güvenlik Hukuku",
      "Kıdem, İhbar ve İşe İade Davaları",
      "Aile ve Boşanma Hukuku",
      "Zorunlu ve İhtiyari Arabuluculuk",
      "İş Kazası Maddi-Manevi Tazminat",
    ],
    bio: "İstanbul Üniversitesi Hukuk Fakültesi mezunu olup, işçi-işveren uyuşmazlıkları, toplu iş hukuku, anlaşmalı ve çekişmeli boşanma ile mal rejiminin tasfiyesi davalarında geniş tecrübe sahibidir. Arabuluculuk görüşmelerinde taraf vekilliği yürütmektedir.",
    email: "av.hazalkaya@hukuk.av.tr",
  },
  {
    id: "alper-gungor",
    name: "Av. Alper Güngör",
    title: "Bağlı Avukat",
    role: "Avukat",
    bar: "Kocaeli Barosu",
    education: "Ankara Üniversitesi Hukuk Fakültesi",
    graduationYear: "2021",
    languages: ["Türkçe", "Almanca"],
    areasOfFocus: [
      "İcra ve İflas Hukuku",
      "Ticari Alacak Takipleri & Haciz",
      "Menfi Tespit ve İtirazın İptali",
      "Tüketici Hukuku ve Bankacılık İhtilafları",
      "Sözleşmeler Hukuku ve İpotek Tesisleri",
    ],
    bio: "Ankara Hukuk mezuniyeti sonrası büromuz bünyesinde özellikle şirketlerin tahsilat operasyonları, ilamsız icra takipleri, çek ve senet ihtilafları ile itirazın iptali davalarında aktif dava vekilliği üstlenmektedir.",
    email: "av.alpergungor@hukuk.av.tr",
  },
  {
    id: "beyza-saydik",
    name: "Stj. Av. Beyza Saydık",
    title: "Stajyer Avukat & Araştırmacı",
    role: "Stajyer Avukat",
    bar: "Kocaeli Barosu (Stajyer)",
    education: "Kocaeli Üniversitesi Hukuk Fakültesi",
    graduationYear: "2024",
    languages: ["Türkçe", "İngilizce"],
    areasOfFocus: [
      "Yargıtay İçtihat ve Doktrin Taraması",
      "Dava Dilekçesi Hazırlığı",
      "UYAP Dava ve Duruşma Takibi",
      "Kalem ve Tevzi İşlemleri",
    ],
    bio: "Kocaeli Üniversitesi Hukuk Fakültesi'ni başarıyla tamamlamış olup, büromuzda dava dilekçelerinin emsal kararlar ışığında hazırlanması, hukuki literatür araştırması ve adliye kalem koordinasyonu süreçlerini yürütmektedir.",
    email: "stj.beyzasaydik@hukuk.av.tr",
  },
  {
    id: "gamze-celik",
    name: "Gamze Çelik",
    title: "Büro Müdürü & Müvekkil İlişkileri",
    role: "İdari Kadro",
    education: "Anadolu Üniversitesi Halkla İlişkiler & Yönetim",
    graduationYear: "2018",
    languages: ["Türkçe"],
    areasOfFocus: [
      "Ön Danışmanlık ve Randevu Organizasyonu",
      "Resmi Tebligat & Dosya Arşiv Yönetimi",
      "Müvekkil İletişim ve Süre Takibi",
      "Finansal Takip ve Vezne Koordinasyonu",
    ],
    bio: "Büromuzun müvekkil kabulü, randevu koordinasyonu, resmi tebligatların süre kontrolleri ve dosya arşivleme süreçlerinin düzenli ve eksiksiz işlemesini sağlamaktadır.",
    email: "sekreterlik@hukuk.av.tr",
  },
];
