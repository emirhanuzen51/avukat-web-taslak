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
    <section className="relative overflow-hidden border-b border-card-border bg-gradient-to-b from-bg-alt/70 via-bg to-bg pt-28 pb-14 sm:pt-36 sm:pb-20 lg:min-h-[90vh] lg:flex lg:items-center">
      {/* İnce zarif arka plan ışıltısı */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[320px] w-[320px] rounded-full bg-accent/5 blur-[90px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Sol Kolon: Başlık, Mesaj ve Eylemler */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Baro Onay Rozeti */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeCustom }}
              className="inline-flex self-start items-center gap-2 rounded-full border border-card-border bg-card/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
              <span className="text-xs font-semibold tracking-wider text-fg">
                {lawyer.bar}
              </span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="text-xs text-fg-muted">İzmit</span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Aktif Danışmanlık
              </span>
            </motion.div>

            {/* Büyük Tipografik Manşet */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeCustom }}
              className="mt-5 font-serif text-3xl font-medium tracking-tight text-fg sm:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] lg:leading-[1.12]"
            >
              Hukuki Uyuşmazlıklarda <br />
              <span className="italic font-medium text-accent">Stratejik, Şeffaf</span> <br />
              ve Kararlı Temsil.
            </motion.h1>

            {/* Açıklama Metni */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeCustom }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              Av. {fullName}, Kocaeli ve çevre illerde bireysel ve kurumsal müvekkillerine Ceza, Gayrimenkul & Kira, İş, Ticaret ve Aile Hukuku alanlarında derinlemesine mevzuat analizi ve şeffaf dava takibi sunar.
            </motion.p>

            {/* Buton Grubu */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeCustom }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href={lawyer.phoneHref}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-bronze-light hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                <span>{lawyer.phoneDisplay}</span>
              </a>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/85 px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-fg transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
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
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:grid-cols-3"
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

          {/* Sağ Kolon: Doğrudan Portre Fotoğrafı */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeCustom }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none"
            >
              {/* İnce altın dış çerçeve efekti */}
              <div className="absolute -inset-2 rounded-3xl border border-accent/25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              {/* Doğrudan Portre Görseli */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl">
                <Image
                  src="/images/portrait.jpg"
                  alt={`Av. ${fullName} - ${lawyer.bar}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-102"
                  priority
                />

                {/* Alt Karartma ve Bilgi */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-accent">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">Leyla Atakan Cd. İzmit / Kocaeli</span>
                  </div>
                  <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-normal text-white">
                    Av. {fullName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {lawyer.tagline}
                  </p>
                </div>
              </div>

              {/* Yüzen Çalışma Saati Rozeti */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 rounded-2xl border border-card-border bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-fg">Görüşme Saatleri</span>
                      {currentTime && (
                        <span className="font-mono text-[11px] text-accent font-semibold">
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
