import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: "primary" | "secondary" | "neutral";
}

export const Badge = ({
  children,
  className,
  tone = "primary",
  ...props
}: BadgeProps) => {
  const tones = {
    primary: "border-primary/20 text-primary",
    secondary: "border-secondary/20 text-secondary",
    neutral: "border-outline-variant text-on-surface-variant",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-bold",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
