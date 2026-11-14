# Modern & Prestijli Avukat / Hukuk Bürosu Web Taslağı

Bu proje, bireysel avukatlar ve hukuk büroları için özel olarak tasarlanmış, **Türkiye Barolar Birliği (TBB) Reklam Yasağı Yönetmeliği (m.7)** ile tam uyumlu, yüksek performanslı ve modern bir web sitesi şablonudur.

## 🚀 Teknolojik Altyapı

- **Framework:** Next.js 16 (App Router & React 19)
- **Stil:** Tailwind CSS v4 (Modern Executive & Bronze Theme)
- **Tipografi:** Playfair Display (Serif) + Plus Jakarta Sans
- **Animasyon:** Framer Motion & Lenis Smooth Scroll
- **İkonlar:** Lucide React & Özel Vektörel Hukuk Sembolleri
- **SEO & Performans:** Dinamik Metadata, Schema.org `Attorney` JSON-LD, Sitemap & Robots.txt

---

## 🎨 Tasarım Özellikleri

- **Renk Paleti:** Obsidian & Carbon Koyu Yüzeyler (`#090d14`), Sıcak Alabaster Açık Mod (`#faf9f6`), Zengin Bronz/Altın Vurguları (`#c59b27`).
- **Gelişmiş Tema:** Sıfır yanıp sönmeli (zero-flash) Açık / Koyu (Dark/Light) mod desteği.
- **Kişiselleştirilmiş İmleç:** Masaüstü cihazlar için özel manyetik imleç (custom cursor).
- **Dijital Kartvizit:** Tek tıkla indirilebilir `.vcf` (vCard) oluşturucu.
- **Bento Grid:** Hukuki çalışma alanları için modern modüler kart mimarisi.

---

## 📂 Sayfa Yapısı

- `/` — Modern Açılış, Baro Doğrulama Bandı, Çalışma Konuları, 4 Aşamalı Çalışma Süreci, Güncel Yazılar ve Hızlı Randevu Formu.
- `/hakkimda` — Mesleki özgeçmiş, baro sicil bilgisi, eğitim zaman çizelgesi ve mesleki ilkeler.
- `/calisma-alanlari` — Takip edilen dava ve işlerin bilgilendirme kataloğu.
- `/calisma-alanlari/[slug]` — İlgili hukuki alana özgü mevzuat, süreç aşamaları ve uyuşmazlık konuları.
- `/hukuki-bilgiler` — Genel bilgilendirici hukuk makaleleri ve içtihat analizleri arşivi.
- `/hukuki-bilgiler/[slug]` — Okuma süreli, tipografik ve yasal çekinceli makale detay sayfası.
- `/iletisim` — İnteraktif harita, doğrudan arama, WhatsApp bağlantısı, KEP ve randevu talep alanı.
- `/kvkk` — 6698 sayılı kanuna uygun aydınlatma metni.
- `/cerez-politikasi` — Çerez ve yerel depolama bilgilendirmesi.
- `404` — Özel tasarlanmış hata sayfası.

---

## 🛠️ Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (http://localhost:3000)
npm run dev

# Canlı (Production) derlemesi
npm run build
npm start
```

---

## ⚖️ Yayından Önce Düzenlenecek Dosyalar

1. `src/lib/lawyer.ts`: Avukat adı, baro sicil no, iletişim, adres ve unvan bilgileri.
2. `src/lib/areas.ts`: Yalnızca fiilen bakılan dava ve çalışma alanları.
3. `src/lib/articles.ts`: Güncel mevzuata göre hazırlanan hukuki makaleler.
4. `public/images/portrait.jpg`: Avukatın kurumsal portre fotoğrafı.

---

## ⚖️ Yasal Uyarılara Uyum (TBB m.7)
Bu şablon, TBB Reklam Yasağı Yönetmeliği kapsamında; referans, müvekkil yorumu, garanti, üstünlük iddiası veya rekabeti bozucu unsurlar içermeyecek şekilde hazırlanmıştır. Yayına almadan önce kayıtlı bulunulan Baronun güncel kuralları gözetilmelidir.
