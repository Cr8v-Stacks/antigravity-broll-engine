import React from "react";
import { useCurrentFrame } from "remotion";

export const StudioKeynoteLightBackdrop: React.FC = () => (
  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, #FFFFFF 0%, #F1F5F9 65%, #E2E8F0 100%)", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 900, height: 900, background: "radial-gradient(circle at center, rgba(0, 122, 255, 0.05) 0%, transparent 70%)", filter: "blur(80px)" }} />
  </div>
);

export const WarmPaperBackdrop: React.FC = () => (
  <div style={{ position: "absolute", inset: 0, background: "#F5F2EB", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(0,0,0,0.05) 100%)", pointerEvents: "none" }} />
  </div>
);

export const LabSlateBackdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = Array.from({ length: 28 }).map((_, i) => {
    const h = 20 + Math.sin(frame * 0.12 + i * 0.35) * 25 + Math.cos(frame * 0.08 + i * 0.7) * 15;
    return Math.max(8, h);
  });

  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #F8FAFC 0%, #EDF2F7 60%, #E2E8F0 100%)", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 40, right: 80, width: 500, height: 120, display: "flex", alignItems: "flex-end", justifyContent: "space-between", opacity: 0.35, pointerEvents: "none" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ width: 10, height: `${h}%`, background: i > 18 ? "#EF4444" : i > 10 ? "#F59E0B" : "#10B981", borderRadius: "3px 3px 0 0" }} />
        ))}
      </div>
    </div>
  );
};

export const ScoreboardPlatinumBackdrop: React.FC = () => (
  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 20%, #1E293B 0%, #0F172A 70%, #090D16 100%)", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: "-15%", right: "10%", width: 700, height: 600, background: "radial-gradient(circle at center, rgba(255, 179, 0, 0.12) 0%, transparent 70%)", filter: "blur(90px)" }} />
  </div>
);

export const ArchivalDeskBackdrop: React.FC = () => (
  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 45%, #1E2530 0%, #11151C 75%, #0A0D12 100%)", overflow: "hidden" }}>
    <div style={{ position: "absolute", bottom: "-25%", left: "25%", width: "50%", height: 500, background: "radial-gradient(ellipse at 50% 100%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)", filter: "blur(70px)" }} />
  </div>
);
