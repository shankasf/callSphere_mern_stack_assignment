import { BrainCircuit, ClipboardCheck, ShoppingBasket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "Voice agent understands intent and queries the product catalog semantically.",
    icon: BrainCircuit
  },
  {
    title: "Decide",
    description: "Applies filters (brand, size, price, availability) and builds the cart.",
    icon: ShoppingBasket
  },
  {
    title: "Complete",
    description: "Checkout, payment handoff, confirmation via SMS/email.",
    icon: ClipboardCheck
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-8 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Three steps stand between your customer&apos;s question and a completed order.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-[1440px] gap-6 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-fr">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-secondary/60 p-6 text-left transition hover:border-white/30 hover:bg-secondary/80"
            >
              <span className="absolute right-6 top-6 text-4xl font-bold text-white/10">
                {index + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
                <step.icon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}