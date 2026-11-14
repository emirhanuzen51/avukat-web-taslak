import type { Metadata } from "next";

export const metadata: Metadata = { title: "Çerez Politikası" };

export default function Page() {
  return (
    <main className="px-5 pb-28 pt-44 sm:px-8">
      <div className="prose-legal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] !text-champagne">Yasal bilgilendirme</p>
        <h1 className="mt-4 font-serif text-5xl font-light">Çerez Politikası</h1>
        <p>Bu internet sitesi reklam, takip veya analitik amaçlı çerez kullanmamaktadır.</p>
        <h2>Tarayıcı depolaması</h2>
        <p>
          Yalnızca sitenin çalışması için gerekli tercihler (ör. açık/koyu tema seçimi ve açılış animasyonunun bir kez
          gösterilmesi) tarayıcınızın yerel depolama alanında saklanır. Bu bilgiler kişisel veri içermez ve sunucuya
          gönderilmez.
        </p>
        <h2>Üçüncü taraf içerikler</h2>
        <p>
          İletişim sayfasındaki harita Google Haritalar tarafından sağlanır ve Google&apos;ın kendi gizlilik politikasına
          tabidir.
        </p>
      </div>
    </main>
  );
}
