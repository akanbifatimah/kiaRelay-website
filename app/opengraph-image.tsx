import { ImageResponse } from "next/og";

export const alt = "KiaRelay | Delivered Safely. Delivered Fast.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "16px",
              width: "16px",
              borderRadius: "9999px",
              backgroundColor: "#f0602e",
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#f0602e",
            }}
          >
            KiaRelay
          </div>
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: "920px",
          }}
        >
          Delivered safely. Delivered fast.
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: "820px",
          }}
        >
          Specialized delivery logistics across Texas, Louisiana, and neighboring states.
        </div>
      </div>
    ),
    { ...size }
  );
}
