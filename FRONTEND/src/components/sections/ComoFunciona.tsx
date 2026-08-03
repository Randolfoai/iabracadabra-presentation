import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { copy } from "@/content/copy";

export function ComoFunciona() {
  return (
    <section className="bg-background py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <div className="max-w-2xl">
          <Eyebrow>{copy.comoFunciona.eyebrow}</Eyebrow>
          <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {copy.comoFunciona.heading}
          </p>
        </div>
        <MediaPlaceholder
          label="Diagrama — Fluxo de Produção"
          aspect="aspect-[16/9]"
          className="max-w-4xl"
        />
      </Container>
    </section>
  );
}
