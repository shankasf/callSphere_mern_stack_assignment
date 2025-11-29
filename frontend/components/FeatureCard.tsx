import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  bullets?: string[];
  icon: LucideIcon;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  bullets = [],
  icon: Icon,
  className
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-secondary/60 p-6 transition hover:border-white/30 hover:bg-secondary/80",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition before:duration-500 before:content-[''] hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200 backdrop-blur group-hover:shadow-glow">
          <Icon aria-hidden className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
