import { ReactNode } from "react";

const COLUMNS = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function Grid({
  children,
  columns = 3,
  className = "",
}: {
  children: ReactNode;
  columns?: keyof typeof COLUMNS;
  className?: string;
}) {
  return (
    <div className={`grid gap-6 ${COLUMNS[columns]} ${className}`}>
      {children}
    </div>
  );
}
