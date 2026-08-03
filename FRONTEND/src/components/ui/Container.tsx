import { ReactNode } from "react";

const WIDTHS = {
  content: "max-w-6xl",
  reading: "max-w-2xl",
} as const;

export function Container({
  children,
  width = "content",
  className = "",
}: {
  children: ReactNode;
  width?: keyof typeof WIDTHS;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-10 ${WIDTHS[width]} ${className}`}>
      {children}
    </div>
  );
}
