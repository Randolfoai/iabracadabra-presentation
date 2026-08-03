import { ButtonHTMLAttributes } from "react";

const VARIANTS = {
  primary: "bg-foreground text-background hover:bg-accent",
  secondary: "border border-border bg-transparent text-foreground hover:border-accent",
} as const;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof VARIANTS }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
