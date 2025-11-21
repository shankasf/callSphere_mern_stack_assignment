const industries = [
  {
    name: "Retail & Grocery",
    description: "Live inventory, substitutions, and curbside coordination.",
    details: ["Inventory lookups", "Backorder alternatives", "Loyalty lookups"]
  },
  {
    name: "Restaurants",
    description: "Phone ordering, modifications, and table bookings in seconds.",
    details: ["Dynamic menus", "Upsell prompts", "Reservation confirmations"]
  },
  {
    name: "Pharmacy",
    description: "Refills, reminders, and non-diagnostic intake with compliance.",
    details: ["DOB/zip verification", "Refill reminders", "Pickup scheduling"]
  },
  {
    name: "Services",
    description: "Bookings, routing, and upsell scripts tuned to your business.",
    details: ["Intelligent routing", "Add-on prompts", "Field tech scheduling"]
  }
];

export function IndustriesSection() {
  return (
    <section id="industries" className="mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Built for the phones that never stop ringing
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          CallSphere voice agents plug into your catalog, menus, or services with industry
          specific workflows.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
        {industries.map((industry) => (
          <article
            key={industry.name}
            className="rounded-3xl border border-white/10 bg-secondary/60 p-6 text-left transition hover:border-indigo-400/60"
          >
            <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
              {industry.details.map((detail) => (
                <li key={detail} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
