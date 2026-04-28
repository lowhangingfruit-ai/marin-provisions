import Link from "next/link";

const options = [
  {
    href: "/design-a",
    label: "A",
    name: "Ember & Indigo",
    desc: "Dark. Warm. Night market energy. Deep indigo background, amber glow accents.",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1c1917 100%)",
    accent: "#f59e0b",
    textColor: "#ffffff",
    subColor: "rgba(255,255,255,0.5)",
  },
  {
    href: "/design-b",
    label: "B",
    name: "Loose Handwriting",
    desc: "Washi minimal + Caveat font. Warm white, big casual script headlines, underline-only form fields.",
    bg: "linear-gradient(135deg, #f8f7f2 0%, #eee9e0 100%)",
    accent: "#3730a3",
    textColor: "#1a1a1a",
    subColor: "#888",
  },
  {
    href: "/design-c",
    label: "C",
    name: "Smoky Gradient",
    desc: "Atmospheric. Moody. Full-bleed indigo-to-black, layered translucency, smoke and fire.",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    accent: "#a5b4fc",
    textColor: "#ffffff",
    subColor: "rgba(255,255,255,0.5)",
  },
  {
    href: "/design-d",
    label: "D",
    name: "Rough & Textured",
    desc: "Rubik Dirt + Special Elite. Kraft paper bg, stamp-style type, double rules, woodblock energy.",
    bg: "linear-gradient(135deg, #f0ece3 0%, #e4dfd4 100%)",
    accent: "#2d2a6e",
    textColor: "#1c1a14",
    subColor: "#888",
  },
];

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#09090f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <p style={{ color: "#5a5a7a", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
        Marin Provisions — Design Exploration
      </p>
      <h1 style={{
        color: "#ffffff",
        fontSize: "clamp(26px, 4vw, 38px)",
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        marginBottom: "8px",
        textAlign: "center",
        letterSpacing: "-0.01em",
      }}>
        Three directions
      </h1>
      <p style={{ color: "#5a5a7a", fontSize: "14px", marginBottom: "56px", textAlign: "center" }}>
        Click each to see the full site mockup.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        width: "100%",
        maxWidth: "920px",
      }}>
        {options.map((opt) => (
          <Link
            key={opt.href}
            href={opt.href}
            style={{
              display: "block",
              background: opt.bg,
              borderRadius: "14px",
              padding: "36px 28px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: opt.accent,
              color: opt.label === "B" ? "#1e1b4b" : "#fff",
              fontSize: "12px",
              fontWeight: 500,
              marginBottom: "20px",
            }}>{opt.label}</div>
            <h2 style={{
              color: opt.textColor,
              fontSize: "21px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              marginBottom: "10px",
              letterSpacing: "-0.01em",
            }}>{opt.name}</h2>
            <p style={{
              color: opt.subColor,
              fontSize: "13px",
              lineHeight: 1.65,
              margin: 0,
            }}>{opt.desc}</p>
            <div style={{
              marginTop: "28px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: opt.accent,
            }}>View mockup →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
