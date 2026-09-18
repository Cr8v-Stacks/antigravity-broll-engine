import React from "react";
import { Audio, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioWhiteBackdrop } from "../components/BackdropSystem";
import { AlertTriangleIcon } from "../components/Icons";

export interface Spec6Props {
  surtitle: string;
  firstWordsCue: string;
}

export const Spec6_StatementSpec: React.FC<Spec6Props> = ({
  surtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // SCENE 1: (0 - 80f / 0 - 2.6s) Hook & £1,000 price tag drop
  // SCENE 2: (80 - 170f / 2.6 - 5.6s) "THERE IS A SERIOUS PROBLEM WITH THE WAY THESE SYSTEMS ARE REVIEWED"
  // SCENE 3: (170 - 270f / 5.6 - 9.0s) 3 Proof Reality Cards & Takeaway

  // Scene 1 Price Tag Drop
  const s1TagSpring = spring({ frame: frame - 18, fps, config: { damping: 12, mass: 0.6 } });
  const s1TagScale = interpolate(s1TagSpring, [0, 1], [2.2, 1]);
  const s1TagRotate = interpolate(s1TagSpring, [0, 1], [25, -4]);

  // Scene 2 Highlight Expand
  const s2Frame = Math.max(0, frame - 80);
  const s2HlSpring = spring({ frame: s2Frame - 20, fps, config: { damping: 14 } });
  const s2HlWidth = interpolate(s2HlSpring, [0, 1], [0, 100]);

  // Scene 3 Cards Pop
  const s3Frame = Math.max(0, frame - 170);
  const c1 = spring({ frame: s3Frame, fps, config: { damping: 12, mass: 0.7 } });
  const c2 = spring({ frame: s3Frame - 12, fps, config: { damping: 12, mass: 0.7 } });
  const c3 = spring({ frame: s3Frame - 24, fps, config: { damping: 12, mass: 0.7 } });

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
      <StudioWhiteBackdrop ambientGlow="rgba(234, 88, 12, 0.03)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}>
        <Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} />
      </Sequence>
      <Sequence from={18}>
        <Audio src={staticFile("sfx/thud.wav")} volume={0.35} />
      </Sequence>
      <Sequence from={80}>
        <Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} />
      </Sequence>
      <Sequence from={100}>
        <Audio src={staticFile("sfx/draw.wav")} volume={0.28} />
      </Sequence>
      <Sequence from={170}>
        <Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} />
      </Sequence>
      <Sequence from={170}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.28} />
      </Sequence>
      <Sequence from={182}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.28} />
      </Sequence>
      <Sequence from={194}>
        <Audio src={staticFile("sfx/click.wav")} volume={0.28} />
      </Sequence>

      {/* SCENE 1: 0 - 80f (£1,000 Hook) */}
      {frame < 85 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 140px",
            opacity: interpolate(frame, [75, 85], [1, 0]),
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#EA580C",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {surtitle}
          </span>
          <h1
            style={{
              fontSize: 66,
              fontWeight: 900,
              color: "#0F172A",
              textAlign: "center",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            Before you spend over{" "}
            <span
              style={{
                display: "inline-block",
                transform: `scale(${s1TagScale}) rotate(${s1TagRotate}deg)`,
                background: "#FACC15",
                color: "#0F172A",
                padding: "4px 22px",
                border: "4px solid #0F172A",
                boxShadow: "5px 5px 0px #0F172A",
                borderRadius: 4,
              }}
            >
              £1,000
            </span>{" "}
            on a plug-in battery...
          </h1>
        </div>
      )}

      {/* SCENE 2: 80 - 175f (The Systemic Turn) */}
      {frame >= 80 && frame < 175 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 140px",
            opacity: interpolate(frame, [80, 90, 165, 175], [0, 1, 1, 0]),
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#DC2626",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            THE SYSTEMIC FLAW
          </span>
          <h1
            style={{
              fontSize: 62,
              fontWeight: 900,
              color: "#0F172A",
              textAlign: "center",
              lineHeight: 1.25,
              maxWidth: 1240,
              margin: 0,
            }}
          >
            There is a serious problem with{" "}
            <span
              style={{
                display: "inline-block",
                background: `linear-gradient(90deg, rgba(234, 88, 12, 0.18) ${s2HlWidth}%, transparent ${s2HlWidth}%)`,
                borderBottom: `4px solid ${s2HlWidth > 5 ? "#EA580C" : "transparent"}`,
                color: "#0F172A",
                padding: "2px 14px",
                borderRadius: 4,
              }}
            >
              the way these systems are reviewed.
            </span>
          </h1>
        </div>
      )}

      {/* SCENE 3: 170 - 270f (3 Forensic Proof Cards) */}
      {frame >= 170 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 100px",
            opacity: interpolate(frame, [170, 180], [0, 1]),
          }}
        >
          <h2
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: "#0F172A",
              marginBottom: 40,
              letterSpacing: "-0.01em",
            }}
          >
            WHAT 2-WEEK UNBOXINGS HIDE FROM REAL BUYERS:
          </h2>

          <div
            style={{
              display: "flex",
              gap: 32,
              width: 1400,
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                flex: 1,
                background: "#FFFFFF",
                border: "3px solid #0F172A",
                boxShadow: "6px 8px 0px #0F172A",
                padding: "32px 28px",
                transform: `scale(${c1})`,
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#DC2626",
                  fontWeight: 900,
                  fontSize: 18,
                  marginBottom: 12,
                }}
              >
                <AlertTriangleIcon size={22} color="#DC2626" /> HONEYMOON BIAS
              </div>
              <p
                style={{
                  fontSize: 18,
                  color: "#334155",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Tested for only 14 days in mild weather with zero winter degradation data.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                flex: 1,
                background: "#FFFFFF",
                border: "3px solid #0F172A",
                boxShadow: "6px 8px 0px #0F172A",
                padding: "32px 28px",
                transform: `scale(${c2})`,
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#EA580C",
                  fontWeight: 900,
                  fontSize: 18,
                  marginBottom: 12,
                }}
              >
                <AlertTriangleIcon size={22} color="#EA580C" /> 55% COLD LOSS
              </div>
              <p
                style={{
                  fontSize: 18,
                  color: "#334155",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Batteries freeze outdoors at 12°C, losing more than half their daily efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                flex: 1,
                background: "#FFFFFF",
                border: "3px solid #0F172A",
                boxShadow: "6px 8px 0px #0F172A",
                padding: "32px 28px",
                transform: `scale(${c3})`,
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#2563EB",
                  fontWeight: 900,
                  fontSize: 18,
                  marginBottom: 12,
                }}
              >
                <AlertTriangleIcon size={22} color="#2563EB" /> 2:00 AM APP FREEZES
              </div>
              <p
                style={{
                  fontSize: 18,
                  color: "#334155",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Server latency causes apps to falsely claim 340W generation in pitch darkness.
              </p>
            </div>
          </div>

          <span
            style={{
              fontSize: 15,
              color: "#64748B",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            6-Month Long-Term Telemetry • Verified Community Evidence
          </span>
        </div>
      )}
    </div>
  );
};
