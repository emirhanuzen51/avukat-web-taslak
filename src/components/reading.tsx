"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Makale okuma ilerlemesi: sol kenarda dikey altın çizgi + yüzde */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="pointer-events-none fixed bottom-10 left-6 top-32 z-40 hidden w-px bg-line xl:block" aria-hidden="true">
      <motion.div style={{ scaleY: h }} className="h-full w-px origin-top bg-champagne" />
    </div>
  );
}
