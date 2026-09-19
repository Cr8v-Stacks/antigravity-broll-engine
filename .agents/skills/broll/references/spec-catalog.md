# 📚 The Canonical Design Specs (Archetype Catalog)

> **CRITICAL PHILOSOPHY**: A Spec is an **Addon & Living Blueprint**, not a rigid cage.
> When crafting a B-roll for a script paragraph, the generated animation is an organic mixture of the designated archetype and whatever is creatively correct for the spoken narrative. Never force-feed an entire paragraph into an unfitting static box.
> **ZERO BLOAT MANDATE**: Never add fake category eyebrows, synthetic weight multiplier tags (`WEIGHT: x2`), or script line references to any spec.

---

## Overview Matrix

| Spec # | Archetype Name | Visual Purpose | Typical Triggers | Key Remotion Elements |
| :--- | :--- | :--- | :--- | :--- |
| **Spec 1** | `ProductSpec` | Hardware showcase & modular specs | Introducing hardware, unboxing, internal ports, modular batteries | Hero cutout, orbiting spec callouts, brand pedestal glow, exploded view |
| **Spec 2** | `RatingScore` | Broadcaster scoreboards & review marks | Category ratings, benchmark verdicts, numerical test scores | Clean category title, smooth progress bars, authoritative numerical score, zero fake weight pills |
| **Spec 3** | `Comparison` | Conceptual dichotomy & versus splits | Hardware vs Software, OTA Patch vs Recall, trade-offs | Compact Neo-Brutalist cards (485px height), edge-aligned product frames, docked verdict stamps |
| **Spec 4** | `MetricTelemetry` | Independent lab tests & electrical gauges | Decibel measurements, temperatures, charging efficiency | Animated VU meter needle, mercury tube, live 24h waveform |
| **Spec 5** | `QuoteReceipt` | Community forum evidence & dark-mode cards | Reddit complaints, Facebook groups, moderator posts | High-fidelity forum card, sweeping yellow highlighter (permanent text) |
| **Spec 6** | `StatementSpec` | Provocative thesis hooks & giant stat punches | Hard truths, big numbers (£1,000+), turning points | Large typography, lone temporal words, asteroid stamp slam |
| **Spec 7** | `SequentialEmphasis` | Multi-beat lists & comma-separated items | Sequential brand mentions, comma-separated symptoms | Isolated subject entrances, push-and-pull spatial shifts |
| **Spec 8** | `ForensicAudit` | Dense multi-criteria audits & deep investigations | Multi-factor teardowns, 4-6 numbered audit rows | Hero persistence glide, staggered mechanical clicks, rubber verdict stamp |
| **Spec 9** | `ChapterTransition` | 6.0s Editorial Chapter Cards & Retention Hooks | Narrative section breaks, act pivots, structural roadmap | 6.0s (180f), OffthreadVideo backdrop, high-tension retention curiosity hook in quotes, zero voiceover |

---

## Detailed Specifications

### SPEC 1: `ProductSpec`
- **Visual Choreography**:
  1. *Entrance (f0 - f55)*: Product zooms and slides up into dead-center stage with spring damping.
  2. *Spatial Reveal (f55 - f175)*: Product smoothly translates to the right stage, making space for 3 technical callout cards to appear sequentially on the left.
  3. *Exit (f175+)*: Caliper lines collapse and product pushes off-screen.
- **Remotion Implementation**: `src/specs/Spec1_ProductSpec.tsx`
- **Creative Adaptation**: Replace generic 3D cubes with authentic manufacturer PNG cutouts or exploded CAD schematics.
- **Anti-Slop Rule**: Primary brand and product model text only. Zero category eyebrows.

---

### SPEC 2: `RatingScore`
- **Visual Choreography**:
  1. *Category Header (f0 - f40)*: Clean editorial category title enters with authoritative spring. **NO `WEIGHT: x2` badges or decorative metadata pills.**
  2. *Scoreboard Fill (f40 - f180)*: Contender progress bars animate horizontally from 0 to final mark with synchronized `click.wav`.
  3. *Final Score Lock (f180 - f240)*: Clear numerical grade locks in place with definitive audio hit.
- **Remotion Implementation**: `src/specs/Spec2_RatingScore.tsx`

---

### SPEC 3: `Comparison`
- **Visual Choreography & Neo-Brutalist Geometry**:
  1. *Concept A (f0 - f85)*: First concept card occupies center stage.
  2. *Concept B (f85 - f175)*: Second opposing concept card enters, challenging the first.
  3. *Versus Showdown (f175 - f270)*: Screen locks into a side-by-side dual contrast split.
- **Neo-Brutalist Design Standards**:
  - **Compact Card Height**: Strictly constrained to **480px – 500px** height. NEVER stretch cards across the full screen height (which creates massive empty dead space).
  - **Edge-Aligned Product Framing**: Product images must sit inside dedicated brutalist frames (`border: 2px solid #0F172A`, subtle `#F8FAFC` background) spanning the full width of card inner margins. NEVER float cutouts centered while text is left-aligned.
  - **Docked Verdict Badges**: Verdict stamps dock directly beneath bullet specs (`marginTop: 12px`) with zero dead white space.
  - **Borders & Shadows**: `3px solid #0F172A` borders, `8px 8px 0px #0F172A` hard tactile drop shadow, `borderRadius: 6px-8px`.
  - **Zero Eyebrow / Zero Line Reference Rule**: Primary concept titles only (`SOFTWARE PATCH`, `FACTORY RECALL`). Never render `Lines 145 to 175` or `THE NATURE OF SOFTWARE`.
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
  - **Zero Eyebrows**: Audit title and criteria only. No synthetic methodology pills.
- **Remotion Implementation**: `src/specs/Spec8_ForensicAudit.tsx`

---

### SPEC 9: `ChapterTransition`
- **Visual Choreography**:
  - 1. *Background Canvas (f0 - f180)*: Ambient OEM video running via `<OffthreadVideo>` with slow camera pan or zoom.
  - 2. *Neo-Brutalist Chapter Card (f0 - f25)*: Card slides in with `paper_slide.wav` (Frame 0) and locks with `thud.wav` (Frame 8). Solid `#FFFFFF` card, `3.5px solid #0F172A`, `10px 10px 0px #0F172A` hard shadow.
  - 3. *Script Chapter Title*: Exact chapter title derived directly from the spoken script (e.g. `The Balcony Shading Trap`).
  - 4. *High-Tension Retention Curiosity Hook*: Provocative viewer open-loop question in quotes (`“Can bypass diodes save your harvest when one leaf falls?”`).
  - 5. *Hold & Transition (f25 - f180)*: Authoritative 5.0s visual hold, giving viewers time to read the hook before cutting cleanly to the chapter scene.
- **Timing & Audio Laws**:
  - **Duration**: Exactly **6.0 seconds (180 frames @ 30fps)**.
  - **Zero Voiceover**: Designed to be chopped in the edit timeline. Foley only (`paper_slide.wav`, `click.wav`, `thud.wav`).
  - **`<OffthreadVideo>` Mandatory**: Never use HTML5 `<Video>` for scrolling or panning clips to avoid stutter.
  - **Zero Eyebrow / Zero Timecode Law**: NEVER render fake tags like `TIMECODE 02:00` or uppercase category ribbons.
