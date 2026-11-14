import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, findArticle } from "@/lib/articles";
import { fullName } from "@/lib/lawyer";
import { ReadingProgress } from "@/components/reading";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = findArticle((await params).slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function Page({ params }: Props) {
  const a = findArticle((await params).slug);
  if (!a) notFound();
  const others = articles.filter((x) => x.slug !== a.slug);
  return (
    <main>
      <ReadingProgress />
      <header className="bg-midnight px-5 pb-20 pt-44 text-ivory sm:px-8 lg:pt-52">
        <div className="mx-auto max-w-3xl">
          <Link href="/hukuki-bilgiler" className="inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Hukuki bilgiler
          </Link>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-champagne">
            {a.category} · {a.minutes} dk okuma
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.4rem,5.5vw,4.4rem)] font-light leading-[1.05]">{a.title}</h1>
          <p className="mt-6 text-lg text-ivory/60">{a.excerpt}</p>
          <p className="mt-10 border-t border-ivory/10 pt-6 text-sm text-ivory/50">
            Av. {fullName} · {new Date(a.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </header>

      <article className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="prose-legal mx-auto max-w-3xl text-[17px] first:[&>p:first-child]:mt-0">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              {b.p && <p className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-champagne" : ""}>{b.p}</p>}
              {b.list && (
                <ul>
                  {b.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="mt-16 border-l-2 border-champagne bg-bg-2 p-6 text-sm text-sub">
            Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki danışmanlık niteliği taşımaz. Mevzuat değişebileceğinden, somut durumunuz için güncel düzenlemelerin ayrıca değerlendirilmesi gerekir.
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-bg-2 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-sub">Diğer yazılar</p>
          <div className="mt-6 grid gap-px bg-line md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/hukuki-bilgiler/${o.slug}`} className="group bg-bg-2 p-8 transition-colors hover:bg-card">
                <p className="text-[11px] uppercase tracking-[0.22em] text-champagne">{o.category}</p>
                <p className="mt-4 font-serif text-2xl leading-tight transition-colors group-hover:text-champagne">{o.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
