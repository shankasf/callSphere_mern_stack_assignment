import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Book a demo</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Tell us about your call volume and workflow. We&apos;ll set up a tailored
          walkthrough.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-6xl">
        <ContactForm />
      </div>
    </section>
  );
}
