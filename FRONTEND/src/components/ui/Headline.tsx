import { ElementType, ReactNode } from "react";

const SIZES = {
  display: "text-4xl sm:text-6xl",
  headline: "text-3xl sm:text-4xl",
  title: "text-2xl sm:text-3xl",
} as const;

export function Headline({
  children,
  as: Tag = "h2",
  size = "headline",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <Tag
      className={`font-semibold leading-snug tracking-tight text-foreground ${SIZES[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
