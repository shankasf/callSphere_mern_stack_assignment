const integrationColumns = [
  {
    title: "Telephony & Commerce",
    items: ["Twilio", "Shopify", "WooCommerce", "Stripe", "Square"]
  },
  {
    title: "Data & Storage",
    items: ["Weaviate", "Milvus", "Qdrant", "Postgres"]
  },
  {
    title: "CRM & Support",
    items: ["HubSpot", "Zendesk", "Freshdesk", "Salesforce"]
  }
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mt-24">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Plug into your stack</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          CallSphere connects to telephony, commerce, CRMs, and knowledge bases you already
          rely on. No rip-and-replace required.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1440px] gap-6 md:grid-cols-3">
        {integrationColumns.map((column) => (
          <div
            key={column.title}
            className="rounded-3xl border border-white/10 bg-secondary/60 p-6 text-left"
          >
            <h3 className="text-lg font-semibold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {column.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
