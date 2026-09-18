import React from "react";
import {
  Audio,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { StudioDarkNoiseBackdrop } from "../components/BackdropSystem";
import { ShieldCheckIcon } from "../components/Icons";

export interface EmphasisItem {
  brand: string;
  model: string;
  accentColor: string;
  imageSrc: string;
  badge: string;
  role: string;
}

export interface Spec7Props {
  categoryTitle?: string;
  mainStatement?: string;
  items?: EmphasisItem[];
  footerNote?: string;
  firstWordsCue?: string;
}

const DEFAULT_ITEMS: EmphasisItem[] = [
  {
    brand: "EcoFlow",
    model: "Stream Ultra X",
    accentColor: "#007AFF",
    imageSrc: "product_images/ecoflow/ecoflow_stream_ultra_x_studio.png",
    badge: "3.84 kWh / 4x MPPT",
    role: "The Modular Contender",
  },
  {
    brand: "Zendure",
    model: "Hyper 2000",
    accentColor: "#D97706",
    imageSrc: "product_images/zendure/zendure_hyper_2000_cutout.png",
    badge: "Local MQTT / 87% Eff.",
    role: "The Smart-Home Inverter",
  },
  {
    brand: "Anker SOLIX",
    model: "Solarbank 2 Pro",
    accentColor: "#EA580C",
    imageSrc: "product_images/anker/anker_solix_solarbank_plus_battery_stack.png",
    badge: "Consumer Friendly DIY",
    role: "The Mainstream Solution",
  },
];

export const Spec7_SequentialEmphasis: React.FC<Spec7Props> = ({
  categoryTitle = "INVESTIGATIVE SCOPE // 3 DOMINANT BRANDS",
  mainStatement = "We investigated the 3 dominant brands on the market right now:",
  items = DEFAULT_ITEMS,
  footerNote = "7 WEIGHTED BENCHMARK CATEGORIES • 6-MONTH TELEMETRY",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header spring
  const headerSpring = spring({ frame, fps, config: { damping: 14 } });
  const headerY = interpolate(headerSpring, [0, 1], [-30, 0]);
  const headerOp = interpolate(headerSpring, [0, 1], [0, 1]);

  // Card 1 (EcoFlow): enters center at f0, shifts left at f55
  const c1Entrance = spring({ frame: frame - 6, fps, config: { damping: 13, mass: 0.8 } });
  const c1ShiftLeft = spring({ frame: frame - 55, fps, config: { damping: 14, mass: 0.9 } });

  // Card 2 (Zendure): enters center at f55, shifts to middle at f115
  const c2Entrance = spring({ frame: frame - 58, fps, config: { damping: 13, mass: 0.8 } });
  const c2Lock = spring({ frame: frame - 115, fps, config: { damping: 14, mass: 0.9 } });

  // Card 3 (Anker SOLIX): enters right at f115
  const c3Entrance = spring({ frame: frame - 118, fps, config: { damping: 13, mass: 0.8 } });

  // Footer Lock Spring (f175)
  const footerSpring = spring({ frame: frame - 175, fps, config: { damping: 12, mass: 0.7 } });
  const footerScale = interpolate(footerSpring, [0, 1], [0.8, 1]);
  const footerOp = interpolate(footerSpring, [0, 1], [0, 1]);

  // Coordinate Calculations:
  // Item 1 X: 0 (center) -> -520 (left)
  const c1X = interpolate(c1ShiftLeft, [0, 1], [0, -520]);
  const c1Scale = interpolate(c1Entrance, [0, 1], [0.6, 1.1]) - interpolate(c1ShiftLeft, [0, 1], [0, 0.1]);
  const c1Op = interpolate(c1Entrance, [0, 1], [0, 1]);

  // Item 2 X: 0 (center)
  const c2Scale = interpolate(c2Entrance, [0, 1], [0.6, 1.1]) - interpolate(c2Lock, [0, 1], [0, 0.1]);
  const c2Op = interpolate(c2Entrance, [0, 1], [0, 1]);

  // Item 3 X: +520 (right)
  const c3Scale = interpolate(c3Entrance, [0, 1], [0.6, 1.0]);
  const c3Op = interpolate(c3Entrance, [0, 1], [0, 1]);

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
      <StudioDarkNoiseBackdrop ambientGlow="rgba(0, 122, 255, 0.06)" />

      {/* SYNCHRONIZED STUDIO FOLEY AUDIO */}
      <Sequence from={0}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={12}><Audio src={staticFile("sfx/click.wav")} volume={0.28} /></Sequence>
      <Sequence from={55}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={68}><Audio src={staticFile("sfx/click.wav")} volume={0.28} /></Sequence>
      <Sequence from={115}><Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} /></Sequence>
      <Sequence from={128}><Audio src={staticFile("sfx/click.wav")} volume={0.28} /></Sequence>
      <Sequence from={180}><Audio src={staticFile("sfx/thud.wav")} volume={0.35} /></Sequence>

      {/* Main Content Stage */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        {/* Header Eyebrow & Main Statement */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 36,
            transform: `translateY(${headerY}px)`,
            opacity: headerOp,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#38BDF8",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {categoryTitle}
          </div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {mainStatement}
          </h1>
        </div>

        {/* Dynamic Multi-Brand Showcase Area */}
        <div
          style={{
            position: "relative",
            width: 1560,
            height: 520,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Card 1: EcoFlow */}
          {frame >= 5 && (
            <div
              style={{
                position: "absolute",
                transform: `translateX(${c1X}px) scale(${c1Scale})`,
                opacity: c1Op,
                width: 440,
                background: "rgba(15, 23, 42, 0.92)",
                border: `2px solid ${frame > 175 ? items[0].accentColor : "rgba(255, 255, 255, 0.16)"}`,
                borderRadius: 18,
                padding: "32px 28px",
                boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 30px ${items[0].accentColor}25`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: frame < 55 ? 30 : 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Img
                  src={staticFile(items[0].imageSrc)}
                  alt={items[0].brand}
                  style={{ maxHeight: 200, maxWidth: 380, objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }}
                />
              </div>

              <div style={{ fontSize: 13, fontWeight: 800, color: items[0].accentColor, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {items[0].role}
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>
                {items[0].brand}
              </h2>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#94A3B8", marginBottom: 14 }}>
                {items[0].model}
              </div>

              <span
                style={{
                  background: "rgba(0, 122, 255, 0.15)",
                  border: `1px solid ${items[0].accentColor}`,
                  color: "#60A5FA",
                  padding: "6px 16px",
                  borderRadius: 6,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.05em",
                }}
              >
                {items[0].badge}
              </span>
            </div>
          )}

          {/* Card 2: Zendure */}
          {frame >= 55 && (
            <div
              style={{
                position: "absolute",
                transform: `scale(${c2Scale})`,
                opacity: c2Op,
                width: 440,
                background: "rgba(15, 23, 42, 0.92)",
                border: `2px solid ${frame > 175 ? items[1].accentColor : "rgba(255, 255, 255, 0.16)"}`,
                borderRadius: 18,
                padding: "32px 28px",
                boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 30px ${items[1].accentColor}25`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: frame >= 55 && frame < 115 ? 30 : 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Img
                  src={staticFile(items[1].imageSrc)}
                  alt={items[1].brand}
                  style={{ maxHeight: 200, maxWidth: 380, objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }}
                />
              </div>

              <div style={{ fontSize: 13, fontWeight: 800, color: items[1].accentColor, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {items[1].role}
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>
                {items[1].brand}
              </h2>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#94A3B8", marginBottom: 14 }}>
                {items[1].model}
              </div>

              <span
                style={{
                  background: "rgba(217, 119, 6, 0.15)",
                  border: `1px solid ${items[1].accentColor}`,
                  color: "#FBBF24",
                  padding: "6px 16px",
                  borderRadius: 6,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.05em",
                }}
              >
                {items[1].badge}
              </span>
            </div>
          )}

          {/* Card 3: Anker SOLIX */}
          {frame >= 115 && (
            <div
              style={{
                position: "absolute",
                transform: `translateX(520px) scale(${c3Scale})`,
                opacity: c3Op,
                width: 440,
                background: "rgba(15, 23, 42, 0.92)",
                border: `2px solid ${frame > 175 ? items[2].accentColor : "rgba(255, 255, 255, 0.16)"}`,
                borderRadius: 18,
                padding: "32px 28px",
                boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 30px ${items[2].accentColor}25`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: frame >= 115 && frame < 175 ? 30 : 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Img
                  src={staticFile(items[2].imageSrc)}
                  alt={items[2].brand}
                  style={{ maxHeight: 200, maxWidth: 380, objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }}
                />
              </div>

              <div style={{ fontSize: 13, fontWeight: 800, color: items[2].accentColor, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {items[2].role}
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "4px 0" }}>
                {items[2].brand}
              </h2>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#94A3B8", marginBottom: 14 }}>
                {items[2].model}
              </div>

              <span
                style={{
                  background: "rgba(234, 88, 12, 0.15)",
                  border: `1px solid ${items[2].accentColor}`,
                  color: "#FB923C",
                  padding: "6px 16px",
                  borderRadius: 6,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.05em",
                }}
              >
                {items[2].badge}
              </span>
            </div>
          )}
        </div>

        {/* Showdown Lock Footer Banner */}
        {frame >= 175 && (
          <div
            style={{
              marginTop: 34,
              transform: `scale(${footerScale})`,
              opacity: footerOp,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(15, 23, 42, 0.9)",
              border: "1.5px solid #F59E0B",
              padding: "10px 24px",
              borderRadius: 8,
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.2)",
            }}
          >
            <ShieldCheckIcon size={20} color="#F59E0B" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: "#F59E0B",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {footerNote}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
