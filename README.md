# 🎬 Antigravity B-Roll Motion Graphics Engine

> **A broadcast-grade Remotion motion graphics production framework and Antigravity skill for transforming YouTube scripts into high-retention, editorial documentary B-rolls.**

Designed in the visual language of **Vox, Johnny Harris, Bloomberg, MKBHD, and Cleo Abram**, this standalone repository provides everything needed to scout, choreograph, and render studio-grade B-roll animations with synchronous acoustic Foley sound design.

---

## ✨ Key Features

- **⚡ Instant `/broll` Slash Command**: Type `/broll` in Antigravity to launch the interactive onboarding flow.
- **🎯 Click-and-Choose Guided Onboarding**: Never assumes your intent. Uses interactive pop-up modals (`ask_question`) so you can select visual style, typography, and specs with a single click—no typing required!
- **🧩 8 Modular Spec Archetypes**: Pre-built TSX components for hardware specs, scoreboards, versus comparisons, telemetry gauges, forum quote receipts, kinetic statement hooks, comma lists, and forensic audits.
- **🎨 Living Blueprints (Specs as Addons)**: Specs serve as creative guides rather than rigid molds. Each animation blends the archetype with what is creatively right for the narrative.
- **🎧 Synchronous Acoustic Foley Library**: Includes `swoosh`, `click`, `pop`, `thud`, `stamp_slam`, `draw`, and `camera_click` sound effects synchronized to the exact frame.
- **📁 Canonical Deliverable Naming & Tracking**: Renders all clips into `motion_clips/` following the `motion_<index>_<spoken_cue_slug>.mp4` convention with an automatic `broll_manifest.md` delivery log.
- **🛡️ Anti-AI Slop Mandate**: Enforces progressive disclosure, lone words, vertical centering, and hero subject persistence—eliminating boring static slides.

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

---

## 📂 Project Structure

```text
antigravity-broll-engine/
├── .agents/
│   └── skills/
│       └── broll/
│           ├── SKILL.md                 # Complete Antigravity skill definition
│           └── references/
│               ├── spec-catalog.md      # Detailed breakdown of Specs 1-8
│               ├── foley-soundboard.md  # SFX timings and Remotion code
│               └── anti-ai-slop.md      # Editorial design commandments
├── public/
│   └── sfx/                             # Frame-accurate Foley audio pack
│       ├── swoosh.wav
│       ├── click.wav
│       ├── pop.wav
│       ├── thud.wav
│       ├── draw.wav
│       ├── camera_click.wav
│       └── stamp_slam.wav
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

## 🎬 CLI Rendering Commands

For Windows PowerShell users:
```powershell
# Open Remotion Studio Preview
cmd /c npx remotion preview

# Render an individual Spec still frame for review
cmd /c npx remotion still Spec1_ProductSpec preview_frames/spec1.png --frame=60

# Render a canonical MP4 deliverable
cmd /c npx remotion render Spec1_ProductSpec motion_clips/motion_01_hero_breakdown.mp4
```

---

## 📜 License

MIT License. Feel free to use in your commercial and editorial video pipelines.
