import { AnchorHTMLAttributes } from "react";

export function Link({
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`}
      {...props}
    />
  );
}
