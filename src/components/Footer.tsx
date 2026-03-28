"use client";

const footerLinks = {
  Company: ["About", "Work", "Insights", "Careers"],
  Services: [
    "Product Engineering",
    "AI & Data",
    "Secure Systems",
    "Cloud & DevOps",
  ],
  Connect: ["Contact", "LinkedIn", "GitHub", "Press"],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-inverse)",
        padding: "64px 24px 40px",
        color: "var(--content-inverse)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: "40px 64px",
            marginBottom: 64,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
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
                  letterSpacing: "-0.01em",
                }}
              >
                Northslope
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(250,250,249,0.5)",
                maxWidth: 280,
              }}
            >
              Technology consulting and engineering for organizations that can't afford to get it wrong.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250,250,249,0.35)",
                  marginBottom: 16,
                }}
              >
                {heading}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(250,250,249,0.6)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "rgba(250,250,249,0.95)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.color = "rgba(250,250,249,0.6)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(250,250,249,0.35)" }}>
            © {new Date().getFullYear()} Northslope Technologies Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy policy", "Terms of use"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(250,250,249,0.35)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "rgba(250,250,249,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "rgba(250,250,249,0.35)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
