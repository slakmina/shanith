"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  size = "md",
  icon,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-300 group cursor-pointer";

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-accent text-background hover:bg-accent-hover hover:glow-accent",
    secondary:
      "border border-border text-text hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-text hover:bg-surface-light",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative z-10">{children}</span>
        {variant === "ghost" && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === "ghost" && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
      )}
    </motion.button>
  );
}