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
   - **NEVER dump a wall of questions in a single turn.**
   - Follow the creator's natural thought process:
     1. Starting Point (What do you have right now?)
     2. Script Content (Which line or paragraph are we bringing to life?)
     3. Media & Assets (Where are the visuals coming from?)
     4. Visual Spec Archetype (What starting visual blueprint fits best?)
     5. Concept Pitch (2–3 director concepts to choose from).
2. **Always Provide "I Trust You / Make the Best Creative Decision"**:
   - For every styling, media, or spec question, ALWAYS include an option:
     `"(Recommended) I trust your creative eye — Choose the best direction for this script"`.
   - Never block a creator who just wants great results without having to make technical design choices.
3. **Media Agility (Don't Force Pure Vector Motion)**:
   - Real documentaries blend vector graphics with authentic imagery and video clips:
     - Pure Motion Graphics (vector typography, animated meters, studio canvas)
     - Mixed Media (motion graphics + authentic product photos & receipts)
     - Local Drive Assets (OEM 4K clips, teardowns, hardware cutouts)
     - Stock Footage Sourcing (Pexels, Pixabay, Mixkit)
     - Web Evidence Receipts (Reddit cards, lab graphs, forum posts)
4. **In-App Visual Spec Showcase**:
   - Creators cannot visualize abstract spec numbers in their heads.
   - Present the in-app interactive visual showcase artifact (`spec_showcase.html`) so the user can see, watch, and understand what each spec looks like before choosing.

---

## 4. The Creator's Natural Onboarding Sequence (`ask_question` Tree)

When `/broll` is invoked or a new B-roll task begins, ask **only ONE question at a time** in this exact natural order:

### Step 1: The Starting Point (What do you have?)
Call `ask_question`:
- **Question**: *"Welcome to the B-Roll Motion Graphics Engine! How would you like to begin?"*
- **Options**:
  - `(Recommended) I have a specific paragraph/sentence ready to turn into B-roll`
  - `I have a full script — help me scout and identify the best B-roll moments`
  - `Show me visual examples of what B-rolls and specs you can create first`

---

### Step 2: Content Input (What is the script talking about?)
- If the user has a paragraph: Ask them to paste the 1–3 sentence script line.
- If the user wants scouting: Ask them to share the script or script section.

---

### Step 3: Media Sourcing & Asset Direction (How will it be built?)
Once the script line is provided, call `ask_question`:
- **Question**: *"Where should we source the visuals and assets for this B-roll?"*
- **Options**:
  - `(Recommended) I trust you — Pick the best visual combination for this script line`
  - `Mixed Media: Motion typography blended with authentic product photos & receipts`
  - `Pure Motion Graphics: Vector typography, telemetry meters, and studio backdrops`
  - `OEM & Local Footage: Use official videos and hardware cutouts from local folders`
  - `Documented Evidence: Focus on Reddit dark-mode cards and lab test charts`

---

### Step 4: Visual Spec Guidance & In-App Showcase
Provide a clickable link to the interactive visual showcase:
`[Open In-App Visual Spec Showcase](file:///.../spec_showcase.html)`
Then call `ask_question`:
- **Question**: *"Which Spec Archetype should serve as your starting guidance addon?"*
- **Options**:
  - `(Recommended) I trust you — Let the narrative dictate the blend of specs`
  - `Spec 1: ProductSpec — Hardware hero, internal specs, exploded CAD, leader lines`
  - `Spec 2: RatingScore — Broadcaster scoreboard, weighted multipliers, review badges`
  - `Spec 3: Comparison — Conceptual split-screen versus, trade-offs, OTA vs Recall`
  - `Spec 4: MetricTelemetry — Live animated decibel VU meter, thermal gauges, waveforms`
  - `Spec 5: QuoteReceipt — Dark-mode forum post card (Reddit/forums) with felt-tip highlighter`
  - `Spec 6: StatementSpec — Provocative thesis hooks, lone words, massive stat punches (£1,000+)`
  - `Spec 7: SequentialEmphasis — Comma-separated symptom lists, progressive multi-beat locks`
  - `Spec 8: ForensicAudit — Dense multi-pillar criteria rows, mechanical clicks, verdict stamp`

---

### Step 5: The 3-Concept Pitch (Director's Treatment)
Before writing any code, pitch **2 to 3 creative treatments** specifically tailored to the user's script line. Call `ask_question` to let the user pick their favorite concept.

---

## 5. Canonical Deliverable Naming & Output Law

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

1. **The Full Canvas Trap**: Never open a scene at frame 0 with pre-assembled layouts. Elements arrive word-by-word with spoken audio.
2. **The Atomic Staggering Law**: Never animate separable elements together. Every product, metric, or clause gets its own isolated entrance and Foley punch.
3. **The Lone Words Rule**: Action words, model names (`Hyper 2000`), and dates must exist alone on screen with zero clutter or borders.
4. **Dead-Center Vertical Alignment**: All content must be centered vertically (`top: 50%`, `transform: translateY(-50%)`).
5. **Hero Subject Persistence**: Persisting subjects glide to dead-center stage instead of abruptly cutting to black.
6. **Permanent Text Visibility**: Highlighters sweep behind permanent high-contrast text.
7. **Absolute Media Relevance**: Never use generic stock footage (wind turbines, random drone shots) as filler.
8. **The Premiere Pro Subtitle Crop**: Crop out lower-third subtitles by scaling `115%–125%`.

---

## 7. Acoustic Foley Sound Design (`public/sfx/`)

Every visual entrance or state transition **MUST** have a synchronized Foley hit:
`swoosh.wav`, `click.wav`, `pop.wav`, `thud.wav`, `stamp_slam.wav`, `draw.wav`, `camera_click.wav`.

---

## 8. Windows PowerShell Execution Rule

Always run Remotion commands via `cmd /c`:
```powershell
cmd /c npx remotion render <CompositionID> motion_clips/<canonical_name>.mp4
```
