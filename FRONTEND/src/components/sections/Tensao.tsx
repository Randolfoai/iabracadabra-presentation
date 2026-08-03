import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { copy } from "@/content/copy";

export function Tensao() {
  return (
    <section className="bg-background py-32">
      <Container className="max-w-3xl text-center">
        <Eyebrow>{copy.tensao.eyebrow}</Eyebrow>
        <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {copy.tensao.heading}
        </p>
      </Container>
    </section>
  );
}
