"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from "lucide-react";
import { fullName, lawyer, nav, slugName } from "@/lib/lawyer";
import { Monogram } from "./icons";
import { easeCustom } from "./motion";

/* ---------------- Logo (monogram + isim) ---------------- */
export function Brand({ light }: { light: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className="h-11 w-11 shrink-0" light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-[1.35rem] font-medium tracking-[0.01em] ${light ? "text-ivory" : "text-fg"}`}>
          Av. {fullName}
        </span>
        <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-champagne">
          {lawyer.tagline}
        </span>
      </span>
    </span>
  );
}

/* ---------------- Tema ---------------- */
export function ThemeToggle({ light }: { light: boolean }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("av-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Açık temaya geç" : "Koyu temaya geç"}
      className={`grid h-10 w-10 place-items-center rounded-full border transition ${
        light ? "border-ivory/20 text-ivory hover:border-champagne" : "border-line text-fg hover:border-champagne"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "d" : "l"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {dark ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ---------------- Üst menü ---------------- */
export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [path]);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isHome = path === "/";
  const light = isHome ? !scrolled : false;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          scrolled ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-champagne"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:py-5">
          <Link href="/" aria-label="Ana sayfa">
            <Brand light={light} />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => {
              const on = path === n.href || (n.href !== "/" && path.startsWith(n.href));
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`gold-link pb-1 text-[13px] tracking-[0.06em] transition-colors ${
                    light ? "text-ivory/75 hover:text-ivory" : "text-sub hover:text-fg"
                  } ${on ? (light ? "!text-ivory font-medium" : "!text-fg font-medium") : ""}`}
                >
                  {n.label}
                  {on && (
                    <motion.span
                      layoutId="nav-dot"
                      className="ml-2 inline-block h-1 w-1 -translate-y-0.5 rounded-full bg-champagne"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle light={light} />
            <button
              onClick={() => setOpen(true)}
              aria-label="Menüyü aç"
              className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
                light ? "border-ivory/20 text-ivory" : "border-line text-fg"
              }`}
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-midnight px-6 pb-10 pt-5 text-ivory lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Brand light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-14 grid">
              {[{ href: "/", label: "Ana Sayfa" }, ...nav].map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: easeCustom }}
                >
                  <Link
                    href={n.href}
                    className="flex items-baseline gap-5 border-b border-ivory/10 py-4 font-serif text-3xl font-light"
                  >
                    <span className="font-sans text-xs text-champagne">0{i + 1}</span>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto text-sm text-ivory/60">
              <a href={lawyer.phoneHref} className="block py-1.5 font-serif text-lg text-ivory">
                {lawyer.phoneDisplay}
              </a>
              <p className="py-1 text-xs text-ivory/50">{lawyer.address}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- İmza (dekoratif SVG çizimi) ---------------- */
export function Signature({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 90" fill="none" className={className} aria-label={`${fullName} — dekoratif imza`} role="img">
      <motion.path
        d="M14 62 C22 30 40 14 46 22 C52 30 34 64 30 70 C44 50 58 34 66 40 C72 45 62 62 70 62 C80 62 86 44 94 44 C100 44 96 60 104 60 C114 60 120 36 128 22 C132 44 130 58 138 60 C148 62 156 40 166 40 C174 40 170 58 178 58 C190 58 196 28 206 28 C214 28 206 56 216 58 C228 60 240 40 252 36 C262 33 270 40 284 30"
        stroke="#b69a69"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.8, ease: [0.45, 0, 0.25, 1] }}
      />
      <motion.path
        d="M24 78 C90 72 180 74 276 70"
        stroke="#b69a69"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 2.5, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ---------------- vCard (dijital kartvizit) ---------------- */
export function VCardButton({ light = false }: { light?: boolean }) {
  const download = () => {
    const v = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${lawyer.lastName};${lawyer.firstName};;Av.;`,
      `FN:Av. ${fullName}`,
      `TITLE:${lawyer.title} – ${lawyer.bar}`,
      `TEL;TYPE=WORK,VOICE:${lawyer.phoneHref.replace("tel:", "")}`,
      `EMAIL;TYPE=WORK:${lawyer.email}`,
      `ADR;TYPE=WORK:;;${lawyer.address};${lawyer.city};;;Türkiye`,
      `URL:${lawyer.site}`,
      "END:VCARD",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([v], { type: "text/vcard;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `av-${slugName}.vcf`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <button
      onClick={download}
      className={`group inline-flex items-center gap-3 border px-6 py-3.5 text-[13px] tracking-[0.08em] transition-colors ${
        light
          ? "border-ivory/25 text-ivory hover:border-champagne hover:bg-champagne hover:text-midnight"
          : "border-fg/25 text-fg hover:border-champagne hover:bg-champagne hover:text-midnight"
      }`}
    >
      <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.5} /> Kartviziti indir (vCard)
    </button>
  );
}

/* ---------------- Alt bilgi ---------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight-2 px-5 pb-10 pt-24 text-ivory sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-ivory/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Monogram className="h-16 w-16" light />
            <p className="mt-8 font-serif text-3xl font-light leading-snug">
              Av. {fullName}
              <span className="mt-1 block text-base italic text-champagne-soft">
                {lawyer.bar} · Sicil No: {lawyer.barNo}
              </span>
            </p>
            <Signature className="mt-8 h-20 w-64" />
          </div>
          <div className="text-sm lg:col-span-3">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-champagne">Sayfalar</p>
            <ul className="grid">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="gold-link inline-block py-2 text-ivory/75 hover:text-ivory">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm lg:col-span-4">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-champagne">İletişim</p>
            <p className="leading-relaxed text-ivory/75">{lawyer.address}</p>
            <a href={lawyer.phoneHref} className="gold-link mt-4 inline-block py-1 text-ivory font-serif text-xl">
              {lawyer.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${lawyer.email}`} className="gold-link inline-block py-1 text-ivory">
              {lawyer.email}
            </a>
            <p className="mt-1 text-ivory/50">KEP: {lawyer.kep}</p>
            <Link href="/iletisim" className="mt-6 inline-flex items-center gap-2 text-champagne-soft hover:text-ivory">
              Ulaşım bilgileri <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs leading-relaxed text-ivory/45 lg:flex-row lg:justify-between">
          <p className="max-w-2xl">
            Bu internet sitesi, Avukatlık Kanunu ve Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği çerçevesinde yalnızca bilgilendirme amacıyla
            hazırlanmıştır. Sitedeki içerikler hukuki danışmanlık niteliği taşımaz.
          </p>
          <p className="flex gap-5">
            <Link href="/kvkk" className="hover:text-ivory">KVKK</Link>
            <Link href="/cerez-politikasi" className="hover:text-ivory">Çerez Politikası</Link>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
