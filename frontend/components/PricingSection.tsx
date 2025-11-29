"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";

const MONTHLY_PLANS = [
  {
    name: "Starter",
    price: 149,
    description: "Up to 2k calls, 1 number, basic analytics",
    benefits: ["Voice agent setup", "Order + support flows", "Email summaries"]
  },
  {
    name: "Growth",
    price: 499,
    description: "10k calls, 3 numbers, advanced analytics, CRM sync",
    benefits: [
      "Advanced analytics",
      "CRM + helpdesk integration",
      "Live call monitoring",
      "Customer data vaulting"
    ],
    highlighted: true
  },
  {
    name: "Scale",
    price: 1499,
    description: "50k calls, 10 numbers, SSO, premium support",
    benefits: [
      "Dedicated CSM",
      "SSO & role-based access",
      "Priority routing & queueing",
      "Custom reporting"
    ]
  }
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = useMemo(() => {
    if (billingCycle === "monthly") {
      return MONTHLY_PLANS.map((plan) => ({
        ...plan,
        displayPrice: `$${plan.price}`,
        billingLabel: "/mo"
      }));
    }

    return MONTHLY_PLANS.map((plan) => {
      const annualPrice = Math.round(plan.price * 12 * 0.85);
      return {
        ...plan,
        displayPrice: `$${annualPrice}`,
        billingLabel: "/yr",
        description: `${plan.description} · Billed annually`
      };
    });
  }, [billingCycle]);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mt-24 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 id="pricing-title" className="text-3xl font-semibold text-white sm:text-4xl">
          Pricing that scales with you
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Switch to annual billing and save 15%. Every plan includes PCI-compliant payment handoff
          and voice experience analytics.
        </p>
        <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-black/40 p-1 text-sm">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === "annual" ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
            onClick={() => setBillingCycle("annual")}
          >
            Annual -15%
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1440px] gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.displayPrice}
            description={plan.description}
            benefits={plan.benefits}
            highlighted={plan.highlighted}
            billingLabel={plan.billingLabel}
            onSelect={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </section>
  );
}
