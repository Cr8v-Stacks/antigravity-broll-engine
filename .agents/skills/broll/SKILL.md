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

## 3. The 4 Fundamental User-Experience Commandments

1. **Sequential Questioning (One Step at a Time)**:
   - **NEVER dump a wall of 4 or 5 questions in a single turn.**
   - Guide the user step-by-step: first determine the objective, then ask for the script section, then establish media/visual direction, and finally ideate concepts.
2. **Always Provide "I Trust You / Make the Best Creative Decision"**:
   - For every question regarding styling, typography, colors, or spec choice, ALWAYS include an option:
     `"(Recommended) I trust you — Make the best creative decision based on the script"`.
   - Never block a user who simply wants expert execution without having to pick font names or color hexes.
3. **Media Agility (Don't Force Pure Vector Motion)**:
   - Always offer media sourcing options:
     - Pure Motion Graphics (vector typography, dynamic geometric staging, Foley sound design)
     - Mixed Media (motion graphics + authentic images/video cuts)
     - Local Drive Assets (OEM 4K videos, product cutouts in `public/product_images/`, local folders)
     - Stock Footage Sourcing (Pexels, Pixabay, Mixkit)
     - Web Evidence Receipts (Reddit threads, lab graphs, customer forum screenshots)
4. **In-App Visual Spec Showcase**:
   - Users cannot visualize abstract spec numbers in their head.
   - Present the in-app interactive visual showcase (`spec_showcase.html`) so the user can see, watch, and understand what the specs look like before choosing.

---

## 4. The Interactive Onboarding Workflow (`ask_question` Tree)

When `/broll` is invoked or a new B-roll task begins, execute this structured inquiry **one question at a time**:

### Turn 1: Determine the Objective
Call `ask_question` with a single, clear question:
- **Question**: *"Welcome to the B-Roll Motion Graphics Engine! What would you like to focus on?"*
- **Options**:
  - `(Recommended) Create a high-retention B-roll for a specific script paragraph or spoken cue`
  - `Scout an entire script to map out B-roll candidate opportunities and timing`
  - `Explore and preview the 8 Spec Archetypes before deciding on a direction`
  - `Configure project design system (color palette, typography, deliverable path)`

---

### Turn 2: Receive Script Section & Media Source
Once the user selects their objective:
- Ask for the 1–3 sentence script paragraph they want to animate.
- Ask about **Media & Visual Agility**:
  - `(Recommended) I trust you — Pick the best visual combination for this script section`
  - `Mixed Media: Motion typography blended with authentic product photos & receipts`
  - `Pure Motion Graphics: Vector typography, telemetry gauges, and studio backdrops`
  - `OEM & Local Footage: Use official videos and hardware cutouts from local folders`
  - `Documented Proof: Focus on Reddit cards, forum complaints, and lab test graphs`

---

### Turn 3: Visual Spec Guidance & In-App Showcase
Before asking the user to pick a spec, provide a link to the interactive visual showcase artifact:
`[Open In-App Visual Spec Showcase](file:///.../spec_showcase.html)`
Then call `ask_question`:
- **Question**: *"Which Spec Archetype should serve as your starting guidance addon?"*
- **Options**:
  - `(Recommended) I trust you — Let the narrative dictate the blend of specs`
  - `Spec 1: ProductSpec — Hardware hero, internal specs, exploded CAD, leader lines`
  - `Spec 2: RatingScore — Broadcaster scoreboard, weighted multipliers, review badges`
  - `Spec 3: Comparison — Conceptual split-screen versus, trade-offs, OTA vs Recall`
  - `Spec 4: MetricTelemetry — Live animated decibel VU meter, thermal gauges, dynamic waveforms`
  - `Spec 5: QuoteReceipt — Dark-mode forum post card (Reddit/forums) with felt-tip highlighter`
  - `Spec 6: StatementSpec — Provocative thesis hooks, lone words, massive stat punches (£1,000+)`
  - `Spec 7: SequentialEmphasis — Comma-separated symptom lists, progressive multi-beat locks`
  - `Spec 8: ForensicAudit — Dense multi-pillar criteria rows, mechanical clicks, verdict stamp`

---

### Turn 4: The 3-Concept Ideation Step (No Code Yet!)
Analyze the script excerpt and present **2 to 3 distinct creative concepts**:
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

- [The 8 Canonical Specs Catalog](./references/spec-catalog.md)
- [Acoustic Foley Soundboard & Audio Timing](./references/foley-soundboard.md)
- [Anti-AI Slop & Visual Design Commandments](./references/anti-ai-slop.md)
