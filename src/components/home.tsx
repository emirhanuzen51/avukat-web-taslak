"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  FileSearch,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Scale,
  Send,
  Shield,
  Sparkles,
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
    { label: "Hizmet Şehri", val: `${lawyer.city} / ${lawyer.district}` },
    { label: "Çalışma İlkesi", val: "TBB Reklam Yasağı m.7 Uyumlu" },
  ];

  return (
    <section className="border-b border-card-border bg-bg-alt/40 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="border-l border-line pl-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
                {c.label}
              </span>
              <p className="mt-1 font-serif text-lg font-medium text-fg">{c.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 2. ÇALIŞMA ALANLARI (BENTO GRID) ================= */
export function BentoPracticeAreas() {
  return (
    <section className="py-24 sm:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <SectionBadge number="01">Faaliyet Alanları</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Hukuki <span className="italic text-accent">Çalışma Konuları</span>
            </h2>
          </div>
          <Link
            href="/calisma-alanlari"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-fg"
          >
            <span>Tüm Alanları Görüntüle</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, idx) => (
            <FadeIn key={area.slug} delay={idx * 0.08}>
              <Link
                href={`/calisma-alanlari/${area.slug}`}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-medium text-accent">
                      {area.category}
                    </span>
                    <span className="font-mono text-xs text-fg-muted">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal text-fg transition-colors group-hover:text-accent">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {area.lead}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-line pt-5">
                    {area.topics.slice(0, 3).map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-xs text-fg/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-accent">
                  <span>Detaylı Bilgi</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 3. METODOLOJİ & ÇALIŞMA SÜRECİ ================= */
export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Hukuki Teşhis & Ön İnceleme",
      desc: "Uyuşmazlığa dair tarafımıza iletilen olay örgüsü, mevcut belgeler ve hukuki talepler ilk görüşmede ayrıntılı olarak masaya yatırılır.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "Mevzuat ve İçtihat Taraması",
      desc: "İlgili yasa hükümleri, Yargıtay/Danıştay güncel yerleşik içtihatları ve somut olayın usul şartları eksiksiz biçimde tetkik edilir.",
      icon: Scale,
    },
    {
      num: "03",
      title: "Stratejik Eylem ve Dava Planı",
      desc: "Müvekkilin menfaatine en uygun kanuni yol, arabuluculuk seçeneği veya doğrudan dava yolunun risk ve masrafları şeffafça açıklanır.",
      icon: Compass,
    },
    {
      num: "04",
      title: "Düzenli Takip ve Raporlama",
      desc: "Dava, icra veya müzakere sürecindeki her resmi tebligat, duruşma tutanağı ve karar anlık olarak müvekkile düzenli raporlanır.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="border-y border-card-border bg-bg-alt/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionBadge number="02">Çalışma İlkeleri</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
            Hukuki Temsilde <span className="italic text-accent">Şeffaf Metodoloji</span>
          </h2>
          <p className="mt-4 text-base text-fg-muted sm:text-lg">
            Her hukuki mesele, müvekkilin güvenliği ve hukuki haklarının azami korunması amacıyla disiplinli bir iş akışıyla takip edilir.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <FadeIn key={s.num} delay={idx * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-7 shadow-xs">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-semibold text-accent/80">
                      {s.num}
                    </span>
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-medium text-fg">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 4. MİMARİ VURGU BANDI ================= */
export function ArchitectureFeature() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/columns-shadow.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="mx-auto block h-10 w-px bg-accent" />
        <h2 className="mt-8 font-serif text-3xl font-light italic sm:text-4xl lg:text-5xl text-slate-100">
          “Hukukta öngörülebilirlik; ayrıntılı inceleme, doğru zamanlama ve tavizsiz meslek etiğiyle sağlanır.”
        </h2>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-accent">
          Av. {fullName} · {lawyer.bar}
        </p>
      </div>
    </section>
  );
}

/* ================= 5. HUKUKİ BİLGİLER (MAKALELER) ================= */
export function InsightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <SectionBadge number="03">Güncel Hukuk</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Bilgilendirici <span className="italic text-accent">Hukuki Yazılar</span>
            </h2>
          </div>
          <Link
            href="/hukuki-bilgiler"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-fg"
          >
            <span>Tüm Makaleleri Oku</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((art, idx) => (
            <FadeIn key={art.slug} delay={idx * 0.1}>
              <Link
                href={`/hukuki-bilgiler/${art.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-fg-muted">
                    <span className="font-medium text-accent">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-normal text-fg transition-colors group-hover:text-accent">
                    {art.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs">
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

/* ================= 6. HIZLI RANDEVU VE İLETİŞİM FORMU ================= */
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
    <section className="relative overflow-hidden border-t border-card-border bg-bg-alt/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Doğrudan İletişim */}
          <div className="lg:col-span-5">
            <SectionBadge number="04">Görüşme Talebi</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Büromuzla <br />
              <span className="italic text-accent">İletişime Geçin</span>
            </h2>
            <p className="mt-6 text-base text-fg-muted">
              Görüşmeler randevu usulüyle kabul edilmektedir. İlgili evraklarınızı hazırlayarak ön görüşme randevusu oluşturabilirsiniz.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={lawyer.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition-colors hover:border-accent"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-subtle text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">Telefon</p>
                  <p className="font-serif text-lg font-medium text-fg">{lawyer.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${lawyer.email}`}
                className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition-colors hover:border-accent"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-subtle text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">E-posta</p>
                  <p className="text-sm font-medium text-fg">{lawyer.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-subtle text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">Büro Adresi</p>
                  <p className="text-xs font-medium text-fg">{lawyer.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Randevu / Ön Talep Kartı */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-card-border bg-card p-8 sm:p-10 shadow-xl">
              <h3 className="font-serif text-2xl font-normal text-fg">
                Ön Randevu & Danışmanlık Talebi
              </h3>
              <p className="mt-2 text-sm text-fg-muted">
                Form aracılığıyla iletilen bilgiler gizlilik prensibi çerçevesinde korunur.
              </p>

              {formSent ? (
                <div className="mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center text-emerald-800 dark:text-emerald-300">
                  <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
                  <h4 className="mt-4 font-serif text-xl font-medium">Talebiniz Alındı</h4>
                  <p className="mt-2 text-sm">
                    Görüşme talebiniz tarafımıza ulaşmıştır. Büro çalışma saatleri içerisinde en kısa sürede geri dönüş sağlanacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0 (5XX) XXX XX XX"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                      Uyuşmazlık Konusu / Alan
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg focus:border-accent focus:outline-none"
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                      Kısa Bilgi / Not
                    </label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Konuyu ve varsa kritik yasal süreleri özetleyiniz..."
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze-light hover:shadow-lg"
                    >
                      <Send className="h-4 w-4" />
                      <span>Randevu Talebini Gönder</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-fg-muted text-center pt-2">
                    Gönderilen bilgiler KVKK kapsamında gizli tutulur ve 3. şahıslarla paylaşılmaz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
