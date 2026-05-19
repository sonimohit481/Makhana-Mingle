"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}