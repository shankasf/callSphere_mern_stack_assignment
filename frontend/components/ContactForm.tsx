"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .regex(/^[\d+()\-\s]+$/, "Enter a valid phone number"),
  monthlyCalls: z.string().nonempty("Select a volume"),
  message: z.string().min(10, "Add a bit more detail"),
  honeypot: z.string().max(0)
});

type ContactFormState =
  | { status: "idle"; error?: string }
  | { status: "submitting" }
  | { status: "success" };

const monthlyCallOptions = [
  "0 - 1,000 calls",
  "1,001 - 5,000 calls",
  "5,001 - 15,000 calls",
  "15,000+ calls"
];

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({ status: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get("name")?.toString() ?? "",
      company: formData.get("company")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      monthlyCalls: formData.get("monthlyCalls")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
      honeypot: formData.get("website")?.toString() ?? ""
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const formattedErrors = Object.entries(fieldErrors).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          if (value?.[0]) acc[key] = value[0];
          return acc;
        },
        {}
      );
      setErrors(formattedErrors);
      setFormState({ status: "idle" });
      return;
    }

    setErrors({});
    setFormState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormState({ status: "success" });
      event.currentTarget.reset();
    } catch (error) {
      setFormState({
        status: "idle",
        error:
          "We hit a snag sending your message. Please try again or email sagar@callsphere.tech."
      });
    }
  };

  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}

        {/* Contact Form Container */}
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2.25rem] p-2 lg:p-10 border border-white/10 bg-gradient-to-br from-slate-950/85 via-indigo-950/70 to-slate-950/85 p-6 shadow-[0_40px_120px_-50px_rgba(37,99,235,0.35)]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-12">
              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                    error={errors.name}
                    required
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Where do you work?"
                    error={errors.company}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    error={errors.email}
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(845) 388-4261"
                    error={errors.phone}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="monthlyCalls" className="text-sm font-medium text-white">
                    Monthly Calls
                  </label>
                  <select
                    id="monthlyCalls"
                    name="monthlyCalls"
                    defaultValue=""
                    className={cn(
                      "mt-2 w-full rounded border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/40"
                    )}
                    aria-invalid={Boolean(errors.monthlyCalls)}
                    required
                  >
                    <option value="" disabled>
                      Select volume
                    </option>
                    {monthlyCallOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.monthlyCalls && (
                    <p role="alert" className="mt-2 text-sm text-red-300">
                      {errors.monthlyCalls}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Share your use case. What are you hoping to automate?"
                    className="mt-2 h-32 sm:h-36 w-full resize-none rounded border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/40"
                    aria-invalid={Boolean(errors.message)}
                    required
                  />
                  {errors.message && (
                    <p role="alert" className="mt-2 text-sm text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>
                
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    size="lg"
                    className="min-w-[180px] shadow-glow"
                    disabled={formState.status === "submitting"}
                  >
                    {formState.status === "submitting" ? "Sending..." : "Book a Demo"}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our privacy policy. We&apos;ll respond within one
                    business day.
                  </p>
                </div>

                {/* Status Messages */}
                <div aria-live="polite" role="status" className="text-sm">
                  {formState.status === "success" && (
                    <p className="rounded border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-emerald-200">
                      Thanks! We received your request. Expect a reply from sagar@callsphere.tech within
                      one business day.
                    </p>
                  )}
                  {formState.status === "idle" && formState.error && (
                    <p className="rounded border border-red-400/40 bg-red-500/10 px-4 py-3 text-red-200">
                      {formState.error}
                    </p>
                  )}
                </div>
              </form>

              {/* Contact Info Sidebar */}
              <aside className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-inner shadow-indigo-900/20 lg:p-8">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    Prefer to talk now?
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    CallSphere voice agents operate 24/7. Our team is available 9am - 7pm ET to
                    help you craft the right workflow.
                  </p>
                </div>
                
                <div className="space-y-5 pt-4 text-sm text-muted-foreground">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-indigo-200">
                      Address
                    </span>
                    <p className="mt-1.5">27 Orchard Pl, New York, NY</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-indigo-200">
                      Email
                    </span>
                    <a 
                      href="mailto:sagar@callsphere.tech" 
                      className="mt-1.5 block transition-colors hover:text-white"
                    >
                      sagar@callsphere.tech
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-indigo-200">
                      Phone
                    </span>
                    <a 
                      href="tel:18453884261" 
                      className="mt-1.5 block transition-colors hover:text-white"
                    >
                      (845) 388-4261
                    </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-8 rounded border border-indigo-400/20 bg-indigo-500/10 p-4">
                  <p className="text-xs text-indigo-200/90">
                    <span className="font-semibold">Quick response guaranteed:</span> We typically respond to demo requests within 2 hours during business hours.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
};

function Field({ label, name, error, required, type = "text", placeholder }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={cn(
          "mt-2 w-full rounded border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/40",
          error && "border-red-300 focus:border-red-400 focus:ring-red-400/50"
        )}
        aria-invalid={Boolean(error)}
        autoComplete="off"
      />
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}