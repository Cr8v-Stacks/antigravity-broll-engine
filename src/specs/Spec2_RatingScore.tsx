import React from "react";
import { Audio, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioDarkNoiseBackdrop } from "../components/BackdropSystem";
import { AlertTriangleIcon, CheckCircleIcon } from "../components/Icons";

export interface ScoreItem {
  brand: string;
  model: string;
  score: number;
  color: string;
  receipt: string;
  isWarning?: boolean;
}

export interface Spec2Props {
  categoryTitle: string;
  weightMultiplier: string;
  firstWordsCue?: string;
  scores: ScoreItem[];
}

export const Spec2_RatingScore: React.FC<Spec2Props> = ({
  categoryTitle,
  weightMultiplier,
  scores,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stampProgress = spring({ frame: frame - 12, fps, config: { damping: 10, mass: 0.6 } });
  const stampScale = interpolate(stampProgress, [0, 1], [1.8, 1]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <StudioDarkNoiseBackdrop ambientGlow="rgba(245, 158, 11, 0.07)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={12}><Audio src={staticFile("sfx/thud.wav")} volume={0.35} /></Sequence>
      {/* Synchronized crisp clicks for each animated score row */}
      <Sequence from={45}><Audio src={staticFile("sfx/click.wav")} volume={0.3} /></Sequence>
      <Sequence from={67}><Audio src={staticFile("sfx/click.wav")} volume={0.3} /></Sequence>
      <Sequence from={89}><Audio src={staticFile("sfx/click.wav")} volume={0.3} /></Sequence>
      {/* Synchronized pops for each badge tag */}
      <Sequence from={105}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>
      <Sequence from={123}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>
      <Sequence from={141}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>

      {/* Vertically Centered Scoreboard Stage */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 120px" }}>
        {/* Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 34 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#94A3B8", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 8 }}>
              BENCHMARK CATEGORY
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", margin: 0, letterSpacing: "-0.01em" }}>
              {categoryTitle}
            </h1>
          </div>

          <div
            style={{
              transform: `scale(${stampScale})`,
              background: "rgba(245, 158, 11, 0.15)",
              border: "2px solid #F59E0B",
              borderRadius: 8,
              padding: "8px 22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.25)",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 800, color: "#F59E0B", letterSpacing: "0.2em" }}>CATEGORY WEIGHT</span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#F59E0B", fontFamily: "monospace", lineHeight: 1.1 }}>{weightMultiplier}</span>
          </div>
        </div>

        {/* Scoreboard Card Box */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 18,
            padding: "40px 44px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {scores.map((item, idx) => {
            const barSpring = spring({ frame: frame - (45 + idx * 22), fps, config: { damping: 16, mass: 1 } });
            const barWidth = interpolate(barSpring, [0, 1], [0, (item.score / 5) * 100]);
            const scoreVal = (interpolate(barSpring, [0, 1], [0, item.score])).toFixed(1);

            const receiptSpring = spring({ frame: frame - (105 + idx * 18), fps, config: { damping: 14 } });
            const receiptX = interpolate(receiptSpring, [0, 1], [30, 0]);
            const receiptOp = interpolate(receiptSpring, [0, 1], [0, 1]);

            return (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span style={{ fontSize: 26, fontWeight: 900, color: item.color }}>{item.brand}</span>
                    <span style={{ fontSize: 18, color: "#94A3B8", fontWeight: 600 }}>{item.model}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div
                      style={{
                        transform: `translateX(${receiptX}px)`,
                        opacity: receiptOp,
                        background: item.isWarning ? "rgba(239, 68, 68, 0.16)" : "rgba(16, 185, 129, 0.16)",
                        border: `1px solid ${item.isWarning ? "#EF4444" : "#10B981"}`,
                        padding: "5px 14px",
                        borderRadius: 6,
                        color: item.isWarning ? "#F87171" : "#34D399",
                        fontSize: 14,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {item.isWarning ? <AlertTriangleIcon size={16} color="#F87171" /> : <CheckCircleIcon size={16} color="#34D399" />}
                      {item.receipt}
                    </div>

                    <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace", minWidth: 85, textAlign: "right" }}>
                      {scoreVal} <span style={{ fontSize: 16, color: "#64748B", fontWeight: 700 }}>/ 5</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Track */}
                <div style={{ width: "100%", height: 14, background: "rgba(255, 255, 255, 0.08)", borderRadius: 7, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${barWidth}%`,
                      background: item.color,
                      borderRadius: 7,
                      boxShadow: `0 0 16px ${item.color}88`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
