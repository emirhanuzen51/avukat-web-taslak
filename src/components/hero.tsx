"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { VCardButton } from "./chrome";
import { easeCustom } from "./motion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian text-white flex flex-col justify-center"
    >
      {/* Mimari Parallax Arka Plan Katmanı */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-12%_0] pointer-events-none">
        <Image
          src="/images/neoclassical.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 grayscale brightness-90"
        />
      </motion.div>

      {/* Zengin Executive Gradyan Katmanları */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />

      {/* Dikey Kenar Başlıkları (Masaüstü Ekranlar İçin) */}
      <p className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-180 text-[10px] uppercase tracking-[0.45em] text-slate-400 [writing-mode:vertical-rl] xl:block pointer-events-none">
        Karabaş, Leyla Atakan Cd. · İzmit / Kocaeli
      </p>
      <p className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.45em] text-slate-400 [writing-mode:vertical-rl] xl:block pointer-events-none">
        Kocaeli Barosu · Sicil No: {lawyer.barNo}
      </p>

      {/* Ana Gövde Grid (Tam Ekran Hizalama) */}
      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-8 sm:gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-12 lg:pt-20">
        {/* Sol Kolon: Başlık, Mesaj ve Eylemler */}
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Üst Vurgu Rozeti */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="inline-flex self-start items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
            <span className="text-xs font-semibold tracking-wider text-slate-200">
              {lawyer.bar}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-300">İzmit / Kocaeli</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Aktif Danışmanlık
            </span>
          </motion.div>

          {/* Büyük Akıcı Manşet (Clamp ile Tüm Ekranlara Tam Uyum) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
            className="mt-5 font-serif text-[clamp(2.3rem,5.2vw,4.8rem)] font-light leading-[1.04] tracking-[-0.015em] text-white"
          >
            Hukukun Gücünü, <br />
            <span className="italic font-medium text-accent">Stratejik ve Şeffaf</span> <br />
            Temsille Birleştiriyoruz.
          </motion.h1>

          {/* Açıklama Metni */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCustom }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300"
          >
            Av. {fullName}, Kocaeli ve çevre illerde Ceza, Gayrimenkul & Kira, İş, Ticaret ve Aile Hukuku uyuşmazlıklarında müvekkillerine titiz mevzuat analizi ve şeffaf dava takibi sunar.
          </motion.p>

          {/* Eylem Butonları */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href={lawyer.phoneHref}
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:bg-bronze-light hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>{lawyer.phoneDisplay}</span>
            </a>

            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-obsidian hover:-translate-y-0.5"
            >
              <span>Randevu & Konum</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <VCardButton variant="white" />
          </motion.div>

          {/* Temel Güvenceler */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 grid grid-cols-1 gap-3 border-t border-white/15 pt-6 sm:grid-cols-3"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs font-medium text-slate-200">Mesleki Gizlilik İlkesi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs font-medium text-slate-200">Düzenli UYAP Raporlaması</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs font-medium text-slate-200">TBB m.7 Tam Uyumluluk</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Sağ Kolon: Doğrudan Portre Görseli */}
        <motion.div
          style={{ y: archY }}
          className="lg:col-span-5 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeCustom }}
            className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[420px]"
          >
            {/* İnce altın dış çerçeve efekti */}
            <div className="absolute -inset-2.5 rounded-3xl border border-accent/30 pointer-events-none" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl">
              <Image
                src="/images/portrait.jpg"
                alt={`Av. ${fullName} - ${lawyer.bar}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
              />

              {/* Alt Karartma ve Bilgi */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/25 to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-white">
                <div className="flex items-center gap-1.5 text-xs text-accent">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Karabaş Mah. Leyla Atakan Cd. İzmit</span>
                </div>
                <h3 className="mt-1.5 font-serif text-2xl font-normal text-white">
                  Av. {fullName}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {lawyer.tagline}
                </p>
              </div>
            </div>

            {/* Yüzen Büro Durum & Saat Rozeti */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 rounded-2xl border border-white/15 bg-obsidian/95 p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">Görüşme Saatleri</span>
                    {currentTime && (
                      <span className="font-mono text-[11px] text-accent font-semibold">
                        {currentTime}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{lawyer.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Alt Keşfet İndikatörü */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-400 pointer-events-none">
        <span>Aşağı Kaydır</span>
        <span className="relative h-8 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 h-3 bg-accent"
            animate={{ y: [-15, 32] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
