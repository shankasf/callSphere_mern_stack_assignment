import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/Button";

type CTAProps = {
  primaryHref?: string;
  secondaryHref?: string;
};

export function CTA({ primaryHref = "#contact", secondaryHref = "#pricing" }: CTAProps) {
  return (
    <section
      id="cta"
      aria-label="Final call to action"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/80 via-indigo-500/70 to-cyan-500/70 px-6 py-12 sm:px-12 sm:py-16 lg:py-20 text-center shadow-glow">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="noise-overlay" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to let voice agents close the loop?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-indigo-50/90 sm:text-lg">
            Book a 30-minute walkthrough to see how CallSphere automates ordering,
            support, and scheduling over a single call.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-indigo-800/30" asChild>
              <a href={primaryHref}>
                <PhoneCall aria-hidden className="h-5 w-5" />
                Book a Demo
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
              <a href={secondaryHref}>
                See Pricing
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}