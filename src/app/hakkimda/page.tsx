import type { Metadata } from "next";
import Image from "next/image";
import { fullName, lawyer } from "@/lib/lawyer";
import { Kicker, Lines, PageHero, Reveal } from "@/components/motion";
import { Monogram } from "@/components/icons";
import { Signature, VCardButton } from "@/components/chrome";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `Av. ${fullName} — eğitim, baro ve mesleki bilgiler.`,
};

export default function Page() {
  const timeline = [
    { y: lawyer.graduationYear, t: "Lisans", d: lawyer.university },
    { y: lawyer.startYear, t: "Avukatlık ruhsatı", d: `${lawyer.bar} · Sicil No: ${lawyer.barNo}` },
    { y: "—", t: "Akademik çalışmalar", d: lawyer.academic },
  ];
  return (
    <main>
      <PageHero
        n="I"
        kicker="Hakkımda"
        title={`Av. ${fullName}`}
        italic={lawyer.bar}
        text={`${lawyer.city}'de bağımsız olarak avukatlık faaliyetini sürdürmektedir.`}
        image="/images/library-ladder.jpg"
      />

      <section className="px-5 py-28 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-t-full border border-champagne/50" aria-hidden="true" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-bg-2">
                  <Image
                    src="/images/portrait.jpg"
                    alt={`Av. ${fullName}`}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                    <p className="font-serif text-2xl">Av. {fullName}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-champagne">{lawyer.tagline}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Kicker n="01">Özgeçmiş</Kicker>
            <Lines
              className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.1]"
              lines={[<>Hukuki meselelere</>, <><em className="text-champagne">açık iletişim</em> ve özenle</>, <>yaklaşan bir pratik.</>]}
            />
            <Reveal delay={0.15}>
              <div className="prose-legal mt-6 max-w-2xl">
                <p>
                  Av. {fullName}, {lawyer.university}&apos;nden mezun olmuş; avukatlık stajını tamamlayarak {lawyer.bar}&apos;na kaydolmuştur. Mesleki faaliyetini {lawyer.city}&apos;de bağımsız olarak sürdürmektedir.
                </p>
                <p>
                  Çalışmalarında; müvekkilin bilgilendirilmesini, dosyanın tüm yönleriyle incelenmesini ve süreçlerin düzenli takibini esas alır. Her dosyanın kendine özgü koşulları olduğu bilinciyle, hukuki seçenekleri olası sonuçlarıyla birlikte açık bir dille paylaşır.
                </p>
                <p>Mesleki faaliyetlerini Avukatlık Kanunu ve meslek kuralları çerçevesinde yürütür.</p>
              </div>
            </Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Signature className="h-16 w-56" />
              <VCardButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 px-5 py-28 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker n="02">Mesleki bilgiler</Kicker>
            <Monogram className="mt-4 h-24 w-24 text-fg" />
          </div>
          <div className="lg:col-span-8">
            <ol className="border-t border-line">
              {timeline.map((t, i) => (
                <Reveal key={t.t} delay={i * 0.08}>
                  <li className="grid grid-cols-[90px_1fr] gap-6 border-b border-line py-8 sm:grid-cols-[140px_1fr]">
                    <span className="font-serif text-3xl italic text-champagne">{t.y}</span>
                    <span>
                      <span className="block font-serif text-2xl">{t.t}</span>
                      <span className="mt-1 block text-sub">{t.d}</span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
                <div className="bg-bg-2 p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-sub">Yabancı diller</p>
                  <p className="mt-2 font-serif text-2xl">{lawyer.languages.join(" · ")}</p>
                </div>
                <div className="bg-bg-2 p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-sub">Kayıtlı olduğu baro</p>
                  <p className="mt-2 font-serif text-2xl">{lawyer.bar}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
