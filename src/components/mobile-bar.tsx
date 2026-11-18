"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";
import { lawyer } from "@/lib/lawyer";

interface MobileActionBarProps {
  onOpenAppointment: () => void;
}

export function MobileActionBar({ onOpenAppointment }: MobileActionBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 150px aşağı kaydırıldığında göster
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 sm:hidden pointer-events-none">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-2xl border border-card-border bg-card/90 p-2 shadow-2xl backdrop-blur-xl pointer-events-auto">
        {/* Hemen Ara */}
        <a
          href={lawyer.phoneHref}
          className="flex flex-col items-center gap-1 px-3 py-1.5 text-center text-fg hover:text-accent transition-colors"
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/10 text-accent">
            <Phone className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider">Hemen Ara</span>
        </a>

        {/* Randevu Al */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center gap-1 px-3 py-1.5 text-center text-accent"
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white shadow-xs">
            <Calendar className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider">Randevu Al</span>
        </button>

        {/* WhatsApp */}
        <a
          href={lawyer.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-3 py-1.5 text-center text-fg hover:text-emerald-500 transition-colors"
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <MessageCircle className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider">WhatsApp</span>
        </a>

        {/* Büro Konumu */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            lawyer.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-3 py-1.5 text-center text-fg hover:text-accent transition-colors"
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/10 text-accent">
            <MapPin className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider">Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
}
