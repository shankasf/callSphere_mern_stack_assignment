import { CTA } from "@/components/CTA";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { Nav } from "@/components/Nav";
import { PricingSection } from "@/components/PricingSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <FeaturesSection />
        <HowItWorksSection />
        <IndustriesSection />
        <IntegrationsSection />
        <StatsSection />
        <CTA />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
