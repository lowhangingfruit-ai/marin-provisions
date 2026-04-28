"use client";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Yakitori Skewers", desc: "Binchotan-grilled. Chicken thigh, tsukune, negima.", price: "4–6" },
  { name: "Yaki Onigiri", desc: "Grilled rice ball. Soy-glazed, crispy exterior.", price: "5" },
  { name: "Miso Soup", desc: "Dashi broth, tofu, wakame, scallion.", price: "4" },
  { name: "Matcha Latte", desc: "Ceremonial grade matcha. Oat or whole milk.", price: "6" },
];

export default function DesignA() {
  const [formData, setFormData] = useState({ name: "", email: "", event: "", guests: "", message: "" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0e0c1e", minHeight: "100vh", color: "#fff" }}>

      {/* Back nav */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(to bottom, rgba(14,12,30,0.95) 0%, transparent 100%)" }}>
        <Link href="/" style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>← All Directions</Link>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Direction A</span>
      </div>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #1a1640 0%, #2d1b4e 35%, #1c1209 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "8px" }}>
            <div style={{ width: "28px", height: "1px", background: "rgba(245,158,11,0.5)" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.3em", color: "rgba(245,158,11,0.7)", textTransform: "uppercase" }}>Est. 2026</span>
            <div style={{ width: "28px", height: "1px", background: "rgba(245,158,11,0.5)" }} />
          </div>
          <h1 style={{
            fontSize: "clamp(52px, 10vw, 88px)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            color: "#f8f4ee",
            marginBottom: "6px",
          }}>
            Marin<br />
            <span style={{ color: "#f59e0b", fontStyle: "italic" }}>Provisions</span>
          </h1>
        </div>

        <p style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "16px",
        }}>
          Yakitori · Onigiri · Miso · Matcha
        </p>

        <div style={{
          display: "inline-block",
          border: "1px solid rgba(245,158,11,0.3)",
          padding: "10px 24px",
          marginTop: "32px",
          color: "rgba(245,158,11,0.8)",
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          borderRadius: "2px",
        }}>
          San Rafael Farmers Market · Thursday Nights
        </div>

        <div style={{ position: "absolute", bottom: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(245,158,11,0.4), transparent)" }} />
        </div>
      </section>

      {/* Menu */}
      <section style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "56px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "rgba(245,158,11,0.6)", textTransform: "uppercase", whiteSpace: "nowrap" }}>The Menu</p>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
        </div>
        <div style={{ display: "grid", gap: "0" }}>
          {menuItems.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "28px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              gap: "24px",
            }}>
              <div>
                <h3 style={{ fontSize: "20px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#f8f4ee", marginBottom: "6px" }}>{item.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>{item.desc}</p>
              </div>
              <span style={{ fontSize: "15px", color: "rgba(245,158,11,0.7)", fontFamily: "'Cormorant Garamond', serif", whiteSpace: "nowrap" }}>${item.price}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", marginTop: "24px", letterSpacing: "0.05em" }}>Menu subject to change by season and availability.</p>
      </section>

      {/* Where to find us */}
      <section style={{ padding: "80px 24px", background: "rgba(99,102,241,0.04)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "rgba(245,158,11,0.6)", textTransform: "uppercase", marginBottom: "20px" }}>Find Us</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#f8f4ee", lineHeight: 1.2, marginBottom: "24px" }}>
              San Rafael<br />Farmers Market
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["Day", "Thursday Evenings"], ["Location", "Downtown San Rafael, CA"], ["Season", "Year-round"]].map(([label, val]) => (
                <div key={label} style={{ display: "flex", gap: "16px" }}>
                  <span style={{ fontSize: "11px", color: "rgba(245,158,11,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", width: "60px", flexShrink: 0, paddingTop: "2px" }}>{label}</span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            aspectRatio: "1",
            background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(245,158,11,0.08) 100%)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Photo</span>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section style={{ padding: "100px 24px", maxWidth: "680px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "rgba(245,158,11,0.6)", textTransform: "uppercase", marginBottom: "20px", textAlign: "center" }}>Private Events</p>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#f8f4ee", textAlign: "center", lineHeight: 1.15, marginBottom: "16px" }}>
          Bring the binchotan<br />to your event
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.7, marginBottom: "56px" }}>
          We offer full-service yakitori catering for private dinners, corporate events, and celebrations. Live fire. Real smoke.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { label: "Name", type: "text", key: "name" },
            { label: "Email", type: "email", key: "email" },
            { label: "Event Type", type: "text", key: "event" },
            { label: "Number of Guests", type: "text", key: "guests" },
          ].map((field) => (
            <div key={field.key}>
              <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{field.label}</label>
              <input
                type={field.type}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                placeholder=""
              />
            </div>
          ))}
          <div>
            <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Message</label>
            <textarea rows={4} style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              padding: "14px 16px",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
              fontFamily: "'DM Sans', sans-serif",
            }} />
          </div>
          <button style={{
            marginTop: "8px",
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            color: "#0e0c1e",
            border: "none",
            borderRadius: "4px",
            padding: "16px 32px",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Send Inquiry
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>© 2026 Marin Provisions · Marin County, CA</p>
      </footer>
    </div>
  );
}
