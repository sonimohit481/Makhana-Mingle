"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverClass = hover ? "hover-card" : "";
  return <div className={`card ${hoverClass} ${className}`}>{children}</div>;
}

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ children, columns = 3 }: CardGridProps) {
  const colClass = { 2: "two-col", 3: "three-col", 4: "four-col" }[columns];
  return <div className={`card-grid ${colClass}`}>{children}</div>;
}