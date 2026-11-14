import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { Kicker, PageHero, Reveal } from "@/components/motion";
import { VCardButton } from "@/components/chrome";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Av. ${fullName} — büro adresi, telefon, e-posta ve KEP bilgileri.`,
};

export default function Page() {
  const rows = [
    { icon: MapPin, k: "Büro adresi", v: lawyer.address },
    { icon: Phone, k: "Telefon", v: lawyer.phoneDisplay, href: lawyer.phoneHref },
    { icon: Mail, k: "E-posta", v: lawyer.email, href: `mailto:${lawyer.email}` },
    { icon: ShieldCheck, k: "Kayıtlı elektronik posta (KEP)", v: lawyer.kep },
    { icon: Clock, k: "Görüşme saatleri", v: lawyer.hours },
  ];

  return (
    <main>
      <PageHero
        n="IV"
        kicker="İletişim"
        title="Büro ve"
        italic="iletişim bilgileri"
        text="Görüşmeler randevu ile yapılmaktadır. Aşağıdaki iletişim kanallarından ulaşabilirsiniz."
        image="/images/neoclassical.jpg"
      />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Kicker n="01">Bilgiler</Kicker>
            <ul className="border-t border-line">
              {rows.map((r, i) => (
                <Reveal key={r.k} delay={i * 0.06}>
                  <li className="flex gap-5 border-b border-line py-6">
                    <r.icon className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.3} />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-sub">{r.k}</p>
                      {r.href ? (
                        <a href={r.href} className="gold-link mt-1 inline-block font-serif text-2xl">
                          {r.v}
                        </a>
                      ) : (
                        <p className="mt-1 font-serif text-2xl leading-snug">{r.v}</p>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <VCardButton />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lawyer.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-fg/25 px-6 py-3.5 text-[13px] tracking-[0.08em] transition-colors hover:border-champagne hover:bg-champagne hover:text-midnight"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.5} /> Yol tarifi
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative border border-line p-2">
                <span className="absolute -left-px -top-px h-6 w-6 border-l border-t border-champagne" />
                <span className="absolute -bottom-px -right-px h-6 w-6 border-b border-r border-champagne" />
                <iframe
                  title="Büro konumu"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(lawyer.mapsQuery)}&output=embed`}
                  className="h-[460px] w-full grayscale lg:h-[560px] dark:invert-[0.9] dark:hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <p className="mt-6 text-sm text-sub">
              İletişim kanallarıyla paylaşılan bilgiler,{" "}
              <a href="/kvkk" className="gold-link text-fg">
                KVKK Aydınlatma Metni
              </a>{" "}
              kapsamında işlenir. Lütfen ilk iletişimde gizli veya hassas bilgi paylaşmayınız.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
