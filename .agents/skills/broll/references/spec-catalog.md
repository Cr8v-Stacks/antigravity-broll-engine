# 📚 The 8 Canonical Design Specs (Archetype Catalog)

> **CRITICAL PHILOSOPHY**: A Spec is an **Addon & Living Blueprint**, not a rigid cage.
> When crafting a B-roll for a script paragraph, the generated animation is an organic mixture of the designated archetype and whatever is creatively correct for the spoken narrative. Never force-feed an entire paragraph into an unfitting static box.

---

## Overview Matrix

| Spec # | Archetype Name | Visual Purpose | Typical Triggers | Key Remotion Elements |
| :--- | :--- | :--- | :--- | :--- |
| **Spec 1** | `ProductSpec` | Hardware showcase & modular specs | Introducing hardware, unboxing, internal ports, modular batteries | Hero cutout, orbiting spec callouts, brand pedestal glow, exploded view |
| **Spec 2** | `RatingScore` | Broadcaster scoreboards & review marks | Category ratings, benchmark verdicts, star ratings | Weighted multiplier tag, smooth progress bars, receipt badges |
| **Spec 3** | `Comparison` | Conceptual dichotomy & versus splits | Hardware vs Software, OTA Patch vs Recall, trade-offs | Dual cards, glowing neon divider seam, side-by-side locked state |
| **Spec 4** | `MetricTelemetry` | Independent lab tests & electrical gauges | Decibel measurements, temperatures, charging efficiency | Animated VU meter needle, mercury tube, live 24h waveform |
| **Spec 5** | `QuoteReceipt` | Community forum evidence & dark-mode cards | Reddit complaints, Facebook groups, moderator posts | High-fidelity forum card, sweeping yellow highlighter (permanent text) |
| **Spec 6** | `StatementSpec` | Provocative thesis hooks & giant stat punches | Hard truths, big numbers (£1,000+), turning points | Large typography, spring tag drop, asteroid stamp slam |
| **Spec 7** | `SequentialEmphasis` | Multi-beat lists & comma-separated items | Sequential brand mentions, comma-separated symptoms | Isolated subject entrances, push-and-pull spatial shifts |
| **Spec 8** | `ForensicAudit` | Dense multi-criteria audits & deep investigations | Multi-factor teardowns, 4-6 numbered audit rows | Hero persistence glide, staggered mechanical clicks, verdict stamp |

---

## Detailed Specifications

### SPEC 1: `ProductSpec`
- **Visual Choreography**:
  1. *Entrance (f0 - f55)*: Product zooms and slides up into dead-center stage with spring damping.
  2. *Spatial Reveal (f55 - f175)*: Product smoothly translates to the right stage, making space for 3 technical callout cards to appear sequentially on the left.
  3. *Exit (f175+)*: Caliper lines collapse and product pushes off-screen.
- **Remotion Implementation**: `src/specs/Spec1_ProductSpec.tsx`
- **Creative Adaptation**: Replace generic 3D cubes with authentic manufacturer PNG cutouts or exploded CAD schematics.

---

### SPEC 2: `RatingScore`
- **Visual Choreography**:
  1. *Category Header (f0 - f40)*: Category title and weight multiplier badge (`WEIGHT: x2`) drop in.
  2. *Scoreboard Fill (f40 - f180)*: 3 contender progress bars animate horizontally from 0 to final mark out of 5.
  3. *Evidence Tags (f180 - f240)*: Sub-badges land on the right with receipt proof.
- **Remotion Implementation**: `src/specs/Spec2_RatingScore.tsx`

---

### SPEC 3: `Comparison`
- **Visual Choreography**:
  1. *Concept A (f0 - f85)*: First concept card occupies center stage.
  2. *Concept B (f85 - f175)*: Second opposing concept card enters, challenging the first.
  3. *Versus Showdown (f175 - f270)*: Screen locks into a 50/50 dual contrast split separated by a luminous vertical seam.
- **Remotion Implementation**: `src/specs/Spec3_Comparison.tsx`

---

### SPEC 4: `MetricTelemetry`
- **Visual Choreography**:
  1. *Baseline (f0 - f75)*: Manufacturer claim establishes context.
  2. *Measurement Sweep (f75 - f165)*: Live animated needle or gauge sweeps into the caution/danger zone.
  3. *Discrepancy Callout (f165 - f270)*: Comparative real-world analog appears to ground the measurement.
- **Remotion Implementation**: `src/specs/Spec4_MetricTelemetry.tsx`

---

### SPEC 5: `QuoteReceipt`
- **Visual Choreography**:
  1. *Card Entrance (f0 - f40)*: Dark-mode forum post card scales in with subtle perspective.
  2. *Highlighter Sweep (f40 - f115)*: Glowing yellow highlighter sweeps across the key quote.
  3. *Permanent Text Law*: Text remains 100% visible before, during, and after the sweep.
- **Remotion Implementation**: `src/specs/Spec5_QuoteReceipt.tsx`

---

### SPEC 6: `StatementSpec`
- **Visual Choreography**:
  1. *Big Stat Punch (f0 - f80)*: Massive number (e.g. `£1,000+`) drops with dramatic swinging spring.
  2. *Core Statement (f80 - f170)*: Kinetic words reveal the central video paradox.
  3. *Takeaway (f170 - f270)*: Definitive summary card lands with authoritative sound.
- **Remotion Implementation**: `src/specs/Spec6_StatementSpec.tsx`

---

### SPEC 7: `SequentialEmphasis`
- **Visual Choreography**:
  - Item 1 enters center -> glides left as Item 2 enters center -> Item 3 enters right -> locked tri-split showdown.
- **Remotion Implementation**: `src/specs/Spec7_SequentialEmphasis.tsx`

---

### SPEC 8: `ForensicAudit`
- **Visual Choreography**:
  - Scene 1: Persistent hero subject establishes context, then glides smoothly to the left edge.
  - Scene 2: 4 to 6 numbered forensic criteria rows animate in sequentially with crisp mechanical clicks.
  - Scene 3: Centered definitive verdict card slams down with rubber stamp punch.
- **Remotion Implementation**: `src/specs/Spec8_ForensicAudit.tsx`
