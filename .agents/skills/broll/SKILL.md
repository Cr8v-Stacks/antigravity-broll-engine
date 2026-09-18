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
   - Present the in-app video showcase reference (`spec_video_showcase.md`) so the user can see, watch, and understand what each spec looks like before choosing.

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

### Step 2: Content Input (Universal & Flexible)
When the user indicates they have text or wants to start:
Call `ask_question`:
- **Question**: *"How would you like to provide the script content for this B-roll?"*
- **Options**:
  - `(Recommended) I will paste my script paragraph or section directly in the chat`
  - `I will share the path or name of my script file`
  - `Provide a sample script paragraph so I can test the engine first`

---

### Step 3: Media Sourcing & Asset Direction (Multi-Select Enabled)
Once the script line is provided, call `ask_question` with `is_multi_select: true`:
- **Question**: *"Where should we source the visuals and assets for this B-roll?"*
- **Options**:
  - `(Recommended) Multi-source blend: Combine the best available assets automatically`
  - `Official Web Hardware & Press Assets: Scrape high-res product photos, transparent cutouts & launch event photography from the web`
  - `Local Drive Assets: Use official videos and hardware cutouts from local project folders`
  - `Web Evidence Receipts: Search and pull authentic forum post receipts & lab test charts`
  - `Stock Video Sourcing: Find high-quality relevant stock footage (Pexels, Mixkit)`
  - `Pure Motion Graphics: Vector typography, telemetry meters, and studio backdrops`
  - `I trust you — Make the best creative decision based on the script`

#### 🔍 Behind-the-Scenes Asset Sourcing Protocol:
When the user selects an asset source or trusts the engine, **the agent must NEVER rely solely on low-res video freeze-frames when primary web assets exist**:
1. **Product Hardware & Cutouts**: Automatically crawl/scrape manufacturer product pages (e.g. `bluettipower.eu`, `ecoflow.com`), brand press portals, certified EU retailers (e.g. Decathlon, Offgridtec), and clean energy trade publications (`ess-news.com`, `pv-magazine.com`). Download high-res product photos, isolated transparent PNGs, and exploded internal CAD schematics directly into `public/product_images/<brand>/web_assets/` or `official_web/`.
2. **Editorial News & Event Photography**: Search press release wire services (PR Newswire, BusinessWire) and editorial photo archives for verified launch event photography (e.g. Eiffel Tower 1st-floor launch event photos).
3. **Community Evidence & Receipts**: Query authentic community forums (Reddit `r/SolarDIY`, German `Photovoltaikforum`, official manufacturer support threads) and independent lab test reports.
4. **Stock Context Footage**: Search Pexels, Pixabay, or Mixkit for contextually relevant live-action footage (must strictly match the script topic—zero generic filler).
5. **Artisan Studio Textures**: Use high-resolution craft paper textures (`public/textures/`) or generate bespoke tactile backdrops using the Gemini Image model.

---

### Step 4: Visual Spec Guidance & In-App Video Showcase (Multi-Select Enabled)
Before asking the user to pick specs, provide a clickable link to the permanent video showcase:
👉 **[Open Studio Spec Video Showcase](file:///C:/Users/user/.gemini/config/skills/broll/references/spec_video_showcase.md)**
Then call `ask_question` with `is_multi_select: true` so the user can select one or multiple archetypes to blend:
- **Question**: *"Which Spec Archetype(s) would you like to draw from as guidance addons?"*
- **Options**:
  - `(Recommended) Let the script dictate the specs`
  - `I trust your creative eye — Pick the best specs for this scene`
  - `Spec 1: ProductSpec — Hardware hero, internal specs, exploded CAD, leader lines`
  - `Spec 2: RatingScore — Broadcaster scoreboard, weighted multipliers, review badges`
  - `Spec 3: Comparison — Conceptual split-screen versus, trade-offs, OTA vs Recall`
  - `Spec 4: MetricTelemetry — Live animated decibel VU meter, thermal gauges, waveforms`
  - `Spec 5: QuoteReceipt — Dark-mode forum post card (Reddit/forums) with felt-tip highlighter`
  - `Spec 6: StatementSpec — Provocative thesis hooks, lone words, massive stat punches (£1,000+)`
  - `Spec 7: SequentialEmphasis — Comma-separated symptom lists, progressive multi-beat locks`
  - `Spec 8: ForensicAudit — Dense multi-pillar criteria rows, mechanical clicks, verdict stamp`
*(Note: If the script section demands an archival investigative documentary aesthetic, select the dedicated Vox-Style track instead).*

---

### Step 5: The 3-Concept Pitch (Dynamic Script Synthesis — Zero Canned Concepts)
Before writing any code, the agent MUST analyze the user's provided script text dynamically:
1. **Narration Timing Math**: Word count ÷ ~2.25 words/sec = estimated seconds and frames @ 30fps.
2. **Core Emotional Stakes & Conflict**: What is the narrator proving, challenging, revealing, or debunking?
3. **Synthesize 3 Distinct Creative Concepts** specifically tailored to those exact spoken words:
   - **Concept A (Keynote / Swiss Minimalist)**: Focus on high-contrast typography, lone words, clean whitespace, subtle radiant accent lines, and authoritative hardware cutouts.
   - **Concept B (Technical Telemetry & Evidence)**: Focus on animated decibel/thermal gauges, exploded CAD dimensions, scoreboard multipliers, and verified forum receipts.
   - **Concept C (Kinetic Narrative Staged Reveal)**: Dynamic push-pull multi-scene choreography, sequential symptom locks, lone action words, and hero subject persistence across scene boundaries.
   *(Special Case: If the creator explicitly requested the Vox documentary aesthetic, the 3 concepts instead draw from the 3 locked Vox house styles: Newsroom Collage, Mixed-Media Paper, or 3D Paper Diorama via `vox-style`).*
4. **Interactive Modal Call**: Present the 3 concepts dynamically via `ask_question` with a 1-sentence breakdown of each concept's visual progression so the user can click their favorite.

---

## 5. The 4 Visual Production Tracks (Mixability vs. Isolation Laws)

Our B-Roll engine encompasses **4 specialized production tracks**, governed by a strict rule of **Mixability vs. Isolation**:

```
                              ┌──────────────────────────────────────────────┐
                              │           B-Roll Script Scouting             │
                              │       (Paragraph / Spoken Thesis)            │
                              └──────────────────────┬───────────────────────┘
                                                     │
                                        Choose Production Track
                                                     │
         ┌───────────────────────────┬───────────────┴───────────────┬───────────────────────────┐
         ▼                           ▼                               ▼                           ▼
   ┌───────────┐               ┌───────────┐                   ┌───────────┐               ┌───────────┐
   │  Track 1  │               │  Track 2  │                   │  Track 3  │               │  Track 4  │
   │  Modern   │               │ Vox-Style │                   │ OEM Video │               │  YouTube  │
   │  Motion   │               │ Explainer │                   │ Real-World│               │  Shorts   │
   │  Design   │               │  System   │                   │ Ingestion │               │  Engine   │
   └─────┬─────┘               └─────┬─────┘                   └─────┬─────┘               └─────┬─────┘
         │                           │                               │                           │
  • Specs 1–8                 • 3 House Styles                • Plug-in Renewables         • 9:16 Vertical
  • Swiss-editorial           • Archival newsprint            • Subtitle crop 120%         • 1080x1920
  • Telemetry & gauges        • Halftone B&W cutouts          • Collision avoidance        • Andrew Edge TTS
  • HIGHLY MIXABLE            • STRICTLY ISOLATED             • Rapid punch-in             • Viral hooks
```

### Track 1: Modern Motion Design & Modular Specs (Specs 1–8) [HIGHLY MIXABLE]
- **Core Domain**: The foundational visual engine of `broll`. Clean Keynote studio, Swiss-editorial typography, dark slate (`#080B10`) or crisp studio paper backdrops, sleek telemetry meters, forum receipts, and modular scoreboards.
- **Mixability Rule**: **100% Modular & Mixable**. You can fluidly transition between specs within a single scene: e.g., open on Spec 6 (lone word punch) -> glide into Spec 1 (hardware CAD cutout) -> receive Spec 4 (live telemetry meter) using **Hero Subject Persistence** and **Spatial Staging**.
- **Execution**: Built deterministically in Remotion and rendered directly to `motion_clips/`.

### Track 2: The Vox-Style Explainer System (`vox-style`) [STRICTLY ISOLATED]
- **Core Domain**: Dedicated archival investigative documentary aesthetic (Vox, Johnny Harris, European investigative journalism).
- **Skill Engine**: Handled by [`vox-style`](C:\Users\user\.gemini\config\skills\vox-style\SKILL.md).
- **Isolation Rule**: **STRICTLY ISOLATED**. Vox has its own locked visual world (aged newsprint `#F5F2EB`, halftone dot screens, rough white keylines, ink stamps, paper tears). **NEVER mix modern glossy Keynote cards, neon HUDs, or Swiss-modern elements into a Vox scene.**
- **The 6 Locked House Styles & Documentary Directions**:
  1. *Newsroom Collage (Default)*: Aged newsprint, halftone B&W cutouts with offset red strokes, giant stat numbers treated as physical characters.
  2. *Mixed-Media Paper*: Bold primary color blocks, archival cutouts, black marker circles, geometric drafting tape.
  3. *3D Paper Diorama*: Heavy craft paper, deep depth-of-field, sepia layers, letterpress props.
  4. *Detective Casefile (Murder Board)*: Dark corkboard, red yarn connecting pushpins between suspect products and lab proof, manila evidence folders with `[CLASSIFIED]` stamps, typewriter text, fingerprint smudges.
  5. *Polaroid Forensic Snapshot*: Authentic Polaroid frames with wide chins, handwritten Sharpie notes, chemical developing emulsion bloom, scotch tape, paperclips pinning field receipts. Ideal for high-stakes scene openers and test bench reveals.
  6. *Tactical Cartography (Johnny Harris Map)*: Tilted 3D topographic & architectural contour blueprints, animated red route trajectories, glowing GPS pins, coordinate crosshairs, torn paper revealing satellite terrain.
- **Dual Execution Pathways**:
  - *Generative Video Prompts (Google Flow / Omni Flash 1.1)*: Structured 5-line prompts (`STYLE REFERENCE`, `SCENE`, `MOTION`, `AUDIO`, `NEGATIVE`) with 3 physical depths (BG/MG/FG) and diegetic Foley sound design (NO voiceover, NO music).
  - *Deterministic Remotion Engine*: Code-based rendering using `Halftone`, `TearReveal`, `AlertWash`, and `VoxStamp`.

### Track 3: OEM Video & Real-World B-Roll Ingestion (`Plug-in Renewables`)
- **Asset Library**: [`C:\Users\user\Downloads\Plug-in Renewables\`](file:///C:/Users/user/Downloads/Plug-in%20Renewables/)
- **Scope**: Ingesting pristine 1080p and 4K official manufacturer footage, real balcony installation documentaries, and teardowns.
- **The 3 Non-Negotiable Operating Rules**:
  1. *Collision Avoidance*: Never place motion graphics or telemetry over baked-in specs or manufacturer titles. Position graphics strictly in clean negative space.
  2. *The Premiere Pro Subtitle Crop*: Scale up 115%–125% and push `translateY(-35px)` to crop out foreign review subtitles, captions, or watermarks.
  3. *Rapid Spring Punch-In*: Expand from a focal card to full bleed within 8–15 frames using a snappy spring.

### Track 4: YouTube Shorts Viral Engine
- **Core Domain**: Automated vertical 9:16 (1080x1920) production pipeline.
- **Skill Engine**: Handled by [`youtube-shorts-viral-engine`](C:\Users\user\.gemini\config\skills\youtube-shorts-viral-engine\SKILL.md).
- **Features**: Hybrid 70% zoom framing, Microsoft Edge TTS Andrew neural voiceover, optical-center kinetic subtitles, anti-watermark asset curation, and immediate product hook architecture.

### Execution Frameworks Role Clarification
| Tool / Framework | Role in the Pipeline |
| :--- | :--- |
| **Remotion** | **Code-Based Video Compositor & Sequencer**: The engine where Modern Motion Design (Specs 1–8), imported OEM videos, and synchronous acoustic Foley (`.wav`) are coded, layered, animated, and rendered into deliverable MP4s. |
| **Google Flow / Omni Flash 1.1** | **Generative AI Diffusion Video**: Creates organic camera moves and physical video clips for Track 2 (Vox) where hand-coded motion graphics would look sterile. |
| **Premiere Pro / DaVinci Resolve** | **Master NLE Editing Timeline**: The master timeline where the 15-minute voiceover is cut with the individual modular B-rolls from `motion_clips/`. |

---

## 6. Canonical Deliverable Naming & Output Law

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

## 7. Core Motion Design Commandments (Anti-AI Slop)

1. **The Full Canvas Trap**: Never open a scene at frame 0 with pre-assembled layouts. Elements arrive word-by-word with spoken audio.
2. **The Atomic Staggering Law**: Never animate separable elements together. Every product, metric, or clause gets its own isolated entrance and Foley punch.
3. **The Lone Words Rule**: Action words, model names (`Hyper 2000`), and dates must exist alone on screen with zero clutter or borders.
4. **Dead-Center Vertical Alignment**: All content must be centered vertically (`top: 50%`, `transform: translateY(-50%)`).
5. **Hero Subject Persistence**: Persisting subjects glide to dead-center stage instead of abruptly cutting to black.
6. **Permanent Text Visibility**: Highlighters sweep behind permanent high-contrast text.
7. **Absolute Media Relevance**: Never use generic stock footage (wind turbines, random drone shots) as filler.
8. **The Premiere Pro Subtitle Crop**: Crop out lower-third subtitles by scaling `115%–125%`.
9. **The Authentic Sourcing Law (No Synthetic SVGs for Real Subjects)**:
   - Never generate synthetic SVG line drawings for real-world architectural landmarks (e.g. Eiffel Tower, Brandenburg Gate), physical venues, or real hardware products.
   - Always search the web and extract authentic, high-resolution photographic transparent PNG cutouts. Real physical texture, metal reflection, and architectural realism are mandatory for documentary credibility.
10. **The Deep Asset Harvest Mandate (Script-Proportional Scope)**:
   - For long-form teardowns, comparisons, and product reviews, NEVER settle for a superficial 3–4 images. The depth of asset harvesting must match the script's narrative scope: systematically collect heroes, exploded internals, rear I/O, accessories, lifestyle installations, competitor benchmarks, predecessor hardware, and editorial launch event photos into `product_images/<brand>/`.

---

## 8. Acoustic Foley Sound Design (`public/sfx/`)

Every visual entrance or state transition **MUST** have a synchronized Foley hit:
`swoosh.wav`, `click.wav`, `pop.wav`, `thud.wav`, `stamp_slam.wav`, `draw.wav`, `camera_click.wav`.

---

## 9. Windows PowerShell Execution Rule

Always run Remotion commands via `cmd /c`:
```powershell
cmd /c npx remotion render <CompositionID> motion_clips/<canonical_name>.mp4
```
