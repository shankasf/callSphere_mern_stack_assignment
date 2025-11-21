"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      className="space-y-4"
      defaultValue={[items[0]?.question ?? ""]}
    >
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}

const AccordionItem = AccordionPrimitive.Item;

function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="w-full">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex w-full items-center justify-between rounded-3xl border border-white/10 bg-secondary/60 px-6 py-4 text-left text-base font-medium text-white transition hover:bg-secondary/80 data-[state=open]:border-indigo-400/60",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          aria-hidden
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
        "px-6 pb-5 pt-2"
      )}
      {...props}
    >
      <div className={cn("rounded-2xl bg-black/30 p-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
