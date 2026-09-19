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

## 2. The Material-First Mandate & Strict Anti-Synthetic Drawing Law

> **🚨 TOP PRIORITY RULE: NEVER DRAW WHAT YOU CAN FETCH. ZERO SYNTHETIC SVGS FOR REAL SUBJECTS.**
>
> One of the most critical determinants of broadcast quality is knowing what materials are needed and proactively sourcing them. 
> **THE CARDINAL SIN**: Attempting to draw real-world physical subjects (landmarks like the Eiffel Tower, hardware products like Bluetti/EcoFlow, components like solar panels, the sun, microinverters, batteries, vehicles, tools) using SVG code, CSS shapes, or geometric approximations.
> Drawing synthetic code approximations wastes computational tokens and **instantly screams amateur, cheap clip-art output ("bad output")**.

### The Material Strategy Decision Tree (Evaluate During Script Analysis):
Before pitching concepts or writing code, analyze the script text and determine the optimal Material Strategy:

```
                               ┌─────────────────────────────────────────────────┐
                               │     Named Physical Entities in Script Text      │
                               │   (e.g., Eiffel Tower, Solar Panels, The Sun)   │
                               └────────────────────────┬────────────────────────┘
                                                        │
                                      Evaluate Best Production Vehicle
                                                        │
             ┌──────────────────────────────────────────┼──────────────────────────────────────────┐
             ▼                                          ▼                                          ▼
     ┌───────────────┐                          ┌───────────────┐                          ┌───────────────┐
     │    Path A     │                          │    Path B     │                          │    Path C     │
     │  Mixed-Media  │                          │Authentic Live │                          │ Pure Kinetic  │
     │ Photographic  │                          │ Video Footage │                          │  Typographic  │
     │    Cutouts    │                          │ + Text Overlay│                          │  & Telemetry  │
     └───────┬───────┘                          └───────┬───────┘                          └───────┬───────┘
             │                                          │                                          │
    • Isolated PNG cutouts                     • 1080p/4K OEM reel                        • For abstract claims
    • Subject A + Subject B                    • Real balcony clips                       • Statistical punches
    • Spring staging physics                   • Subtitle Crop 120%                       • Legal/cost thesis
    • Leader lines & meters                    • Kinetic text overlay                     • Swiss typography
```

1. **Path A (Mixed-Media Photographic Cutouts + Spatial Staging)**:
   - *When to use*: When multiple physical entities interact or technical specs are explained (e.g. the sun radiating energy onto a solar panel with live wattage telemetry).
   - *Action*: Go online immediately, search and download authentic, high-resolution transparent PNG cutouts (e.g. `sun_cutout.png`, `solar_panel_cutout.png`), place them in `public/assets/`, and stage them with spring physics, leader lines, and dynamic telemetry.
2. **Path B (Authentic Live Video Footage + Kinetic Typography Overlay)**:
   - *When to use*: When the narrative describes real-world physical action, atmospheric motion, weather, or real installation scenes.
   - *Action*: Sourcing authentic 1080p/4K video clips (from `Plug-in Renewables` or curated stock), applying the Premiere Pro Subtitle Crop (`scale(1.2-1.38)` and `translateY(-35px)`), and finishing the clip with clean overlaying motion typography.
3. **Path C (Pure Typographic & Telemetry Motion)**:
   - *When to use*: When the script makes an abstract claim, price comparison (£1,000+), legal contract dispute, or statistical statement with no single physical object.
   - *Action*: Bold Swiss typography, massive stat slam, and dynamic telemetry curves.

### 🔍 Mandatory Pre-Flight Asset Harvest Protocol:
The agent **MUST NOT wait until code writing to discover missing assets**. It must execute this harvest beforehand:
1. **Audit Local Storage First**: Check local project folders (`public/`, `official_web/`, `Plug-in Renewables/`, `product_images/<brand>/`) for matching cutouts or 4K videos.
2. **Active Web Harvesting**: If not found locally, immediately query the web:
   - Scrape manufacturer product portals (e.g. `bluettipower.eu`, `ecoflow.com`), brand press kits, and certified EU trade publications (`ess-news.com`, `pv-magazine.com`).
   - Search for transparent PNG cutouts (`site:pngwing.com <subject> transparent png` or official press renders).
   - If only solid-background photos exist: Download the highest-resolution official photograph and frame it as an authoritative editorial card with subtle studio drop shadow—**NEVER resort to drawing an SVG cartoon**.
3. **Download Directly to `public/`**: Save all downloaded cutouts, videos, or receipts into `public/assets/` or `public/product_images/<brand>/` *before* generating compositions!

---

## 3. Spec Archetypes as Living Choreography Mindsets (NOT Rigid Templates, NEVER Discarded)

> **THE SPEC GUIDANCE PRINCIPLE**:
> When a user says: `"(Recommended) Let the script dictate the specs"` or `"I trust your creative eye"`, **THIS DOES NOT MEAN DISCARDING THE SPECS!**
> The specs are **Spatial Choreography Mindsets**—the architectural staging patterns developed by world-class documentary motion designers. 
> The agent must select the best spec mindset for the script section, adapt its spatial physics, and explain why.

### The 9 Spec Choreography Mindsets:
| Spec | Choreography Mindset | Spatial Physics & Staging Rule | Example Script Application |
| :---: | :--- | :--- | :--- |
| **01** | **Hero Arrival & Stage Split** | Subject lands dead-center, establishes authority, then glides right (or moves up) to open negative space for companion data/leader lines. | Introducing a new solar generator, inverter, or architectural landmark. |
| **02** | **Benchmark Scoreboard & Progress Fill** | Clean category title, horizontal progress bars filling sequentially to verified scores (zero fake weight badges). | Benchmarking battery efficiency, durability scores, or warranty ratings. |
| **03** | **Neo-Brutalist Comparison Showdown** | Compact 485px cards, edge-aligned product frames, 3px solid borders, docked verdict stamps, zero dead white space. | Comparing Hardware vs Software, OTA Patch vs Physical Recall, Brand A vs Brand B. |
| **04** | **Live Telemetry & Measurement** | Dynamic needle sweep, thermal heat maps, live decibel VU meters, or solar wattage curves with alert zones. | Sound levels (dB), heat degradation (°C), solar input wattage dropping to 0W at sunset. |
| **05** | **Factual Evidence & Forum Receipt** | Dark-mode forum post card (Reddit, forums, lab PDFs) with a sweeping felt-tip highlighter behind permanent text. | Citing customer complaints, forum receipts, firmware bugs, or lab test findings. |
| **06** | **Lone Word Hook & Stat Slam** | Isolated temporal hook lands alone (`IN LATE 2023`), followed by a massive 2.4× stat slam (`€3,500`) with physical Foley thud. | Provocative thesis hooks, turning points, or financial shocks. |
| **07** | **Sequential Push & Displace** | Item 1 enters center; when Item 2 enters center, Item 1 physically pushes left (`-440px`) to make room. When Item 3 enters, it takes the right (`+440px`). | Comma-separated lists of hardware, features, or failure symptoms. |
| **08** | **Forensic Audit & Rubber Stamp** | Dense multi-pillar criteria rows checked off with mechanical clicks, sealed with an authoritative physical rubber stamp. | Deep audits, legal verdicts, safety compliance checks, final review verdict. |
| **09** | **Editorial Chapter Transition** | 6.0s (180f) transition, OffthreadVideo backdrop, high-tension retention curiosity hook in quotes, zero voiceover. | Act breaks, narrative pivots, pacing structure. |

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

### Step 3: Material Sourcing & Asset Direction (Multi-Select Enabled)
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

---

### Step 4: Visual Spec Guidance & In-App Video Showcase (Multi-Select Enabled)
Before presenting the spec options to the user:
1. **Provide the Clickable Showcase Link**:
   Always provide the permanent, working link to the native video carousel showcase:
   👉 **[Open Studio Spec Video Showcase](file:///C:/Users/user/.gemini/config/skills/broll/references/spec_video_showcase.md)**
   *(Note: This reference file contains the live carousel and embedded MP4 videos for all specs with full playback controls).*
2. **Call `ask_question` with `is_multi_select: true`**:
  - **Question**: *"Which Spec Archetype(s) would you like to draw from as guidance addons? (Review specs at: [Open Studio Spec Video Showcase](file:///C:/Users/user/.gemini/config/skills/broll/references/spec_video_showcase.md))"*
  - **Options**:
    - `(Recommended) Let the script dictate the specs`
    - `I trust your creative eye — Pick the best specs for this scene`
    - `Spec 1: ProductSpec — Hardware hero, internal specs, exploded CAD, leader lines`
    - `Spec 2: RatingScore — Broadcaster scoreboard, progress bars, verified test marks`
    - `Spec 3: Comparison — Neo-brutalist compact comparison, edge-aligned frames, docked stamps`
    - `Spec 4: MetricTelemetry — Live animated decibel VU meter, thermal gauges, waveforms`
    - `Spec 5: QuoteReceipt — Dark-mode forum post card (Reddit/forums) with felt-tip highlighter`
    - `Spec 6: StatementSpec — Provocative thesis hooks, lone words, massive stat punches (£1,000+)`
    - `Spec 7: SequentialEmphasis — Comma-separated symptom lists, progressive multi-beat locks`
    - `Spec 8: ForensicAudit — Dense multi-pillar criteria rows, mechanical clicks, verdict stamp`
    - `Spec 9: ChapterTransition — 6.0s editorial chapter card, OffthreadVideo, retention open loop`
*(Note: If the script section demands an archival investigative documentary aesthetic, select the dedicated Vox-Style track instead).*

---

### Step 5: The 3-Concept Pitch (Dynamic Script Synthesis — Zero Canned Concepts)
Before writing any code, the agent MUST analyze the user's provided script text dynamically:
1. **Narration Timing Math**: Word count ÷ ~2.25 words/sec = estimated seconds and frames @ 30fps.
2. **Material Evaluation**: Declare the Material Strategy (Path A Cutouts, Path B Video, or Path C Typography) and state required assets.
3. **Spec Mindset Declaration**: Explicitly state which Spec Choreography Mindset(s) are adopted and why.
4. **Synthesize 3 Distinct Creative Concepts** specifically tailored to those exact spoken words:
   - **Concept A (Keynote / Swiss Minimalist)**: Focus on high-contrast typography, lone words, clean whitespace, subtle radiant accent lines, and authoritative hardware cutouts.
   - **Concept B (Technical Telemetry & Evidence)**: Focus on animated decibel/thermal gauges, exploded CAD dimensions, scoreboard benchmarks, and verified forum receipts.
   - **Concept C (Kinetic Narrative Staged Reveal)**: Dynamic push-pull multi-scene choreography, sequential symptom locks, lone action words, and hero subject persistence across scene boundaries.
   *(Special Case: If the creator explicitly requested the Vox documentary aesthetic, the 3 concepts instead draw from the 3 locked Vox house styles: Newsroom Collage, Mixed-Media Paper, or 3D Paper Diorama via `vox-style`).*
5. **Interactive Modal Call**: Present the 3 concepts dynamically via `ask_question` with a 1-sentence breakdown of each concept's visual progression so the user can click their favorite.

---

## 5. The Mandatory Skill & Resource Digest Protocol (Step 6 Quality Gate)

> **🚨 ABSOLUTE WORKFLOW LAW: NEVER JUMP INTO WORK BEFORE DIGESTING THE ENTIRE SKILL SET & RESOURCES.**
> 
> When a user provides their response, script text, or concept selection, the AI must **NEVER jump straight into generating code or working with just the raw feedback.**
> Working on a production project requires that the creator/agent **thoroughly go through all available resources and digest the entire base skill set before diving in.**
>
> **THE MANDATORY RULE**:
> The agent is **STRICTLY FORBIDDEN** from writing `.tsx` files, creating compositions, or executing render commands immediately upon receiving user feedback.
>
> Instead, the agent **MUST** explicitly pause, go back into the base skill, and **re-read and digest the entire skill set and all its accompanying reference resources**:
> 1. **The Entire Base Skill (`SKILL.md`)**: Re-absorb the macro architecture, all 5 production tracks, the material-first mandate, mixability laws, deliverable naming laws, and execution commands.
> 2. **The Complete Design Spec Catalog (`references/spec-catalog.md`)**: Review visual progression, layout hierarchy, and component mechanics of the selected specs.
> 3. **The Foley Soundboard (`references/foley-soundboard.md`)**: Review all 11 acoustic sound assets in `public/sfx/`, decibel gains, and frame-accurate synchronization formulas.
> 4. **The Complete Anti-AI Slop Commandments (`references/anti-ai-slop.md`)**: Re-absorb all 15 editorial commandments, negative constraints, banned patterns, and dynamic spatial physics.
> 5. **Asset & Media Verification**: Confirm that authentic cutouts/videos are downloaded into `public/` (ZERO synthetic SVGs).
>
> **THE VISIBLE USER CONFIRMATION**:
> The agent **MUST let the user know explicitly** that it is going through the base skill set and all available resources to fully understand them and get itself in the exact mindset needed for the generation. It must output this visible **`🧠 Creative Director Mindset & Complete Skill Digest Blueprint`** directly into the chat:

### The Required Mindset & Complete Skill Digest Format:

```markdown
### 🧠 Creative Director Mindset & Complete Skill Digest Blueprint

#### 1. Comprehensive Skill & Resource Review (Full Base Digest)
- [x] **Base Engine (`SKILL.md`)**: Re-read and digested complete macro architecture, material-first mandate, and execution laws.
- [x] **Spec Catalog (`references/spec-catalog.md`)**: Reviewed layout mechanics and visual progression for chosen spec addons.
- [x] **Acoustic Foley (`references/foley-soundboard.md` & `public/sfx/`)**: Loaded sound assets, frame offsets, and acoustic mix rules.
- [x] **Anti-AI Slop & Editorial Laws (`references/anti-ai-slop.md`)**: Re-absorbed all 20 non-negotiable commandments and negative constraints.
- [x] **Asset & Media Verification**: Confirmed authentic photographic cutouts/videos are downloaded into `public/` (ZERO synthetic SVGs).

#### 2. Material Strategy & Sourced Assets
- **Material Path**: [Path A: Mixed-Media Cutouts / Path B: Live Video Reel / Path C: Pure Typography]
- **Sourced Assets**:
  - `public/assets/<entity_1>.png` (Authentic photographic cutout)
  - `public/assets/<entity_2>.png` (Authentic photographic cutout)
- **Anti-Synthetic Verification**: Confirmed NO code-drawn SVGs or CSS approximations are used.

#### 3. Selected Spec Choreography Mindset
- **Active Spec Mindset**: [e.g. Spec 1 (Hero Arrival & Stage Split) + Spec 7 (Sequential Push) hybrid]
- **Choreography Rationale**: [Explain why this spatial staging matches the spoken vocal beats]

#### 4. Negative Constraints & Anti-AI Slop Checklist (Active Ban List)
- [x] **Zero Synthetic SVGs for Real Subjects**: 100% authentic photographic cutouts and verified hardware.
- [x] **Zero Eyebrow / Zero Pill Badge Law**: ABSOLUTELY NO uppercase category tags, pill boxes, or `[ HURDLE 01 ]` marketing bloat.
- [x] **Zero Frame-0 Full Canvas Trap**: The canvas opens clean/empty; elements arrive word-by-word with the speaker's vocal cues.
- [x] **Zero Simultaneous Card Dumps**: Elements push and displace each other dynamically using spatial physics.
- [x] **Zero Generic Stock Filler**: Every asset directly depicts the exact hardware or claim cited.
- [x] **Strict Vertical Centering**: All content perfectly centered on Y-axis (`top: 50%`, `transform: translateY(-50%)`).

#### 5. Spoken Narration Timing Math & Cadence
- **Spoken Voiceover Text**: "[Quote the exact spoken words being visualized]"
- **Cadence Calculation**: [X] words ÷ 2.25 words/sec = ~[Y.Y] seconds = **[Z] frames @ 30fps**.

#### 6. Synchronous Acoustic Foley Allocation
- **Frame [F1]**: `thud.wav` (Hero temporal / lone word slam)
- **Frame [F2]**: `swoosh.wav` (Item 1 spatial push-left displacement)
- **Frame [F3]**: `click.wav` (Item 2 entrance / telemetry meter power-up)
- **Frame [F4]**: `stamp_slam.wav` (Verdict stamp / Stat slam down)

#### 7. Beat-by-Beat Spatial Choreography Map
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

## 6. Edge Cases & Nuance Resolution Guide

### Edge Case A: Full Script Scouting vs. Single Batch Paragraph
- **When Given a Full Script**:
  1. Do NOT immediately code. Scout candidate moments across the whole script.
  2. For each candidate moment, classify its **Material Strategy** (Path A Cutouts, Path B Video, Path C Typography) and **Spec Mindset**.
  3. Batch-harvest assets (scrape product cutouts, download press images) for all approved scenes at once into `public/assets/`.
- **When Given a Single Batch Paragraph**:
  1. Perform immediate Named Entity Extraction (e.g. *Eiffel Tower*, *Solar Panels*, *The Sun*, *EcoFlow Stream*).
  2. Check local folders -> Web search / crawl manufacturer -> Download transparent cutouts into `public/` *before* concept pitching.

### Edge Case B: Subject Without a Transparent Background Available
- If web queries for transparent PNGs fail, download the highest-resolution official photograph.
- **NEVER fallback to drawing an SVG caricature.**
- Instead:
  - Isolate the subject using rembg/canvas tools if available, OR
  - Frame the photo as an authoritative, high-contrast editorial card with a clean dark-mode bezel, subtle drop shadow, and crisp caption.

### Edge Case C: Multiple Real Entities in One Sentence
- Example: *"Solar panels harvesting energy from the blazing summer sun."*
- **Decision Matrix**:
  - If the narration focuses on technical mechanics or wattage: Choose **Path A (Mixed Media Cutouts)**. Harvest `sun_cutout.png` and `solar_panel_cutout.png`, position them spatially, and draw animated energy waves/telemetry between them.
  - If the narration focuses on real-world atmosphere or lifestyle installation: Choose **Path B (Live Video Footage)**. Find an authentic 4K clip of solar panels soaking up sunlight, crop cleanly (`scale(1.25)`), and overlay kinetic telemetry stats.

### Edge Case D: Interpreting "Let Script Dictate / I Trust Your Creative Eye"
- Choosing "I trust you" NEVER means abandoning specs.
- The AI must explicitly declare in its Concept Pitch:
  *"Adopting Spec Mindset 1 (Hero Arrival & Stage Split) because the script introduces a flagship hardware hero before breaking down internal inverter components."*

---

## 7. Core Motion Design Commandments (The 20 Anti-AI Slop Laws)

1. **The Anti-Synthetic Drawing Mandate (CRITICAL LAW #1)**:
   - If an entity exists in the physical world (Eiffel Tower, solar panels, the sun, inverters, batteries, vehicles, tools), **NEVER draw it using SVG code or CSS shapes**. Sourcing authentic photographic cutouts or videos is mandatory.

2. **The Zero Eyebrow / Zero Pill Badge / Zero Bloat Law (CRITICAL LAW #2)**:
   - **ABSOLUTELY NO EYEBROWS, NO PILL BADGES, AND NO CATEGORY TAGS.**
   - Never add decorative uppercase pill boxes or labels above cards (e.g. `[ THE MODULAR GENERATION ]`, `[ COMPONENT 1 ]`, `[ HURDLE 01 ]`, `[ ARCHITECTURAL REDESIGN ]`). Broadcast-grade motion graphics rely on clean, authoritative typography, authentic cutouts, and pure space.

3. **The Hero Opening Punch Rule**:
   - Opening punch words (temporal hooks like `IN LATE 2023`, critical years, locations, or core thesis words) MUST land on screen **ALONE first** as an isolated hero element, accompanied by an authoritative acoustic hit (`thud.wav`). Explanatory companion clauses animate in alongside or below only **AFTER** the hero punch has established the scene.

4. **Comma-Separated Grow & Push Choreography (Dynamic Spatial Physics)**:
   - When a sentence lists multiple entities or hardware separated by commas:
     - **Item 1** enters dead-center and grows into focus.
     - When **Item 2** enters dead-center, Item 1 physically pushes left (`-440px` to `-480px`) to make room.
     - When **Item 3** enters, it takes the right (`+440px` to `+480px`), locking a balanced 3-part layout.
     - **NEVER** dump them as a static 3-column card grid at once. The screen is a living stage where new arrivals physically push and displace existing elements.

5. **Massive Stat Slam (Scale 2.4× down to 1.0×)**:
   - Financial figures, prices (`€3,500`), wattage limits (`800W`), or critical numbers must slam down from 2.4× scale with a physical `stamp_slam.wav` or `thud.wav`, claiming the full screen rather than sitting in a polite little badge.

6. **Dynamic Telemetry, Authentic Footage & Distressed Stamps vs Dry Text Cards**:
   - Never chain 3 consecutive text cards together for hurdles or pain points. Mix in authentic OEM footage, dynamic UI simulations (e.g. live solar dropping from 800W to 0W with flashing red alert and `alert_beep.wav`), and distressed rubber stamp overlays.

7. **The Full Canvas Trap & Unresolved Tension**:
   - Never open a scene at frame 0 with pre-assembled layouts. Elements arrive word-by-word with spoken audio.

8. **The Atomic Staggering Law**:
   - If you have things you can animate separately, NEVER animate them together. Every distinct product, metric, or clause gets its own isolated entrance and Foley punch.

9. **The Lone Words Rule**:
   - Action words, model names (`Hyper 2000`), and dates must exist alone on screen with zero clutter or borders.

10. **Strict Vertical Centering & Balanced Negative Space**:
    - All content must be centered vertically (`top: 50%`, `transform: translateY(-50%)`).

11. **Hero Subject Persistence & Fluid Spatial Staging**:
    - Treat the canvas as a continuous physical stage where persisting subjects glide to dead-center stage instead of abruptly cutting to black.

12. **Permanent Text Visibility (The Highlighter Rule)**:
    - Never let text disappear, flicker, or turn black-on-black when a highlighter sweeps across it. The highlighter sweeps behind permanent high-contrast text.

13. **Zero Irrelevant Stock Footage Rule**:
    - Never use generic filler videos (spinning fans, random wind turbines, unrelated drone cityscapes) just to fill time. Every asset must directly depict the exact brand, mechanism, or evidence cited in the voiceover.

14. **The Premiere Pro Subtitle Crop**:
    - Crop out lower-third subtitles by scaling `115%–138%` and shifting `translateY(-35px)`.

15. **The Deep Asset Harvest Mandate (Script-Proportional Scope)**:
    - For long-form teardowns, comparisons, and product reviews, systematically collect heroes, exploded internals, rear I/O, accessories, lifestyle installations, competitor benchmarks, predecessor hardware, and editorial launch event photos into `product_images/<brand>/`.

16. **Strict Ban on Developer Script Annotations & Fake Telemetry Metadata (The Anti-AI Slop Law)**:
    - **NEVER** render script line references (e.g. `Lines 145 to 175`, `Lines 207–211`) or internal development tags anywhere in user-facing visuals.
    - **NEVER** render fake telemetry or synthetic metadata stamps like `BENCHMARK VERIFIED`, `TIMECODE 02:00`, `AUDIO CHOP COMPLIANT`, or artificial status badges.
    - Developer scratch notes, script line references, and synthetic verification badges are the definition of "AI slop" and are strictly forbidden from all visual output. Every visual element must be authentic editorial typography or real hardware data.

17. **The Neo-Brutalist Design Standard ("Personality Without Aggression")**:
    - When cards, containers, or scoreboard modules need distinctive character, employ **Neo-Brutalism**:
      - Master cards: High-contrast solid `#FFFFFF` cards on a warm studio paper desk background (`#F4F0E8` / `#F5F2EB`) with subtle architectural grid lines (`48px 48px`).
      - Bold borders: Crisp `3px` to `3.5px solid #0F172A` (or pure black).
      - Hard tactile drop shadows: `6px 6px 0px #0F172A`, `8px 8px 0px #0F172A`, or `10px 10px 0px #0F172A`. **NEVER use blurry, muddy CSS box-shadows or diffuse gradients.**
      - Refined corner rounding: `borderRadius: 6px` to `8px` (clean, contemporary neo-brutalism, never jagged or 90s web 1.0).
      - Solid color brutalist tags: Solid accent blocks (cobalt `#2563EB`, amber `#D97706`, emerald `#059669`, crimson `#DC2626`) with `2px solid #0F172A` borders and hard shadows.

18. **Editorial Comparison Geometry: Compact Height & Edge-Aligned Framing (Zero Dead White Space)**:
    - **Compact Card Sizing**: Never stretch comparison cards to fill the full vertical screen height, which creates massive awkward white gaps in the middle. Constrain cards to a compact, well-proportioned height (`480px` – `500px`), centered vertically on the screen.
    - **Edge-Aligned Product Framing**: Never center a floating cutout in an empty void while text is left-aligned. House hardware images inside dedicated brutalist display frames (`border: 2px solid #0F172A`, `borderRadius: 6px`, subtle `#F8FAFC` background) that span the full width of the card's inner margins, creating harmonious edge alignment with the content.
    - **Docked Verdict Badges**: Dock verdict stamps/badges directly beneath the bullet specs with clean margins (`marginTop: 12px`), completely eliminating empty dead space.
    - **Color-Coded Semantic Badges**: High-contrast tags (`#ECFDF5` emerald for positive, `#FFFBEB` amber for caution/baseline, `#FEF2F2` crimson for penalty/failure) with solid `2px` borders and hard brutalist shadows.

19. **Chapter B-Roll Transitions: Canonical 6.0s Calibration, Retention Hooks, & `<OffthreadVideo>` Glitch Elimination**:
    - **Strict Origin from Script**: Chapters MUST strictly follow the narrative chapters defined in the actual script (e.g. Chapter 01: *The Balcony Shading Trap*, Chapter 02: *The Bedroom Acoustic Reality*, etc.). Never invent generic corporate titles like "Prologue" or "The Paris Launch".
    - **Duration**: Exactly **6.0 seconds (180 frames @ 30fps)** per chapter. Continuous master reel: **60.0 seconds (1,800 frames)**.
    - **Zero Voiceover / Audio Timeline Chop**: Built specifically to be chopped during video editing. The narrator does not speak over the chapter card; it relies exclusively on frame-accurate acoustic Foley (`paper_slide.wav`, `click.wav`, `thud.wav`, `pop.wav`).
    - **High-Tension Dopamine Curiosity Hook ("What to Watch For")**: Every chapter transition must contain a bold, provocative retention question in quotes (`“...”`) that creates an open loop and prevents viewer drop-off.
    - **Glitch-Free Video Playback with `<OffthreadVideo>`**:
      - **CRITICAL REMOTION DIRECTIVE**: NEVER use HTML5 `<Video>` for video footage with camera panning or horizontal scrolling! Chromium drops frames and stutters during headless seeks.
      - **ALWAYS use `<OffthreadVideo>`** from `remotion`, which uses native FFmpeg to extract frames deterministically, ensuring 100% glitch-free horizontal scrolling and panning.
      - Start from frame 0 (or constant keyframe offset), with no unnecessary looping.

20. **Single-Pass Batch Bundling (Remotion High-Speed Rendering Law)**:
    - When rendering multiple compositions (e.g. 10 chapters + 4 comparisons + master reels), **NEVER invoke `npx remotion render` in a loop from the CLI**, because each CLI invocation re-bundles the entire project and re-copies the massive public folder (~760MB), wasting 15–20 minutes.
    - Instead, write a simple Node.js script using `@remotion/bundler` and `@remotion/renderer`:
      - Bundle `src/index.ts` **ONCE** with `bundle()`.
      - Sequentially select and render each composition using `selectComposition()` and `renderMedia()`.
      - This renders all deliverables in under 2 minutes with zero redundant bundling overhead.

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

## 9. Acoustic Foley Sound Design (`public/sfx/`)

Every visual entrance or state transition **MUST** have a synchronized Foley hit:
`swoosh.wav`, `click.wav`, `pop.wav`, `thud.wav`, `stamp_slam.wav`, `draw.wav`, `camera_click.wav`.

---

## 10. Execution Frameworks & Windows PowerShell Rule

Always run Remotion commands via `cmd /c`:
```powershell
cmd /c npx remotion render <CompositionID> motion_clips/<canonical_name>.mp4
```
