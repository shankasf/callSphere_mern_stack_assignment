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
    <section id="industries" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Built for the phones that never stop ringing
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            CallSphere voice agents plug into your catalog, menus, or services with industry
            specific workflows.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-[1440px] gap-6 sm:grid-cols-2 sm:auto-rows-fr">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-secondary/60 p-6 sm:p-8 text-left transition hover:border-indigo-400/60 hover:bg-secondary/80"
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{industry.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{industry.description}</p>
              <ul className="mt-4 sm:mt-6 flex-grow space-y-2 sm:space-y-3 text-sm text-muted-foreground/90 sm:text-base">
                {industry.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 sm:gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}