import { Check } from "lucide-react";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  highlighted?: boolean;
  onSelect?: () => void;
  billingLabel?: string;
};

export function PricingCard({
  name,
  price,
  description,
  benefits,
  highlighted = false,
  onSelect,
  billingLabel = "/mo"
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border border-white/10 bg-secondary/60 p-6 transition hover:border-indigo-400/60 hover:shadow-glow",
        highlighted &&
          "relative isolate border-indigo-500/60 bg-gradient-to-b from-indigo-600/40 to-secondary/80 shadow-glow"
      )}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-semibold">{price}</span>
        <span className="ml-1 text-sm text-muted-foreground">{billingLabel}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-3">
            <Check aria-hidden className="h-4 w-4 text-accent" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button
          size="lg"
          variant={highlighted ? "default" : "secondary"}
          className="w-full"
          onClick={onSelect}
        >
          Choose Plan
        </Button>
      </div>
    </article>
  );
}
