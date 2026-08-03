import { ReactNode } from "react";

const TONES = {
  default: "bg-background",
  inverted: "bg-black",
} as const;

export function Section({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <section className={`py-20 sm:py-32 ${TONES[tone]} ${className}`}>
      {children}
    </section>
  );
}
