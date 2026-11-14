"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { VCardButton } from "./chrome";
import { easeCustom } from "./motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-32 lg:pt-48 lg:pb-36 border-b border-card-border bg-gradient-to-b from-bg-alt/60 via-bg to-bg">
      {/* İnce modern arka plan grid ışığı */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#b48523_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] dark:opacity-[0.1]" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Başlık, Mesaj ve Eylemler */}
          <div className="lg:col-span-7">
            {/* Baro Onay Rozeti */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-4 py-1.5 shadow-xs backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold tracking-wider text-fg">
                {lawyer.bar}
              </span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="text-xs text-fg-muted">Sicil No: {lawyer.barNo}</span>
            </motion.div>

            {/* Büyük Tipografik Manşet */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
              className="mt-6 font-serif text-4xl font-normal tracking-tight text-fg sm:text-6xl lg:text-[4.2rem] lg:leading-[1.1]"
            >
              Hukuki Uyuşmazlıklarda <br className="hidden sm:inline" />
              <span className="italic font-medium text-accent">Stratejik ve Şeffaf</span> <br className="hidden sm:inline" />
              Temsil Pratiği.
            </motion.h1>

            {/* Açıklama Metni */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCustom }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              Av. {fullName}, müvekkillerine hukuki süreçlerin her aşamasında dosyanın tüm risk ve imkânlarını açıkça aktaran, mevzuat ve içtihatları titizlikle analiz eden bağımsız bir avukatlık pratiği sunar.
            </motion.p>

            {/* Buton Grubu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-bronze-light hover:shadow-lg"
              >
                <span>Randevu ve İletişim</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/calisma-alanlari"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/70 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-fg transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <span>Çalışma Alanları</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <VCardButton />
            </motion.div>

            {/* Alt İpuçları & Güvence Metrikleri */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Gizlilik & Sadakat Yükümlülüğü</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Düzenli Dosya Bilgilendirmesi</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-fg">Önleyici Hukuk Yaklaşımı</span>
              </div>
            </motion.div>
          </div>

          {/* Sağ Kolon: Modern Çerçeveli Görsel & Kartvizit */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeCustom }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* İnce altın dış çerçeve efekti */}
              <div className="absolute -inset-2.5 rounded-3xl border border-accent/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-card-border bg-card shadow-2xl">
                <Image
                  src="/images/neoclassical.jpg"
                  alt={`Av. ${fullName} Çalışma Ofisi`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Alt Karartma ve Kart Bilgisi */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                  <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {lawyer.city} Ofisi
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-normal text-white">
                    Av. {fullName}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {lawyer.district} / {lawyer.city} · Ön randevu ile danışmanlık
                  </p>
                </div>
              </div>

              {/* Yüzen Büro Durum Rozeti */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-xl border border-card-border bg-card/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wide text-fg">Randevu & Kabul</p>
                    <p className="text-[10px] text-fg-muted">{lawyer.hours}</p>
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
