"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
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
  const [currentTime, setCurrentTime] = useState("");

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
    <section className="relative overflow-hidden border-b border-card-border bg-gradient-to-b from-bg-alt/70 via-bg to-bg min-h-[100svh] flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-28 lg:pb-8">
      {/* İnce zarif arka plan ışıltıları ve mimari doku */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[120px]" />

      {/* Sol Kenar Dikey Metin (Masaüstü) */}
      <div className="pointer-events-none absolute bottom-12 left-6 z-10 hidden 2xl:flex items-center gap-3 [writing-mode:vertical-rl] rotate-180">
        <span className="h-10 w-px bg-accent/40" />
        <span className="text-[10px] font-medium tracking-[0.28em] text-fg-muted uppercase">
          {lawyer.address.split(",")[0]}, {lawyer.address.split(",")[1]?.trim()} · {lawyer.district} / {lawyer.city}
        </span>
      </div>

      {/* Sağ Kenar Dikey Metin (Masaüstü) */}
      <div className="pointer-events-none absolute bottom-12 right-6 z-10 hidden 2xl:flex items-center gap-3 [writing-mode:vertical-rl]">
        <span className="h-10 w-px bg-accent/40" />
        <span className="text-[10px] font-medium tracking-[0.28em] text-fg-muted uppercase">
          {lawyer.bar} · Sicil No: {lawyer.barNo}
        </span>
      </div>

      {/* Ana Ekran Kapsayıcısı - Ekrana Tam Oturan Geniş Yerleşim */}
      <div className="mx-auto w-full max-w-[1550px] 2xl:max-w-[1700px] px-5 sm:px-8 lg:px-12 my-auto flex-1 flex items-center">
        <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Başlık, Mesaj ve Eylemler */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Baro Onay Rozeti */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-card-border bg-card/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold tracking-wider text-fg">
                {lawyer.bar}
              </span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="text-xs text-fg-muted">İzmit / Kocaeli</span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Aktif Danışmanlık
              </span>
            </motion.div>

            {/* Büyük Tipografik Manşet */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
              className="mt-5 font-serif text-[clamp(2.3rem,4.4vw,4.6rem)] font-normal tracking-tight text-fg leading-[1.08]"
            >
              Hukukun Gücünü, <br />
              <span className="italic font-medium text-accent">Stratejik ve Şeffaf</span> <br />
              Temsille Birleştiriyoruz.
            </motion.h1>

            {/* Açıklama Metni */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCustom }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              Av. {fullName}, Kocaeli ve çevre illerde Ceza, Gayrimenkul & Kira, İş, Ticaret ve Aile Hukuku uyuşmazlıklarında müvekkillerine titiz mevzuat analizi ve şeffaf dava takibi sunar.
            </motion.p>

            {/* Buton Grubu */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={lawyer.phoneHref}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-bronze-light hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                <span>{lawyer.phoneDisplay}</span>
              </a>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-fg transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                <span>Randevu & Konum</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <VCardButton />
            </motion.div>

            {/* Temel Güvenceler */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 grid grid-cols-1 gap-3 border-t border-line/80 pt-6 sm:grid-cols-3"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Mesleki Gizlilik İlkesi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Düzenli UYAP Raporlaması</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">TBB m.7 Tam Uyumluluk</span>
              </div>
            </motion.div>
          </div>

          {/* Sağ Kolon: Doğrudan Portre Fotoğrafı (Ekrana Tam Oturan Yükseklik) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeCustom }}
              className="relative w-full max-w-[460px] xl:max-w-[500px]"
            >
              {/* İnce zarif altın dış çizgi çerçevesi */}
              <div className="absolute -inset-2.5 rounded-3xl border border-accent/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

              {/* Doğrudan Portre Görseli */}
              <div className="relative h-[460px] sm:h-[520px] lg:h-[calc(100svh-14rem)] max-h-[620px] w-full overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl">
                <Image
                  src="/images/portrait.jpg"
                  alt={`Av. ${fullName} - ${lawyer.bar}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Alt Karartma ve Bilgi */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Leyla Atakan Cd. İzmit / Kocaeli</span>
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
              <div className="absolute -bottom-4 -left-3 sm:-left-4 rounded-2xl border border-card-border bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent-subtle text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-fg">Görüşme Saatleri</span>
                      {currentTime && (
                        <span className="font-mono text-[11px] text-accent font-medium">
                          {currentTime}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-fg-muted">{lawyer.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ekran Altı "Aşağı Kaydır" Göstergesi (Masaüstü için ekranı sabitleyen detay) */}
      <div className="relative z-10 mx-auto hidden lg:flex flex-col items-center gap-1.5 pt-3">
        <a
          href="#calisma-alanlari"
          className="group inline-flex items-center gap-2 text-[10px] uppercase font-medium tracking-[0.24em] text-fg-muted transition-colors hover:text-accent"
        >
          <span>Aşağı Kaydır</span>
          <ArrowDown className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-1 text-accent" />
        </a>
      </div>
    </section>
  );
}
