"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Compass,
  FileCheck2,
  FileSearch,
  Mail,
  MapPin,
  Phone,
  Scale,
  Send,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { FadeIn, SectionBadge } from "./motion";

/* ================= 1. BARO VE YETKİ BANDI ================= */
export function BarAccreditationBar() {
  const credentials = [
    { label: "Kayıtlı Baro", val: lawyer.bar },
    { label: "Baro Sicil No", val: lawyer.barNo },
    { label: "Yetki Çevresi", val: `${lawyer.city} & Tüm Türkiye` },
    { label: "Meslek İlkesi", val: "TBB Reklam Yasağı m.7 Uyumlu" },
  ];

  return (
    <section className="border-b border-card-border bg-bg-alt/40 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="border-l border-line pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
                {c.label}
              </span>
              <p className="mt-0.5 font-serif text-base sm:text-lg font-medium text-fg">{c.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 2. ÇALIŞMA ALANLARI (FİLTRELİ & FOTOĞRAFLI BENTO GRID) ================= */
export function BentoPracticeAreas() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Ceza & Yargılama", "Özel Hukuk", "Şirket & Ticaret", "Kamu Hukuku"];

  const filteredAreas =
    selectedCategory === "Tümü"
      ? areas
      : areas.filter((a) => a.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div>
            <SectionBadge number="01">Faaliyet Alanları</SectionBadge>
            <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Hukuki <span className="italic text-accent">Çalışma Konuları</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-fg-muted max-w-xl">
              Fiilen takip edilen dava türleri, hukuki danışmanlık ve arabuluculuk süreçleri.
            </p>
          </div>

          {/* Filtre Sekmeleri (Mobilde yatay kaydırma) */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-accent text-white shadow-xs"
                    : "border border-card-border bg-card/80 text-fg-muted hover:border-accent hover:text-fg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alanlar Kartları */}
        <motion.div layout className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredAreas.map((area, idx) => (
              <motion.div
                key={area.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/calisma-alanlari/${area.slug}`}
                  className="group relative flex h-[350px] sm:h-[370px] flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                >
                  {/* Arka Plan Fotoğrafı */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-15 dark:opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/75" />
                  </div>

                  {/* Üst Bilgi */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-semibold text-accent">
                        {area.category}
                      </span>
                      <span className="font-mono text-xs text-fg-muted">0{idx + 1}</span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl sm:text-2xl font-normal text-fg transition-colors group-hover:text-accent">
                      {area.title}
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-fg-muted line-clamp-2">
                      {area.lead}
                    </p>

                    <div className="mt-4 border-t border-line/60 pt-3.5">
                      <ul className="space-y-1.5">
                        {area.topics.slice(0, 3).map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-xs text-fg/80">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                            <span className="truncate">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Alt Eylem */}
                  <div className="flex items-center justify-between border-t border-line/60 pt-3.5 text-xs font-semibold text-accent">
                    <span>Mevzuat ve Dava Süreci</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= 3. METODOLOJİ (İNTERAKTİF ÇALIŞMA PROTOKOLÜ) ================= */
export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Hukuki Teşhis ve Ön İnceleme",
      lead: "Maddi vakıalar ve evraklar ilk görüşmede incelenir.",
      details:
        "Tarafımıza aktarılan uyuşmazlığın hukuki dayanağı, tarafların sıfatları ve sunulan deliller ilk görüşmede değerlendirilir. Hak kayıplarının önüne geçebilmek adına yasal başvuru süreleri tespit edilir.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "Mevzuat ve Yargıtay Taraması",
      lead: "Kanun maddeleri ve yerleşik emsal kararlar taranır.",
      details:
        "İlgili hukuki alana özgü güncel kanun maddeleri ve Yargıtay kararları incelenerek davanın veya takibin başarı şansı, zaman maliyeti ve olası riskleri objektif olarak tespit edilir.",
      icon: Scale,
    },
    {
      num: "03",
      title: "Stratejik Eylem ve Dava Planı",
      lead: "Dava şartı arabuluculuk veya doğrudan dava yolları belirlenir.",
      details:
        "Müvekkilin en yüksek menfaatine hizmet edecek strateji kurgulanır. İhtilafın sulh veya arabuluculuk yoluyla çözümü mümkünse öncelikle işletilir; aksi takdirde titizlikle hazırlanmış dava dilekçesi sunulur.",
      icon: Compass,
    },
    {
      num: "04",
      title: "Şeffaf Takip ve Raporlama",
      lead: "Her resmi tebligat ve ara karar düzenli bildirilir.",
      details:
        "UYAP sistemi üzerinden dosyadaki tüm gelişmeler anlık denetlenir. Duruşma sonuçları, bilirkişi raporları ve ara kararlar hakkında müvekkile anlaşılır bir dille düzenli bilgilendirme yapılır.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="border-y border-card-border bg-bg-alt/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionBadge number="02">Çalışma İlkeleri</SectionBadge>
          <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl lg:text-5xl text-fg">
            Temsilde <span className="italic text-accent">4 Aşamalı Metodoloji</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-fg-muted">
            Her dosya, adil yargılanma ve şeffaf bilgilendirme esasıyla sistematik bir süreçle yönetilir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Sol: Adım Seçici Butonlar */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left rounded-xl p-4 border transition-all duration-200 ${
                  activeStep === idx
                    ? "border-accent bg-card shadow-md"
                    : "border-card-border bg-card/60 hover:bg-card text-fg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold rounded-lg px-2.5 py-0.5 ${
                        activeStep === idx ? "bg-accent text-white" : "bg-bg-alt text-fg-muted"
                      }`}
                    >
                      {s.num}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-fg">{s.title}</h4>
                  </div>
                  <s.icon
                    className={`h-4 w-4 ${
                      activeStep === idx ? "text-accent" : "text-fg-muted/40"
                    }`}
                  />
                </div>
                <p className="mt-1 text-xs text-fg-muted pl-9">{s.lead}</p>
              </button>
            ))}
          </div>

          {/* Sağ: Aktif Adım Detay Paneli */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-card-border bg-card p-6 sm:p-10 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-accent">
                  {steps[activeStep].num}
                </span>
                <span className="h-4 w-px bg-line" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-fg-muted font-semibold">
                  Aşama Rehberi
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-normal text-fg">
                {steps[activeStep].title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-fg-muted">
                {steps[activeStep].details}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs font-semibold text-accent">
                <FileCheck2 className="h-4 w-4 shrink-0" />
                <span>Avukatlık Kanunu & TBB Meslek Kuralları Güvencesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= 4. MİMARİ VE HUKUK FOTOĞRAF GALERİSİ ================= */
export function ArchitecturalGallery() {
  const images = [
    {
      src: "/images/library.jpg",
      title: "Hukuk Kütüphanesi",
      sub: "Mevzuat ve Doktrin",
    },
    {
      src: "/images/columns-shadow.jpg",
      title: "Adalet Sütunları",
      sub: "Evrensel İlkeler",
    },
    {
      src: "/images/stairs.jpg",
      title: "Adliye Mimarisi",
      sub: "Yargılama Süreçleri",
    },
    {
      src: "/images/old-books.jpg",
      title: "İçtihat Derlemeleri",
      sub: "Yerleşik Kararlar",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge number="03">Kurumsal Atmosfer</SectionBadge>
          <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl text-fg">
            Hukukun <span className="italic text-accent">Ağırlığı ve Ciddiyeti</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-fg-muted">
            Çalışmalarımızda klasik hukuk prensiplerinin vakarı ile çağdaş hukuk tekniğini bir arada uyguluyoruz.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 text-white">
                  <p className="font-serif text-sm sm:text-base font-normal">{item.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 tracking-wider mt-0.5">{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 5. ANİMASYONLU İMZA VE MESLEK BEYANI ================= */
export function SignatureQuote() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-16 sm:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <Image
          src="/images/sketch.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover mix-blend-screen invert"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mx-auto block h-10 w-px bg-accent" />
        <h3 className="mt-6 font-serif text-xl font-light italic sm:text-3xl text-slate-100 leading-snug">
          “Hukuki meseleler, yüzeysel yaklaşımlarla değil; her bir belgenin, her bir sürenin ve her bir içtihadın dikkatle tahlil edilmesiyle neticeye kavuşturulur.”
        </h3>

        {/* Vektörel İmza Çizimi */}
        <div className="mx-auto mt-8 max-w-[240px] sm:max-w-xs">
          <svg viewBox="0 0 300 80" fill="none" className="w-full" aria-label={`Av. ${fullName} İmza`}>
            <motion.path
              d="M20 50 C30 20 45 10 55 18 C65 26 40 60 35 65 C50 45 70 25 80 32 C90 40 75 58 85 58 C95 58 105 38 115 38 C125 38 118 55 128 55 C140 55 150 25 160 25 C170 25 165 52 175 52 C188 52 198 18 208 18 C220 18 210 50 225 50 C240 50 255 28 275 22"
              stroke="#c59b27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M30 68 C100 64 190 65 270 60"
              stroke="#c59b27"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2.2 }}
            />
          </svg>
        </div>

        <p className="mt-3 font-serif text-lg font-medium text-white">Av. {fullName}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-accent mt-0.5">
          {lawyer.bar} · İzmit
        </p>
      </div>
    </section>
  );
}

/* ================= 6. SIKÇA SORULAN HUKUKİ SORULAR (AKORDİYON) ================= */
export function LegalFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Avukatlık görüşmesi ve randevu süreci nasıl işler?",
      a: "Büromuzda görüşmeler ön randevu usulüyle kabul edilmektedir. İlk görüşmede uyuşmazlığa dair mevcut belge, sözleşme ve yazışmalar incelenir. İletişim sayfamızdan veya doğrudan telefonla arayarak uygun gün ve saat belirlenebilir.",
    },
    {
      q: "Dava açmadan önce arabuluculuk sürecine başvurmak zorunlu mudur?",
      a: "Kira ilişkilerinden doğan uyuşmazlıklar, işçilik alacakları ve belirli ticari davalarda arabuluculuk kanunen zorunlu dava şartıdır. Arabulucuya başvurulmadan doğrudan dava açılması halinde mahkeme davayı usulden reddeder.",
    },
    {
      q: "Avukatlık vekaletnamesi nasıl ve nereden çıkartılır?",
      a: "Vekaletname, herhangi bir Noterlik kanalıyla düzenlenir. Şirketler için imza sirküleri ve yetki belgesi, şahıslar için kimlik belgesi yeterlidir. Boşanma ve taşınmaz satış vekaletnameleri için iki adet vesikalık fotoğraf gerekmektedir.",
    },
    {
      q: "Avukatlık ücreti ve yargılama giderleri nasıl belirlenir?",
      a: "Avukatlık ücretleri, Türkiye Barolar Birliği ve Kocaeli Barosu'nun belirlediği Asgari Ücret Tarifesi esas alınarak, uyuşmazlığın mahiyeti, dava değeri ve harcanacak mesaiye göre sözleşme ile belirlenir.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-bg border-b border-card-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge number="04">Bilgilendirme</SectionBadge>
          <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl text-fg">
            Sıkça Sorulan <span className="italic text-accent">Hukuki Sorular</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-fg-muted">
            Avukatlık vekaleti ve adli süreçlere ilişkin temel usul kuralları.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-card-border bg-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-serif text-base sm:text-lg font-medium text-fg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-fg-muted border-t border-line/60 pt-3.5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 7. HUKUKİ BİLGİLER (MAKALELER) ================= */
export function InsightsSection() {
  return (
    <section className="py-16 sm:py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div>
            <SectionBadge number="05">Güncel Hukuk</SectionBadge>
            <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Bilgilendirici <span className="italic text-accent">Hukuki Makaleler</span>
            </h2>
          </div>
          <Link
            href="/hukuki-bilgiler"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-fg"
          >
            <span>Tüm Makaleleri Oku</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((art, idx) => (
            <FadeIn key={art.slug} delay={idx * 0.08}>
              <Link
                href={`/hukuki-bilgiler/${art.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-fg-muted">
                    <span className="font-semibold text-accent">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-serif text-lg sm:text-xl font-normal text-fg transition-colors group-hover:text-accent">
                    {art.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-fg-muted">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-3.5 text-xs">
                  <span className="text-fg-muted">{art.date}</span>
                  <span className="font-semibold text-accent group-hover:underline">
                    Yazıyı Oku &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 8. HIZLI RANDEVU VE İLETİŞİM FORMU ================= */
export function ContactCtaBanner() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(areas[0]?.title || "");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-card-border bg-bg-alt/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Doğrudan İletişim */}
          <div className="lg:col-span-5">
            <SectionBadge number="06">Randevu Talebi</SectionBadge>
            <h2 className="mt-3 font-serif text-2xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Büromuzla <br />
              <span className="italic text-accent">İletişime Geçin</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-fg-muted">
              Görüşmeler randevu esasına tabidir. Uyuşmazlığınıza dair belgeler ile birlikte ön görüşme talep edebilirsiniz.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={lawyer.phoneHref}
                className="flex items-center gap-3.5 rounded-2xl border border-card-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-fg-muted font-semibold">Telefon</p>
                  <p className="font-serif text-base sm:text-lg font-medium text-fg">{lawyer.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${lawyer.email}`}
                className="flex items-center gap-3.5 rounded-2xl border border-card-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-fg-muted font-semibold">E-posta</p>
                  <p className="text-xs sm:text-sm font-medium text-fg">{lawyer.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-card-border bg-card p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-fg-muted font-semibold">Büro Adresi</p>
                  <p className="text-xs font-medium text-fg leading-relaxed">{lawyer.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Randevu / Ön Talep Kartı */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl border border-card-border bg-card p-6 sm:p-9 shadow-xl">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-fg">
                Ön Randevu ve Danışmanlık Talebi
              </h3>
              <p className="mt-1.5 text-xs text-fg-muted">
                İlettiğiniz bilgiler mesleki sır ve KVKK hükümleri çerçevesinde gizli tutulur.
              </p>

              {formSent ? (
                <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 sm:p-8 text-center text-emerald-800 dark:text-emerald-300">
                  <CheckCircle className="mx-auto h-10 w-10 text-emerald-500" />
                  <h4 className="mt-3 font-serif text-lg font-medium">Talebiniz Alındı</h4>
                  <p className="mt-1.5 text-xs">
                    Görüşme talebiniz tarafımıza iletilmiştir. Çalışma saatlerimiz dahilinde tarafınıza dönüş yapılacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0 (5XX) XXX XX XX"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                      Uyuşmazlık Konusu / Alan
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-fg focus:border-accent focus:outline-none"
                    >
                      {areas.map((a) => (
                        <option key={a.slug} value={a.title}>
                          {a.title}
                        </option>
                      ))}
                      <option value="Diğer Hukuki Konu">Diğer Hukuki Konu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                      Ön Bilgi / Not
                    </label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Konuyu ve varsa tebligat / yasal süreleri özetleyiniz..."
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze-light hover:shadow-lg"
                    >
                      <Send className="h-4 w-4" />
                      <span>Randevu Talebini Gönder</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
