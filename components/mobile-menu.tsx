"use client";

import { useState } from "react";
import type { NavLink } from "@/types";

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav>
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#shop" className="mobile-cta">Shop Now</a>
        </nav>
      </div>
    </div>
  );
}