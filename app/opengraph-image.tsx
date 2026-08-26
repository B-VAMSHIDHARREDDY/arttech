import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Artech IT Solutions — Websites, Mobile Apps & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0A0F1E 0%, #101a33 60%, #16204a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <svg width="72" height="69" viewBox="0 0 100 96">
            <line x1="36" y1="68" x2="78" y2="18" stroke="#ffffff" strokeWidth="24" strokeLinecap="round" />
            <circle cx="17" cy="80" r="15" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>artech</div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "6px", color: "#9db2f2", marginTop: "6px" }}>
              IT SOLUTIONS
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Turning Business Ideas Into Digital Solutions
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#9db2f2",
            maxWidth: 820,
          }}
        >
          Websites · Mobile Apps · AI Solutions · Custom Software
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 70,
            width: 140,
            height: 6,
            background: "#D8342A",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
