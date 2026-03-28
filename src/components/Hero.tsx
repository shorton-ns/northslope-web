"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "var(--bg-default)",
        padding: "96px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Text block */}
        <div style={{ maxWidth: 760 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--interactive-primary)",
              }}
            />
            <span className="type-eyebrow">
              Technology · Strategy · Delivery
            </span>
          </div>

          {/* Headline */}
          <h1
            className="type-display-xl"
            style={{ color: "var(--content-default)", marginBottom: 24 }}
          >
            Software built for
            <br />
            <span style={{ color: "var(--content-accent)" }}>
              the hard problems
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="type-body-lg"
            style={{
              color: "var(--content-secondary)",
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            Northslope partners with organizations to design, build, and scale
            technology that works where it counts — complex environments,
            regulated industries, and high-stakes operations.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 8,
                backgroundColor: "var(--interactive-primary)",
                color: "var(--interactive-primary-fg)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = "var(--interactive-primary-hover)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = "var(--interactive-primary)";
              }}
            >
              Start a project
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l7-7M5 5h7v7" />
              </svg>
            </a>
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 8,
                border: "1px solid var(--border-default)",
                backgroundColor: "transparent",
                color: "var(--content-default)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = "var(--bg-subtle)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              See our work
            </a>
          </div>

          {/* Trust bar */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 40,
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <p
              className="type-eyebrow"
              style={{ marginBottom: 24, color: "var(--content-tertiary)" }}
            >
              Trusted by organizations in
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 32px",
                alignItems: "center",
              }}
            >
              {[
                "Defence & Security",
                "Critical Infrastructure",
                "Federal Government",
                "Energy",
                "Financial Services",
              ].map((sector) => (
                <span
                  key={sector}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--content-secondary)",
                    padding: "5px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--border-default)",
                    backgroundColor: "var(--surface-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
