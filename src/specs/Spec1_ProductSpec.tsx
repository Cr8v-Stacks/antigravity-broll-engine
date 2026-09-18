import React from "react";
import { Audio, Img, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioWhiteBackdrop } from "../components/BackdropSystem";

export interface Spec1Props {
  brandName: string;
  modelName: string;
  tagline: string;
  imageSrc: string;
  accentColor: string;
  firstWordsCue?: string;
  specs: Array<{ label: string; value: string }>;
}

export const Spec1_ProductSpec: React.FC<Spec1Props> = ({
  brandName,
  modelName,
  tagline,
  imageSrc,
  accentColor,
  specs,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Entrance animation (frames 0 - 55): Product zooms/slides up into center
  const entranceSpring = spring({ frame, fps, config: { damping: 12, mass: 0.8 } });
  const entranceScale = interpolate(entranceSpring, [0, 1], [0.65, 1]);
  const entranceY = interpolate(entranceSpring, [0, 1], [90, 0]);
  const entranceOp = interpolate(entranceSpring, [0, 1], [0, 1]);

  // 2. Product shifts right (frames 55 - 175) to reveal left spec cards
  const shiftRightSpring = spring({ frame: frame - 55, fps, config: { damping: 14, mass: 0.9 } });

  // 3. Product pushes left content out and glides back to center (frames 175 - 240)
  const recenterSpring = spring({ frame: frame - 175, fps, config: { damping: 14, mass: 0.9 } });

  const heroX = interpolate(shiftRightSpring, [0, 1], [0, 340]) - interpolate(recenterSpring, [0, 1], [0, 340]);
  const heroScale = entranceScale * (1 + interpolate(recenterSpring, [0, 1], [0, 0.08]));

  const leftExitX = interpolate(recenterSpring, [0, 1], [0, -750]);
  const leftExitOp = interpolate(recenterSpring, [0, 0.7, 1], [1, 0.3, 0]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <StudioWhiteBackdrop ambientGlow="rgba(0, 122, 255, 0.04)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={55}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      {/* Synchronized crisp clicks for each animated spec card */}
      {specs.map((_, idx) => (
        <Sequence key={idx} from={65 + idx * 24}>
          <Audio src={staticFile("sfx/click.wav")} volume={0.28} />
        </Sequence>
      ))}
      <Sequence from={135}><Audio src={staticFile("sfx/thud.wav")} volume={0.3} /></Sequence>
      <Sequence from={175}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>

      {/* Main Stage: Vertically and Horizontally Balanced */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        
        {/* Left Column: Spec Cards (reveals after f55, pushed out at f175) */}
        {frame > 50 && (
          <div
            style={{
              position: "absolute",
              left: 110,
              width: 560,
              zIndex: 20,
              transform: `translateX(${leftExitX}px)`,
              opacity: leftExitOp,
            }}
          >
            <div style={{ color: accentColor, fontSize: 18, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
              {brandName}
            </div>
            <h1 style={{ fontSize: 50, fontWeight: 900, color: "#0F172A", margin: 0, marginBottom: 12 }}>
              {modelName}
            </h1>
            <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.45, margin: 0, marginBottom: 28 }}>
              {tagline}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {specs.map((item, idx) => {
                const cardSpring = spring({ frame: frame - (65 + idx * 24), fps, config: { damping: 14 } });
                const cardX = interpolate(cardSpring, [0, 1], [-40, 0]);
                const cardOp = interpolate(cardSpring, [0, 1], [0, 1]);
                const isHighlight = idx === specs.length - 1 && frame > 130;

                return (
                  <div
                    key={idx}
                    style={{
                      transform: `translateX(${cardX}px)`,
                      opacity: cardOp,
                      background: isHighlight ? "#FEF2F2" : "#FFFFFF",
                      border: `2px solid ${isHighlight ? "#EF4444" : "#E2E8F0"}`,
                      borderLeft: `5px solid ${isHighlight ? "#EF4444" : accentColor}`,
                      borderRadius: 10,
                      padding: "16px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span style={{ fontSize: 16, color: isHighlight ? "#B91C1C" : "#334155", fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontSize: 17, color: isHighlight ? "#B91C1C" : "#0F172A", fontWeight: 800, fontFamily: "monospace" }}>{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Hero Product Cutout */}
        <div
          style={{
            transform: `translate(${heroX}px, ${entranceY}px) scale(${heroScale})`,
            opacity: entranceOp,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            src={staticFile(imageSrc)}
            alt={modelName}
            style={{
              maxHeight: 560,
              maxWidth: 600,
              objectFit: "contain",
              filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.18))",
            }}
          />
        </div>
      </div>
    </div>
  );
};
