"use client";

import { useState } from "react";

export function MediaPlaceholder({
  label,
  aspect = "aspect-video",
  className = "",
  src,
  alt = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showLabel = !src || failed || !loaded;

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/[0.04] to-white/[0.01] ${aspect} ${className}`}
    >
      {showLabel && (
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      )}
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element -- asset ainda pode não existir; onError precisa ocultar sem depender do otimizador
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
