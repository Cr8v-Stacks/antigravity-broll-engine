import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Sequence,
  Audio,
  Img,
} from "remotion";
import { VoxStamp } from "../vox_editorial/components/VoxStamp";
import { spaceGroteskFamily, ibmPlexMonoFamily } from "../design_system/fonts";

export interface AuditRowItem {
  num: string;
  label: string;
  detail: string;
  badge?: string;
  isHighlight?: boolean;
}

export interface Spec8_ForensicAuditProps {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  heroImageSrc?: string;
  heroBadgeText?: string;
  heroVolumeLabel?: string;
  heroVolumeCount?: string;
  principleTitle?: string;
  principleSubtitle?: string;
  equationTitle?: string;
  equationBadge?: string;
  auditHeaderEyebrow?: string;
  auditHeadline?: string;
  auditSubheadline?: string;
  auditRows?: AuditRowItem[];
  verdictEyebrow?: string;
  verdictHeader?: string;
  isTitle?: string;
  isDetail?: string;
  notTitle?: string;
  notDetail?: string;
  stampLabel?: string;
  stampSublabel?: string;
  safeguardNote?: string;
}

export const Spec8_ForensicAudit: React.FC<Spec8_ForensicAuditProps> = ({
  eyebrow = "CRITICAL METHODOLOGY NOTICE",
  headline = "MARKET FOOTPRINT",
  headlineAccent = "BIAS WARNING",
  heroImageSrc = "product_images/ecoflow/ecoflow_stream_5000_flagship_2000px.png",
  heroBadgeText = "ECOFLOW POWERSTREAM // DELTA FLEET",
  heroVolumeLabel = "VOLUME LEADER",
  heroVolumeCount = "EST. 450,000+ UNITS",
  principleTitle = "Significantly Larger User Base = Higher Raw Complaint Volume",
  principleSubtitle = "More owners discussing firmware quirks does not inherently equal a higher component failure rate.",
  equationTitle = "COMPLAINT VOLUME ≠ FAILURE RATE",
  equationBadge = "UNTRACKED DENOMINATOR",
  auditHeaderEyebrow = "BEYOND RAW POST COUNTS // METHODOLOGY MATRIX",
  auditHeadline = "RECURRING PATTERN AUDIT",
  auditSubheadline = "SYNTHESIZING 5 INDEPENDENT VERIFICATION CHANNELS",
  auditRows = [
    { num: "01", label: "INDEPENDENT USER FLEET REPORTS", detail: "Multi-regional forum logs & owner posts" },
    { num: "02", label: "BENCHMARK EXPERT LAB TESTING", detail: "Acoustic, thermal & efficiency stress tests" },
    { num: "03", label: "OEM TECHNICAL DOCUMENTATION", detail: "Firmware release notes, schematics & whitepapers" },
    { num: "04", label: "ESCALATED SUPPORT & RMA LOGS", detail: "Manufacturer ticket responses & warranty resolutions" },
    { num: "05", label: "CROSS-REPORT CONSISTENCY", detail: "Identical failure signatures across isolated units", isHighlight: true },
  ],
  verdictEyebrow = "RESEARCH FINDINGS CLASSIFICATION",
  verdictHeader = "DEFINITIVE LEGAL & ANALYTICAL DISCLOSURE",
  isTitle = "EDITORIAL\nASSESSMENTS",
  isDetail = "Independent evaluation of demonstrable hardware vulnerabilities, firmware updates & user pattern consistency.",
  notTitle = "STATISTICAL\nFAILURE RATES",
  notDetail = "No manufacturer provides certified, verified denominator data for total installed units per model.",
  stampLabel = "EDITORIAL AUDIT",
  stampSublabel = "QUALITATIVE SYNTHESIS",
  safeguardNote = "Protected journalistic opinion based on substantiated public & benchmark evidence • VOX INVESTIGATIVE AUDIT",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle Global Camera Push
  const cameraDrift = interpolate(frame, [0, 210], [1.0, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // SUB-SCENE 1 (f0 - f65)
  const s1EyebrowSpring = spring({ frame: frame - 4, fps, config: { damping: 14 } });
  const s1EyebrowY = interpolate(s1EyebrowSpring, [0, 1], [-20, 0]);

  const s1TitleSpring = spring({ frame: frame - 8, fps, config: { damping: 12, mass: 0.7 } });
  const s1TitleScale = interpolate(s1TitleSpring, [0, 1], [0.9, 1]);

  const s1HardwareSpring = spring({ frame: frame - 12, fps, config: { damping: 12, mass: 0.8 } });
  const s1HardwareScale = interpolate(s1HardwareSpring, [0, 1], [0.85, 1]);

  const s1Card1Spring = spring({ frame: frame - 18, fps, config: { damping: 12 } });
  const s1Card1X = interpolate(s1Card1Spring, [0, 1], [-60, 0]);

  const s1Card2Spring = spring({ frame: frame - 28, fps, config: { damping: 12 } });
  const s1Card2X = interpolate(s1Card2Spring, [0, 1], [-60, 0]);

  // Spatial continuity: glide hero subject to left side
  const s1ToS2Progress = interpolate(frame, [60, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hwX = interpolate(s1ToS2Progress, [0, 1], [340, -560]);
  const hwScale = interpolate(s1ToS2Progress, [0, 1], [1, 0.72]);
  const hwOp = interpolate(frame, [0, 10, 140, 148], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s1CardsFadeOut = interpolate(s1ToS2Progress, [0, 1], [1, 0]);

  // SUB-SCENE 2 (f65 - f140)
  const s2Active = frame >= 60 && frame < 145;
  const s2Frame = Math.max(0, frame - 65);

  const s2HeaderSpring = spring({ frame: s2Frame - 2, fps, config: { damping: 13 } });
  const s2HeaderY = interpolate(s2HeaderSpring, [0, 1], [-25, 0]);
  const s2HeaderOp = interpolate(s2HeaderSpring, [0, 0.2, 1], [0, 1, 1]);

  const s2ExitProgress = interpolate(frame, [138, 146], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s2ExitY = interpolate(s2ExitProgress, [0, 1], [0, -40]);
  const s2ExitOp = interpolate(s2ExitProgress, [0, 1], [1, 0]);

  // SUB-SCENE 3 (f140 - f210)
  const s3Active = frame >= 140;
  const s3Frame = Math.max(0, frame - 142);

  const s3SealSpring = spring({ frame: s3Frame - 2, fps, config: { damping: 10, mass: 0.6, stiffness: 220 } });
  const s3SealScale = interpolate(s3SealSpring, [0, 1], [1.8, 1]);
  const s3SealOp = interpolate(s3SealSpring, [0, 0.2, 1], [0, 1, 1]);

  const strikeProgress = interpolate(s3Frame, [12, 28], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stampSpring = spring({ frame: s3Frame - 20, fps, config: { damping: 9, mass: 0.5, stiffness: 240 } });
  const stampScale = interpolate(stampSpring, [0, 1], [2.8, 1]);
  const stampOp = interpolate(stampSpring, [0, 0.15, 1], [0, 1, 1]);

  const s3BannerSpring = spring({ frame: s3Frame - 15, fps, config: { damping: 13 } });
  const s3BannerY = interpolate(s3BannerSpring, [0, 1], [30, 0]);
  const s3BannerOp = interpolate(s3BannerSpring, [0, 0.2, 1], [0, 1, 1]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: spaceGroteskFamily,
        color: "#000000",
        transform: `scale(${cameraDrift})`,
      }}
    >
      {/* Background Millimeter Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.07) 1px, transparent 0)",
          backgroundSize: "36px 36px",
          zIndex: 0,
        }}
      />

      {/* Frame Borders */}
      <div
        style={{
          position: "absolute",
          inset: 32,
          border: "1.5px solid rgba(0, 0, 0, 0.12)",
          pointerEvents: "none",
          zIndex: 40,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 20,
            fontFamily: ibmPlexMonoFamily,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#64748B",
            textTransform: "uppercase",
          }}
        >
          SPEC 8 // FORENSIC MULTI-PILLAR AUDIT
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 20,
            fontFamily: ibmPlexMonoFamily,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#000000",
            backgroundColor: "#F1F5F9",
            padding: "3px 10px",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            borderRadius: 3,
          }}
        >
          CANONICAL SPEC ARCHETYPE
        </div>
      </div>

      {/* Persistent Hero Subject */}
      {frame < 150 && heroImageSrc && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${hwX}px, 0px) scale(${hwScale * s1HardwareScale})`,
            opacity: hwOp,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 60, height: 1.5, backgroundColor: "#000000" }} />
            <span
              style={{
                fontFamily: ibmPlexMonoFamily,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                color: "#000000",
                backgroundColor: "#F1F5F9",
                padding: "2px 8px",
                border: "1px solid #000000",
                borderRadius: 2,
              }}
            >
              {heroBadgeText}
            </span>
            <div style={{ width: 60, height: 1.5, backgroundColor: "#000000" }} />
          </div>

          <div
            style={{
              position: "relative",
              width: 520,
              height: 380,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              filter: "drop-shadow(0 24px 36px rgba(0,0,0,0.14))",
            }}
          >
            <Img
              src={staticFile(heroImageSrc)}
              alt="Hero Specimen"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
            {heroVolumeLabel && (
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: -15,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontFamily: ibmPlexMonoFamily,
                  fontSize: 10,
                  color: "#64748B",
                  borderLeft: "2px solid #00B2FF",
                  paddingLeft: 8,
                }}
              >
                <span style={{ fontWeight: 800, color: "#00B2FF" }}>{heroVolumeLabel}</span>
                <span>{heroVolumeCount}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sub-Scene 1: Context & Core Equation */}
      {frame < 75 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 140,
            transform: "translateY(-50%)",
            width: 760,
            zIndex: 15,
            opacity: s1CardsFadeOut,
          }}
        >
          <div
            style={{
              transform: `translateY(${s1EyebrowY}px)`,
              opacity: interpolate(s1EyebrowSpring, [0, 0.2, 1], [0, 1, 1]),
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#000000",
              color: "#FFFFFF",
              padding: "4px 12px",
              borderRadius: 3,
              fontFamily: ibmPlexMonoFamily,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.2em",
              marginBottom: 16,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              transform: `scale(${s1TitleScale})`,
              transformOrigin: "left center",
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#000000",
              marginBottom: 28,
            }}
          >
            {headline} <br />
            <span style={{ color: "#2563EB" }}>{headlineAccent}</span>
          </div>

          <div
            style={{
              transform: `translateX(${s1Card1X}px)`,
              opacity: interpolate(s1Card1Spring, [0, 0.2, 1], [0, 1, 1]),
              backgroundColor: "#F8FAFC",
              border: "2px solid #000000",
              padding: "18px 24px",
              borderRadius: 4,
              marginBottom: 16,
              boxShadow: "4px 4px 0px #000000",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#000000", lineHeight: 1.25 }}>
              {principleTitle}
            </div>
            <div style={{ fontFamily: ibmPlexMonoFamily, fontSize: 13, color: "#475569", marginTop: 6 }}>
              {principleSubtitle}
            </div>
          </div>

          <div
            style={{
              transform: `translateX(${s1Card2X}px)`,
              opacity: interpolate(s1Card2Spring, [0, 0.2, 1], [0, 1, 1]),
              backgroundColor: "#000000",
              color: "#FFFFFF",
              padding: "16px 22px",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.02em", color: "#FFFFFF" }}>
              {equationTitle}
            </div>
            <div
              style={{
                backgroundColor: "#1E293B",
                border: "1px solid #475569",
                padding: "6px 14px",
                borderRadius: 4,
                fontFamily: ibmPlexMonoFamily,
                fontSize: 12,
                fontWeight: 800,
                color: "#38BDF8",
                letterSpacing: "0.1em",
              }}
            >
              {equationBadge}
            </div>
          </div>
        </div>
      )}

      {/* Sub-Scene 2: Staggered Audit Matrix */}
      {s2Active && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 640,
            transform: `translateY(calc(-50% + ${s2ExitY}px))`,
            width: 1140,
            zIndex: 20,
            opacity: s2ExitOp,
          }}
        >
          <div style={{ transform: `translateY(${s2HeaderY}px)`, opacity: s2HeaderOp, marginBottom: 24 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#F1F5F9",
                border: "1.5px solid #000000",
                padding: "4px 14px",
                borderRadius: 3,
                fontFamily: ibmPlexMonoFamily,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.2em",
                color: "#000000",
                marginBottom: 12,
              }}
            >
              {auditHeaderEyebrow}
            </div>

            <div
              style={{
                fontSize: 44,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#000000",
                lineHeight: 1.1,
              }}
            >
              {auditHeadline} <br />
              <span style={{ fontSize: 24, fontWeight: 700, color: "#64748B" }}>
                {auditSubheadline}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {auditRows.map((row, idx) => {
              const rowFrame = s2Frame - 7 - idx * 10;
              const rowSpring = spring({ frame: rowFrame, fps, config: { damping: 12, mass: 0.7 } });
              const rowX = interpolate(rowSpring, [0, 1], [60, 0]);
              const rowOp = interpolate(rowSpring, [0, 0.2, 1], [0, 1, 1]);

              return (
                <div
                  key={row.num}
                  style={{
                    transform: `translateX(${rowX}px)`,
                    opacity: rowOp,
                    backgroundColor: row.isHighlight ? "#000000" : "#FFFFFF",
                    color: row.isHighlight ? "#FFFFFF" : "#000000",
                    border: "2px solid #000000",
                    borderRadius: 4,
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "3px 3px 0px rgba(0,0,0,0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span
                      style={{
                        fontFamily: ibmPlexMonoFamily,
                        fontSize: 14,
                        fontWeight: 900,
                        backgroundColor: row.isHighlight ? "#FFFFFF" : "#000000",
                        color: row.isHighlight ? "#000000" : "#FFFFFF",
                        padding: "3px 8px",
                        borderRadius: 2,
                      }}
                    >
                      {row.num}
                    </span>
                    <div>
                      <div style={{ fontSize: 19, fontWeight: 800 }}>{row.label}</div>
                      <div
                        style={{
                          fontFamily: ibmPlexMonoFamily,
                          fontSize: 12,
                          color: row.isHighlight ? "#94A3B8" : "#64748B",
                          marginTop: 3,
                        }}
                      >
                        {row.detail}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: ibmPlexMonoFamily,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      color: row.isHighlight ? "#4ADE80" : "#059669",
                      backgroundColor: row.isHighlight ? "rgba(74, 222, 128, 0.15)" : "#ECFDF5",
                      border: `1px solid ${row.isHighlight ? "#4ADE80" : "#A7F3D0"}`,
                      padding: "4px 10px",
                      borderRadius: 3,
                    }}
                  >
                    {row.badge || "VERIFIED EVIDENCE"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-Scene 3: Verdict Seal & Strikethrough */}
      {s3Active && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${s3SealScale})`,
            width: 1440,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 30,
            opacity: s3SealOp,
          }}
        >
          <div
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              fontFamily: ibmPlexMonoFamily,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.25em",
              padding: "6px 20px",
              borderRadius: 3,
              marginBottom: 20,
            }}
          >
            {verdictEyebrow}
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              backgroundColor: "#FFFFFF",
              border: "3.5px solid #000000",
              borderRadius: 6,
              padding: "44px 50px 36px 50px",
              boxShadow: "10px 10px 0px #000000",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 36,
                transform: `scale(${stampScale})`,
                opacity: stampOp,
                zIndex: 35,
              }}
            >
              <VoxStamp label={stampLabel} color="#000000" rotate={-6} sublabel={stampSublabel} />
            </div>

            <div
              style={{
                fontFamily: ibmPlexMonoFamily,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#64748B",
                marginBottom: 16,
              }}
            >
              {verdictHeader}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 10, marginBottom: 28 }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  border: "2px solid #000000",
                  borderRadius: 4,
                  padding: "24px 30px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", whiteSpace: "pre-line" }}>
                  {isTitle}
                </div>
                <div style={{ fontFamily: ibmPlexMonoFamily, fontSize: 13, color: "#94A3B8", marginTop: 12 }}>
                  {isDetail}
                </div>
              </div>

              <div style={{ fontFamily: ibmPlexMonoFamily, fontSize: 22, fontWeight: 900, color: "#94A3B8" }}>
                ≠
              </div>

              <div
                style={{
                  flex: 1,
                  backgroundColor: "#F8FAFC",
                  border: "2px dashed #94A3B8",
                  borderRadius: 4,
                  padding: "24px 30px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", color: "#475569", whiteSpace: "pre-line" }}>
                    {notTitle}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "52%",
                      left: -6,
                      width: `${strikeProgress}%`,
                      height: 6,
                      backgroundColor: "#DC2626",
                      borderRadius: 3,
                      transform: "rotate(-2deg)",
                      boxShadow: "0 2px 6px rgba(220, 38, 38, 0.4)",
                    }}
                  />
                </div>
                <div style={{ fontFamily: ibmPlexMonoFamily, fontSize: 13, color: "#64748B", marginTop: 12 }}>
                  {notDetail}
                </div>
              </div>
            </div>

            <div
              style={{
                transform: `translateY(${s3BannerY}px)`,
                opacity: s3BannerOp,
                borderTop: "1.5px solid rgba(0,0,0,0.12)",
                paddingTop: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: ibmPlexMonoFamily,
                fontSize: 12,
                color: "#475569",
              }}
            >
              <span>{safeguardNote}</span>
              <span style={{ fontWeight: 700, color: "#000000" }}>VOX EDITORIAL AUDIT STANDARD</span>
            </div>
          </div>
        </div>
      )}

      {/* Foley Sound Effects */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={12}><Audio src={staticFile("sfx/click.wav")} volume={0.3} /></Sequence>
      <Sequence from={24}><Audio src={staticFile("sfx/pop.wav")} volume={0.25} /></Sequence>
      <Sequence from={36}><Audio src={staticFile("sfx/click.wav")} volume={0.28} /></Sequence>
      <Sequence from={62}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      {auditRows.map((_, idx) => (
        <Sequence key={idx} from={72 + idx * 10}>
          <Audio src={staticFile("sfx/click.wav")} volume={0.32} />
        </Sequence>
      ))}
      <Sequence from={140}><Audio src={staticFile("sfx/whoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={152}><Audio src={staticFile("sfx/pop.wav")} volume={0.28} /></Sequence>
      <Sequence from={162}><Audio src={staticFile("sfx/thud.wav")} volume={0.4} /></Sequence>
      <Sequence from={172}><Audio src={staticFile("sfx/camera_click.wav")} volume={0.25} /></Sequence>
    </div>
  );
};
