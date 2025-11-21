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
    <div aria-label="Customer logos" className="mx-auto mt-10 max-w-5xl">
      <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="group flex h-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5/50 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={180}
              height={56}
              className="h-12 w-auto object-contain opacity-90 transition group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
