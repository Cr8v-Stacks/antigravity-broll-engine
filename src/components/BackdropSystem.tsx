import React from "react";
import { AbsoluteFill } from "remotion";

/**
 * 1. STUDIO WHITE BACKDROP
 * Pristine, high-contrast light studio environment.
 * Perfect for hardware teardowns, clean documents, and bright editorial motion graphics.
 */
export const StudioWhiteBackdrop: React.FC<{
  ambientGlow?: string;
}> = ({ ambientGlow = "rgba(0, 122, 255, 0.03)" }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F8FAFC",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Soft directional studio spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, #FFFFFF 0%, #F1F5F9 85%, #E2E8F0 100%)`,
        }}
      />
      {/* Subtle brand tint if provided */}
      {ambientGlow && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 75% 40%, ${ambientGlow} 0%, transparent 60%)`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

/**
 * 2. STUDIO DARK NOISE BACKDROP
 * Rich, deep cinematic navy/slate (#0B1120 -> #0F172A).
 * Features procedural SVG film grain / organic noise texture (no dot grids).
 */
export const StudioDarkNoiseBackdrop: React.FC<{
  ambientGlow?: string;
}> = ({ ambientGlow = "rgba(56, 189, 248, 0.06)" }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0B1120",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Radial Depth Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, #111827 0%, #0B1120 70%, #030712 100%)`,
        }}
      />

      {/* Atmospheric Top Glow */}
      {ambientGlow && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 15%, ${ambientGlow} 0%, transparent 65%)`,
          }}
        />
      )}

      {/* Procedural SVG Organic Film Grain / Noise Overlay */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.045,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      >
        <filter id="studioNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#studioNoise)" />
      </svg>
    </AbsoluteFill>
  );
};
