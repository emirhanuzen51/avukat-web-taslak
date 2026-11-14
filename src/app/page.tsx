import { Hero } from "@/components/hero";
import {
  ArchitectureFeature,
  BarAccreditationBar,
  BentoPracticeAreas,
  ContactCtaBanner,
  InsightsSection,
  ProcessTimeline,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <BarAccreditationBar />
      <BentoPracticeAreas />
      <ProcessTimeline />
      <ArchitectureFeature />
      <InsightsSection />
      <ContactCtaBanner />
    </main>
  );
}
