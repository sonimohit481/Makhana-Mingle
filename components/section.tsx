"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "light" | "mid" | "surface";
}

export function Section({
  children,
  id,
  className = "",
  background = "default",
}: SectionProps) {
  const bgClass = {
    default: "",
    light: "categories",
    mid: "recipe-videos health-video story-video",
    surface: "benefits story",
  }[background];

  return (
    <section id={id} className={`section ${bgClass} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${center ? "" : "text-left"}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}