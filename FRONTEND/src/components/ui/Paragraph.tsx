import { ReactNode } from "react";

const TONES = {
  default: "text-foreground",
  muted: "text-muted",
} as const;

export function Paragraph({
  children,
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <p className={`text-base leading-relaxed ${TONES[tone]} ${className}`}>
      {children}
    </p>
  );
}
