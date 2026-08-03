import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/media/HeroMedia";
import { copy } from "@/content/copy";

export function HeroExperience() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <HeroMedia />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <Container className="relative flex flex-col items-center gap-8 py-20 text-center sm:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG vetorial; next/image rasterizaria a logomarca */}
        <img
          src="media/brand/iabracadabra-wordmark.svg"
          alt={copy.hero.wordmark}
          className="h-auto w-40 sm:w-56"
        />
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
          {copy.hero.line}
        </h1>
      </Container>
      <div className="absolute bottom-10 flex flex-col items-center">
        <span className="h-10 w-px bg-muted opacity-40" />
      </div>
    </section>
  );
}
