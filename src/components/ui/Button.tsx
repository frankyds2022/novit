import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d0b8] focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          // Variants
          variant === "primary" && "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700",
          variant === "secondary" && "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border border-zinc-300",
          variant === "teal" && "bg-[#00d0b8] text-white hover:bg-[#00bda6] shadow-[0_4px_20px_rgba(0,208,184,0.3)] hover:shadow-[0_4px_25px_rgba(0,208,184,0.5)]",
          variant === "outline" && "border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900",
          variant === "ghost" && "bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-2.5 text-base",
          size === "lg" && "px-8 py-3.5 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
