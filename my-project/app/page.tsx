import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

// Dynamically import heavy sections
const ReelSection = dynamic(() => import("@/components/reels/ReelSection").then(mod => mod.ReelSection));
const Services = dynamic(() => import("@/components/services/Services").then(mod => mod.Services));
const BeforeAfter = dynamic(() => import("@/components/comparison/BeforeAfter").then(mod => mod.BeforeAfter));
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio").then(mod => mod.Portfolio));
const Workflow = dynamic(() => import("@/components/workflow/Workflow").then(mod => mod.Workflow));
const GearSection = dynamic(() => import("@/components/gear/GearSection").then(mod => mod.GearSection));
const Results = dynamic(() => import("@/components/results/Results").then(mod => mod.Results));
const BTSSection = dynamic(() => import("@/components/bts/BTSSection").then(mod => mod.BTSSection));
const CreativeDNA = dynamic(() => import("@/components/dna/CreativeDNA").then(mod => mod.CreativeDNA));
const EditingDesk = dynamic(() => import("@/components/desk/EditingDesk").then(mod => mod.EditingDesk));
const Testimonials = dynamic(() => import("@/components/testimonials/Testimonials").then(mod => mod.Testimonials));
const CTASection = dynamic(() => import("@/components/cta/CTASection").then(mod => mod.CTASection));
const Footer = dynamic(() => import("@/components/footer/Footer").then(mod => mod.Footer));

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
