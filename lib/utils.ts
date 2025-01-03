import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitName(name: string) {
  return name
    .split(" ")
    .map((word: string) => word[0])
    .join("");
}
