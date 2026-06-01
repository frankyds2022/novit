/**
 * Utility functions for the application.
 */

/**
 * A simple utility to conditionally join classNames together.
 * You can install `clsx` and `tailwind-merge` to make this a full twMerge utility:
 * `npm install clsx tailwind-merge`
 */
export function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
