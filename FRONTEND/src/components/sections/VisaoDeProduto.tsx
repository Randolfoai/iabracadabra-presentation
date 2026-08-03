import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { copy } from "@/content/copy";

export function VisaoDeProduto() {
  return (
    <section className="bg-background py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <div className="max-w-2xl">
          <Eyebrow>{copy.visaoDeProduto.eyebrow}</Eyebrow>
          <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {copy.visaoDeProduto.heading}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {copy.visaoDeProduto.body}
          </p>
        </div>
        <MediaPlaceholder
          label="Visão de Produto — Agência"
          aspect="aspect-[16/9]"
          className="max-w-4xl"
          src="/media/sections/product-vision-agency.webp"
          alt=""
        />
      </Container>
    </section>
  );
}
