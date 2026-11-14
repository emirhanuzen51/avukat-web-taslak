import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { areas } from "@/lib/areas";
import { PageHero, Reveal } from "@/components/motion";
import { LegalIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Çalışma Alanları",
  description: "Ceza, gayrimenkul, iş, ticaret, aile ve idare hukuku alanlarında bilgilendirme.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        n="II"
        kicker="Çalışma alanları"
        title="Hukuki çalışma"
        italic="alanları"
        text="Mesleki faaliyet gösterilen alanlar, bilgilendirme amacıyla aşağıda yer almaktadır."
        image="/images/columns-shadow.jpg"
      />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {areas.map((a, i) => (
            <Reveal key={a.slug}>
              <Link
                href={`/calisma-alanlari/${a.slug}`}
                className="group grid items-center gap-8 border-t border-line py-10 last:border-b md:grid-cols-12 lg:py-14"
              >
                <span className="font-serif text-lg italic text-sub md:col-span-1">0{i + 1}</span>
                <span className="text-champagne md:col-span-1">
                  <LegalIcon name={a.icon} draw className="h-12 w-12" />
                </span>
                <span className="md:col-span-6">
                  <span className="block font-serif text-[clamp(2rem,3.6vw,3rem)] font-light leading-none transition-colors duration-500 group-hover:text-champagne">
                    {a.title}
                  </span>
                  <span className="mt-3 block max-w-xl text-sub">{a.lead}</span>
                </span>
                <span className="relative hidden aspect-[16/10] overflow-hidden md:col-span-3 md:block">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </span>
                <ArrowUpRight
                  className="h-6 w-6 text-champagne transition-transform duration-500 group-hover:rotate-45 md:col-span-1 md:justify-self-end"
                  strokeWidth={1.2}
                />
              </Link>
            </Reveal>
          ))}
          <p className="mt-10 text-xs text-sub">
            Alanlar bilgilendirme amacıyla listelenmiştir; herhangi bir uzmanlık veya üstünlük iddiası taşımaz.
          </p>
        </div>
      </section>
    </main>
  );
}
