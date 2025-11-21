"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  LifeBuoy,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Workflow
} from "lucide-react";

import { FeatureCard } from "@/components/FeatureCard";

const featureData = [
  {
    title: "Order-to-Checkout Automation",
    description: "Convert intent to purchase in one call.",
    bullets: ["Smart product search", "Real-time pricing", "PCI-safe handoff"],
    icon: ShoppingCart
  },
  {
    title: "Support That Solves",
    description: "Track orders, refunds, and returns without hold music.",
    bullets: ["Ticket creation", "RMA workflows", "Proactive status updates"],
    icon: LifeBuoy
  },
  {
    title: "Scheduling & Reminders",
    description: "Book, reschedule, and confirm in seconds.",
    bullets: ["SMS confirmations", "Calendar sync"],
    icon: CalendarCheck2
  },
  {
    title: "Omnichannel",
    description: "Voice first, with seamless fallback to SMS or WhatsApp links.",
    bullets: [],
    icon: Share2
  },
  {
    title: "Secure & Compliant",
    description: "PII vaulting, audit logs, and role-based access out of the box.",
    bullets: [],
    icon: ShieldCheck
  },
  {
    title: "Workflow Insights",
    description: "Understand drop-off points and agent improvements instantly.",
    bullets: ["Heatmaps", "Topic modeling", "CSAT insights"],
    icon: Workflow
  }
];

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
          Why CallSphere
        </span>
        <h2 id="features-title" className="text-3xl font-semibold text-white sm:text-4xl">
          Voice agents that handle the entire journey
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          Automate product discovery, checkout, support, and scheduling - keeping your
          operations humming around the clock.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
        {featureData.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              icon={feature.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
