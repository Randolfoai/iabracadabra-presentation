import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { copy } from "@/content/copy";

export function Cta() {
  return (
    <section className="bg-background py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {copy.cta.heading}
        </h2>
        <Button>{copy.cta.button}</Button>
      </Container>
    </section>
  );
}
