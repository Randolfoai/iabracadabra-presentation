import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { copy } from "@/content/copy";

export function VisaoDeProduto() {
  return (
    <section className="bg-background py-32">
      <Container className="max-w-2xl text-center">
        <Eyebrow>{copy.visaoDeProduto.eyebrow}</Eyebrow>
        <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {copy.visaoDeProduto.heading}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          {copy.visaoDeProduto.body}
        </p>
      </Container>
    </section>
  );
}
