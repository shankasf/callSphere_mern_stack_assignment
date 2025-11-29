import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-6 sm:py-6 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-4 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
            Get Started
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Book a demo
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tell us about your call volume and workflow. We&apos;ll set up a tailored
            walkthrough.
          </p>
        </div>        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}