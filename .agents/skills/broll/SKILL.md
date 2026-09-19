---
name: broll
description: Broadcast-grade Remotion motion graphics B-roll engine. Transforms script paragraphs and sentences into studio B-rolls with synchronous acoustic Foley sound design, canonical specs (1-8), and interactive click-and-choose onboarding.
---

# 🎬 Broadcast Motion Graphics & B-Roll Production Engine

This skill powers the end-to-end transformation of YouTube video scripts into broadcast-grade, editorial motion graphics (in the visual language of Vox, Johnny Harris, Bloomberg, MKBHD, and Cleo Abram).

---

## 1. The B-Roll Macro Architecture: An Ecosystem of 5 Production Tracks

> **CORE ARCHITECTURAL AWARENESS**:
> **B-Roll is NOT a monolithic template or a single Remotion script.** 
> B-Roll is the comprehensive umbrella discipline for all visual storytelling footage that illustrates, proves, paces, and brings a spoken narrative to life.
> This engine orchestrates **5 distinct production tracks**, each with its own aesthetic philosophy, technical pipeline, and isolation rules:

```
                              ┌────────────────────────────────────────────────────────┐
                              │            B-Roll Script & Narrative Scouting          │
                              │        (Paragraph, Thesis Hook, or Spoken Claim)       │
                              └───────────────────────────┬────────────────────────────┘
                                                          │
                                               Identify Production Track
                                                          │
          ┌───────────────────────────┬───────────────────┼───────────────────┬───────────────────────────┐
          ▼                           ▼                   ▼                   ▼                           ▼
    ┌───────────┐               ┌───────────┐       ┌───────────┐       ┌───────────┐               ┌───────────┐
    │  Track 1  │               │  Track 2  │       │  Track 3  │       │  Track 4  │               │  Track 5  │
    │Modern Tech│               │   Swiss   │       │ Vox-Style │       │ OEM Video │               │  YouTube  │
    │  Motion   │               │Editorial  │       │Archival   │       │Real-World │               │  Shorts   │
    │ (Specs)   │               │Typographic│       │Documentary│       │ Ingestion │               │  Engine   │
    └─────┬─────┘               └─────┬─────┘       └─────┬─────┘       └─────┬─────┘               └─────┬─────┘
          │                           │                   │                   │                           │
   • Remotion Specs 1–8        • Pure Grotesque    • 3 House Styles    • Plug-in Renewables        • 9:16 Vertical
   • Dark Slate (#080B10)      • High negative     • Aged newsprint    • Subtitle crop 120%        • 1080x1920
   • Telemetry & gauges        • Math grid system  • Halftone cutouts  • Collision avoidance       • Andrew Edge TTS
   • Forum receipts            • Asymmetric tension• Murder board/cork • Rapid punch-in            • Viral retention
   • Acoustic Foley            • Zero bloat        • Generative video  • Authentic 4K clips        • Optical subtitles
   • [HIGHLY MIXABLE]          • [HIGHLY MIXABLE]  • [STRICTLY ISOLATED]• [HIGHLY MIXABLE]         • [FORMAT ISOLATED]
```

### The 5 Creative & Technical Tracks:
1. **Track 1: Modern Tech & Editorial Motion Graphics (Remotion Specs 1–8)** [HIGHLY MIXABLE]
   - *Aesthetic*: Premium dark slate (`#080B10`) or crisp studio paper backdrops, glowing telemetry gauges, leader lines, forum receipts, scoreboard multipliers, forensic audit matrices, and frame-accurate Foley sound design.
   - *Role*: The deterministic code-based compositing backbone for tech breakdowns, hardware analysis, and data-dense claims.
2. **Track 2: Swiss International Typographic Style (Minimalist Editorial Motion)** [HIGHLY MIXABLE]
   - *Aesthetic*: Strict mathematical grid systems, high-contrast grotesque type (Helvetica, Inter, Neue Haas Grotesk), radical negative space, asymmetric balance, pure typographic authority, zero pill badges, zero decorative clutter.
   - *Role*: High-brow journalism, thesis hooks, and editorial punchlines where typography alone commands the screen.
3. **Track 3: Vox & Johnny Harris Investigative Documentary System (`vox-style`)** [STRICTLY ISOLATED]
   - *Aesthetic*: Tactile paper diorama, aged newsprint (`#F5F2EB`), halftone B&W cutouts with offset color drop shadows, detective corkboard murder boards with red yarn, classified manila folders, rubber ink stamps, Polaroid snapshots, and 3D topographic contour maps.
   - *Role*: Historical context, corporate investigations, geopolitics, and regulatory deep dives.
   - *Engine*: Governed by [`vox-style`](C:\Users\user\.gemini\config\skills\vox-style\SKILL.md) and generative video prompts (Google Flow / Omni Flash 1.1 / Runway).
   - *Isolation Law*: **STRICTLY ISOLATED**. Never mix glossy dark-slate tech cards or neon HUDs into a Vox scene.
4. **Track 4: Authentic OEM & Real-World B-Roll Ingestion (`Plug-in Renewables`)** [HIGHLY MIXABLE]
   - *Aesthetic*: Pristine 4K manufacturer launch footage, real balcony solar teardowns, physical installation reels.
   - *Role*: Grounding animations in physical reality. Enforces the Premiere Pro Subtitle Crop (`115%–138%`, `translateY(-35px)`), rapid spring punch-in from focal card to full bleed, and collision avoidance with on-screen OEM titles.
5. **Track 5: 9:16 Vertical Viral Shorts Engine (`youtube-shorts-viral-engine`)** [FORMAT ISOLATED]
   - *Aesthetic*: 1080x1920 mobile viewport, hybrid 70% zoom framing, Microsoft Edge TTS Andrew neural voiceover, optical-center kinetic subtitles, anti-watermark curation, and immediate product hook architecture.
   - *Role*: Governed by [`youtube-shorts-viral-engine`](C:\Users\user\.gemini\config\skills\youtube-shorts-viral-engine\SKILL.md).

---

## 2. Capabilities & Scope Briefing

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

## 3. The Golden Philosophy: Specs are Addons, Not Rigid Molds

> **THE SPEC GUIDANCE PRINCIPLE**:
> The 8 canonical specs are **living blueprints and modular addons, NOT rigid templates.**
> A generated B-roll must be a creative, organic mixture of the chosen spec archetype and whatever is creatively correct for that specific script sentence. 
> Never force an entire paragraph into an ill-fitting cookie-cutter box. If the narrative evolves from a hardware introduction into an owner complaint, the visual must glide seamlessly from Spec 1 (`ProductSpec`) into Spec 5 (`QuoteReceipt`) using **Hero Subject Persistence** and **Spatial Staging**.

---

## 4. The 4 Fundamental User-Experience Commandments

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

## 5. The Creator's Natural Onboarding Sequence (`ask_question` Tree)

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
Before presenting the spec options to the user:
1. **Provide the Clickable Showcase Link**:
   Always provide the permanent, working link to the native video carousel showcase:
   👉 **[Open Studio Spec Video Showcase](file:///C:/Users/user/.gemini/config/skills/broll/references/spec_video_showcase.md)**
   *(Note: This reference file contains the live carousel and embedded MP4 videos for all 8 specs with full playback controls).*
2. **Call `ask_question` with `is_multi_select: true`**:
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

## 6. The Mandatory Skill & Resource Digest Protocol (The Anti-Rush Quality Gate)

> **🚨 ABSOLUTE WORKFLOW LAW: NEVER JUMP INTO WORK BEFORE DIGESTING THE ENTIRE SKILL SET & RESOURCES.**
> 
> When a user provides their response, script text, or concept selection, the AI must **NEVER jump straight into generating code or working with just the raw feedback.**
> Working on a production project requires that the creator/agent **thoroughly go through all available resources and digest the entire base skill set before diving in.**
>
> **THE MANDATORY RULE**:
> The agent is **STRICTLY FORBIDDEN** from writing `.tsx` files, creating compositions, or executing render commands immediately upon receiving user feedback.
>
> Instead, the agent **MUST** explicitly pause, go back into the base skill, and **re-read and digest the entire skill set and all its accompanying reference resources**:
> 1. **The Entire Base Skill (`SKILL.md`)**: Re-absorb the macro architecture, all 5 production tracks, the mixability vs. isolation laws, the living blueprint philosophy, deliverable naming laws, and execution commands.
> 2. **The Complete Design Spec Catalog (`references/spec-catalog.md`)**: Review the visual progression, structural layouts, and component mechanics of the relevant specs.
> 3. **The Foley Soundboard (`references/foley-soundboard.md`)**: Review all 11 acoustic sound assets in `public/sfx/`, decibel gains, and frame-accurate synchronization formulas.
> 4. **The Complete Anti-AI Slop Commandments (`references/anti-ai-slop.md`)**: Re-absorb all 15 editorial commandments, negative constraints, banned patterns, and dynamic spatial physics.
> 5. **Available Project Assets & Media**: Inspect available local cutouts, web assets, and audio files.
>
> **THE VISIBLE USER CONFIRMATION**:
> The agent **MUST let the user know explicitly** that it is going through the base skill set and all available resources to fully understand them and get itself in the exact mindset needed for the generation. It must output this visible **`🧠 Creative Director Mindset & Complete Skill Digest Blueprint`** directly into the chat:

### The Required Mindset & Complete Skill Digest Format:

```markdown
### 🧠 Creative Director Mindset & Complete Skill Digest Blueprint

#### 1. Comprehensive Skill & Resource Review (Full Base Digest)
- [x] **Base Engine (`SKILL.md`)**: Re-read and digested complete macro architecture, the 5 production tracks, mixability rules, and execution laws.
- [x] **Spec Catalog (`references/spec-catalog.md`)**: Reviewed layout mechanics and visual progression for chosen spec addons.
- [x] **Acoustic Foley (`references/foley-soundboard.md` & `public/sfx/`)**: Loaded sound assets, frame offsets, and acoustic mix rules.
- [x] **Anti-AI Slop & Editorial Laws (`references/anti-ai-slop.md`)**: Re-absorbed all 15 non-negotiable commandments and negative constraints.
- [x] **Asset & Project Context**: Audited available image cutouts, video clips, and texture layers.

#### 2. Selected Production Track & Aesthetic Direction
- **Production Track**: [Track 1: Modern Tech Motion / Track 2: Swiss Typographic / Track 3: Vox Documentary / Track 4: OEM Ingestion / Track 5: Viral Shorts]
- **Aesthetic Tone & Philosophy**: [1–2 sentences capturing the visual language, contrast, and spatial behavior]
- **Modular Spec Addons**: [e.g. Spec 1 (ProductSpec) + Spec 7 (SequentialEmphasis) hybrid]

#### 3. Negative Constraints & Anti-AI Slop Checklist (Active Ban List)
- [x] **Zero Eyebrow / Zero Pill Badge Law**: ABSOLUTELY NO uppercase category tags, pill boxes, or `[ HURDLE 01 ]` marketing bloat.
- [x] **Zero Frame-0 Full Canvas Trap**: The canvas opens clean/empty; elements arrive word-by-word with the speaker's vocal cues.
- [x] **Zero Simultaneous Card Dumps**: Elements push and displace each other dynamically using spatial physics.
- [x] **Zero Synthetic SVGs for Real Hardware**: 100% authentic photographic cutouts and verified hardware.
- [x] **Zero Generic Stock Filler**: Every asset directly depicts the exact hardware or claim cited.
- [x] **Strict Vertical Centering**: All content perfectly centered on Y-axis (`top: 50%`, `transform: translateY(-50%)`).

#### 4. Spoken Narration Timing Math & Cadence
- **Spoken Voiceover Text**: "[Quote the exact spoken words being visualized]"
- **Cadence Calculation**: [X] words ÷ 2.25 words/sec = ~[Y.Y] seconds = **[Z] frames @ 30fps**.

#### 5. Synchronous Acoustic Foley Allocation
- **Frame [F1]**: `thud.wav` (Hero temporal / lone word slam)
- **Frame [F2]**: `swoosh.wav` (Item 1 spatial push-left displacement)
- **Frame [F3]**: `click.wav` (Item 2 entrance / telemetry meter power-up)
- **Frame [F4]**: `stamp_slam.wav` (Verdict stamp / Stat slam down)

#### 6. Beat-by-Beat Spatial Choreography Map
| Beat / Frame Range | Spoken Vocal Cue | Visual Staging & Spatial Movement | Synchronized SFX Cue |
| :--- | :--- | :--- | :--- |
| Beat 1 (0–30f) | "In late 2023..." | Lone hero hook lands dead-center; screen otherwise empty | `thud.wav` (Frame 4) |
| Beat 2 (31–75f) | "...Bluetti launched..." | Item 1 arrives center; pushes left (-460px) as Item 2 appears | `swoosh.wav` (Frame 33) |
| Beat 3 (76–135f)| "...the integrated machine" | Dynamic telemetry meter powers up; stat slams down | `click.wav` + `stamp_slam.wav` |

---
*Complete base skill set digested, resources verified, mindset primed, and constraints locked. Now proceeding to compile Remotion composition...*
```

Only **AFTER** conducting this full review and presenting this visible digest to the user does the agent proceed to Remotion coding and rendering!

---

## 7. The 5 Visual Production Tracks (Mixability vs. Isolation Laws)

Our B-Roll engine encompasses **5 specialized production tracks**, governed by a strict rule of **Mixability vs. Isolation**:

### Track 1: Modern Motion Design & Modular Specs (Specs 1–8) [HIGHLY MIXABLE]
- **Core Domain**: The foundational visual engine of `broll`. Clean Keynote studio, Swiss-editorial typography, dark slate (`#080B10`) or crisp studio paper backdrops, sleek telemetry meters, forum receipts, and modular scoreboards.
- **Mixability Rule**: **100% Modular & Mixable**. You can fluidly transition between specs within a single scene: e.g., open on Spec 6 (lone word punch) -> glide into Spec 1 (hardware CAD cutout) -> receive Spec 4 (live telemetry meter) using **Hero Subject Persistence** and **Spatial Staging**.
- **Execution**: Built deterministically in Remotion and rendered directly to `motion_clips/`.

### Track 2: Swiss International Typographic Style [HIGHLY MIXABLE]
- **Core Domain**: Minimalist editorial elegance. Rigid grid systems, heavy grotesque type (Helvetica, Inter), radical negative space, asymmetric tension, monochrome dark-slate canvas with one bold spot color.
- **Mixability Rule**: Fluidly mixable with Track 1 and Track 4.
- **Execution**: Built deterministically in Remotion using minimal typography-first spec layouts.

### Track 3: The Vox-Style Explainer System (`vox-style`) [STRICTLY ISOLATED]
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

### Track 4: OEM Video & Real-World B-Roll Ingestion (`Plug-in Renewables`) [HIGHLY MIXABLE]
- **Asset Library**: [`C:\Users\user\Downloads\Plug-in Renewables\`](file:///C:/Users/user/Downloads/Plug-in%20Renewables/)
- **Scope**: Ingesting pristine 1080p and 4K official manufacturer footage, real balcony installation documentaries, and teardowns.
- **The 3 Non-Negotiable Operating Rules**:
  1. *Collision Avoidance*: Never place motion graphics or telemetry over baked-in specs or manufacturer titles. Position graphics strictly in clean negative space.
  2. *The Premiere Pro Subtitle Crop*: Scale up 115%–138% and push `translateY(-35px)` to crop out foreign review subtitles, captions, or watermarks.
  3. *Rapid Spring Punch-In*: Expand from a focal card to full bleed within 8–15 frames using a snappy spring.

### Track 5: YouTube Shorts Viral Engine (`youtube-shorts-viral-engine`) [FORMAT ISOLATED]
- **Core Domain**: Automated vertical 9:16 (1080x1920) production pipeline.
- **Skill Engine**: Handled by [`youtube-shorts-viral-engine`](C:\Users\user\.gemini\config\skills\youtube-shorts-viral-engine\SKILL.md).
- **Features**: Hybrid 70% zoom framing, Microsoft Edge TTS Andrew neural voiceover, optical-center kinetic subtitles, anti-watermark asset curation, and immediate product hook architecture.

### Execution Frameworks Role Clarification
| Tool / Framework | Role in the Pipeline |
| :--- | :--- |
| **Remotion** | **Code-Based Video Compositor & Sequencer**: The engine where Modern Motion Design (Specs 1–8), imported OEM videos, and synchronous acoustic Foley (`.wav`) are coded, layered, animated, and rendered into deliverable MP4s. |
| **Google Flow / Omni Flash 1.1** | **Generative AI Diffusion Video**: Creates organic camera moves and physical video clips for Track 3 (Vox) where hand-coded motion graphics would look sterile. |
| **Premiere Pro / DaVinci Resolve** | **Master NLE Editing Timeline**: The master timeline where the 15-minute voiceover is cut with the individual modular B-rolls from `motion_clips/`. |

---

## 8. Canonical Deliverable Naming & Output Law

### 1. Canonical Delivery Directory:
Every finished MP4 deliverable **MUST** be rendered directly to:
📁 **`motion_clips/`**

### 2. Canonical Naming Formula (MANDATORY LAW — NO GENERIC NUMBERING):
**NEVER name files with generic identifiers like `motion_01`, `motion_02`, `motion_two`, `broll_1`, or `clip02`!**

The title, filename, and composition ID must be derived strictly from the script text:
- **Full Paragraph or Paragraph Start**:
  - **Formula**: `First 4 words of the paragraph`
  - **Filename**: `<first_four_words_of_paragraph_in_snake_case>.mp4`
  - **Composition ID**: `<FirstFourWordsInPascalCase>`
  - **Example**: For a paragraph starting *"In late 2023, Bluetti debuted their modular kit—..."*
    - Title: `In Late 2023 Bluetti`
    - Filename: `in_late_2023_bluetti.mp4`
    - Composition ID: `InLate2023Bluetti`

- **Mid-Paragraph / Specific Sentence Subset**:
  - If you are animating a specific sentence or section that does NOT start at the very beginning of the paragraph:
  - **Formula**: `First 4 words of the paragraph (first 3 words of sentence)`
  - **Filename**: `<first_four_words_of_paragraph>_(<first_three_words_of_sentence>).mp4` (in snake_case)
  - **Composition ID**: `<FirstFourWords>_<FirstThreeWords>`
  - **Example**: If animating the sentence *"Abandoning external dongles for an integrated machine"* inside the paragraph starting *"Now, after two years of development, Bluetti has launched..."*
    - Title: `Now After Two Years (Abandoning External Dongles)`
    - Filename: `now_after_two_years_(abandoning_external_dongles).mp4`
    - Composition ID: `NowAfterTwoYears_AbandoningExternalDongles`

### 3. Update Delivery Manifest:
Every render must be appended to `motion_clips/broll_manifest.md` with:
- Canonical Title (First 4 words + optional sentence bracket)
- Filename
- Spoken Script Sentence / Paragraph
- Duration in Seconds & Frames
- Spec Archetype Used

### 4. Zero Stale Files Policy:
Always purge temporary PNG stills from `preview_frames/` or `out/` after verification. Never leave duplicate or stale renders in the project.

---

## 9. Core Motion Design Commandments (The 15 Anti-AI Slop Laws)

1. **The Zero Eyebrow / Zero Pill Badge / Zero Bloat Law (CRITICAL)**:
   - **ABSOLUTELY NO EYEBROWS, NO PILL BADGES, AND NO CATEGORY TAGS.**
   - Never add decorative uppercase pill boxes or labels above cards (e.g. `[ THE MODULAR GENERATION ]`, `[ COMPONENT 1 ]`, `[ HURDLE 01 ]`, `[ ARCHITECTURAL REDESIGN ]`).
   - Pill tags and eyebrows are web/marketing bloat that scream amateur PowerPoint design. Broadcast-grade motion graphics (Vox, Bloomberg, MKBHD) rely on clean, authoritative typography, authentic cutouts, and pure space.

2. **The Hero Opening Punch Rule**:
   - Opening punch words (temporal hooks like `IN LATE 2023`, critical years, locations, or core thesis words) MUST land on screen **ALONE first** as an isolated hero element, accompanied by an authoritative acoustic hit (`thud.wav`).
   - Explanatory companion clauses (e.g. *"Bluetti debuted their modular kit—"*) animate in alongside or below only **AFTER** the hero punch has established the scene. Never group them into a single simultaneous text block.

3. **Comma-Separated Grow & Push Choreography (Dynamic Spatial Physics)**:
   - When a sentence lists multiple entities or hardware separated by commas (e.g. *"the A80 microinverter, D100S controller, and B210 battery"*):
     - **Item 1** enters dead-center and grows into focus.
     - When **Item 2** enters dead-center, Item 1 physically pushes left (`-440px` to `-480px`) to make room.
     - When **Item 3** enters, it takes the right (`+440px` to `+480px`), locking a balanced 3-part layout.
     - **NEVER** dump them as a static 3-column card grid at once. The screen is a living stage where new arrivals physically push and displace existing elements.

4. **Massive Stat Slam (Scale 2.4× down to 1.0×)**:
   - Financial figures, prices (`€3,500`), wattage limits (`800W`), or critical numbers must slam down from 2.4× scale with a physical `stamp_slam.wav` or `thud.wav`, claiming the full screen rather than sitting in a polite little badge.

5. **Dynamic Telemetry, Authentic Footage & Distressed Stamps vs Dry Text Cards**:
   - Never chain 3 consecutive text cards together for hurdles or pain points. That turns the video into a boring slide deck.
   - Mix in:
     - Authentic OEM footage with the Premiere Pro subtitle crop (`scale(1.2-1.38)` and `translateY(-35px)`).
     - Dynamic UI simulations (e.g. live solar dropping from 800W to 0W at sunset with flashing red alert and `alert_beep.wav`).
     - Distressed rubber stamp overlays (e.g. `FAILED TO UNTANGLE`) with tactile `stamp_slam.wav`.

6. **The Full Canvas Trap**: Never open a scene at frame 0 with pre-assembled layouts. Elements arrive word-by-word with spoken audio.
7. **The Atomic Staggering Law**: Never animate separable elements together. Every product, metric, or clause gets its own isolated entrance and Foley punch.
8. **The Lone Words Rule**: Action words, model names (`Hyper 2000`), and dates must exist alone on screen with zero clutter or borders.
9. **Dead-Center Vertical Alignment**: All content must be centered vertically (`top: 50%`, `transform: translateY(-50%)`).
10. **Hero Subject Persistence**: Persisting subjects glide to dead-center stage instead of abruptly cutting to black.
11. **Permanent Text Visibility**: Highlighters sweep behind permanent high-contrast text.
12. **Absolute Media Relevance**: Never use generic stock footage (wind turbines, random drone shots) as filler.
13. **The Premiere Pro Subtitle Crop**: Crop out lower-third subtitles by scaling `115%–138%` and shifting `translateY(-35px)`.
14. **The Authentic Sourcing Law (No Synthetic SVGs for Real Subjects)**:
    - Never generate synthetic SVG line drawings for real-world architectural landmarks (e.g. Eiffel Tower, Brandenburg Gate), physical venues, or real hardware products.
    - Always search the web and extract authentic, high-resolution photographic transparent PNG cutouts. Real physical texture, metal reflection, and architectural realism are mandatory for documentary credibility.
15. **The Deep Asset Harvest Mandate (Script-Proportional Scope)**:
    - For long-form teardowns, comparisons, and product reviews, NEVER settle for a superficial 3–4 images. The depth of asset harvesting must match the script's narrative scope: systematically collect heroes, exploded internals, rear I/O, accessories, lifestyle installations, competitor benchmarks, predecessor hardware, and editorial launch event photos into `product_images/<brand>/`.

---

## 10. Acoustic Foley Sound Design (`public/sfx/`)

Every visual entrance or state transition **MUST** have a synchronized Foley hit:
`swoosh.wav`, `click.wav`, `pop.wav`, `thud.wav`, `stamp_slam.wav`, `draw.wav`, `camera_click.wav`.

---

## 11. Windows PowerShell Execution Rule

Always run Remotion commands via `cmd /c`:
```powershell
cmd /c npx remotion render <CompositionID> motion_clips/<canonical_name>.mp4
```
