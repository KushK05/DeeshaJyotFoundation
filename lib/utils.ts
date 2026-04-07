import { type ClassValue, clsx } from "clsx";

export const cn = (...inputs: ClassValue[]): string => clsx(inputs);

export const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
