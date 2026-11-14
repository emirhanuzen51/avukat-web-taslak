// Avukat ve Hukuk Bürosu Kurumsal Bilgileri
// NOT: Bu dosyadaki bilgiler şablondur. Yayından önce avukatın resmi bilgileriyle güncelleyiniz.
// TBB Reklam Yasağı Yönetmeliği (m.7) uyarınca yalnızca doğrulanabilir ve mevzuata uygun bilgiler yer almaktadır.

export const lawyer = {
  firstName: "İsmail",
  lastName: "Güzel",
  title: "Avukat",
  tagline: "Bağımsız Hukuki Danışmanlık ve Avukatlık Hizmeti",
  bar: "Kocaeli Barosu",
  barNo: "00000", // Baro sicil numarası
  unionNo: "00000", // TBB sicil numarası
  startYear: "2018",
  university: "Marmara Üniversitesi Hukuk Fakültesi",
  graduationYear: "2017",
  languages: ["Türkçe", "İngilizce"],
  academic: "Özel Hukuk Yüksek Lisans / Sözleşmeler Hukuku Çalışmaları",
  city: "Kocaeli",
  district: "İzmit",
  address: "Adalet Plaza, Karabaş Mah. Hürriyet Cad. No:45 Kat:3, İzmit / Kocaeli",
  mapsQuery: "İzmit Kocaeli",
  phoneDisplay: "+90 (262) 321 00 00",
  phoneHref: "tel:+902623210000",
  mobileDisplay: "+90 (532) 000 00 00",
  mobileHref: "tel:+905320000000",
  whatsappHref: "https://wa.me/905320000000",
  email: "av.ismailguzel@hukuk.example.com",
  kep: "ismail.guzel@hs01.kep.tr",
  hours: "Hafta içi 09:00 – 18:30 (Ön randevu ile)",
  site: "https://avukat-ismail-guzel.example.com",
  shortBio: "Müvekkillerine şeffaf, analitik ve çözüm odaklı hukuki destek sağlayan bağımsız hukuk pratiği.",
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
  { href: "/iletisim", label: "İletişim & Randevu" },
];
