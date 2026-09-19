# 🎬 Antigravity B-Roll Motion Graphics Engine

> **A broadcast-grade Remotion motion graphics production framework and Antigravity skill for transforming YouTube scripts into high-retention, editorial documentary B-rolls.**

Designed in the visual language of **Vox, Johnny Harris, Bloomberg, MKBHD, and Cleo Abram**, this standalone repository provides everything needed to scout, choreograph, and render studio-grade B-roll animations with synchronous acoustic Foley sound design.

---

## 🏛️ The B-Roll Macro Architecture: 5 Production Tracks

B-Roll is the comprehensive umbrella discipline for all visual storytelling footage that illustrates and paces a spoken video. This engine coordinates **5 distinct production tracks**:

1. **Track 1: Modern Tech Motion Design (Specs 1–8)**: Premium dark-slate canvas (`#080B10`), dynamic telemetry, scoreboard multipliers, forum quote receipts, and multi-pillar audits. [100% Modular & Mixable]
2. **Track 2: Swiss International Typographic Style**: Minimalist editorial elegance, rigid mathematical grid systems, heavy grotesque type (Helvetica, Inter), radical negative space, asymmetric tension. [100% Modular & Mixable]
3. **Track 3: Vox & Johnny Harris Investigative Documentary**: Tactile paper dioramas, aged newsprint (`#F5F2EB`), halftone B&W cutouts with colored offset drops, detective corkboards with red yarn, classified manila folders, and generative video prompts via `vox-style`. [Strictly Isolated]
4. **Track 4: Authentic OEM & Hardware Footage Ingestion**: 4K manufacturer launch footage, real balcony installation documentaries, and teardowns. Features the Premiere Pro subtitle crop (`115%–138%`, `translateY(-35px)`) and rapid spring punch-in. [Mixable]
5. **Track 5: YouTube Shorts Viral Engine**: Automated vertical 9:16 (1080x1920) retention engine with hybrid 70% zoom framing, Andrew Edge TTS, and optical-center subtitles via `youtube-shorts-viral-engine`. [Format Isolated]

---

## ⚡ The Material-First Asset Intelligence (Zero Synthetic Drawings)

- **Mandatory Pre-Flight Asset Sourcing**: The engine proactively evaluates whether to use **Mixed-Media Cutouts (Path A)**, **Live Video Footage (Path B)**, or **Pure Swiss Typography (Path C)**.
- **Strict Anti-Synthetic Drawing Law**: If an entity exists in the real physical world (landmarks like Eiffel Tower, hardware products like Bluetti/EcoFlow, components like solar panels, the sun, inverters, batteries, tools), the AI is **strictly forbidden from drawing them using SVG code or CSS shapes**. It fetches authentic, high-resolution photographic cutouts or videos online beforehand.
- **Living Spec Choreography Mindsets**: Specs are spatial choreography patterns (e.g. *Spec 1: Hero Arrival & Stage Split*, *Spec 3: Versus Showdown*, *Spec 7: Sequential Comma Push*). When the user says *"I trust your creative eye"*, the engine **never discards the specs**—it selects and applies the best spec choreography mindset.

---

## ✨ Key Features

- **⚡ Instant `/broll` Slash Command**: Type `/broll` in Antigravity to launch the interactive onboarding flow.
- **🎯 Click-and-Choose Guided Onboarding**: Sequential 1-question-at-a-time modals (`ask_question`) guiding you through starting point, script input, asset sources, specs, and concept pitch.
- **🧠 Mandatory Full Skill & Resource Digest Quality Gate**: Prevents premature code generation and "AI slop". The engine pauses to thoroughly digest the entire base skill, spec catalog, soundboard, and commandments before touching code, presenting a visible pre-flight blueprint.
- **🧩 8 Modular Spec Archetypes**: Pre-built TSX components for hardware specs, scoreboards, versus comparisons, telemetry gauges, forum receipts, kinetic statement hooks, comma lists, and forensic audits.
- **🎨 Living Blueprints (Specs as Addons)**: Specs serve as creative guides rather than rigid molds.
- **🎧 Synchronous Acoustic Foley Library**: Includes `swoosh`, `click`, `pop`, `thud`, `stamp_slam`, `draw`, and `camera_click` sound effects synchronized to the exact frame.
- **📁 Canonical Deliverable Naming & Tracking**: Strictly script-derived filenames (`<first_four_words>_(<sentence_words>).mp4`) with automatic `broll_manifest.md` delivery logging.
- **🛡️ 15 Anti-AI Slop Commandments**: Enforces zero pill badges, hero opening punches, comma push physics, progressive disclosure, lone words, vertical centering, and hero subject persistence.

---

## 🚀 Quick Start (2-Minute Setup)

### 1. Clone or Download Repository
```bash
git clone https://github.com/<your-org>/antigravity-broll-engine.git
cd antigravity-broll-engine
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Open in Antigravity IDE
Open the project directory in the Antigravity IDE. The skill is automatically detected from `.agents/skills/broll/`!

### 4. Trigger the Skill
In the chat panel, simply type:
```text
/broll
```
Antigravity will greet you with its capability briefing and display interactive pop-up options to guide you through your script or B-roll project.

---

## 🏛️ The 8 Canonical Design Specs

| Spec | Name | Best Used For | Visual Choreography |
| :---: | :--- | :--- | :--- |
| **01** | **ProductSpec** | Hardware hero, CAD teardowns, dimensions | Enters center, glides right to reveal 3 tech spec cards with leader lines. |
| **02** | **RatingScore** | Broadcaster scoreboard & category marks | Multiplier badge (`WEIGHT: x2`), horizontal progress bars filling to score. |
| **03** | **Comparison** | Conceptual splits (Hardware vs Software, OTA vs Recall) | 50/50 split screen with glowing neon vertical seam and locked showdown. |
| **04** | **MetricTelemetry** | Live lab tests, decibels, thermal loss | Dynamic animated VU meter needle or temperature gauge with caution zone. |
| **05** | **QuoteReceipt** | Community forum posts (Reddit, forums) | Dark-mode forum post card with sweeping felt-tip highlighter (permanent text). |
| **06** | **StatementSpec** | Provocative thesis hooks, turning points | Massive stat punch (e.g. `£1,000+`) swinging drop -> kinetic statement reveal. |
| **07** | **SequentialEmphasis** | Comma-separated list items & symptom lists | Item 1 enters center -> shifts left as Item 2 arrives -> locked showdown. |
| **08** | **ForensicAudit** | Dense multi-pillar criteria & deep audits | Hero persistence glide -> 4-6 staggered criteria rows with clicks -> stamp slam. |

*(Review all specs in action inside Antigravity: `references/spec_video_showcase.md`)*

---

## 📂 Project Structure

```text
antigravity-broll-engine/
├── .agents/
│   └── skills/
│       └── broll/
│           ├── SKILL.md                 # Complete Antigravity skill definition
│           └── references/
│               ├── spec_video_showcase.md # Live native GIF/MP4 carousel showcase
│               ├── spec-catalog.md      # Detailed breakdown of Specs 1-8
│               ├── foley-soundboard.md  # SFX timings and Remotion code
│               └── anti-ai-slop.md      # 15 Editorial design commandments
├── public/
│   ├── sfx/                             # Frame-accurate Foley audio pack
│   │   ├── swoosh.wav
│   │   ├── click.wav
│   │   ├── pop.wav
│   │   ├── thud.wav
│   │   ├── draw.wav
│   │   ├── camera_click.wav
│   │   └── stamp_slam.wav
│   └── spec_previews/                   # Spec demo GIFs and MP4s
├── src/
│   ├── Root.tsx                         # Master composition registry
│   ├── index.ts                         # Remotion root entry
│   ├── specs/                           # The 8 canonical TSX specs
│   ├── components/                      # Backdrops, icons, and audit stamps
│   ├── design_system/                   # Font stacks and color tokens
│   └── production/                      # Your finished scene compositions
├── motion_clips/                        # Master deliverable output folder
│   ├── broll_manifest.md                # Delivery index tracking table
│   └── .gitkeep
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── INSTALLATION_GUIDE.md                # Newbie guide
└── README.md
```

---

## ⚖️ License & Credits

Built for editorial creators, investigative journalists, and YouTube video essayists. Powered by [Remotion](https://www.remotion.dev/).
