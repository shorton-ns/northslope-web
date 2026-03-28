"use client";

const stats = [
  { value: "12+", label: "Years delivering complex technology" },
  { value: "94%", label: "Client retention rate" },
  { value: "200+", label: "Projects completed" },
  { value: "40+", label: "Engineers, designers & strategists" },
];

const testimonials = [
  {
    quote:
      "Northslope didn't just build what we asked for — they pushed back where it mattered and delivered something far better than we imagined. Their understanding of our operational constraints was exceptional.",
    name: "Director of Technology",
    org: "Federal Agency, Canada",
  },
  {
    quote:
      "We'd been burned by vendors who overpromised. Northslope came in, told us what was actually possible, and then delivered ahead of schedule. That kind of honesty is rare.",
    name: "VP Engineering",
    org: "Critical Infrastructure Operator",
  },
  {
    quote:
      "Their team embedded with ours seamlessly. By month two it felt like they'd always been part of the organization — and the code quality reflected that level of care.",
    name: "Chief Digital Officer",
    org: "Energy Sector Organization",
  },
];

export default function SocialProof() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg-inverse)",
        padding: "96px 24px",
        color: "var(--content-inverse)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 80,
            paddingBottom: 80,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="type-display"
                style={{
                  color: "#72D4A0", /* verdant/300 on dark bg */
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(250,250,249,0.55)",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div style={{ maxWidth: 520, marginBottom: 56 }}>
          <p
            className="type-eyebrow"
            style={{ marginBottom: 16, color: "#72D4A0" }}
          >
            What clients say
          </p>
          <h2
            className="type-display"
            style={{ color: "var(--content-inverse)" }}
          >
            Built on trust, measured in results
          </h2>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "32px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontSize: 48,
                  lineHeight: 1,
                  color: "#1A6E45",
                  marginBottom: 16,
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "rgba(250,250,249,0.75)",
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--content-inverse)",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(250,250,249,0.45)",
                    marginTop: 2,
                  }}
                >
                  {t.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
