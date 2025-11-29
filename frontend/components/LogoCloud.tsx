import Image from "next/image";

const LOGOS = [
  {
    name: "Northwind",
    src: "https://placehold.co/180x56/0f172a/60a5fa/png?text=Northwind"
  },
  {
    name: "Acme Retail",
    src: "https://placehold.co/180x56/111827/34d399/png?text=Acme+Retail"
  },
  {
    name: "Loop Stores",
    src: "https://placehold.co/180x56/0f172a/f9a8d4/png?text=Loop+Stores"
  },
  {
    name: "BrightGrocer",
    src: "https://placehold.co/180x56/111827/fcd34d/png?text=BrightGrocer"
  }
];

export function LogoCloud() {
  return (
    <div aria-label="Customer logos" className="mx-auto mt-16 sm:mt-20 max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70 sm:text-sm">
          Trusted by leading brands
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 md:grid-cols-4">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="group flex h-16 sm:h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/30  hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={180}
              height={56}
              className="h-10 sm:h-12 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}