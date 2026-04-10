import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export const Card = ({
  children,
  className,
  hoverable = false,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-outline-variant/20 bg-surface-container-low p-6",
        hoverable && "card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
