"use client";

import { useState } from "react";
import type { NavLink } from "@/types";

interface NavProps {
  links: NavLink[];
}

export function Navigation({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="topnav">
      <div className="container nav-container">
        <a href="#top" className="brand">
          Makhana Mingle
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="cart-btn" aria-label="Cart">
            🛒
          </button>
          <a href="#shop" className="login-btn">
            Login
          </a>
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
        </div>
      </div>
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
          <a href="#shop" className="mobile-cta" onClick={() => setIsOpen(false)}>Shop Now</a>
        </nav>
      </div>
    </nav>
  );
}