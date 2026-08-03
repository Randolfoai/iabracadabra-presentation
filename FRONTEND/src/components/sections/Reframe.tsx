import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { copy } from "@/content/copy";

export function Reframe() {
  return (
    <section className="bg-background py-32">
      <Container className="max-w-3xl text-center">
        <Eyebrow>{copy.reframe.eyebrow}</Eyebrow>
        <p className="text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
          {copy.reframe.heading}
        </p>
      </Container>
    </section>
  );
}
