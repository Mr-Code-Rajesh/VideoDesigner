import { Hero } from "@/components/hero/Hero";
import { ReelSection } from "@/components/reels/ReelSection";
import { Services } from "@/components/services/Services";
import { BeforeAfter } from "@/components/comparison/BeforeAfter";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Workflow } from "@/components/workflow/Workflow";
import { GearSection } from "@/components/gear/GearSection";
import { Results } from "@/components/results/Results";
import { BTSSection } from "@/components/bts/BTSSection";
import { CreativeDNA } from "@/components/dna/CreativeDNA";
import { EditingDesk } from "@/components/desk/EditingDesk";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { CTASection } from "@/components/cta/CTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Hero />
      <ReelSection />
      <Services />
      <BeforeAfter />
      <Portfolio />
      <Workflow />
      <GearSection />
      <Results />
      <BTSSection />
      <CreativeDNA />
      <EditingDesk />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
