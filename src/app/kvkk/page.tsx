import type { Metadata } from "next";
import { fullName, lawyer } from "@/lib/lawyer";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni" };

// NOT: Taslak metindir; yayından önce avukat tarafından kontrol edilmelidir.
export default function Page() {
  return (
    <main className="px-5 pb-28 pt-44 sm:px-8">
      <div className="prose-legal mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] !text-champagne">Yasal bilgilendirme</p>
        <h1 className="mt-4 font-serif text-5xl font-light">KVKK Aydınlatma Metni</h1>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla Av. {fullName} tarafından
          kişisel verileriniz aşağıda açıklanan çerçevede işlenmektedir.
        </p>
        <h2>İşlenen veriler</h2>
        <p>
          Telefon, e-posta veya KEP yoluyla iletişime geçtiğinizde paylaştığınız kimlik ve iletişim bilgileri ile
          ilettiğiniz mesaj içeriği.
        </p>
        <h2>İşleme amaçları ve hukuki sebepler</h2>
        <ul>
          <li>İletişim talebinizin yanıtlanması ve görüşme planlanması (KVKK m.5/2-c)</li>
          <li>Hukuki yükümlülüklerin yerine getirilmesi (KVKK m.5/2-ç)</li>
          <li>Avukatlık mesleğine ilişkin sır saklama yükümlülüğü çerçevesinde dosya kayıtlarının tutulması</li>
        </ul>
        <h2>Aktarım</h2>
        <p>Kişisel verileriniz, kanuni yükümlülükler dışında üçüncü kişilerle paylaşılmaz.</p>
        <h2>Haklarınız</h2>
        <p>
          KVKK m.11 kapsamındaki taleplerinizi {lawyer.address} adresine yazılı olarak veya {lawyer.kep} KEP adresine
          iletebilirsiniz.
        </p>
      </div>
    </main>
  );
}
