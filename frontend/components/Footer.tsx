import Link from "next/link";

import { currentYear } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            CallSphere
          </span>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Voice agents that close the loop: orders, support, and scheduling,
            done over a call.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <span className="block">27 Orchard Pl, New York, NY</span>
            <a href="mailto:sagar@callsphere.tech" className="hover:text-white">
              sagar@callsphere.tech
            </a>
            <a href="tel:18453884261" className="hover:text-white">
              (845) 388-4261
            </a>
          </div>
        </div>
        <div className="sm:justify-self-end">
          <nav aria-label="Footer navigation">
            <ul className="space-y-3 text-sm text-muted-foreground sm:text-right">
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear()} CallSphere LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
