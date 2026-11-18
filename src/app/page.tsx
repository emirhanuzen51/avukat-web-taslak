import { Hero } from "@/components/hero";
import {
  AboutLawyerSection,
  BarAccreditationBar,
  BentoPracticeAreas,
  ContactCtaBanner,
  InsightsSection,
  LegalFaqAccordion,
  ProcessTimeline,
  SignatureQuote,
} from "@/components/home";
import { CaseAssessmentWizard } from "@/components/case-wizard";
import { FeeEstimator } from "@/components/fee-calculator";
import { CourthouseGuide } from "@/components/courthouse-guide";
import { EmergencyLegalBanner } from "@/components/emergency-banner";

export default function Home() {
  return (
    <main>
      {/* 1. Acil Ceza & İfade Durumu Bilgilendirme Şeridi */}
      <div className="pt-20 sm:pt-24">
        <EmergencyLegalBanner />
      </div>

      {/* 2. Kurumsal Giriş (İtibarlı, İnteraktif Arama & Doğrudan Hukuki Odak) */}
      <Hero />

      {/* 3. Baro ve Mesleki Esaslar */}
      <BarAccreditationBar />

      {/* 4. Hukuk Dalları ve Çalışma Alanları (Bento Grid) */}
      <BentoPracticeAreas />

      {/* 5. İnteraktif Hukuki Ön Değerlendirme & Talep Sihirbazı */}
      <CaseAssessmentWizard />

      {/* 6. Çalışma Metodolojisi ve Dava Süreci */}
      <ProcessTimeline />

      {/* 7. Yargılama Harç ve Masraf Bilgilendirme Modülü */}
      <FeeEstimator />

      {/* 8. Meslek Beyanı ve Hukuki Titizlik İlkesi */}
      <SignatureQuote />

      {/* 9. Bölgesel Adliye, İcra ve Ulaşım Rehberi */}
      <CourthouseGuide />

      {/* 10. Sıkça Sorulan Hukuki Sorular */}
      <LegalFaqAccordion />

      {/* 11. Bizi Tanıyın (Avukat Profili & Mesleki Geçmiş) */}
      <AboutLawyerSection />

      {/* 12. Hukuki Bilgilendirme ve Makaleler */}
      <InsightsSection />

      {/* 13. Doğrudan İletişim ve Randevu */}
      <ContactCtaBanner />
    </main>
  );
}
