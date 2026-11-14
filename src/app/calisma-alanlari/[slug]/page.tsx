import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { areas, findArea } from "@/lib/areas";
import { Kicker, PageHero, Reveal } from "@/components/motion";
import { LegalIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = findArea((await params).slug);
  return a ? { title: a.title, description: a.lead } : {};
}

const steps = [
  { t: "Ön görüşme", d: "Meselenin ana hatları ve ihtiyaç duyulan bilgi ve belgeler belirlenir." },
  { t: "İnceleme", d: "Belgeler, ilgili mevzuat ve içtihatlar çerçevesinde değerlendirilir." },
  { t: "Bilgilendirme", d: "Hukuki seçenekler ve olası sonuçları açık bir dille paylaşılır." },
  { t: "Süreç takibi", d: "Başvuru, dava veya sözleşme süreçleri düzenli olarak takip edilir." },
];

export default async function Page({ params }: Props) {
  const a = findArea((await params).slug);
  if (!a) notFound();
  const i = areas.indexOf(a);
  const next = areas[(i + 1) % areas.length];

  return (
    <main>
      <PageHero
        n={`0${i + 1}`}
        kicker="Çalışma alanı"
        title={a.title.split(" ")[0]}
        italic={a.title.split(" ").slice(1).join(" ")}
        text={a.lead}
        image={a.image}
      />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-champagne">
                <LegalIcon name={a.icon} draw className="h-24 w-24" />
              </span>
              <Link href="/calisma-alanlari" className="gold-link mt-10 inline-flex items-center gap-2 pb-1 text-sm text-sub">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Tüm alanlar
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Kicker n="01">Başlıca konular</Kicker>
            <ul className="border-t border-line">
              {a.topics.map((t, k) => (
                <Reveal key={t} delay={k * 0.06}>
                  <li className="flex items-baseline gap-6 border-b border-line py-6">
                    <span className="font-serif text-sm italic text-champagne">{String(k + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-2xl">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-20">
              <Kicker n="02">Çalışma süreci</Kicker>
              <div className="grid gap-px bg-line sm:grid-cols-2">
                {steps.map((s, k) => (
                  <div key={s.t} className="bg-bg p-6">
                    <span className="font-serif text-xs italic text-champagne">Adım 0{k + 1}</span>
                    <h3 className="mt-2 font-serif text-xl">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sub">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-line pt-10">
              <Link href="/iletisim" className="gold-link inline-flex items-center gap-2 text-sm text-fg">
                Bu konuda görüşme talep edin <ArrowUpRight className="h-4 w-4 text-champagne" strokeWidth={1.5} />
              </Link>
              <Link href={`/calisma-alanlari/${next.slug}`} className="text-right text-xs text-sub hover:text-fg">
                <span className="block text-[10px] uppercase tracking-widest text-champagne">Sonraki alan</span>
                {next.title} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
