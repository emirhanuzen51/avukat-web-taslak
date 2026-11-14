"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
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
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-36 border-b border-card-border bg-gradient-to-b from-bg-alt/60 via-bg to-bg">
      {/* İnce zarif arka plan ışıltısı */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Başlık, Mesaj ve Eylemler */}
          <div className="lg:col-span-7">
            {/* Baro Onay Rozeti */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/90 px-4 py-1.5 shadow-xs backdrop-blur-md"
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
              className="mt-6 font-serif text-4xl font-normal tracking-tight text-fg sm:text-6xl lg:text-[4.25rem] lg:leading-[1.1]"
            >
              Hukuki Uyuşmazlıklarda <br />
              <span className="italic font-medium text-accent">Stratejik, Şeffaf</span> <br />
              ve Kararlı Temsil.
            </motion.h1>

            {/* Açıklama Metni */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCustom }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              Av. {fullName}, Kocaeli ve çevre illerde bireysel ve kurumsal müvekkillerine Ceza, Gayrimenkul & Kira, İş, Ticaret ve Aile Hukuku alanlarında derinlemesine mevzuat analizi ve şeffaf dava takibi sunar.
            </motion.p>

            {/* Buton Grubu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
              className="mt-10 flex flex-wrap items-center gap-4"
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
                <span>Randevu Talebi & Konum</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <VCardButton />
            </motion.div>

            {/* Temel Güvenceler */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Mesleki Gizlilik & Sır Saklama</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Düzenli UYAP & Dava Takibi</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">TBB Reklam Yasağına Tam Uyum</span>
              </div>
            </motion.div>
          </div>

          {/* Sağ Kolon: Doğrudan Portre Fotoğrafı */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeCustom }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* İnce zarif altın dış çizgi çerçevesi */}
              <div className="absolute -inset-2.5 rounded-3xl border border-accent/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              {/* Doğrudan Portre Görseli */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl">
                <Image
                  src="/images/portrait.jpg"
                  alt={`Av. ${fullName} - ${lawyer.bar}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Alt Karartma ve Bilgi */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Leyla Atakan Cd. İzmit / Kocaeli</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-normal text-white">
                    Av. {fullName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {lawyer.tagline}
                  </p>
                </div>
              </div>

              {/* Yüzen Büro Durum & Saat Rozeti */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 rounded-2xl border border-card-border bg-card/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-subtle text-accent">
                    <Clock className="h-5 w-5" />
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
    </section>
  );
}
