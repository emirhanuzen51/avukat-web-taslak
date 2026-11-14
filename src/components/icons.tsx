"use client";

import { motion } from "framer-motion";
import type { AreaIcon } from "@/lib/areas";
import { initials } from "@/lib/lawyer";

/**
 * Özel hukuk ikon sistemi: 48×48 ızgara, 1.4 çizgi kalınlığı, yuvarlak uçlar, tek renk (currentColor).
 * `draw` açıkken çizgiler görünür olduğunda baştan çizilir.
 */
const paths: Record<AreaIcon | "terazi" | "belge" | "dinle" | "takvim" | "muhur", string[]> = {
  medeni: ["M8 22 L24 9 L40 22", "M12 19 V39 H36 V19", "M20 39 V29 H28 V39", "M24 15.5 c-1.6-2.2-5-1.2-4.4 1.6 c0.4 1.8 4.4 4.4 4.4 4.4 s4-2.6 4.4-4.4 c0.6-2.8-2.8-3.8-4.4-1.6 z"],
  ticaret: ["M9 17 H39 V38 H9 Z", "M18 17 V12 H30 V17", "M9 25 H39", "M14 33 L20 28 L25 31 L33 23"],
  is: ["M24 9 a5.5 5.5 0 1 1 0 11 a5.5 5.5 0 1 1 0-11 z", "M12 39 c0-7 5.4-12.5 12-12.5 s12 5.5 12 12.5", "M24 26.5 L22 31 L24 39 L26 31 Z"],
  ceza: ["M14 18 L22 10 L30 18 L22 26 Z", "M18 14 L26 22", "M26 22 L38 34", "M10 39 H26", "M13 39 V35 H23 V39"],
  gayrimenkul: ["M10 39 V17 L22 10 L34 17 V39", "M16 22 H20 M24 22 H28 M16 28 H20 M24 28 H28", "M19 39 V33 H25 V39", "M34 26 a4 4 0 1 1 0 8 a4 4 0 1 1 0-8 z", "M38 30 H43 M41 30 V33"],
  idare: ["M8 18 L24 9 L40 18 Z", "M10 18 H38", "M13 21 V34 M19 21 V34 M29 21 V34 M35 21 V34", "M9 37 H39", "M7 40 H41"],
  terazi: ["M24 9 V39", "M16 39 H32", "M11 15 H37", "M11 15 L6 27 a5 5 0 0 0 10 0 Z", "M37 15 L32 27 a5 5 0 0 0 10 0 Z", "M24 9 a1.5 1.5 0 1 1 0.01 0"],
  belge: ["M13 7 H29 L37 15 V41 H13 Z", "M29 7 V15 H37", "M18 22 H32 M18 27 H32 M18 32 H27"],
  dinle: ["M10 14 H38 V31 H22 L15 37 V31 H10 Z", "M16 21 H32 M16 25.5 H27"],
  takvim: ["M10 12 H38 V39 H10 Z", "M10 19 H38", "M17 8 V15 M31 8 V15", "M16 25 H20 M24 25 H28 M16 31 H20"],
  muhur: ["M24 8 a14 14 0 1 1 0 28 a14 14 0 1 1 0-28 z", "M24 13 a9 9 0 1 1 0 18 a9 9 0 1 1 0-18 z", "M18 36 L15 42 L20 40 L22 44 L24 37", "M30 36 L33 42 L28 40 L26 44 L24 37"],
};

export type IconName = keyof typeof paths;

export function LegalIcon({ name, className = "h-12 w-12", draw = false }: { name: IconName; className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]?.map((d, i) =>
        draw ? (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.15 * i, ease: [0.65, 0, 0.35, 1] }}
          />
        ) : (
          <path key={i} d={d} />
        )
      )}
    </svg>
  );
}

/** Kişisel monogram: ince çift çerçeve + serif baş harfler + altın ayraç. */
export function Monogram({ className = "h-12 w-12", light = false }: { className?: string; light?: boolean }) {
  const [a, b] = initials.split("");
  const ink = light ? "#f5f2ea" : "currentColor";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="61" height="61" fill="none" stroke="#b69a69" strokeWidth="1" />
      <rect x="5" y="5" width="54" height="54" fill="none" stroke="#b69a69" strokeWidth="0.5" opacity="0.6" />
      <text x="23" y="41" textAnchor="middle" fontFamily="var(--font-cormorant), serif" fontSize="27" fontWeight="500" fill={ink}>
        {a}
      </text>
      <line x1="32" y1="18" x2="32" y2="46" stroke="#b69a69" strokeWidth="0.9" />
      <text x="41.5" y="41" textAnchor="middle" fontFamily="var(--font-cormorant), serif" fontSize="27" fontStyle="italic" fontWeight="500" fill={ink}>
        {b}
      </text>
    </svg>
  );
}
