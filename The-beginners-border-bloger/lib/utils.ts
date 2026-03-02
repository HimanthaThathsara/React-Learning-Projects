import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Combines multiple class names intelligently, handling conditional classes
 * and resolving Tailwind CSS conflicts by keeping the last conflicting class.
 *
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns A clean string of merged CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  // Step 1: clsx() handles conditional logic and normalizes different input types
  // Step 2: twMerge() resolves Tailwind class conflicts (e.g., keeps 'p-4' over 'p-2')
  return twMerge(clsx(inputs));
}
