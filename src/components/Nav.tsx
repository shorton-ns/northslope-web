"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services",   href: "#services" },
  { label: "Work",       href: "#work" },
  { label: "About",      href: "#about" },
  { label: "Insights",   href: "#insights" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--surface-default)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logomark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#1A6E45" />
            <path
              d="M7 20L14 8L21 20"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 16H17.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Aeonik', Inter, system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 18,
              color: "var(--content-default)",
              letterSpacing: "-0.01em",
            }}
          >
            Northslope
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--content-secondary)",
                  textDecoration: "none",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "var(--content-default)";
                  (e.target as HTMLAnchorElement).style.background = "var(--bg-subtle)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "var(--content-secondary)";
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 8,
              backgroundColor: "var(--interactive-primary)",
              color: "var(--interactive-primary-fg)",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = "var(--interactive-primary-hover)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = "var(--interactive-primary)";
            }}
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--content-default)",
            }}
            className="show-mobile"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="12" x2="19" y2="12" />
                <line x1="3" y1="18" x2="19" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--surface-default)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--content-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  );
}
