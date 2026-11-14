"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { Monogram } from "./icons";
import { easeCustom } from "./motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-midnight text-ivory">
      {/* Mimari parallax katmanı */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-12%_0] pointer-events-none">
        <Image
          src="/images/facade-sky.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />

      {/* Dikey kenar yazıları */}
      <p className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-180 text-[10px] uppercase tracking-[0.5em] text-ivory/35 [writing-mode:vertical-rl] xl:block pointer-events-none">
        Bağımsız Hukuk Pratiği
      </p>
      <p className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.5em] text-ivory/35 [writing-mode:vertical-rl] xl:block pointer-events-none">
        01 / Mesleki Kimlik
      </p>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-12 lg:pt-24">
        {/* Sol Kolon */}
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.32em] text-champagne">
            Hukuki bilgi <span className="h-px w-5 bg-champagne/50" /> Mesleki deneyim <span className="h-px w-5 bg-champagne/50" /> Güven
          </p>

          <h1 className="mt-8 font-serif text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.01em]">
            Hukukun gücünü, <br />
            doğru yaklaşım ve <br />
            <em className="text-champagne-soft">titizlikle</em> temsil <br />
            ediyorum.
          </h1>

          <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-ivory/65">
            Hukuki meselelerinizi dikkatle değerlendiren; şeffaf iletişimi ve profesyonel çalışma ilkelerini benimseyen bir hukuk yaklaşımı.
          </p>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
            <Link
              href="/iletisim"
              className="group inline-flex items-center justify-between gap-8 bg-champagne px-7 py-4 text-[13px] font-medium tracking-[0.08em] text-midnight transition-colors hover:bg-champagne-soft"
            >
              <span>İletişim Bilgileri</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />
            </Link>
            <Link
              href="/calisma-alanlari"
              className="inline-flex items-center justify-center border border-ivory/25 px-7 py-4 text-[13px] tracking-[0.08em] text-ivory transition-colors hover:border-champagne hover:text-champagne-soft"
            >
              Çalışma Alanları
            </Link>
          </div>
        </motion.div>

        {/* Sağ Kolon: Kemerli portre çerçevesi */}
        <motion.div style={{ y: archY }} className="relative mx-auto w-full max-w-[390px] lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-t-full border border-champagne/40 pointer-events-none" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-midnight-2 shadow-2xl">
              <Image
                src="/images/portrait.jpg"
                alt={`Av. ${fullName}`}
                fill
                priority
                sizes="(min-width:1024px) 400px, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory">
                <div>
                  <p className="font-serif text-2xl">Av. {fullName}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-champagne">{lawyer.bar}</p>
                </div>
                <Monogram className="h-11 w-11 shrink-0" light />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Alt Keşfet İndikatörü */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ivory/40 pointer-events-none">
        <span>Keşfet</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/15">
          <motion.span
            className="absolute inset-x-0 h-5 bg-champagne"
            animate={{ y: [-20, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
