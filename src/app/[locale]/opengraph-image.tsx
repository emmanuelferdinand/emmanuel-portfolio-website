import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori renders a small CSS subset and knows nothing about Tailwind, so these styles stay inline.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0a0a0a",
        color: "#f5f5f5",
        fontSize: 64,
      }}
    >
      <div style={{ fontSize: 24, color: "#89aacc", letterSpacing: 8 }}>
        {profile.headline.en.toUpperCase()}
      </div>
      <div style={{ marginTop: 24 }}>{profile.name}</div>
      <div style={{ marginTop: 24, fontSize: 28, color: "#878787" }}>{profile.location.en}</div>
    </div>,
    size,
  );
}
