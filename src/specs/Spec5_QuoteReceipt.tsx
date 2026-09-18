import React from "react";
import { Audio, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioWhiteBackdrop } from "../components/BackdropSystem";

export interface Spec5Props {
  platform: string;
  sourceHandle: string;
  timestamp: string;
  quotePart1: string;
  quoteHighlight: string;
  quotePart2: string;
  contextNote: string;
  firstWordsCue: string;
}

export const Spec5_QuoteReceipt: React.FC<Spec5Props> = ({
  platform,
  sourceHandle,
  quotePart1,
  quoteHighlight,
  quotePart2,
  contextNote,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance spring for the document card
  const cardSpring = spring({ frame, fps, config: { damping: 14, mass: 0.8 } });
  const cardScale = interpolate(cardSpring, [0, 1], [0.94, 1]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  // High-precision highlighter sweep (f40 - f115)
  const hlProgress = interpolate(frame, [40, 115], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <StudioWhiteBackdrop ambientGlow="rgba(239, 68, 68, 0.03)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}>
        <Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} />
      </Sequence>
      <Sequence from={40}>
        <Audio src={staticFile("sfx/draw.wav")} volume={0.3} />
      </Sequence>

      {/* Perfectly Centered Evidence Document */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 120px",
        }}
      >
        <div
          style={{
            width: 1140,
            background: "#FFFFFF",
            border: "1.5px solid #E2E8F0",
            borderRadius: 20,
            padding: "48px 56px",
            boxShadow:
              "0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.04)",
            transform: `scale(${cardScale})`,
            opacity: cardOpacity,
          }}
        >
          {/* Post Header: Authentic community styling */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
              borderBottom: "1.5px solid #F1F5F9",
              paddingBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FF4500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 900,
                  fontSize: 20,
                  boxShadow: "0 2px 6px rgba(255, 69, 0, 0.3)",
                }}
              >
                r/
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>
                  {platform}
                </div>
                <div style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>
                  Posted by u/{sourceHandle}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                color: "#DC2626",
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              COMMUNITY REPORT
            </div>
          </div>

          {/* Quote Body with Gliding Fluorescent Highlighter (Text NEVER disappears) */}
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.55,
              marginBottom: 32,
            }}
          >
            “{quotePart1}{" "}
            <span
              style={{
                background: `linear-gradient(90deg, rgba(250, 204, 21, 0.5) ${hlProgress}%, transparent ${hlProgress}%)`,
                WebkitBoxDecorationBreak: "clone",
                boxDecorationBreak: "clone",
                color: "#0F172A",
                padding: "2px 6px",
                borderRadius: 4,
                fontWeight: 800,
              }}
            >
              {quoteHighlight}
            </span>
            {quotePart2 ? ` ${quotePart2}”` : "”"}
          </div>

          {/* Clean Context Footer */}
          <div
            style={{
              borderTop: "1.5px solid #F1F5F9",
              paddingTop: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 16, color: "#64748B", lineHeight: 1.4 }}>
              <strong style={{ color: "#0F172A", fontWeight: 700 }}>Context:</strong>{" "}
              {contextNote}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
