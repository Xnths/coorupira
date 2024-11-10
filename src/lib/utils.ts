import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugToLabel = (slug: string) => {
  const noSnakeNotation = slug.replaceAll("_", " ");

  return noSnakeNotation[0].toUpperCase() + noSnakeNotation.slice(1);
}