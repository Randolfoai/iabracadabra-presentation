"use client";

import { useEffect, useRef, useState } from "react";

export function HeroMedia() {
  const [posterVisible, setPosterVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const posterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (posterRef.current?.complete) {
      setPosterVisible(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/media/hero/hero-opening-frame-mobile.webp"
        />
        <img
          ref={posterRef}
          src="/media/hero/hero-opening-frame.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            posterVisible ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setPosterVisible(true)}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </picture>
      <video
        className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setVideoVisible(true)}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      >
        <source
          media="(max-width: 640px)"
          src="/media/hero/hero-loop-mobile.webm"
          type="video/webm"
        />
        <source
          media="(max-width: 640px)"
          src="/media/hero/hero-loop-mobile.mp4"
          type="video/mp4"
        />
        <source src="/media/hero/hero-loop-desktop.webm" type="video/webm" />
        <source src="/media/hero/hero-loop-desktop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
