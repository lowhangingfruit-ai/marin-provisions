"use client";
import { useState } from "react";

const menuItems = [
  { jp: "焼き鳥", en: "YAKITORI", name: "Skewers", desc: "Binchotan-grilled. Chicken thigh, tsukune, negima." },
  { jp: "焼きおにぎり", en: "ONIGIRI", name: "Yaki Onigiri", desc: "Grilled rice ball. Soy-glazed, crispy exterior." },
  { jp: "味噌汁", en: "MISO", name: "Miso Soup", desc: "Dashi broth, tofu, wakame, scallion." },
  { jp: "漬物", en: "TSUKEMONO", name: "Japanese Pickles", desc: "Seasonal vegetables, house-pickled." },
  { jp: "抹茶", en: "MATCHA", name: "Matcha Latte", desc: "Ceremonial grade. Oat or whole milk." },
];

const cateringPackages = [
  {
    name: "Live Fire Station",
    desc: "We bring the binchotan grill to your event and cook skewers to order throughout the evening. Guests watch the fire, smell the smoke, and eat fresh off the grill. Ideal for outdoor parties, backyard gatherings, or any event where the food IS the experience.",
  },
  {
    name: "Skewer Spread",
    desc: "A generous spread of yakitori skewers, yaki onigiri, tsukemono pickles, and miso soup — all laid out for guests to graze. Perfect for cocktail-style events, corporate receptions, or casual celebrations.",
  },
  {
    name: "Private Yakitori Dinner",
    desc: "An intimate seated experience built around the grill. We design a multi-course yakitori menu for your group, served omakase-style. Each skewer comes off the binchotan and straight to the table.",
  },
];

function CateringItem({ pkg }: { pkg: { name: string; desc: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(30,30,72,0.12)" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
      }}>
        <span style={{ fontFamily: "'Bebas Neue', 'Anton', cursive", fontSize: "22px", letterSpacing: "0.08em", color: "#1e1e48" }}>{pkg.name}</span>
        <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "24px", color: "#c4392a", transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", lineHeight: 1 }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "14px", color: "#5a5a6a", lineHeight: 1.85, paddingBottom: "20px", maxWidth: "540px" }}>
          {pkg.desc}
        </p>
      )}
    </div>
  );
}

export default function MarinProvisions() {
  const [cateringOpen, setCateringOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Special+Elite&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .grain {
          position: relative;
        }
        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          opacity: 0.45;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 58% 42%;
          grid-template-rows: 50vh 50vh;
          height: 100vh;
          min-height: 600px;
        }

        .hero-left {
          grid-row: 1 / 3;
          background: #f0e8d4;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 56px;
          overflow: hidden;
        }

        .hero-right-top {
          background: #c4392a;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 40px;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
        }

        .hero-right-top:hover::before {
          opacity: 1;
        }

        .hero-right-top::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .hero-right-bottom {
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 40px;
          overflow: hidden;
          background: #1e1e48;
        }

        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 40px;
          background: rgba(240,232,212,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 2px solid rgba(30,30,72,0.1);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 60vh auto auto;
            height: auto;
          }
          .hero-left { grid-row: 1; min-height: 60vh; }
          .menu-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ fontFamily: "'Special Elite', cursive", background: "#f0e8d4", color: "#1e1e48" }}>

        {/* Nav */}
        <nav className="nav-bar">
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "20px", letterSpacing: "0.15em", color: "#1e1e48" }}>MARIN PROVISIONS</span>
          <div style={{ display: "flex", gap: "32px" }}>
            <a href="#menu" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "14px", letterSpacing: "0.15em", color: "#1e1e48", textDecoration: "none" }}>MENU</a>
            <a href="#catering" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "14px", letterSpacing: "0.15em", color: "#c4392a", textDecoration: "none" }}>CATERING</a>
          </div>
        </nav>

        {/* Hero Grid */}
        <div className="hero-grid" style={{ paddingTop: "52px" }}>

          {/* Left — title panel */}
          <div className="hero-left grain">
            {/* Decorative smoke SVG */}
            <svg style={{ position: "absolute", top: "60px", right: "40px", opacity: 0.12, width: "180px" }} viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 200 C30 170, 70 140, 50 110 C30 80, 70 50, 50 20 C40 10, 45 5, 50 0" stroke="#1e1e48" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M30 200 C10 165, 55 135, 35 100 C15 65, 60 35, 40 5" stroke="#1e1e48" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
              <path d="M70 200 C55 170, 85 145, 65 115 C45 85, 80 60, 60 25" stroke="#1e1e48" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
            </svg>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4392a", marginBottom: "12px" }}>
                Marin County · Est. 2026
              </p>
              <h1 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(80px, 11vw, 148px)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "#1e1e48",
                marginBottom: "32px",
              }}>
                MARIN<br />
                <span style={{ color: "#c4392a" }}>PROVI-<br />SIONS</span>
              </h1>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "13px", color: "#5a5a6a", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 2 }}>
                Yakitori · Onigiri · Miso · Matcha
              </p>
            </div>
          </div>

          {/* Right top — Catering CTA */}
          <a href="#catering" className="hero-right-top grain" style={{ textDecoration: "none" }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.35) saturate(0.3)",
            }} />
            <div style={{ position: "relative", zIndex: 3 }}>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: "8px" }}>Private events</p>
              <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "0.05em", color: "#fff", lineHeight: 1 }}>CATERING</h2>
            </div>
          </a>

          {/* Right bottom — Location */}
          <div className="hero-right-bottom grain">
            <div style={{ position: "relative", zIndex: 3 }}>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "8px" }}>San Rafael, CA</p>
              <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "0.05em", color: "#f0e8d4", lineHeight: 1.1 }}>
                THURSDAY<br />NIGHTS
              </h2>
            </div>
          </div>
        </div>

        {/* Menu */}
        <section id="menu" style={{ background: "#f0e8d4", padding: "100px 56px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "64px", borderBottom: "3px solid #1e1e48", paddingBottom: "20px" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "0.05em", color: "#1e1e48" }}>THE MENU</h2>
              <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "13px", color: "#9a8a7a", letterSpacing: "0.1em" }}>— subject to change by season</span>
            </div>
            <div className="menu-grid">
              {menuItems.map((item, i) => (
                <div key={i} style={{
                  padding: "36px 32px",
                  borderRight: i % 3 !== 2 ? "1px solid rgba(30,30,72,0.1)" : "none",
                  borderBottom: i < 3 ? "1px solid rgba(30,30,72,0.1)" : "none",
                }}>
                  <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "11px", letterSpacing: "0.1em", color: "#c4392a", marginBottom: "4px" }}>{item.jp}</p>
                  <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "28px", letterSpacing: "0.08em", color: "#1e1e48", marginBottom: "10px" }}>{item.en}</h3>
                  <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "15px", color: "#1e1e48", marginBottom: "6px", fontWeight: "normal" }}>{item.name}</p>
                  <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", color: "#8a7a6a", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: "4px", background: "#1e1e48" }} />

        {/* Photo strip */}
        <div style={{
          height: "420px",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(30,30,72,0.3)" }} />
        </div>

        {/* Divider */}
        <div style={{ height: "4px", background: "#c4392a" }} />

        {/* Catering */}
        <section id="catering" style={{ background: "#1e1e48", padding: "100px 56px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "11px", letterSpacing: "0.2em", color: "rgba(240,232,212,0.5)", textTransform: "uppercase", marginBottom: "16px" }}>Private Events</p>
              <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(52px, 7vw, 88px)", letterSpacing: "0.03em", color: "#f0e8d4", lineHeight: 0.9, marginBottom: "24px" }}>
                BRING THE<br />
                <span style={{ color: "#c4392a" }}>BINCHOTAN</span><br />
                TO YOU
              </h2>
              <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "14px", color: "rgba(240,232,212,0.6)", lineHeight: 1.85, maxWidth: "380px" }}>
                Private dinners, corporate events, celebrations. We set up the grill, you enjoy the fire.
              </p>
            </div>
            <div>
              <div style={{ marginBottom: "48px" }}>
                {cateringPackages.map((pkg, i) => (
                  <CateringItem key={i} pkg={pkg} />
                ))}
              </div>

              {/* Inquiry form */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Event type", type: "text" },
                  { label: "No. of guests", type: "text" },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "14px", color: "rgba(240,232,212,0.4)", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <input type={f.type} style={{
                      width: "100%", background: "transparent",
                      border: "none", borderBottom: "1px solid rgba(240,232,212,0.2)",
                      padding: "10px 0", color: "#f0e8d4", fontSize: "14px",
                      outline: "none", fontFamily: "'Special Elite', cursive",
                    }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "14px", color: "rgba(240,232,212,0.4)", letterSpacing: "0.15em", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea rows={3} style={{
                    width: "100%", background: "transparent",
                    border: "none", borderBottom: "1px solid rgba(240,232,212,0.2)",
                    padding: "10px 0", color: "#f0e8d4", fontSize: "14px",
                    outline: "none", resize: "none", fontFamily: "'Special Elite', cursive",
                  }} />
                </div>
                <div>
                  <button style={{
                    background: "#c4392a", color: "#f0e8d4", border: "none",
                    padding: "14px 36px", fontFamily: "'Bebas Neue', cursive",
                    fontSize: "16px", letterSpacing: "0.15em", cursor: "pointer",
                  }}>
                    SEND INQUIRY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#f0e8d4", padding: "28px 56px", borderTop: "3px solid #1e1e48", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "20px", letterSpacing: "0.15em", color: "#1e1e48" }}>MARIN PROVISIONS</span>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "12px", color: "#9a8a7a", letterSpacing: "0.08em" }}>© 2026 · Marin County, CA</span>
        </footer>

      </div>
    </>
  );
}
