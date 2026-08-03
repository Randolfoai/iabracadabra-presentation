export function MediaPlaceholder({
  label,
  aspect = "aspect-video",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/[0.04] to-white/[0.01] ${aspect} ${className}`}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
    </div>
  );
}
