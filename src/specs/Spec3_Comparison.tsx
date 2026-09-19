import React from "react";
import { Audio, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioWhiteBackdrop } from "../components/BackdropSystem";
import { CheckCircleIcon, AlertTriangleIcon, ZapIcon } from "../components/Icons";

export interface Spec3Props {
  headerTitle?: string;
  firstWordsCue?: string;
}

export const Spec3_Comparison: React.FC<Spec3Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene 1: (0 - 85f) Software Glitch / OTA Code Patch
  // Scene 2: (85 - 175f) Hardware Defect / Factory Recall
  // Scene 3: (175 - 270f) Side-by-side Kinetic Distinction

  const s1Spring = spring({ frame: frame - 8, fps, config: { damping: 14 } });
  const s2Spring = spring({ frame: frame - 88, fps, config: { damping: 12, mass: 0.8 } });
  const s3Spring = spring({ frame: frame - 178, fps, config: { damping: 14 } });

  // Scene 1 OTA Progress
  const otaProgress = interpolate(frame, [20, 60], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <StudioWhiteBackdrop ambientGlow="rgba(16, 185, 129, 0.04)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={20}><Audio src={staticFile("sfx/click.wav")} volume={0.25} /></Sequence>
      <Sequence from={35}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>
      <Sequence from={85}><Audio src={staticFile("sfx/thud.wav")} volume={0.35} /></Sequence>
      <Sequence from={105}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>
      <Sequence from={175}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={185}><Audio src={staticFile("sfx/click.wav")} volume={0.28} /></Sequence>
      <Sequence from={198}><Audio src={staticFile("sfx/thud.wav")} volume={0.32} /></Sequence>

      {/* ========================================================================= */}
      {/* SCENE 1: 0 - 85f (OTA CODE PATCH // PURE MOTION GRAPHICS)                 */}
      {/* ========================================================================= */}
      {frame < 90 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: interpolate(frame, [78, 88], [1, 0]),
          }}
        >
          <div style={{ transform: `scale(${s1Spring})`, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: 54, fontWeight: 900, color: "#0F172A", margin: "0 0 36px 0", letterSpacing: "-0.01em" }}>
              OVER-THE-AIR CODE PATCH
            </h1>

            {/* Sleek Terminal / OTA Card */}
            <div
              style={{
                width: 780,
                background: "#0F172A",
                border: "2px solid #1E293B",
                borderRadius: 16,
                padding: "32px 36px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
              }}
            >
              {/* Terminal Window Bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1E293B", paddingBottom: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
                </div>
                <span style={{ fontSize: 13, color: "#64748B", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                  FIRMWARE_DEPLOYMENT // OTA_DAEMON
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#10B981", fontSize: 13, fontWeight: 700 }}>
                  <ZapIcon size={14} color="#10B981" /> WI-FI SYNC
                </div>
              </div>

              {/* Progress Bar & Status */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#F8FAFC", fontSize: 16, fontFamily: "monospace", marginBottom: 10 }}>
                  <span>PUSHING HOTFIX: build_v2.4.1_hotfix.bin</span>
                  <span style={{ color: "#10B981", fontWeight: 800 }}>{Math.round(otaProgress)}%</span>
                </div>
                <div style={{ width: "100%", height: 12, background: "#1E293B", borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${otaProgress}%`, background: "#10B981", borderRadius: 6, boxShadow: "0 0 15px #10B981" }} />
                </div>
              </div>

              {/* Impact Badges */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ flex: 1, background: "rgba(16, 185, 129, 0.12)", border: "1px solid #10B981", padding: "12px 18px", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircleIcon size={20} color="#10B981" />
                  <span style={{ color: "#34D399", fontWeight: 800, fontSize: 15 }}>DOWNTIME: 0 SECONDS</span>
                </div>
                <div style={{ flex: 1, background: "rgba(16, 185, 129, 0.12)", border: "1px solid #10B981", padding: "12px 18px", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircleIcon size={20} color="#10B981" />
                  <span style={{ color: "#34D399", fontWeight: 800, fontSize: 15 }}>RETURN COST: £0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCENE 2: 85 - 175f (PHYSICAL FACTORY RECALL // PURE MOTION GRAPHICS)      */}
      {/* ========================================================================= */}
      {frame >= 85 && frame < 180 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: interpolate(frame, [85, 95, 168, 178], [0, 1, 1, 0]),
          }}
        >
          <div style={{ transform: `scale(${s2Spring})`, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: 54, fontWeight: 900, color: "#0F172A", margin: "0 0 36px 0", letterSpacing: "-0.01em" }}>
              FACTORY PHYSICAL RECALL
            </h1>

            {/* Heavy Shipping Crate Card */}
            <div
              style={{
                width: 780,
                background: "#FEF2F2",
                border: "3px solid #DC2626",
                borderRadius: 16,
                padding: "32px 36px",
                boxShadow: "0 25px 60px rgba(220, 38, 38, 0.14)",
                position: "relative",
              }}
            >
              {/* Crate Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px dashed #FCA5A5", paddingBottom: 16, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <AlertTriangleIcon size={24} color="#DC2626" />
                  <span style={{ fontSize: 17, fontWeight: 900, color: "#991B1B", letterSpacing: "0.1em" }}>
                    HAZMAT FREIGHT LOGISTICS
                  </span>
                </div>
                <div style={{ background: "#DC2626", color: "#FFFFFF", padding: "4px 12px", borderRadius: 4, fontWeight: 800, fontSize: 12, letterSpacing: "0.15em" }}>
                  CLASS 9 LITHIUM-ION
                </div>
              </div>

              {/* Graphic Shipping Barcode & Manifest */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF", border: "1px solid #FECACA", borderRadius: 8, padding: "18px 24px", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 12, color: "#991B1B", fontWeight: 800 }}>WAYBILL TRACKING:</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", fontFamily: "monospace" }}>GB-HZ-98420-RCL</div>
                  <div style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>Requires certified ADR hazardous transit courier</div>
                </div>

                {/* SVG Barcode */}
                <svg width="120" height="48" viewBox="0 0 120 48">
                  <rect x="0" y="0" width="4" height="48" fill="#111827" />
                  <rect x="8" y="0" width="8" height="48" fill="#111827" />
                  <rect x="20" y="0" width="3" height="48" fill="#111827" />
                  <rect x="28" y="0" width="6" height="48" fill="#111827" />
                  <rect x="38" y="0" width="10" height="48" fill="#111827" />
                  <rect x="52" y="0" width="4" height="48" fill="#111827" />
                  <rect x="60" y="0" width="6" height="48" fill="#111827" />
                  <rect x="70" y="0" width="8" height="48" fill="#111827" />
                  <rect x="82" y="0" width="4" height="48" fill="#111827" />
                  <rect x="90" y="0" width="10" height="48" fill="#111827" />
                  <rect x="104" y="0" width="4" height="48" fill="#111827" />
                  <rect x="112" y="0" width="6" height="48" fill="#111827" />
                </svg>
              </div>

              {/* Impact Badges */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ flex: 1, background: "rgba(220, 38, 38, 0.1)", border: "1px solid #DC2626", padding: "12px 18px", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <AlertTriangleIcon size={20} color="#DC2626" />
                  <span style={{ color: "#B91C1C", fontWeight: 800, fontSize: 15 }}>DOWNTIME: 4-6 WEEKS</span>
                </div>
                <div style={{ flex: 1, background: "rgba(220, 38, 38, 0.1)", border: "1px solid #DC2626", padding: "12px 18px", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <AlertTriangleIcon size={20} color="#DC2626" />
                  <span style={{ color: "#B91C1C", fontWeight: 800, fontSize: 15 }}>LOGISTICS: HEAVY FREIGHT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCENE 3: 175 - 270f (THE ESSENTIAL DISTINCTION: CODE VS RECALL)           */}
      {/* ========================================================================= */}
      {frame >= 175 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: interpolate(frame, [175, 185], [0, 1]),
          }}
        >
          <div style={{ transform: `scale(${s3Spring})`, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: 52, fontWeight: 900, color: "#0F172A", margin: "0 0 44px 0", letterSpacing: "-0.01em" }}>
              CODE VS PHYSICAL RECALL
            </h1>

            {/* Split Comparison Cards */}
            <div style={{ display: "flex", gap: 36, width: 1140 }}>
              {/* Left: Software Bug */}
              <div
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  border: "3px solid #16A34A",
                  borderRadius: 16,
                  padding: "36px 32px",
                  boxShadow: "0 15px 35px rgba(22, 163, 74, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <CheckCircleIcon size={36} color="#16A34A" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#16A34A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                  SOFTWARE ISSUE
                </div>
                <h2 style={{ fontSize: 34, fontWeight: 900, color: "#0F172A", margin: 0, marginBottom: 14 }}>
                  JUST NEEDS CODE
                </h2>
                <p style={{ fontSize: 17, color: "#64748B", margin: 0, lineHeight: 1.4 }}>
                  Patched remotely over-the-air. Hardware stays on your wall.
                </p>
                <div style={{ marginTop: 24, background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#15803D", padding: "8px 20px", borderRadius: 6, fontWeight: 800, fontSize: 14 }}>
                  ✓ RAPID CLOUD RESOLUTION
                </div>
              </div>

              {/* Right: Hardware Defect */}
              <div
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  border: "3px solid #DC2626",
                  borderRadius: 16,
                  padding: "36px 32px",
                  boxShadow: "0 15px 35px rgba(220, 38, 38, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <AlertTriangleIcon size={36} color="#DC2626" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#DC2626", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                  HARDWARE DEFECT
                </div>
                <h2 style={{ fontSize: 34, fontWeight: 900, color: "#0F172A", margin: 0, marginBottom: 14 }}>
                  EXPENSIVE RECALL
                </h2>
                <p style={{ fontSize: 17, color: "#64748B", margin: 0, lineHeight: 1.4 }}>
                  Requires unmounting, hazardous courier packing, and factory teardown.
                </p>
                <div style={{ marginTop: 24, background: "#FEF2F2", border: "1px solid #FECACA", color: "#B91C1C", padding: "8px 20px", borderRadius: 6, fontWeight: 800, fontSize: 14 }}>
                  ⚠ WEEKS OF DOWNTIME
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
