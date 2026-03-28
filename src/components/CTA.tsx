"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--bg-subtle)",
        padding: "96px 24px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Left: Copy */}
        <div>
          <p className="type-eyebrow" style={{ marginBottom: 20 }}>
            Get in touch
          </p>
          <h2
            className="type-display"
            style={{ color: "var(--content-default)", marginBottom: 20 }}
          >
            Ready to build something that matters?
          </h2>
          <p
            className="type-body-lg"
            style={{
              color: "var(--content-secondary)",
              marginBottom: 40,
              maxWidth: 420,
            }}
          >
            Tell us about your problem. We'll tell you honestly whether we're
            the right team — and if we are, what it would take.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: "var(--surface-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--content-accent)",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <a
                href="mailto:hello@northslopetech.com"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--content-accent)",
                  textDecoration: "none",
                }}
              >
                hello@northslopetech.com
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: "var(--surface-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--content-accent)",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--content-secondary)" }}>
                Ottawa · Toronto · Vancouver
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div
          style={{
            backgroundColor: "var(--surface-default)",
            border: "1px solid var(--border-default)",
            borderRadius: 16,
            padding: 40,
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch shortly. (Connect a form handler to activate.)");
            }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <FormField label="First name" name="firstName" placeholder="Sarah" />
              <FormField label="Last name" name="lastName" placeholder="Horton" />
            </div>
            <FormField
              label="Work email"
              name="email"
              type="email"
              placeholder="sarah@company.com"
            />
            <FormField
              label="Organization"
              name="org"
              placeholder="Company or agency name"
            />
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--content-default)",
                  marginBottom: 6,
                }}
              >
                What are you working on?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project or problem..."
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--border-default)",
                  backgroundColor: "var(--surface-muted)",
                  fontSize: 14,
                  color: "var(--content-default)",
                  fontFamily: "inherit",
                  resize: "vertical",
                  outline: "none",
                  transition: "border-color 0.15s",
                }}
                onFocus={(e) => {
                  (e.target as HTMLTextAreaElement).style.borderColor = "var(--border-focus)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLTextAreaElement).style.borderColor = "var(--border-default)";
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 24px",
                borderRadius: 8,
                backgroundColor: "var(--interactive-primary)",
                color: "var(--interactive-primary-fg)",
                fontSize: 15,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "var(--interactive-primary-hover)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "var(--interactive-primary)";
              }}
            >
              Send message
            </button>
            <p
              style={{
                fontSize: 12,
                color: "var(--content-tertiary)",
                textAlign: "center",
              }}
            >
              We respond within one business day.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--content-default)",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid var(--border-default)",
          backgroundColor: "var(--surface-muted)",
          fontSize: 14,
          color: "var(--content-default)",
          fontFamily: "inherit",
          outline: "none",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => {
          (e.target as HTMLInputElement).style.borderColor = "var(--border-focus)";
        }}
        onBlur={(e) => {
          (e.target as HTMLInputElement).style.borderColor = "var(--border-default)";
        }}
      />
    </div>
  );
}
