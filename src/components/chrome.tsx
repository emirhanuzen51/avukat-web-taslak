"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Download,
  Mail,
  MapPin,
  Menu,
  Moon,
  Navigation,
  Phone,
  Shield,
  Sun,
  X,
} from "lucide-react";
import { fullName, lawyer, nav, slugName } from "@/lib/lawyer";
import { Monogram } from "./icons";

/* ---------------- Logo & Marka ---------------- */
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3 group">
      <Monogram className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" light={light} />
      <div className="leading-tight">
        <span className={`block font-serif text-base sm:text-lg font-medium tracking-tight ${light ? "text-white" : "text-fg"}`}>
          Av. {fullName}
        </span>
        <span className="block text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-accent">
          {lawyer.bar}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Tema Değiştirici ---------------- */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("avukat-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Açık temaya geç" : "Koyu temaya geç"}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-card-border bg-card/80 text-fg transition-all duration-200 hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "dark" : "light"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ---------------- vCard Kartvizit Butonu ---------------- */
export function VCardButton({ variant = "default" }: { variant?: "default" | "outline" | "white" }) {
  const download = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${lawyer.lastName};${lawyer.firstName};;Av.;`,
      `FN:Av. ${fullName}`,
      `TITLE:${lawyer.title} · ${lawyer.bar}`,
      `TEL;TYPE=WORK,VOICE:${lawyer.phoneHref.replace("tel:", "")}`,
      `TEL;TYPE=CELL,VOICE:${lawyer.mobileHref.replace("tel:", "")}`,
      `EMAIL;TYPE=WORK:${lawyer.email}`,
      `ADR;TYPE=WORK:;;${lawyer.address};${lawyer.city};;;Türkiye`,
      `URL:${lawyer.site}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `av-${slugName}.vcf`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  let styles = "border border-line bg-card/90 text-fg hover:border-accent hover:text-accent";
  if (variant === "outline") {
    styles = "border border-accent text-accent hover:bg-accent hover:text-white";
  } else if (variant === "white") {
    styles = "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-obsidian";
  }

  return (
    <button
      onClick={download}
      className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${styles}`}
    >
      <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
      <span>Kartviziti Kaydet</span>
    </button>
  );
}

/* ---------------- Üst Menü / Navbar ---------------- */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-card-border bg-bg/90 py-3 shadow-xs backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Ana sayfa">
            <Brand />
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden items-center gap-1 rounded-full border border-card-border bg-card/80 p-1.5 backdrop-blur-md lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-200 ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-accent-subtle border border-accent/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sağ Eylemler: Telefon & Tema */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={lawyer.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-subtle px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold tracking-wider text-accent transition-all duration-300 hover:bg-accent hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{lawyer.phoneDisplay}</span>
              <span className="sm:hidden text-[11px]">Ara</span>
            </a>

            <ThemeToggle />

            {/* Mobil Menü Açma Butonu */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
              className="grid h-9 w-9 place-items-center rounded-full border border-card-border bg-card/80 text-fg lg:hidden hover:border-accent"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Çekmece Menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-bg p-6 lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <Brand />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Menüyü kapat"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              <Link
                href="/"
                className={`rounded-2xl px-5 py-3.5 text-base font-medium transition-colors ${
                  pathname === "/" ? "bg-accent-subtle text-accent font-semibold" : "text-fg hover:bg-card"
                }`}
              >
                Ana Sayfa
              </Link>
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-5 py-3.5 text-base font-medium transition-colors ${
                      active ? "bg-accent-subtle text-accent font-semibold" : "text-fg hover:bg-card"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-line pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-fg-muted font-semibold">Doğrudan İletişim</p>
              <a href={lawyer.phoneHref} className="mt-2 block font-serif text-xl font-medium text-fg">
                {lawyer.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                {lawyer.address}
              </p>
              <div className="mt-5 flex gap-2">
                <a
                  href={lawyer.phoneHref}
                  className="flex-1 rounded-full bg-accent py-3 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md"
                >
                  Hemen Ara
                </a>
                <VCardButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobil Cihazlar İçin Sabit Alt Hızlı Eylem Çubuğu (Bottom Action Dock) */}
      <div className="fixed bottom-3 inset-x-3 z-40 block sm:hidden">
        <div className="flex items-center justify-between rounded-full border border-card-border bg-card/95 p-1.5 shadow-2xl backdrop-blur-xl">
          <a
            href={lawyer.phoneHref}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent py-2.5 text-xs font-bold text-white shadow-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Hemen Ara</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lawyer.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-fg hover:text-accent"
          >
            <Navigation className="h-3.5 w-3.5 text-accent" />
            <span>Yol Tarifi</span>
          </a>
          <Link
            href="/iletisim"
            className="flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-fg hover:text-accent"
          >
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>Randevu</span>
          </Link>
        </div>
      </div>
    </>
  );
}

/* ---------------- Alt Bilgi / Footer ---------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-card-border bg-obsidian text-slate-300 pt-16 pb-24 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 pb-14 border-b border-white/10">
          {/* Sol Kolon: Kurumsal Kimlik & Baro Bilgisi */}
          <div className="lg:col-span-5">
            <Brand light />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              {lawyer.shortBio}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <Shield className="h-3.5 w-3.5 text-accent" />
                {lawyer.bar} · Sicil No: {lawyer.barNo}
              </span>
              <VCardButton variant="white" />
            </div>
          </div>

          {/* Orta Kolon: Sayfalar */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Hızlı Erişim
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Kolon: İletişim Bilgileri */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              İletişim & Konum
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span>{lawyer.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={lawyer.phoneHref} className="hover:text-white transition-colors">
                  {lawyer.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${lawyer.email}`} className="hover:text-white transition-colors">
                  {lawyer.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span>{lawyer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Yasal Uyarı & TBB Bildirimi */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Bu internet sitesinde yer alan tüm bilgiler, Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı Yönetmeliği&apos;ne uygun olarak yalnızca bilgilendirme amacıyla hazırlanmıştır. Hukuki danışmanlık veya vekalet ilişkisi teşkil etmez.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/kvkk" className="hover:text-slate-300 transition-colors">
              KVKK
            </Link>
            <span>·</span>
            <Link href="/cerez-politikasi" className="hover:text-slate-300 transition-colors">
              Çerezler
            </Link>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
