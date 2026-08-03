import { Container } from "@/components/ui/Container";
import { copy } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium tracking-tight text-foreground">
          {copy.footer.signature}
        </p>
      </Container>
    </footer>
  );
}
