"use client";
import Link from "next/link";

const menuItems = [
  { name: "Yakitori Skewers", desc: "Binchotan-grilled. Chicken thigh, tsukune, negima.", price: "4–6" },
  { name: "Yaki Onigiri", desc: "Grilled rice ball. Soy-glazed, crispy exterior.", price: "5" },
  { name: "Miso Soup", desc: "Dashi broth, tofu, wakame, scallion.", price: "4" },
  { name: "Matcha Latte", desc: "Ceremonial grade matcha. Oat or whole milk.", price: "6" },
];

export default function DesignC() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#08071a", minHeight: "100vh", color: "#fff" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(8,7,26,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(165,180,252,0.06)",
      }}>
        <Link href="/" style={{ color: "rgba(165,180,252,0.4)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>← All Directions</Link>
        <span style={{ fontSize: "11px", letterSpacing: "0.3em", color: "rgba(165,180,252,0.5)", textTransform: "uppercase" }}>Marin Provisions</span>
        <span style={{ color: "rgba(165,180,252,0.4)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Direction C</span>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 30% 50%, #2d1b69 0%, #0f0c29 40%, #08071a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 100px",
      }}>
        {/* Atmospheric layers */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          opacity: 0.5,
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block",
            border: "1px solid rgba(165,180,252,0.15)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "48px",
            background: "rgba(165,180,252,0.05)",
            backdropFilter: "blur(10px)",
          }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(165,180,252,0.6)", textTransform: "uppercase" }}>
              San Rafael · Thursday Nights
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(56px, 11vw, 100px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            marginBottom: "40px",
            background: "linear-gradient(160deg, #e0d7ff 0%, #a5b4fc 40%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Marin<br />Provisions
          </h1>

          <p style={{
            fontSize: "13px",
            letterSpacing: "0.3em",
            color: "rgba(165,180,252,0.4)",
            textTransform: "uppercase",
            marginBottom: "56px",
          }}>
            Yakitori · Onigiri · Miso · Matcha
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: "rgba(165,180,252,0.1)",
              border: "1px solid rgba(165,180,252,0.2)",
              borderRadius: "100px",
              padding: "14px 32px",
              color: "#a5b4fc",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              View Menu
            </button>
            <button style={{
              background: "rgba(165,180,252,0.06)",
              border: "1px solid rgba(165,180,252,0.1)",
              borderRadius: "100px",
              padding: "14px 32px",
              color: "rgba(165,180,252,0.5)",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Catering
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, rgba(165,180,252,0.3))" }} />
          <span style={{ fontSize: "9px", color: "rgba(165,180,252,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
        </div>
      </section>

      {/* Menu */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(to bottom, #08071a 0%, #0d0c2a 100%)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "1px", height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(165,180,252,0.2))",
        }} />
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(165,180,252,0.4)", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>The Menu</p>
          {menuItems.map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              padding: "28px 0",
              borderBottom: "1px solid rgba(165,180,252,0.06)",
              alignItems: "center",
              position: "relative",
            }}>
              <div>
                <h3 style={{
                  fontSize: "22px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  background: "linear-gradient(90deg, #e0d7ff, #a5b4fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "6px",
                }}>{item.name}</h3>
                <p style={{ fontSize: "12px", color: "rgba(165,180,252,0.3)", letterSpacing: "0.05em" }}>{item.desc}</p>
              </div>
              <span style={{
                fontSize: "16px",
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(165,180,252,0.5)",
                whiteSpace: "nowrap",
              }}>${item.price}</span>
            </div>
          ))}
          <p style={{ fontSize: "11px", color: "rgba(165,180,252,0.15)", marginTop: "24px", textAlign: "center", letterSpacing: "0.05em" }}>Menu subject to change by season.</p>
        </div>
      </section>

      {/* Market */}
      <section style={{ padding: "100px 24px", background: "rgba(99,102,241,0.03)", borderTop: "1px solid rgba(165,180,252,0.05)", borderBottom: "1px solid rgba(165,180,252,0.05)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(165,180,252,0.4)", textTransform: "uppercase", marginBottom: "20px" }}>Find Us</p>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "32px",
              background: "linear-gradient(160deg, #e0d7ff 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              San Rafael<br />Farmers Market
            </h2>
            {[["Day", "Thursday Evenings"], ["Location", "Downtown San Rafael, CA"], ["Season", "Year-round"]].map(([label, val]) => (
              <div key={label} style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                <span style={{ fontSize: "10px", color: "rgba(165,180,252,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", width: "64px", flexShrink: 0, paddingTop: "3px" }}>{label}</span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{
            aspectRatio: "1",
            background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(129,140,248,0.05) 100%)",
            border: "1px solid rgba(165,180,252,0.08)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: "11px", color: "rgba(165,180,252,0.15)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Photo</span>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(165,180,252,0.4)", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Private Events</p>
          <h2 style={{
            fontSize: "clamp(30px, 5vw, 50px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
            background: "linear-gradient(160deg, #e0d7ff 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Bring the smoke<br />to your event
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(165,180,252,0.35)", textAlign: "center", lineHeight: 1.75, marginBottom: "56px" }}>
            Private dinners, corporate events, celebrations. Live binchotan fire. Real smoke. Everywhere.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Event Type", type: "text" },
              { label: "Number of Guests", type: "text" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ fontSize: "10px", color: "rgba(165,180,252,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{f.label}</label>
                <input type={f.type} style={{
                  width: "100%",
                  background: "rgba(165,180,252,0.04)",
                  border: "1px solid rgba(165,180,252,0.1)",
                  borderRadius: "2px",
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: "10px", color: "rgba(165,180,252,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Message</label>
              <textarea rows={4} style={{
                width: "100%",
                background: "rgba(165,180,252,0.04)",
                border: "1px solid rgba(165,180,252,0.1)",
                borderRadius: "2px",
                padding: "14px 16px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                fontFamily: "'DM Sans', sans-serif",
              }} />
            </div>
            <button style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(129,140,248,0.15))",
              border: "1px solid rgba(165,180,252,0.2)",
              borderRadius: "2px",
              padding: "16px 32px",
              color: "#a5b4fc",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              backdropFilter: "blur(10px)",
            }}>
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(165,180,252,0.05)", textAlign: "center" }}>
        <p style={{ fontSize: "11px", color: "rgba(165,180,252,0.15)", letterSpacing: "0.1em" }}>© 2026 Marin Provisions · Marin County, CA</p>
      </footer>
    </div>
  );
}
