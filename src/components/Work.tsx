"use client";

const caseStudies = [
  {
    sector: "Defence & Security",
    title: "Mission-critical C2 platform redesign",
    description:
      "Rebuilt a command-and-control interface for a national defence agency — reducing operator decision time by 40% through interface modernization and real-time data integration.",
    tags: ["React", "Secure Enclaves", "Real-time"],
    result: "40% faster decision cycles",
  },
  {
    sector: "Federal Government",
    title: "Digital service delivery at scale",
    description:
      "Designed and launched a citizen-facing digital service platform handling millions of transactions per year, replacing a legacy system with 15+ years of technical debt.",
    tags: ["Next.js", "PostgreSQL", "AWS GovCloud"],
    result: "99.98% uptime, 3× throughput",
  },
  {
    sector: "Energy",
    title: "Predictive maintenance for grid infrastructure",
    description:
      "Built an ML pipeline and operator dashboard for a major utility company to predict equipment failures — reducing unplanned outages by 60% in the first year.",
    tags: ["Python", "ML Pipeline", "IoT Integration"],
    result: "60% reduction in unplanned outages",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--bg-default)",
        padding: "96px 24px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p className="type-eyebrow" style={{ marginBottom: 16 }}>
              Selected work
            </p>
            <h2
              className="type-display"
              style={{ color: "var(--content-default)" }}
            >
              Where we've made a difference
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--content-accent)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            View all case studies
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12l6-6M9 6l-6-0" />
              <path d="M3 6h6v6" />
            </svg>
          </a>
        </div>

        {/* Case study cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "start",
                backgroundColor: "var(--surface-default)",
                border: "1px solid var(--border-default)",
                borderRadius: 12,
                padding: "36px 40px",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-default)";
              }}
            >
              <div>
                <p className="type-eyebrow" style={{ marginBottom: 12 }}>
                  {cs.sector}
                </p>
                <h3
                  className="type-h2"
                  style={{ color: "var(--content-default)", marginBottom: 12 }}
                >
                  {cs.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--content-secondary)",
                    marginBottom: 20,
                    maxWidth: 640,
                  }}
                >
                  {cs.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: 6,
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-default)",
                        color: "var(--content-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result callout */}
              <div
                style={{
                  flexShrink: 0,
                  padding: "20px 24px",
                  borderRadius: 10,
                  backgroundColor: "var(--verdant-50, #F0FBF5)",
                  border: "1px solid #A8E8C5",
                  textAlign: "center",
                  minWidth: 180,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--content-accent)",
                    marginBottom: 8,
                  }}
                >
                  Outcome
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--interactive-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
