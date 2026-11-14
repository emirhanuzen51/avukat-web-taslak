import Link from "next/link";
import { LegalIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-midnight px-6 text-center text-ivory">
      <div>
        <span className="text-champagne">
          <LegalIcon name="terazi" className="mx-auto h-20 w-20" />
        </span>
        <p className="mt-10 font-serif text-[clamp(5rem,16vw,11rem)] font-light leading-none text-champagne/80">404</p>
        <h1 className="mt-4 font-serif text-3xl font-light italic">Aradığınız sayfa bulunamadı.</h1>
        <p className="mt-3 text-ivory/55">Bağlantı değişmiş ya da sayfa kaldırılmış olabilir.</p>
        <Link
          href="/"
          className="mt-10 inline-block border border-ivory/25 px-7 py-3.5 text-[13px] tracking-[0.08em] transition-colors hover:border-champagne hover:bg-champagne hover:text-midnight"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
