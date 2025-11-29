"use client";

import Image from "next/image";
import { Menu, PhoneCall, X } from "lucide-react";
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
      // Prevent body scroll when menu is open on mobile
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (hash: string) => {
    scrollToHash(hash);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-white/10">
      <div className="mx-auto flex h-14 sm:h-16 max-w-[1440px] items-center justify-between px-3 sm:px-4 lg:px-8">
        {/* Logo Section - Responsive */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold tracking-tight text-white">
            <span className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
              <Image
                src="/callsphere-logo.png"
                alt="CallSphere LLC logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="hidden xs:inline">CallSphere</span>
          </div>
          
          {/* Tags - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3 border-l border-white/10 pl-2 lg:pl-3 text-xs font-medium text-indigo-100/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 lg:px-2.5 py-1 whitespace-nowrap">
              AI Voice Agents
            </span>
            <span className="hidden lg:inline rounded-full border border-white/10 bg-white/5 px-2.5 py-1 whitespace-nowrap">
              24/7 Coverage
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={cn(
                "rounded-full px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-medium transition-colors hover:bg-white/10 whitespace-nowrap",
                activeHash === item.href ? "text-white" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="default"
            onClick={() => handleNavigate("#contact")}
            className="shadow-glow text-xs lg:text-sm px-3 lg:px-4"
            size="sm"
          >
            <PhoneCall aria-hidden className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            <span className="hidden lg:inline">Book a Demo</span>
            <span className="lg:hidden">Demo</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-9 w-9"
          >
            {isOpen ? (
              <X aria-hidden className="h-5 w-5" />
            ) : (
              <Menu aria-hidden className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={drawerRef}
        id="mobile-nav"
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black/90 backdrop-blur-md border-t border-white/5",
          isOpen ? "max-h-[calc(100vh-3.5rem)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-3 pb-4 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium text-left hover:bg-white/10 transition-colors",
                activeHash === item.href ? "text-white bg-white/5" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile CTA */}
          <Button 
            onClick={() => handleNavigate("#contact")} 
            className="w-full mt-2 shadow-glow"
            size="lg"
          >
            <PhoneCall aria-hidden className="h-4 w-4" />
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}