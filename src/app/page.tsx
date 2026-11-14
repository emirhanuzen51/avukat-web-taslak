import { Hero } from "@/components/hero";
import {
  Approach,
  ArchitectureBand,
  AreasGrid,
  ContactBand,
  Identity,
  InsightsPreview,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <Identity />
      <AreasGrid />
      <Approach />
      <ArchitectureBand />
      <InsightsPreview />
      <ContactBand />
    </main>
  );
}
