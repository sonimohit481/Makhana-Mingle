"use client";

import type { NavLink } from "@/types";

interface NavProps {
  links: NavLink[];
}

export function Navigation({ links }: NavProps) {
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
        </div>
      </div>
    </nav>
  );
}