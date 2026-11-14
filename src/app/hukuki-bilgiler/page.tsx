import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { PageHero, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Hukuki Bilgiler",
  description: "Genel hukuki bilgilendirme yazıları.",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export default function Page() {
  return (
    <main>
      <PageHero
        n="III"
        kicker="Hukuki bilgiler"
        title="Bilgilendirici"
        italic="yazılar"
        text="Mevzuat ve temel hukuki kavramlara ilişkin genel bilgilendirme yazıları. İçerikler hukuki danışmanlık niteliği taşımaz."
        image="/images/old-books.jpg"
      />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link
                href={`/hukuki-bilgiler/${a.slug}`}
                className="group grid gap-4 border-t border-line py-12 last:border-b md:grid-cols-12"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-sub md:col-span-3">
                  <p className="text-champagne">{a.category}</p>
                  <p className="mt-2">{fmt(a.date)}</p>
                  <p className="mt-1">{a.minutes} dk okuma</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.1] transition-colors duration-500 group-hover:text-champagne">
                    {a.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sub">{a.excerpt}</p>
                  <span className="mt-6 block h-px w-12 bg-champagne transition-all duration-700 group-hover:w-40" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
