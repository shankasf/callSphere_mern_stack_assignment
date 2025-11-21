# CallSphere LLC Website

Production-ready marketing site for CallSphere LLC, built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

- `pnpm dev` – run the dev server
- `pnpm build` – production build + regenerate sitemap
- `pnpm start` – serve the production build
- `pnpm lint` – lint with Next.js defaults

## Tech Stack

- Next.js App Router with TypeScript
- Tailwind CSS with CSS variables + shadcn-inspired components
- Framer Motion micro-interactions
- next-themes dark mode with persistence
- next-sitemap configuration

## Features

- Hero with animated UI mockup and glowing light motif
- Sticky navigation with active section highlighting + smooth scroll
- Value props, how it works, industries, integrations, stats, pricing, testimonials, FAQ
- Pricing toggle (monthly vs annual) and strong CTA band
- Accessible contact form with validation, honeypot, and mock API route (`app/api/contact/route.ts`)
- SEO metadata, OpenGraph image, robots.txt, and sitemap.xml
- Placeholder Google Analytics script for easy integration

## Notes

- Remote images are whitelisted in `next.config.mjs`.
- Update `SITE_URL` env var to override the sitemap base URL.
- Replace the placeholder analytics script in `app/layout.tsx` when ready.
- To deliver contact form submissions via email, provide `RESEND_API_KEY` and `RESEND_FROM_EMAIL`
  (or override `CONTACT_RECIPIENT`) in your environment. Without those values the API logs the
  submission server-side and still returns success.
