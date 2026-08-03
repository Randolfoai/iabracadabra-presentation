import { ReactNode } from "react";

const SIZES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export function Icon({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center text-current ${SIZES[size]} ${className}`}
    >
      {children}
    </span>
  );
}
