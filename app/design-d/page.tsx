"use client";
import Link from "next/link";
import { useState } from "react";

const cateringPackages = [
  {
    name: "Live Fire Station",
    desc: "We bring the binchotan grill to your event and cook skewers to order throughout the evening. Guests watch the fire, smell the smoke, and eat fresh off the grill. Ideal for outdoor parties, backyard gatherings, or any event where the food IS the experience.",
  },
  {
    name: "Skewer Spread",
    desc: "A generous spread of yakitori skewers, yaki onigiri, tsukemono pickles, and miso soup — all laid out for guests to graze. Perfect for cocktail-style events, corporate receptions, or casual celebrations where people are moving and mingling.",
  },
  {
    name: "Private Yakitori Dinner",
    desc: "An intimate seated experience built around the grill. We design a multi-course yakitori menu for your group, served omakase-style. Each skewer comes off the binchotan and straight to the table. For dinners, celebrations, or anyone who wants to go deep on the food.",
  },
];

const menuItems = [
  { name: "Yakitori Skewers", desc: "Binchotan-grilled. Chicken thigh, tsukune, negima." },
  { name: "Yaki Onigiri", desc: "Grilled rice ball. Soy-glazed, crispy exterior." },
  { name: "Miso Soup", desc: "Dashi broth, tofu, wakame, scallion." },
  { name: "Japanese Pickles", desc: "Tsukemono. Seasonal vegetables, house-pickled." },
  { name: "Matcha Latte", desc: "Ceremonial grade matcha. Oat or whole milk." },
];

const palettes = [
  {
    name: "Indigo",
    bg: "#e8e0d0",
    navBg: "rgba(232,224,208,0.94)",
    accent: "#2d2a6e",
    ink: "#1c1a14",
    muted: "#888",
    placeholder: "#d9d0be",
    swatch: "#2d2a6e",
  },
  {
    name: "Vermillion",
    bg: "#ece4d8",
    navBg: "rgba(236,228,216,0.94)",
    accent: "#b83a2a",
    ink: "#1c1410",
    muted: "#8a7a74",
    placeholder: "#ddd0c0",
    swatch: "#b83a2a",
  },
  {
    name: "Terracotta",
    bg: "#ede5d6",
    navBg: "rgba(237,229,214,0.94)",
    accent: "#c4622d",
    ink: "#1e1610",
    muted: "#8a7a6a",
    placeholder: "#ddd0be",
    swatch: "#c4622d",
  },
  {
    name: "Moss",
    bg: "#e4e0d4",
    navBg: "rgba(228,224,212,0.94)",
    accent: "#3f5e38",
    ink: "#141c12",
    muted: "#7a8272",
    placeholder: "#d4cfc4",
    swatch: "#3f5e38",
  },
  {
    name: "Charcoal",
    bg: "#eae6de",
    navBg: "rgba(234,230,222,0.94)",
    accent: "#1c1a14",
    ink: "#1c1a14",
    muted: "#888",
    placeholder: "#d8d2c4",
    swatch: "#444",
  },
];

function CateringItem({ pkg, accent, ink, muted }: { pkg: { name: string; desc: string }; accent: string; ink: string; muted: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid rgba(0,0,0,0.1)` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "18px", color: ink, letterSpacing: "0.04em" }}>{pkg.name}</span>
        <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "22px", color: accent, lineHeight: 1, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "14px", color: muted, lineHeight: 1.85, paddingBottom: "24px", maxWidth: "560px" }}>
          {pkg.desc}
        </p>
      )}
    </div>
  );
}

export default function DesignD() {
  const [paletteIdx, setPaletteIdx] = useState(0);
  const p = palettes[paletteIdx];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Special+Elite&family=DM+Sans:wght@300;400;500&display=swap');
        input, textarea { font-family: 'Special Elite', cursive !important; }
        .menu-item-row { border-bottom: 2px dashed rgba(0,0,0,0.1); }
        .menu-item-row:last-child { border-bottom: none; }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: p.bg, minHeight: "100vh", color: p.ink, transition: "background 0.3s, color 0.3s" }}>

        {/* Nav */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "16px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: p.navBg, backdropFilter: "blur(8px)",
          borderBottom: `2px solid rgba(0,0,0,0.08)`,
          transition: "background 0.3s",
        }}>
          <Link href="/" style={{ color: "rgba(0,0,0,0.3)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Special Elite', cursive" }}>← back</Link>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "16px", letterSpacing: "0.08em", textTransform: "uppercase", color: p.ink }}>Marin Provisions</span>
          <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Special Elite', cursive" }}>D</span>
        </nav>

        {/* Palette switcher */}
        <div style={{
          position: "fixed", bottom: "28px", left: "50%", transform: "translateX(-50%)",
          zIndex: 100,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(12px)",
          borderRadius: "100px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Special Elite', cursive", whiteSpace: "nowrap" }}>Color</span>
          {palettes.map((pal, i) => (
            <button
              key={pal.name}
              onClick={() => setPaletteIdx(i)}
              title={pal.name}
              style={{
                width: "22px", height: "22px",
                borderRadius: "50%",
                background: pal.swatch,
                border: i === paletteIdx ? "2px solid #fff" : "2px solid transparent",
                cursor: "pointer",
                padding: 0,
                outline: "none",
                transition: "border 0.2s, transform 0.15s",
                transform: i === paletteIdx ? "scale(1.25)" : "scale(1)",
              }}
            />
          ))}
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "'Special Elite', cursive", minWidth: "64px" }}>{palettes[paletteIdx].name}</span>
        </div>

        {/* Hero */}
        <section style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingTop: "64px",
        }}>
          {/* Left: text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 48px 80px 56px",
            background: p.bg,
            transition: "background 0.3s",
          }}>
            <div style={{ width: "48px", height: "4px", background: p.accent, marginBottom: "32px", transition: "background 0.3s" }} />

            <div style={{
              display: "inline-block", alignSelf: "flex-start",
              border: `2px solid ${p.accent}`,
              padding: "5px 12px",
              fontFamily: "'Special Elite', cursive",
              fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
              color: p.accent, marginBottom: "28px",
              transition: "border-color 0.3s, color 0.3s",
            }}>
              Thu Nights · San Rafael
            </div>

            <h1 style={{
              fontFamily: "'Rubik Dirt', cursive",
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.9, letterSpacing: "-0.02em",
              color: p.ink, marginBottom: "10px",
              transition: "color 0.3s",
            }}>MARIN</h1>
            <h1 style={{
              fontFamily: "'Rubik Dirt', cursive",
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 0.9, letterSpacing: "-0.02em",
              color: p.accent, marginBottom: "32px",
              transition: "color 0.3s",
            }}>PROVISIONS</h1>

            <p style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: "14px", color: p.muted, lineHeight: 1.85,
              maxWidth: "300px", marginBottom: "40px",
            }}>
              Yakitori on binchotan. Grilled onigiri. Miso. Matcha. Every Thursday in San Rafael.
            </p>

            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <a href="#catering" style={{ textDecoration: "none" }}>
                <button style={{
                  fontFamily: "'Special Elite', cursive",
                  background: p.ink, color: p.bg,
                  border: "none", padding: "13px 28px",
                  fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase",
                  cursor: "pointer", transition: "background 0.3s, color 0.3s",
                }}>Catering inquiry</button>
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div style={{
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }} />
          </div>
        </section>

        <div style={{ borderTop: "4px solid " + p.ink, margin: "0 56px", transition: "border-color 0.3s" }} />

        {/* Menu */}
        <section style={{ padding: "80px 56px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Rubik Dirt', cursive", fontSize: "52px", color: p.ink, transition: "color 0.3s" }}>MENU</h2>
            <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "13px", color: p.muted, letterSpacing: "0.1em" }}>— subject to change</span>
          </div>
          <div>
            {menuItems.map((item, i) => (
              <div key={i} className="menu-item-row" style={{
                padding: "24px 0",
              }}>
                <div>
                  <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: "20px", color: p.ink, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em", transition: "color 0.3s" }}>{item.name}</h3>
                  <p style={{ fontSize: "13px", color: p.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ margin: "0 56px" }}>
          <div style={{ borderTop: "4px solid " + p.ink, transition: "border-color 0.3s" }} />
          <div style={{ borderTop: "1px solid " + p.ink, marginTop: "3px", transition: "border-color 0.3s" }} />
        </div>

        {/* Where */}
        <section style={{ padding: "80px 56px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Rubik Dirt', cursive", fontSize: "52px", color: p.ink, lineHeight: 1, marginBottom: "32px", transition: "color 0.3s" }}>FIND<br />US</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[["Location", "Downtown San Rafael, CA"], ["Day", "Thursday Evenings"], ["Season", "Year-round"]].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", gap: "16px", borderLeft: `3px solid ${p.accent}`, paddingLeft: "14px", transition: "border-color 0.3s" }}>
                    <div>
                      <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "10px", color: p.accent, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", transition: "color 0.3s" }}>{label}</span>
                      <span style={{ fontSize: "15px", color: p.ink }}>{val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              aspectRatio: "4/3", background: p.placeholder,
              border: "2px solid rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s",
            }}>
              <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "14px", color: "rgba(0,0,0,0.2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>photo</span>
            </div>
          </div>
        </section>

        <div style={{ margin: "0 56px" }}>
          <div style={{ borderTop: "4px solid " + p.ink, transition: "border-color 0.3s" }} />
          <div style={{ borderTop: "1px solid " + p.ink, marginTop: "3px", transition: "border-color 0.3s" }} />
        </div>

        {/* Catering */}
        <section id="catering" style={{ padding: "80px 56px", maxWidth: "700px", margin: "0 auto", width: "100%" }}>
          <h2 style={{ fontFamily: "'Rubik Dirt', cursive", fontSize: "clamp(40px, 8vw, 72px)", lineHeight: 0.95, color: p.ink, marginBottom: "8px", transition: "color 0.3s" }}>PRIVATE<br />EVENTS</h2>
          <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "14px", color: p.muted, lineHeight: 1.8, marginBottom: "48px", maxWidth: "440px" }}>
            Bring the binchotan to your event. Private dinners, corporate functions, celebrations.
          </p>

          {/* Packages accordion */}
          <div style={{ marginBottom: "64px" }}>
            {cateringPackages.map((pkg, i) => (
              <CateringItem key={i} pkg={pkg} accent={p.accent} ink={p.ink} muted={p.muted} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {[{ label: "Name", type: "text" }, { label: "Email", type: "email" }, { label: "Event type", type: "text" }, { label: "No. of guests", type: "text" }].map((f) => (
              <div key={f.label}>
                <label style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", color: p.muted, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "8px" }}>{f.label}</label>
                <input type={f.type} style={{ width: "100%", background: "transparent", border: "none", borderBottom: `2px solid rgba(0,0,0,0.15)`, padding: "8px 0", color: p.ink, fontSize: "15px", outline: "none" }} />
              </div>
            ))}
            <div>
              <label style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", color: p.muted, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "8px" }}>Message</label>
              <textarea rows={3} style={{ width: "100%", background: "transparent", border: "none", borderBottom: `2px solid rgba(0,0,0,0.15)`, padding: "8px 0", color: p.ink, fontSize: "15px", outline: "none", resize: "none" }} />
            </div>
            <div>
              <button style={{ fontFamily: "'Special Elite', cursive", background: p.ink, color: p.bg, border: "none", padding: "15px 36px", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.3s, color 0.3s" }}>
                Send inquiry
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: "28px 56px", borderTop: `4px solid ${p.ink}`, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.3s" }}>
          <span style={{ fontFamily: "'Rubik Dirt', cursive", fontSize: "24px", color: p.ink, letterSpacing: "-0.01em", transition: "color 0.3s" }}>MP</span>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", color: p.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>© 2026 · Marin County, CA</span>
        </footer>
      </div>
    </>
  );
}
