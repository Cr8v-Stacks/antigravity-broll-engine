---
name: broll
description: Broadcast-grade Remotion motion graphics B-roll engine. Transforms script paragraphs and sentences into studio B-rolls with synchronous acoustic Foley sound design, canonical specs (1-8), and interactive click-and-choose onboarding.
---

# 🎬 Broadcast Motion Graphics & B-Roll Production Engine

This skill powers the end-to-end transformation of YouTube video scripts into broadcast-grade, editorial motion graphics (in the visual language of Vox, Johnny Harris, Bloomberg, MKBHD, and Cleo Abram).

---

## 1. Capabilities & Scope Briefing

### What This Engine Does:
- Converts specific script paragraphs, spoken claims, or thesis hooks into **individual, broadcast-grade B-roll clips** (typically 3.0s to 15.0s in length).
- Implements spatial multi-scene staging, progressive disclosure, and kinetic typography.
- Integrates frame-accurate **tactile acoustic Foley sound design** (`swoosh.wav`, `click.wav`, `pop.wav`, `thud.wav`, `draw.wav`, `stamp_slam.wav`).
- Utilizes 8 canonical, reusable **Design Spec Archetypes** as modular building blocks.
- Delivers clean, broadcast-ready H.264 MP4 deliverables directly into `motion_clips/`.

### What This Engine Does NOT Do (Important Scope Boundary):
- It does **NOT** generate a full-length 15-minute video in one monolithic render.
- Real documentary editing is modular: this engine crafts dedicated B-roll assets for **particular sections or paragraphs**, which are then assembled onto the master editing timeline (Premiere Pro, DaVinci Resolve, Final Cut).

---

## 2. The Golden Philosophy: Specs are Addons, Not Rigid Molds

> **THE SPEC GUIDANCE PRINCIPLE**:
> The 8 canonical specs are **living blueprints and modular addons, NOT rigid templates.**
> A generated B-roll must be a creative, organic mixture of the chosen spec archetype and whatever is creatively correct for that specific script sentence. 
> Never force an entire paragraph into an ill-fitting cookie-cutter box. If the narrative evolves from a hardware introduction into an owner complaint, the visual must glide seamlessly from Spec 1 (`ProductSpec`) into Spec 5 (`QuoteReceipt`) using **Hero Subject Persistence** and **Spatial Staging**.

---

## 3. The "Zero Assumption" Stop-Gate Protocol

### 🚨 ABSOLUTE MANDATE: NEVER ASSUME & NEVER WRITE CODE ON THE FIRST TURN
Whenever `/broll` is triggered or the user asks for B-roll graphics:
1. **DO NOT start coding.**
2. **DO NOT assume** visual directions, colors, fonts, or specs.
3. **DO NOT ask open-ended questions** that require the user to type long essays.
4. **YOU MUST CALL THE `ask_question` TOOL** to present clean, interactive pop-up modals where the user simply clicks and chooses!

---

## 4. The Interactive Onboarding Workflow (`ask_question` Tree)

When `/broll` is invoked or a new B-roll task begins, execute this structured inquiry:

### Step 1: Clarify Intent & Scope
Use `ask_question` with these options:
- `(Recommended) Create a high-retention B-roll for a specific script paragraph/sentence`
- `Scout an entire script to map out B-roll candidates and timing`
- `Explore and preview the 8 Spec Archetypes before deciding`
- `Configure project design system (colors, fonts, output path)`

### Step 2: Establish Visual Mood & Backdrop
Use `ask_question` to determine the environment:
- `(Recommended) Vox / Keynote Paper White (#F8FAFC) — Clean editorial, high contrast, documentary focus`
- `Dark Slate Blueprint (#0B111E) — Technical slate, micro-dot matrix, telemetry & data meters`
- `Deep Minimal Obsidian (#05070B) — Hardware pedestal, dramatic warm amber radial glow`

### Step 3: Select Typography Pairing
Use `ask_question` to select font styling:
- `(Recommended) Editorial Tech: Space Grotesk (Headings) + IBM Plex Mono (Data/Labels)`
- `Modern Broadcast: Inter / SF Pro (Clean, universal, documentary sans)`
- `Kinetic Punch: High-contrast heavy sans (Optimized for lone words and giant numbers)`

### Step 4: Choose the Spec Guidance Archetype
Present the 8 Archetypes, reminding the user that the spec is a **creative addon/guide**:
- `Spec 1: ProductSpec — Hardware hero, internal specs, callout pills, modular assembly`
- `Spec 2: RatingScore — Broadcaster scoreboard, weighted multipliers, benchmark badges`
- `Spec 3: Comparison — Conceptual split-screen, versus showdown, OTA vs Recall`
- `Spec 4: MetricTelemetry — Live decibel VU needle, temperature gauges, price waveforms`
- `Spec 5: QuoteReceipt — Forum post cards (Reddit/forums), sweeping felt-tip highlighter`
- `Spec 6: StatementSpec — Provocative thesis hooks, lone words, giant stat punches (£1,000+)`
- `Spec 7: SequentialEmphasis — Comma-separated list items, sequential subject entrances`
- `Spec 8: ForensicAudit — Dense multi-pillar audit rows, mechanical clicks, verdict stamp`
- `Custom / Multi-Spec Blend — Fluid combination across multiple archetypes`

### Step 5: The 3-Concept Ideation Step (No Code Yet!)
Once preferences are established, analyze the script excerpt and present **2 to 3 distinct creative concepts**:
- **Concept 1**: Minimalist Editorial / Kinetic Typography focus
- **Concept 2**: Physical Hardware & Spatial Displacement focus
- **Concept 3**: Authentic Evidence / Document Reality / Mixed Media focus
Use `ask_question` to let the user select the winning concept before writing any code.

---

## 5. Canonical Deliverable Naming & Output Law

To ensure total clarity on where files live and which section they correspond to:

### 1. Canonical Delivery Directory:
Every finished MP4 deliverable **MUST** be rendered directly to:
📁 **`motion_clips/`**

### 2. Canonical Filename Formula:
`motion_<index>_<spoken_cue_slug>.mp4`
- **Index**: 2-digit sequential candidate number (e.g. `01`, `07`, `19`).
- **Slug**: 3 to 6 words summarizing the spoken voiceover cue or topic.
- **Examples**:
  - `motion_01_before_you_spend_over_1000.mp4`
  - `motion_04_frozen_companion_apps.mp4`
  - `motion_07_ecoflow_brings_the_stream_ultra_x.mp4`
  - `motion_14_software_patch_vs_recall.mp4`

### 3. Update Delivery Manifest:
Every render must be appended to `motion_clips/broll_manifest.md` with:
- Clip Number
- Filename
- First 6 Words of Script Paragraph
- Duration in Seconds & Frames
- Spec Archetype Used

### 4. Zero Stale Files Policy:
Always purge temporary PNG stills from `preview_frames/` or `out/` after verification. Never leave duplicate or stale renders in the project.

---

## 6. Core Motion Design Commandments (Anti-AI Slop)

1. **The Cardinal Sin (The Full Canvas Trap)**:
   - Never open a scene at frame 0 with cards and text already sitting on the canvas.
   - Elements arrive word-by-word with the spoken audio. Maintain unresolved tension.
2. **The Atomic Staggering Law**:
   - If elements can be animated separately, **never animate them together**.
   - Multiple subjects, model names, or metrics must enter sequentially with isolated Foley hits.
3. **The "Lone Words" Rule**:
   - Action words, model names (`Hyper 2000`), dates, and list items must exist **alone on screen** with zero clutter or borders.
4. **Dead-Center Vertical Alignment (Anti-Top Bunching)**:
   - Never align elements to the top edge when the bottom space is unused. Center content vertically (`top: 50%`, `transform: translateY(-50%)`).
5. **Hero Subject Persistence (Anti-Disjointed Cut Law)**:
   - When transitioning between scenes within a paragraph, glide the persisting hero subject to dead-center stage instead of abruptly cutting to black.
6. **Permanent Text Visibility (The Highlighter Rule)**:
   - Never let text disappear or turn illegible during a highlighter sweep. The highlighter is a colored background gradient sweeping behind permanent high-contrast text.
7. **Absolute Media Relevance**:
   - Never use generic, unrelated stock footage (wind turbines, random drone shots) as filler. Every asset must directly depict the exact brand or topic discussed.
8. **The "Premiere Pro" Subtitle Crop**:
   - When using source videos with lower-third subtitles, scale up (`115%–125%`) and translateY to push subtitles completely off-screen.

---

## 7. Acoustic Foley Sound Design (`public/sfx/`)

Every visual entrance or state transition **MUST** have a synchronized Foley hit:
- `swoosh.wav`: Smooth spatial transitions, card slides, camera dollies.
- `click.wav`: Bullet points, spec rows, toggle switches, caliper triggers.
- `pop.wav`: Badges, tags, pill callouts, socket snaps.
- `thud.wav`: Solid hardware lock, crate landing, heavy data arrival.
- `stamp_slam.wav`: Decisive audit stamps, warning seals, verdict slams.
- `draw.wav`: Highlighter sweeps, laser scans, oscilloscope lines.
- `camera_click.wav`: Evidence screenshots, photo receipts, lab test charts.

---

## 8. Windows PowerShell Execution Rule

Because PowerShell execution policy blocks raw `npx` scripts on Windows, **always run Remotion commands via `cmd /c`**:

```powershell
# Typecheck
cmd /c npx tsc --noEmit

# Render Still for Inspection
cmd /c npx remotion still <CompositionID> preview_frames/frame_60.png --frame=60

# Render Master Deliverable
cmd /c npx remotion render <CompositionID> motion_clips/<canonical_name>.mp4
```

---

## 9. Reference Documentation Index

For deeper technical patterns, consult the offline reference guides:
- [The 8 Canonical Specs Catalog](./references/spec-catalog.md)
- [Acoustic Foley Soundboard & Audio Timing](./references/foley-soundboard.md)
- [Anti-AI Slop & Visual Design Commandments](./references/anti-ai-slop.md)
