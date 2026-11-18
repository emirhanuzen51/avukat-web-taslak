"use client";

import { useState } from "react";
import {
  Car,
  Clock,
  Compass,
  FileCheck2,
  Landmark,
  MapPin,
  Navigation,
  ShieldCheck,
  Train,
} from "lucide-react";
import { lawyer } from "@/lib/lawyer";
import { SectionBadge } from "./motion";

export function CourthouseGuide() {
  const [activeTab, setActiveTab] = useState(0);

  const courthouses = [
    {
      name: "Kocaeli Adalet Sarayı (İzmit)",
      type: "Ağır Ceza, Asliye Hukuk, Sulh Hukuk & İş Mahkemeleri",
      address: "Körfez Mah. D-100 Karayolu Cad. No:31, İzmit/Kocaeli",
      distance: "Büromuza ~1.4 km (Araçla 4 dk, Yürüyerek 14 dk)",
      transit: "Akçaray Tramvayı 'Doğu Kışla' veya 'Adliye' durağı",
      notes: "Girişte kimlik kontrolü ve x-ray taraması yapılır. Duruşmalar genellikle sabah 09:30 - 16:00 arasında görülür.",
      query: "Kocaeli Adalet Sarayı, Körfez Mah. İzmit",
    },
    {
      name: "Kocaeli İcra Daireleri",
      type: "Genel İcra & İflas Dairesi, Gayrimenkul Satış İcra Dairesi",
      address: "Kadıköy Mah. Bağdat Cd. No:59, İzmit/Kocaeli",
      distance: "Büromuza ~950 metre (Yürüyerek 10 dk)",
      transit: "Şehir içi minibüs hatları ve Fevziye Camii mevkii yürüme mesafesi",
      notes: "İcra takip açılışı, haciz ve fiili haciz işlemleri, dosya kapama ve tahsilat işlemleri yürütülür.",
      query: "Kocaeli İcra Daireleri Kadıköy Mahallesi İzmit",
    },
    {
      name: "Gebze Adalet Sarayı",
      type: "Gebze, Dilovası, Darıca & Çayırova Yargı Çevresi",
      address: "Mevlana Mah. Issıkgöl Cad. No:137, Gebze/Kocaeli",
      distance: "İzmit Merkez büromuza ~48 km (D-100 ve TEM üzerinden 35 dk)",
      transit: "Marmaray Gebze İstasyonu veya İzmit-Gebze otobüs hatları",
      notes: "Bölgemizdeki sanayi, lojistik ve iş hukuku uyuşmazlıklarının yoğun olarak görüldüğü adli mercidir.",
      query: "Gebze Adalet Sarayı Mevlana Mahallesi Gebze",
    },
    {
      name: "Kocaeli İdare ve Vergi Mahkemeleri",
      type: "İdari Yargı, İptal ve Tam Yargı Davaları, Vergi İhtilafları",
      address: "Mehmet Ali Paşa Mah. Gazi Mustafa Kemal Bulvarı, İzmit/Kocaeli",
      distance: "Büromuza ~1.8 km",
      transit: "Tramvay Mehmet Ali Paşa durağı",
      notes: "Belediye ve kamu idaresi işlemlerine karşı yürütmenin durdurulması ve iptal davalarının görüldüğü yargı yeridir.",
      query: "Kocaeli İdare Mahkemesi İzmit",
    },
  ];

  const current = courthouses[activeTab];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bg-alt/30 border-b border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <SectionBadge number="04">Adli Lojistik</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Bölgesel <span className="italic text-accent">Adliye ve Yargı Rehberi</span>
            </h2>
            <p className="mt-3 text-sm text-fg-muted max-w-xl">
              Kocaeli ve çevre adliyelerindeki duruşma, dosya inceleme ve resmi işlem lokasyonları.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent">
            <Landmark className="h-4 w-4" />
            <span>Kocaeli Yargı Çevresi</span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Sol Kolon: Adliye Seçim Listesi */}
          <div className="lg:col-span-5 space-y-3">
            {courthouses.map((ch, idx) => (
              <button
                key={ch.name}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 ${
                  activeTab === idx
                    ? "border-accent bg-card shadow-lg ring-1 ring-accent"
                    : "border-card-border bg-card/60 hover:bg-card text-fg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs font-bold rounded-lg px-2 py-0.5 ${
                        activeTab === idx ? "bg-accent text-white" : "bg-bg-alt text-fg-muted"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-base font-medium text-fg">{ch.name}</h4>
                  </div>
                  <Navigation
                    className={`h-4 w-4 ${
                      activeTab === idx ? "text-accent" : "text-fg-muted/40"
                    }`}
                  />
                </div>
                <p className="mt-2 text-xs text-fg-muted pl-8 line-clamp-1">{ch.type}</p>
              </button>
            ))}
          </div>

          {/* Sağ Kolon: Aktif Adliye Detay ve Yol Bilgisi */}
          <div className="lg:col-span-7 rounded-3xl border border-card-border bg-card p-7 sm:p-9 shadow-xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  Adli Mercî Bilgisi
                </span>
                <h3 className="mt-1 font-serif text-2xl font-normal text-fg">
                  {current.name}
                </h3>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-subtle text-accent">
                <Landmark className="h-6 w-6" />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-accent">
              {current.type}
            </p>

            <div className="mt-6 space-y-4 text-xs">
              <div className="flex items-start gap-3 rounded-xl bg-bg-alt/50 p-4 border border-card-border">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-fg block">Adres</span>
                  <span className="text-fg-muted mt-0.5 block">{current.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-bg-alt/50 p-4 border border-card-border">
                <Car className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-fg block">Büromuza Mesafesi</span>
                  <span className="text-fg-muted mt-0.5 block">{current.distance}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-bg-alt/50 p-4 border border-card-border">
                <Train className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-fg block">Toplu Taşıma / Ulaşım</span>
                  <span className="text-fg-muted mt-0.5 block">{current.transit}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-bg-alt/50 p-4 border border-card-border">
                <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-fg block">Duruşma ve İşlem Notu</span>
                  <span className="text-fg-muted mt-0.5 block">{current.notes}</span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between pt-5 border-t border-line">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  current.query
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Haritada Yol Tarifi Al</span>
              </a>

              <span className="text-[11px] text-fg-muted">
                {lawyer.city} Barosu Yetki Çevresi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
