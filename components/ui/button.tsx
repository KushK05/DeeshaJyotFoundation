import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-on-primary hover:bg-primary-container shadow-md shadow-primary/20",
    ghost:
      "border-2 border-primary text-primary hover:bg-primary/5",
    secondary:
      "bg-secondary text-on-secondary hover:brightness-95",
    outline: "border border-outline-variant text-on-surface hover:bg-surface-container-low",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-label font-bold transition-all duration-200 ease-smooth disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
