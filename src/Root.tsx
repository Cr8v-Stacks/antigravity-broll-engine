import React from "react";
import { Composition } from "remotion";

import { Spec1_ProductSpec } from "./specs/Spec1_ProductSpec";
import { Spec2_RatingScore } from "./specs/Spec2_RatingScore";
import { Spec3_Comparison } from "./specs/Spec3_Comparison";
import { Spec4_MetricTelemetry } from "./specs/Spec4_MetricTelemetry";
import { Spec5_QuoteReceipt } from "./specs/Spec5_QuoteReceipt";
import { Spec6_StatementSpec } from "./specs/Spec6_StatementSpec";
import { Spec7_SequentialEmphasis } from "./specs/Spec7_SequentialEmphasis";
import { Spec8_ForensicAudit } from "./specs/Spec8_ForensicAudit";

export const Root: React.FC = () => {
  return (
    <>
      {/* =========================================================================
          CANONICAL REUSABLE DESIGN SPECS (ARCHETYPES 1 - 8)
          These are pre-built reference compositions you can preview, adapt, and build on.
          ========================================================================= */}

      {/* SPEC 1: Hardware Hero Breakdown */}
      <Composition
        id="Spec1_ProductSpec"
        component={Spec1_ProductSpec}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          brandName: "ECOFLOW",
          modelName: "STREAM ULTRA X",
          tagline: "4x MPPT • EXPANDABLE 3.84 KWH",
          imageSrc: "product_images/ecoflow_stream_ultra_x_studio.png",
          accentColor: "#3E7BFA",
          specs: [
            { label: "INPUTS", value: "4 Independent MPPTs" },
            { label: "STORAGE", value: "Up to 3.84 kWh LiFePO4" },
            { label: "REGULATION", value: "UK G98 / CE Certified" },
          ],
        }}
      />

      {/* SPEC 2: Broadcaster Scoreboard */}
      <Composition
        id="Spec2_RatingScore"
        component={Spec2_RatingScore}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          categoryTitle: "CATEGORY 1: HARDWARE & PHYSICAL DESIGN",
          weightMultiplier: "WEIGHT: x2 (CRITICAL)",
          scores: [
            { brand: "ECOFLOW", model: "STREAM ULTRA X", score: 4.2, color: "#3E7BFA", receipt: "38.8kg Heavy Cast Unit" },
            { brand: "ZENDURE", model: "HYPER 2000", score: 4.6, color: "#E8A93B", receipt: "Modular Stack Flexibility" },
            { brand: "ANKER", model: "SOLARBANK 2 PRO", score: 4.8, color: "#E5493F", receipt: "All-in-One Unibody Cleanliness" },
          ],
        }}
      />

      {/* SPEC 3: Conceptual Split & Paradox */}
      <Composition
        id="Spec3_Comparison"
        component={Spec3_Comparison}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          headerTitle: "SOFTWARE PATCH VS FACTORY RECALL",
          firstWordsCue: "Before looking at specific quirks",
        }}
      />

      {/* SPEC 4: Metric & Telemetry Gauges */}
      <Composition
        id="Spec4_MetricTelemetry"
        component={Spec4_MetricTelemetry}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          headline: "INDEPENDENT ACOUSTIC EMISSION AUDIT",
          metricLabel: "SOUND PRESSURE LEVEL",
          startValue: 25.0,
          targetValue: 39.1,
          unit: "dBA",
          baselineLabel: "CLAIMED SPECIFICATION",
          baselineValue: "0 dBA (SILENT)",
          findingNote: "39.1 dBA measured under peak charging load",
        }}
      />

      {/* SPEC 5: Forum Evidence & Highlighter Receipt */}
      <Composition
        id="Spec5_QuoteReceipt"
        component={Spec5_QuoteReceipt}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          platform: "REDDIT • r/BALCONYSOLAR",
          sourceHandle: "u/solar_enthusiast_de",
          timestamp: "02:14 AM • VERIFIED THREAD",
          quotePart1: "After the latest firmware update, my companion app reported ",
          quoteHighlight: "system completely frozen at 0W output",
          quotePart2: " despite direct midday sunlight hitting the panels.",
          contextNote: "Confirmed by 14 independent system owners in Europe",
          firstWordsCue: "You find frozen companion apps",
        }}
      />

      {/* SPEC 6: Kinetic Statement & Large Stat Punch */}
      <Composition
        id="Spec6_StatementSpec"
        component={Spec6_StatementSpec}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          surtitle: "THE £1,000 HARD TRUTH",
          firstWordsCue: "Before you spend over £1,000",
        }}
      />

      {/* SPEC 7: Multi-Beat Sequential Emphasis */}
      <Composition
        id="Spec7_SequentialEmphasis"
        component={Spec7_SequentialEmphasis}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          categoryTitle: "THREE CONTENDERS • THE MARKET LEADERS",
          mainStatement: "Three distinct engineering philosophies compete for balcony dominance.",
        }}
      />

      {/* SPEC 8: Multi-Pillar Forensic Audit */}
      <Composition
        id="Spec8_ForensicAudit"
        component={Spec8_ForensicAudit}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          eyebrow: "INVESTIGATIVE AUDIT",
          headline: "SYSTEM INTEGRITY REPORT",
          stampLabel: "EDITORIAL VERDICT",
        }}
      />

      {/* =========================================================================
          USER DELIVERABLE PRODUCTIONS
          New motion graphic compositions are added below as you produce B-rolls.
          ========================================================================= */}
    </>
  );
};
