// Avukat ve Hukuk Bürosu Kurumsal Bilgileri (Av. İsmail Güzel)
// TBB Reklam Yasağı Yönetmeliği (m.7) uyarınca düzenlenmiştir.

export const lawyer = {
  firstName: "İsmail",
  lastName: "Güzel",
  title: "Avukat",
  tagline: "Avukat · Kocaeli Barosu",
  bar: "Kocaeli Barosu",
  barNo: "00000",
  startYear: "2018",
  university: "Marmara Üniversitesi Hukuk Fakültesi",
  graduationYear: "2017",
  languages: ["Türkçe", "İngilizce"],
  academic: "Özel Hukuk & Sözleşmeler Hukuku İhtisası",
  city: "Kocaeli",
  district: "İzmit",
  // Kullanıcının belirttiği resmi ofis adresi
  address: "Karabaş, Leyla Atakan Cd. Çeviren Apt No:6 K:4 D:13, 41040 İzmit/Kocaeli",
  mapsQuery: "Karabaş, Leyla Atakan Cd. Çeviren Apt No:6, 41040 İzmit/Kocaeli",
  // Kullanıcının belirttiği telefon numarası: 0262 321 32 92
  phoneDisplay: "0 (262) 321 32 92",
  phoneHref: "tel:+902623213292",
  mobileDisplay: "0 (532) 000 00 00",
  mobileHref: "tel:+905320000000",
  whatsappHref: "https://wa.me/902623213292",
  email: "av.ismailguzel@hukuk.av.tr",
  kep: "ismail.guzel@hs01.kep.tr",
  hours: "Hafta içi 09:00 – 18:30 (Randevu ile)",
  site: "https://avismailguzel.av.tr",
  shortBio: "Kocaeli Barosu bünyesinde; Ceza, Gayrimenkul & Kira, İş, Ticaret ve Aile Hukuku uyuşmazlıklarında müvekkillerine şeffaf, analitik ve bağımsız avukatlık hizmeti sunmaktadır.",
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
  { href: "/ekibimiz", label: "Kadromuz" },
  { href: "/calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/hukuki-bilgiler", label: "Hukuki Bilgiler" },
  { href: "/iletisim", label: "İletişim" },
];
