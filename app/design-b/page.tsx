"use client";
import Link from "next/link";

const menuItems = [
  { name: "Yakitori Skewers", desc: "Binchotan-grilled. Chicken thigh, tsukune, negima.", price: "4–6" },
  { name: "Yaki Onigiri", desc: "Grilled rice ball. Soy-glazed, crispy exterior.", price: "5" },
  { name: "Miso Soup", desc: "Dashi broth, tofu, wakame, scallion.", price: "4" },
  { name: "Japanese Pickles", desc: "Tsukemono. Seasonal vegetables, house-pickled.", price: "4" },
  { name: "Matcha Latte", desc: "Ceremonial grade matcha. Oat or whole milk.", price: "6" },
];

export default function DesignB() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0ebe0", minHeight: "100vh", color: "#1a1a1a" }}>

        {/* Nav */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "18px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "rgba(240,235,224,0.92)", backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          <Link href="/" style={{ color: "rgba(0,0,0,0.3)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>← back</Link>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: "22px", color: "#1a1a1a", fontWeight: 600 }}>Marin Provisions</span>
          <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>B</span>
        </nav>

        {/* Hero */}
        <section style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "100px 56px 80px",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}>
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "18px",
            color: "#3730a3",
            marginBottom: "20px",
            transform: "rotate(-1deg)",
            display: "inline-block",
          }}>Marin County, CA ✦ est. 2026</p>

          <h1 style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(72px, 14vw, 128px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 0.9,
            color: "#1a1a1a",
            marginBottom: "32px",
          }}>
            Marin<br />
            <span style={{ color: "#3730a3" }}>Provisions</span>
          </h1>

          <p style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: 1.7,
            maxWidth: "380px",
            marginBottom: "48px",
          }}>
            Yakitori skewers on binchotan. Grilled onigiri. Miso. Matcha. Every Thursday at the San Rafael Farmers Market.
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#catering" style={{
              background: "#1a1a1a",
              color: "#f7f4ef",
              padding: "13px 28px",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Catering →
            </a>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: "18px", color: "#999", fontWeight: 400 }}>
              Thu evenings
            </span>
          </div>
        </section>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "0 56px" }} />

        {/* Menu */}
        <section style={{ padding: "80px 56px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
          <h2 style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "48px",
            fontWeight: 600,
            color: "#1a1a1a",
            marginBottom: "48px",
          }}>The menu</h2>

          <div>
            {menuItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "22px 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                gap: "24px",
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "28px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}>{item.name}</h3>
                  <p style={{ fontSize: "13px", color: "#999", letterSpacing: "0.01em" }}>{item.desc}</p>
                </div>
                <span style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "24px",
                  color: "#3730a3",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>${item.price}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: "16px", color: "#bbb", marginTop: "20px" }}>
            * menu shifts with the season
          </p>
        </section>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "0 56px" }} />

        {/* Where */}
        <section style={{ padding: "80px 56px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <h2 style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "48px",
                fontWeight: 600,
                color: "#1a1a1a",
                marginBottom: "32px",
                lineHeight: 1.1,
              }}>Find us<br />every Thursday</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  ["📍", "Downtown San Rafael, CA"],
                  ["🕕", "Thursday evenings"],
                  ["📅", "Year-round"],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "16px" }}>{icon}</span>
                    <span style={{ fontSize: "15px", color: "#444", lineHeight: 1.5 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              aspectRatio: "4/3",
              background: "#e4ddd0",
              border: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: "18px", color: "#bbb" }}>photo here</span>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "0 56px" }} />

        {/* Catering */}
        <section id="catering" style={{ padding: "80px 56px", maxWidth: "700px", margin: "0 auto", width: "100%" }}>
          <h2 style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.05,
            marginBottom: "12px",
          }}>
            Bring the grill<br />to your event
          </h2>
          <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.7, marginBottom: "48px", maxWidth: "440px" }}>
            Private dinners, corporate events, celebrations. We bring the binchotan to you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "Your name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Event type", type: "text" },
              { label: "# of guests", type: "text" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "18px",
                  color: "#666",
                  display: "block",
                  marginBottom: "6px",
                }}>{f.label}</label>
                <input type={f.type} style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.15)",
                  padding: "10px 0",
                  color: "#1a1a1a",
                  fontSize: "15px",
                  outline: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily: "'Caveat', cursive", fontSize: "18px", color: "#666", display: "block", marginBottom: "6px" }}>Anything else?</label>
              <textarea rows={3} style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(0,0,0,0.15)",
                padding: "10px 0",
                color: "#1a1a1a",
                fontSize: "15px",
                outline: "none",
                resize: "none",
                fontFamily: "'DM Sans', sans-serif",
              }} />
            </div>
            <div style={{ paddingTop: "8px" }}>
              <button style={{
                background: "#1a1a1a",
                color: "#f7f4ef",
                border: "none",
                padding: "15px 36px",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Send it →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: "32px 56px", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: "20px", color: "#1a1a1a", fontWeight: 600 }}>Marin Provisions</span>
          <span style={{ fontSize: "12px", color: "#bbb", letterSpacing: "0.05em" }}>© 2026 · Marin County, CA</span>
        </footer>
      </div>
    </>
  );
}
