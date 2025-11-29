"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/Button";
import { LogoCloud } from "@/components/LogoCloud";

type ConversationEntry = {
  id: string;
  role: "agent" | "caller";
  stage: string;
  message: string;
  annotation?: string;
};

const conversationScript: ConversationEntry[] = [
  {
    id: "agent-greeting",
    role: "agent",
    stage: "Greeting",
    annotation: "Welcome back",
    message:
      "Hi Jessica, welcome back! Ready to restock your pantry for the weekend?",
  },
  {
    id: "caller-request",
    role: "caller",
    stage: "Order items",
    message: "Hey! Let's grab sourdough and oat milk again, same as last time.",
  },
  {
    id: "agent-cart",
    role: "agent",
    stage: "Cart update",
    annotation: "Cart refreshed",
    message:
      "I've added two sourdough loaves and four Barista oat milks. Want me to include the sparkling water bundle too?",
  },
  {
    id: "caller-upsell",
    role: "caller",
    stage: "Upsell",
    message: "Yes please—add the citrus sparkling water pack.",
  },
  {
    id: "agent-payment",
    role: "agent",
    stage: "Payment",
    annotation: "Secure checkout",
    message:
      "Sparkling water is in. Your Visa ending 4242 is set as default for payment—should I use it and prep checkout?",
  },
  {
    id: "caller-confirm",
    role: "caller",
    stage: "Confirm",
    message: "Do it! Checkout with that card and schedule delivery before 6pm.",
  },
  {
    id: "agent-wrap",
    role: "agent",
    stage: "Confirmation",
    annotation: "Order sent",
    message:
      "Done. Delivery is locked for 5:30pm and the receipt is in your inbox. Need anything else?",
  },
  {
    id: "caller-thanks",
    role: "caller",
    stage: "Wrap-up",
    message: "That's perfect, thanks for the help!",
  },
];

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % conversationScript.length);
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  const activeMessage = conversationScript[step];
  const progress =
    conversationScript.length > 1
      ? (step / (conversationScript.length - 1)) * 100
      : 100;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-24 sm:pt-32 lg:pt-40"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-4 sm:px-6 lg:grid lg:grid-cols-[1.05fr,1fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
            Voice commerce, solved
          </span>
          <h1
            id="hero-title"
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
          >
            Turn phone calls into completed orders.
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            CallSphere's AI voice agents handle product search, cart, checkout,
            support, and scheduling end to end over the phone.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="shadow-glow" asChild>
              <a href="#contact">
                <PhoneCall aria-hidden className="h-5 w-5" />
                Book a Demo
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#pricing">
                See Pricing
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className="h-8 w-8 rounded-full border border-white/10 bg-indigo-500/60"
                  aria-hidden
                />
              ))}
            </div>
            <span>
              Voice agents that close the loop: orders, support, and scheduling.
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-10 rounded-[4rem] bg-gradient-to-br from-indigo-800/25 via-slate-900/35 to-transparent blur-3xl" />
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-b from-slate-900/85 via-indigo-950/60 to-slate-950/80 p-8 pt-14 shadow-[0_40px_120px_-45px_rgba(79,70,229,0.85)] backdrop-blur-xl">
            <span className="pointer-events-none absolute -right-6 top-1 h-16 w-16 rounded-full bg-gradient-to-br from-emerald-400/35 via-sky-400/20 to-transparent blur-xl" />
            <span className="pointer-events-none absolute right-14 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/25 shadow-[0_0_20px_rgba(34,197,94,0.55)]">
              <span className="absolute inset-0 rounded-full border border-emerald-300/50 opacity-80 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            </span>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200/80">
                  Live call
                </span>
                <p className="text-lg font-semibold text-white">
                  Jessica · Repeat Customer
                </p>
                <p className="text-xs text-indigo-100/70">
                  Order &amp; Checkout Flow
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Active
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-indigo-100/70">
                  03:42
                </span>
              </div>
            </div>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeMessage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`mt-6 rounded-2xl border p-5 ${
                  activeMessage.role === "agent"
                    ? "border-indigo-400/25 bg-white/10 shadow-inner shadow-indigo-900/30"
                    : "border-white/10 bg-slate-950/70"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-semibold">
                      {activeMessage.role === "agent"
                        ? "Agent Orbit"
                        : "Caller Jessica"}
                    </span>
                    {activeMessage.annotation && (
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[10px] uppercase tracking-[0.18em] text-indigo-100/80">
                        {activeMessage.annotation}
                      </span>
                    )}
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-indigo-100/70">
                    {activeMessage.stage}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/90">
                  {activeMessage.message}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-900/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-300 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Assistants on the call
                </p>
                <span className="text-xs text-indigo-200/80">
                  Cart · Support · Scheduling
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/50 bg-gradient-to-br from-indigo-500/70 to-cyan-500/70 text-xs font-semibold text-white"
                    >
                      A{index + 1}
                    </div>
                  ))}
                </div>
                <div className="flex-1 text-xs text-indigo-100/70">
                  Orchestrating catalog search, payment handoff, and delivery
                  updates in parallel.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <LogoCloud />
      </motion.div>
    </section>
  );
}