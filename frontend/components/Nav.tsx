"use client";

import Image from "next/image";
import { Menu, PhoneCall } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn, scrollToHash } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export function Nav() {
  const [activeHash, setActiveHash] = React.useState<string>("#hero");
  const [isOpen, setIsOpen] = React.useState(false);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.2
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  React.useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", onOutsideClick);
    }

    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [isOpen]);

  const handleNavigate = (hash: string) => {
    scrollToHash(hash);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
              <Image
                src="/callsphere-logo.png"
                alt="CallSphere LLC logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span>CallSphere</span>
          </div>
          <div className="hidden items-center gap-3 border-l border-white/10 pl-3 text-xs font-medium text-indigo-100/70 sm:flex">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              AI Voice Agents
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              24/7 Coverage
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/10",
                activeHash === item.href ? "text-white" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            variant="default"
            onClick={() => handleNavigate("#contact")}
            className="shadow-glow"
          >
            <PhoneCall aria-hidden className="h-4 w-4" />
            Book a Demo
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu aria-hidden className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        ref={drawerRef}
        id="mobile-nav"
        className={cn(
          "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden bg-black/80 backdrop-blur-sm border-t border-white/5",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-left hover:bg-white/10",
                activeHash === item.href ? "text-white" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => handleNavigate("#contact")} className="w-full">
            <PhoneCall aria-hidden className="h-4 w-4" />
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
