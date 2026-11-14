"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";

export const ease = [0.22, 1, 0.36, 1] as const;
export const easeCustom = ease;

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return null;
}

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.1, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.8, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/** Editoryal başlık: satırlar maskeyle, yavaş ve kontrollü yükselir. */
export function Lines({ lines, className = "", delay = 0, as: Tag = "h2" }: { lines: React.ReactNode[]; className?: string; delay?: number; as?: "h1" | "h2" }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span className="block" initial={{ y: "105%" }} animate={inView ? { y: "0%" } : undefined} transition={{ duration: 1.3, delay: delay + i * 0.12, ease }}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Bölüm etiketi: numara + ince altın çizgi + başlık */
export function Kicker({ n, children, light = false }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.32em] ${light ? "text-ivory/60" : "text-sub"}`}>
      <span className="font-serif text-base italic tracking-normal text-champagne">{n}</span>
      <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} className="h-px w-12 origin-left bg-champagne" />
      {children}
    </p>
  );
}

/** Alt sayfa başlığı: gece mavisi zemin, mimari fotoğraf parallaksı */
export function PageHero({ n, kicker, title, italic, text, image }: { n: string; kicker: string; title: string; italic: string; text: string; image: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-midnight px-5 pb-20 pt-44 text-ivory sm:px-8 lg:pb-28 lg:pt-52">
      <motion.div style={{ y }} className="absolute inset-[-10%_0] pointer-events-none">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25 grayscale" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/80 to-midnight" />
      <div className="relative mx-auto max-w-6xl">
        <Kicker n={n} light>
          {kicker}
        </Kicker>
        <Lines as="h1" className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-light leading-[0.98] tracking-[-0.01em]" lines={[<>{title}</>, <em key="i" className="text-champagne-soft">{italic}</em>]} />
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/65">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
