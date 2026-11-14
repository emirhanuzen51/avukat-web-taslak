"use client";

import { useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return null;
}

export const easeCustom = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionBadge({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-md">
      {number && <span className="font-mono text-[10px] text-fg-muted">{number}</span>}
      <span>{children}</span>
    </div>
  );
}

export function PageHero({
  badge,
  title,
  highlight,
  description,
  image,
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-bg-alt/70 via-bg to-bg pt-32 pb-20 sm:pt-40 sm:pb-28">
      {image && (
        <div className="absolute inset-0 -z-10 opacity-[0.07] dark:opacity-[0.14] pointer-events-none">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionBadge>{badge}</SectionBadge>
          <h1 className="mt-6 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="italic text-accent">{highlight}</span>}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
