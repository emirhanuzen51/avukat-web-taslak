// Avukat ve Hukuk Bürosu Kurumsal Bilgileri (Av. İsmail Güzel)
// Reklam Yasağı Yönetmeliği (m.7) kapsamında doğrulanmış bilgiler.

export const lawyer = {
  firstName: "İsmail",
  lastName: "Güzel",
  title: "Avukat",
  tagline: "Avukat · Kocaeli Barosu",
  bar: "Kocaeli Barosu",
  barNo: "00000",
  startYear: "20XX",
  university: "Üniversite Adı Hukuk Fakültesi",
  graduationYear: "20XX",
  languages: ["Türkçe", "İngilizce"],
  academic: "Varsa yüksek lisans / akademik çalışmalar",
  city: "Kocaeli",
  district: "İzmit",
  address: "Büro adresi eklenecek · İzmit / Kocaeli",
  mapsQuery: "İzmit Kocaeli",
  phoneDisplay: "+90 (262) 000 00 00",
  phoneHref: "tel:+902620000000",
  mobileDisplay: "+90 (532) 000 00 00",
  mobileHref: "tel:+905320000000",
  whatsappHref: "https://wa.me/905320000000",
  email: "av.ismailguzel@example.com",
  kep: "ismail.guzel@hs01.kep.tr",
  hours: "Hafta içi 09:00 – 18:00 (randevu ile)",
  site: "https://avismailguzel.example",
  shortBio: "Kocaeli Barosu bünyesinde, hukuki meselelerin tüm boyutlarıyla titizlikle ele alındığı, şeffaf ve bağımsız avukatlık pratiği.",
} as const;

export const fullName = `${lawyer.firstName} ${lawyer.lastName}`;
export const initials = `${lawyer.firstName[0]}${lawyer.lastName[0]}`.toLocaleUpperCase("tr-TR");

export const slugName = fullName
  .toLocaleLowerCase("tr-TR")
  .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-");

export const nav = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/hukuki-bilgiler", label: "Hukuki Bilgiler" },
  { href: "/iletisim", label: "İletişim" },
];
