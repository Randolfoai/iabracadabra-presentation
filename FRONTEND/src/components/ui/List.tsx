import { ReactNode } from "react";

export function List({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={`flex flex-col gap-3 ${className}`}>{children}</ul>;
}

export function ListItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={`flex items-start gap-3 text-base leading-relaxed text-muted ${className}`}>
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
