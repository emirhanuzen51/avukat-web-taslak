import { Hero } from "@/components/hero";
import {
  ArchitecturalGallery,
  BarAccreditationBar,
  BentoPracticeAreas,
  ContactCtaBanner,
  InsightsSection,
  LegalFaqAccordion,
  ProcessTimeline,
  SignatureQuote,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <BarAccreditationBar />
      <BentoPracticeAreas />
      <ProcessTimeline />
      <ArchitecturalGallery />
      <SignatureQuote />
      <LegalFaqAccordion />
      <InsightsSection />
      <ContactCtaBanner />
    </main>
  );
}
