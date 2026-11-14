"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { LegalIcon } from "./icons";
import { VCardButton } from "./chrome";
import { ease, Kicker, Lines, Reveal } from "./motion";

/* ============ 01 · Mesleki kimlik ============ */
export function Identity() {
  const facts = [
    { k: "Kayıtlı olduğu baro", v: lawyer.bar },
    { k: "Baro sicil no", v: lawyer.barNo },
    { k: "Mesleğe başlangıç", v: lawyer.startYear },
    { k: "Yabancı dil", v: lawyer.languages.join(", ") },
  ];
  return (
    <section className="px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Kicker n="01">Mesleki kimlik</Kicker>
        </div>
        <div className="lg:col-span-8">
          <Lines
            className="font-serif text-[clamp(2rem,4.2vw,3.6rem)] font-light leading-[1.12] tracking-[-0.005em]"
            lines={[<>Her hukuki mesele, kendine özgü</>, <>koşullarıyla <em className="text-champagne">dikkatle</em> ele alınmayı</>, <>hak eder.</>]}
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-sub">
              Mesleki çalışmalarımı; müvekkillerimi açık ve anlaşılır biçimde bilgilendirmeyi, dosyaları titizlikle hazırlamayı ve süreci düzenli takip etmeyi esas alarak yürütüyorum.
            </p>
            <Link href="/hakkimda" className="gold-link mt-8 inline-flex items-center gap-2 pb-1 text-sm tracking-[0.06em] text-fg">
              Hakkımda <ArrowUpRight className="h-4 w-4 text-champagne" strokeWidth={1.5} />
            </Link>
          </Reveal>
          <dl className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.k} delay={i * 0.08} className="border-b border-line py-6 pr-4 md:border-b-0 md:border-r md:pl-6 md:first:pl-0 md:last:border-r-0">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-sub">{f.k}</dt>
                <dd className="mt-3 font-serif text-2xl">{f.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ============ 02 · Çalışma alanları ============ */
export function AreasGrid() {
  return (
    <section className="bg-bg-2 px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Kicker n="02">Çalışma alanları</Kicker>
            <Lines className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1.02]" lines={[<>Hukuki çalışma</>, <em key="e" className="text-champagne">alanları</em>]} />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sub">Mesleki faaliyet gösterilen başlıca alanlar, bilgilendirme amacıyla aşağıda yer almaktadır.</p>
          </Reveal>
        </div>
        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08} className="border-b border-r border-line">
              <Link href={`/calisma-alanlari/${a.slug}`} className="group relative flex h-full flex-col bg-bg-2 p-9 transition-colors duration-700 hover:bg-card lg:p-11">
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-700 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="text-champagne">
                    <LegalIcon name={a.icon} draw className="h-14 w-14" />
                  </span>
                  <span className="font-serif text-sm italic text-sub">0{i + 1}</span>
                </div>
                <h3 className="mt-12 font-serif text-[1.9rem] leading-tight">{a.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sub">{a.lead}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.06em] text-fg/70 transition-colors group-hover:text-fg">
                  Ayrıntılar <ArrowUpRight className="h-4 w-4 text-champagne transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 03 · Mesleki yaklaşım (belge animasyonu) ============ */
const principles = [
  { icon: "dinle" as const, t: "Dinlemek", d: "Meseleyi tüm yönleriyle anlamak için önce dinler, gerekli bilgi ve belgeleri birlikte belirleriz." },
  { icon: "belge" as const, t: "İncelemek", d: "Belgeler, mevzuat ve güncel içtihatlar ışığında dosya ayrıntılı biçimde incelenir." },
  { icon: "terazi" as const, t: "Değerlendirmek", d: "Hukuki seçenekler, olası riskleriyle birlikte açık ve anlaşılır bir dille paylaşılır." },
  { icon: "takvim" as const, t: "Takip etmek", d: "Süreç boyunca gelişmeler düzenli olarak bildirilir; süreler özenle takip edilir." },
];

function DocumentAnim() {
  const lines = [70, 92, 86, 94, 60, 88, 90, 72, 84, 50];
  return (
    <svg viewBox="0 0 320 400" className="w-full max-w-[380px]" aria-hidden="true">
      <motion.g initial={{ opacity: 0, y: 30, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} style={{ originX: "50%", originY: "50%" }}>
        <rect x="34" y="20" width="252" height="350" fill="#f5f2ea" opacity="0.06" transform="translate(14 14)" />
        <path d="M30 14 H246 L290 58 V386 H30 Z" fill="#f5f2ea" />
        <path d="M246 14 V58 H290" fill="#e7e0d0" />
        <motion.line x1="58" y1="70" x2="190" y2="70" stroke="#101c2c" strokeWidth="5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} />
        <motion.line x1="58" y1="86" x2="140" y2="86" stroke="#b69a69" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.6 }} />
        {lines.map((w, i) => (
          <motion.line
            key={i}
            x1="58"
            y1={118 + i * 20}
            x2={58 + (w / 100) * 204}
            y2={118 + i * 20}
            stroke="#101c2c"
            strokeOpacity="0.28"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.12, duration: 0.5, ease: "easeOut" }}
          />
        ))}
        <motion.g initial={{ scale: 1.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.6, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} style={{ originX: "232px", originY: "342px" }}>
          <circle cx="232" cy="342" r="24" fill="none" stroke="#b69a69" strokeWidth="2" />
          <circle cx="232" cy="342" r="17" fill="none" stroke="#b69a69" strokeWidth="0.8" />
          <path d="M232 330 V354 M224 336 H240 M222 336 L218 346 a4 4 0 0 0 8 0 Z M242 336 L238 346 a4 4 0 0 0 8 0 Z" stroke="#b69a69" strokeWidth="1.2" fill="none" />
        </motion.g>
        <motion.path d="M58 352 C70 336 82 336 86 346 C90 356 100 330 112 340 C120 346 130 344 150 336" stroke="#101c2c" strokeWidth="1.5" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 2.9, duration: 1.2 }} />
      </motion.g>
    </svg>
  );
}

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-midnight px-5 py-28 text-ivory sm:px-8 lg:py-40">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-champagne/10 blur-[160px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="flex justify-center lg:col-span-5">
          <DocumentAnim />
        </div>
        <div className="lg:col-span-7">
          <Kicker n="03" light>
            Mesleki yaklaşım
          </Kicker>
          <Lines className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1.02]" lines={[<>Özenli, şeffaf ve</>, <em key="e" className="text-champagne-soft">düzenli bir süreç.</em>]} />
          <div className="mt-14 grid gap-px bg-ivory/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="bg-midnight p-7">
                <span className="text-champagne">
                  <LegalIcon name={p.icon} draw className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-serif text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/60">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Mimari parallax bandı ============ */
export function ArchitectureBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  return (
    <section ref={ref} className="relative h-[70svh] min-h-[440px] overflow-hidden bg-bg">
      <motion.div style={{ y: y1 }} className="absolute inset-[-12%_0] pointer-events-none">
        <Image src="/images/sketch.jpg" alt="" fill sizes="100vw" className="object-cover opacity-70 mix-blend-multiply dark:opacity-25 dark:mix-blend-screen dark:invert" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg pointer-events-none" />
      <motion.div style={{ y: y2 }} className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="h-16 w-px bg-champagne" />
        <p className="mt-8 font-serif text-[clamp(2rem,4.6vw,3.8rem)] font-light italic leading-[1.15]">
          “Hukuk, ayrıntılarda
          <br />
          anlam kazanır.”
        </p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-sub">{lawyer.district}, {lawyer.city} · Bağımsız hukuk pratiği</p>
      </motion.div>
    </section>
  );
}

/* ============ 04 · Hukuki bilgiler önizleme ============ */
export function InsightsPreview() {
  return (
    <section className="px-5 py-28 sm:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Kicker n="04">Hukuki bilgiler</Kicker>
            <Lines className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1.02]" lines={[<>Bilgilendirici</>, <em key="e" className="text-champagne">yazılar</em>]} />
          </div>
          <Link href="/hukuki-bilgiler" className="gold-link inline-flex items-center gap-2 pb-1 text-sm tracking-[0.06em]">
            Tüm yazılar <ArrowUpRight className="h-4 w-4 text-champagne" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid gap-px bg-line md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08} className="bg-bg">
              <Link href={`/hukuki-bilgiler/${a.slug}`} className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-card">
                <p className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-sub">
                  <span className="text-champagne">{a.category}</span>
                  <span>{a.minutes} dk</span>
                </p>
                <h3 className="mt-10 font-serif text-[1.75rem] leading-[1.15] transition-colors group-hover:text-champagne">{a.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-sub">{a.excerpt}</p>
                <span className="mt-8 h-px w-10 bg-champagne transition-all duration-700 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 05 · İletişim bandı ============ */
export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-midnight px-5 py-28 text-ivory sm:px-8 lg:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/images/library.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/60" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Kicker n="05" light>
            İletişim
          </Kicker>
          <Lines className="font-serif text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-[1.02]" lines={[<>Görüşme için</>, <em key="e" className="text-champagne-soft">iletişim bilgileri</em>]} />
          <p className="mt-8 max-w-md text-ivory/60">Görüşmeler randevu ile yapılmaktadır. Aşağıdaki kanallardan ulaşabilirsiniz.</p>
          <div className="mt-10">
            <VCardButton light />
          </div>
        </div>
        <div className="grid content-end gap-px bg-ivory/10 lg:col-span-5">
          {[
            { k: "Telefon", v: lawyer.phoneDisplay, href: lawyer.phoneHref },
            { k: "E-posta", v: lawyer.email, href: `mailto:${lawyer.email}` },
            { k: "KEP", v: lawyer.kep },
            { k: "Çalışma saatleri", v: lawyer.hours },
          ].map((c) => (
            <div key={c.k} className="bg-midnight/80 p-6 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.25em] text-champagne">{c.k}</p>
              {c.href ? (
                <a href={c.href} className="gold-link mt-2 inline-block font-serif text-2xl">{c.v}</a>
              ) : (
                <p className="mt-2 font-serif text-2xl">{c.v}</p>
              )}
            </div>
          ))}
          <Link href="/iletisim" className="flex items-center justify-between bg-champagne p-6 text-midnight transition-colors hover:bg-champagne-soft">
            <span className="flex items-center gap-3 text-sm tracking-[0.06em]">
              <MapPin className="h-4 w-4" strokeWidth={1.5} /> Adres ve ulaşım
            </span>
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
