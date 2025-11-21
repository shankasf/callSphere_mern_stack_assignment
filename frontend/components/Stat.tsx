type StatProps = {
  label: string;
  value: string;
  description?: string;
};

export function Stat({ label, value, description }: StatProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-secondary/60 p-6 text-center">
      <span className="text-3xl font-semibold text-white">{value}</span>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
      {description && (
        <p className="mt-3 text-xs text-muted-foreground/90">{description}</p>
      )}
    </div>
  );
}
