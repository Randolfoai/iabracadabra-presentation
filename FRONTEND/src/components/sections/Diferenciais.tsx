import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { copy } from "@/content/copy";

export function Diferenciais() {
  return (
    <section className="bg-background py-32">
      <Container className="flex flex-col items-center gap-16 text-center">
        <div className="max-w-2xl">
          <Eyebrow>{copy.diferenciais.eyebrow}</Eyebrow>
          <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {copy.diferenciais.heading}
          </p>
        </div>
        <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
          {copy.diferenciais.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border p-8 text-left"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
