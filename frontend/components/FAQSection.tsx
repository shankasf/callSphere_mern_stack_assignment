import { FAQ } from "@/components/FAQ";

const faqItems = [
  {
    question: "How do you handle payments?",
    answer: "Secure handoff to PCI-compliant providers such as Stripe or Square."
  },
  {
    question: "Do you integrate with my catalog?",
    answer: "Yes. Connect via API or drop in a CSV import - CallSphere keeps it synced."
  },
  {
    question: "Is my data safe?",
    answer:
      "All data is encrypted in transit and at rest with role-based access, detailed audit logs, and PII vaulting controls."
  },
  {
    question: "Can I try a demo?",
    answer: "Absolutely - book via the form below and we will tailor a walkthrough for your use case."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="mt-24">
      {/* Add responsive horizontal padding to the section content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Answers before you ask
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            If your question isn&apos;t covered, drop us a line - we respond within a day.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  );
}