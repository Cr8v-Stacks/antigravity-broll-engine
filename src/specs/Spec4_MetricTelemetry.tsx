import React from "react";
import { Audio, Img, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { StudioDarkNoiseBackdrop } from "../components/BackdropSystem";
import { AlertTriangleIcon, CheckCircleIcon } from "../components/Icons";

export interface Spec4Props {
  headline?: string;
  metricLabel?: string;
  startValue?: number;
  targetValue?: number;
  unit?: string;
  baselineLabel?: string;
  baselineValue?: string;
  findingNote?: string;
  firstWordsCue?: string;
}

export const Spec4_MetricTelemetry: React.FC<Spec4Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spatial Multi-Scene Choreography:
  // Scene 1: (0 - 75f) Zendure Hardware & Manufacturer Claim
  // Scene 2: (75 - 165f) Acoustic Meter Sweep (25.0 -> 39.1 dBA)
  // Scene 3: (165 - 270f) The Discrepancy & Refrigerator Compressor Hum Context

  const s1Spring = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const s2Spring = spring({ frame: frame - 75, fps, config: { damping: 14 } });
  const s3Spring = spring({ frame: frame - 165, fps, config: { damping: 12, mass: 0.8 } });

  // Digital Decibel Counter Sweep (25.0 to 39.1)
  const currentDb = interpolate(frame, [80, 140], [25.0, 39.1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  // Oscilloscope wave phase
  const wavePhase = frame * 0.25;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <StudioDarkNoiseBackdrop ambientGlow="rgba(239, 68, 68, 0.08)" />

      {/* AUDIO FOLEY */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={75}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.22} /></Sequence>
      <Sequence from={80}><Audio src={staticFile("sfx/click.wav")} volume={0.25} /></Sequence>
      <Sequence from={100}><Audio src={staticFile("sfx/click.wav")} volume={0.25} /></Sequence>
      <Sequence from={120}><Audio src={staticFile("sfx/click.wav")} volume={0.25} /></Sequence>
      <Sequence from={140}><Audio src={staticFile("sfx/pop.wav")} volume={0.28} /></Sequence>
      <Sequence from={165}><Audio src={staticFile("sfx/thud.wav")} volume={0.35} /></Sequence>

      {/* Main Forensic Test Bench Container (Centered) */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        
        {/* Eyebrow & Headline */}
        <div style={{ transform: `scale(${s1Spring})`, textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 10 }}>
            INDEPENDENT LAB ACOUSTICS // ENERGIENERDS
          </div>
          <h1 style={{ fontSize: 50, fontWeight: 900, color: "#FFFFFF", margin: 0, letterSpacing: "-0.01em" }}>
            Acoustic Noise Discrepancy
          </h1>
        </div>

        {/* Forensic Dual Console */}
        <div style={{ display: "flex", gap: 36, width: 1280, alignItems: "stretch" }}>
          
          {/* Left Console: Hardware Profile & Calibrated Telemetry */}
          <div
            style={{
              flex: 1,
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 18,
              padding: "36px 40px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 16, marginBottom: 20 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#D97706", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  TEST SPECIMEN: ZENDURE HYPER 2000
                </span>
                <span style={{ fontSize: 12, color: "#64748B", fontFamily: "monospace" }}>CALIBRATED MIC: 1.0M</span>
              </div>

              {/* Hardware Cutout Thumbnail */}
              <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
                <div style={{ width: 140, height: 110, background: "rgba(255, 255, 255, 0.05)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
                  <Img
                    src={staticFile("product_images/zendure/zendure_hyper_2000_1x_ab2000x_stack.jpg")}
                    alt="Zendure Hyper 2000"
                    style={{ maxHeight: 94, maxWidth: 120, objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>Hybrid Balcony Inverter</div>
                  <div style={{ fontSize: 14, color: "#94A3B8", marginTop: 4 }}>Full load power conversion testing</div>
                </div>
              </div>

              {/* Baseline vs Actual Rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.04)", padding: "12px 18px", borderRadius: 8 }}>
                  <span style={{ fontSize: 15, color: "#94A3B8", fontWeight: 600 }}>Manufacturer Claim</span>
                  <span style={{ fontSize: 17, color: "#10B981", fontWeight: 800, display: "flex", alignItems: "center", gap: 6, fontFamily: "monospace" }}>
                    <CheckCircleIcon size={18} color="#10B981" /> 25.0 dBA (Whisper)
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.3)", padding: "12px 18px", borderRadius: 8 }}>
                  <span style={{ fontSize: 15, color: "#FCA5A5", fontWeight: 700 }}>Independent Lab Result</span>
                  <span style={{ fontSize: 20, color: "#EF4444", fontWeight: 900, fontFamily: "monospace" }}>
                    {currentDb.toFixed(1)} dBA
                  </span>
                </div>
              </div>
            </div>

            {/* Context Note */}
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 15, color: "#94A3B8", lineHeight: 1.45 }}>
              <strong style={{ color: "#F8FAFC" }}>Acoustic Reality:</strong> 39.1 dB is the steady, audible hum of a kitchen refrigerator compressor running outside your bedroom window.
            </div>
          </div>

          {/* Right Console: Precision Laboratory Meter & Spectrogram */}
          <div
            style={{
              flex: 1,
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #334155",
              borderRadius: 18,
              padding: "36px 40px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: `scale(${s2Spring})`,
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#94A3B8", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  SOUND PRESSURE LEVEL (SPL)
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#EF4444", fontSize: 13, fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444", boxShadow: "0 0 8px #EF4444" }} />
                  PEAK MEASUREMENT
                </div>
              </div>

              {/* Large Digital Counter */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 24 }}>
                <span style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace", lineHeight: 1 }}>
                  {currentDb.toFixed(1)}
                </span>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#EF4444", fontFamily: "monospace" }}>
                  dBA
                </span>
              </div>

              {/* Calibrated Precision Stepped Decibel Bar */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: 12, fontFamily: "monospace", marginBottom: 6 }}>
                  <span>20 dB</span>
                  <span style={{ color: "#10B981" }}>25 dB (CLAIM)</span>
                  <span>30 dB</span>
                  <span>35 dB</span>
                  <span style={{ color: "#EF4444" }}>40 dB</span>
                </div>

                {/* Segmented LED Meter */}
                <div style={{ display: "flex", gap: 4, height: 20 }}>
                  {Array.from({ length: 30 }).map((_, i) => {
                    const segDb = 20 + (i / 29) * 25; // 20 to 45 dB
                    const isActive = currentDb >= segDb;
                    let segColor = "#10B981";
                    if (segDb > 28 && segDb <= 35) segColor = "#F59E0B";
                    if (segDb > 35) segColor = "#EF4444";

                    return (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: "100%",
                          borderRadius: 2,
                          background: isActive ? segColor : "rgba(255,255,255,0.06)",
                          boxShadow: isActive ? `0 0 6px ${segColor}` : "none",
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Live Low-Frequency Oscilloscope Waveform */}
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#64748B", letterSpacing: "0.15em", marginBottom: 8 }}>
                  50 HZ COMPRESSOR RESONANCE
                </div>
                <svg width="100%" height="42" viewBox="0 0 400 42">
                  <path
                    d={Array.from({ length: 80 }).reduce<string>((acc, _, i) => {
                      const x = (i / 79) * 400;
                      const y = 21 + Math.sin(i * 0.4 + wavePhase) * (currentDb > 30 ? 14 : 4);
                      return `${acc} ${i === 0 ? "M" : "L"} ${x} ${y}`;
                    }, "")}
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Rubber Discrepancy Stamp */}
            <div
              style={{
                transform: `scale(${s3Spring})`,
                background: "rgba(239, 68, 68, 0.16)",
                border: "2px solid #EF4444",
                borderRadius: 8,
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.25)",
              }}
            >
              <AlertTriangleIcon size={20} color="#EF4444" />
              <span style={{ color: "#EF4444", fontWeight: 900, fontSize: 16, letterSpacing: "0.15em" }}>
                DISCREPANCY: +14.1 dBA OVER SPEC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
