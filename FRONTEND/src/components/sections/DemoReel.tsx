import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { copy } from "@/content/copy";

export function DemoReel() {
  return (
    <section className="relative bg-black py-40">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Eyebrow>{copy.demoReel.eyebrow}</Eyebrow>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {copy.demoReel.institutional}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {copy.demoReel.heading}
        </h2>
        <MediaPlaceholder
          label="Filme — The Confirmation"
          aspect="aspect-video"
          className="max-w-5xl"
        />
      </Container>
    </section>
  );
}
