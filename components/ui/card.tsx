import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-outline-variant/20 bg-surface-container-low p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
