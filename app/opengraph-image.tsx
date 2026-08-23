import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Artech IT Solutions — Websites, Mobile Apps & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public/assets/img/logo-horizontal.png")).toString("base64");

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={280} height={89} alt="" />
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
