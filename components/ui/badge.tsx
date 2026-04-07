import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-bold text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
