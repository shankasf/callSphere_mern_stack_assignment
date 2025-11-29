import { Stat } from "@/components/Stat";

const stats = [
  {
    label: "faster order completion",
    value: "+42%",
    description: "Average reduction across retail and restaurant teams."
  },
  {
    label: "agent handling time",
    value: "-35%",
    description: "Less time waiting on hold or repeating information."
  },
  {
    label: "automation coverage on tier-1 queries",
    value: "91%",
    description: "Calls resolved without human escalation."
  }
];

export function StatsSection() {
  return (
    <section id="metrics" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Automation that proves itself
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Every deployment tunes itself to your workflows and measures what matters.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-[1440px] gap-6 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-fr">
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              label={stat.label}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}