"use client";

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    eyebrow: "Product Engineering",
    title: "Full-stack software delivery",
    description:
      "From architecture to deployment, we build production-grade web and mobile applications that scale with your organization — not against it.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    eyebrow: "AI & Data",
    title: "Applied intelligence at scale",
    description:
      "We implement machine learning, LLM integrations, and data pipelines that move from proof-of-concept to production — with the governance to match.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    eyebrow: "Secure Systems",
    title: "Security-first architecture",
    description:
      "We design for threat models from day one — secure enclaves, zero-trust networks, compliance frameworks, and hardened infrastructure for sensitive workloads.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    eyebrow: "Cloud & DevOps",
    title: "Infrastructure that runs itself",
    description:
      "Automated CI/CD, infrastructure-as-code, Kubernetes, and observability pipelines so your team ships with confidence and your platform recovers without heroics.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    eyebrow: "Strategy & Advisory",
    title: "Technology leadership on demand",
    description:
      "CTO-level guidance, technology audits, vendor selection, and roadmap planning — for organizations that need senior technical judgment without a full-time hire.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9" height="9" rx="2" />
        <rect x="13" y="2" width="9" height="9" rx="2" />
        <rect x="2" y="13" width="9" height="9" rx="2" />
        <rect x="13" y="13" width="9" height="9" rx="2" />
      </svg>
    ),
    eyebrow: "Integration",
    title: "Systems that talk to each other",
    description:
      "API design, legacy modernization, and enterprise integration so your platforms share data reliably — even across complex organizational boundaries.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--bg-subtle)",
        padding: "96px 24px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 600, marginBottom: 64 }}>
          <p className="type-eyebrow" style={{ marginBottom: 16 }}>
            What we do
          </p>
          <h2
            className="type-display"
            style={{ color: "var(--content-default)", marginBottom: 16 }}
          >
            End-to-end capability
          </h2>
          <p
            className="type-body-lg"
            style={{ color: "var(--content-secondary)" }}
          >
            From strategy through to live systems — we cover the full delivery
            stack so you don't have to stitch together multiple vendors.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.eyebrow}
              style={{
                backgroundColor: "var(--surface-default)",
                border: "1px solid var(--border-default)",
                borderRadius: 12,
                padding: 32,
                transition: "border-color 0.15s, box-shadow 0.15s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--interactive-primary)";
                el.style.boxShadow = "0 4px 24px rgba(26,110,69,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border-default)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: "var(--bg-subtle)",
                  color: "var(--content-accent)",
                  marginBottom: 20,
                }}
              >
                {svc.icon}
              </div>

              {/* Eyebrow */}
              <p className="type-eyebrow" style={{ marginBottom: 8 }}>
                {svc.eyebrow}
              </p>

              {/* Title */}
              <h3
                className="type-h3"
                style={{
                  color: "var(--content-default)",
                  marginBottom: 12,
                }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--content-secondary)",
                }}
              >
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
