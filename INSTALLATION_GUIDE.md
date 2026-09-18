# 🚀 Beginner's Installation & Onboarding Guide

Welcome! If you've just received or cloned this repository, this guide will get you producing broadcast-quality B-roll motion graphics in under 3 minutes.

---

## Step 1: System Prerequisites

Before starting, ensure your machine has:
1. **Node.js** (v18 or higher): Download from [nodejs.org](https://nodejs.org/).
2. **FFmpeg** (Recommended for video rendering): If you don't have it, run `winget install Gyan.FFmpeg` on Windows or `brew install ffmpeg` on macOS.
3. **Google Antigravity IDE** (or CLI).

---

## Step 2: Install Project Dependencies

Open your terminal in the cloned folder and run:
```bash
npm install
```
This installs Remotion, React 19, and the rendering bundle.

---

## Step 3: Two Ways to Install the Skill in Antigravity

### Option A: Project-Specific (Automatic & Zero Config)
Simply open this repository folder (`antigravity-broll-engine`) in Antigravity as your workspace.
Antigravity automatically discovers `.agents/skills/broll/` at the root!

### Option B: Global Install (Use in ANY Project on Your Computer)
If you want to use the `/broll` command across all your existing projects and workspaces:
- **Windows**: Copy the `.agents/skills/broll` folder into:
  `C:\Users\<YourUsername>\.gemini\config\skills\broll`
- **macOS / Linux**: Copy into:
  `~/.gemini/config/skills/broll`

Once copied, the `/broll` command will be available everywhere globally!

---

## Step 4: Using the Skill

### 1. Launch the Skill
In the Antigravity chat, type:
```text
/broll
```

### 2. Click and Choose (Interactive Modals)
The skill will introduce its capabilities and present you with **clickable pop-up questions**:
- **What do you want to do?** (Scout script, build B-roll for a sentence, or explore specs)
- **Visual Mood**: Pick between Keynote White, Dark Slate Blueprint, or Obsidian Darkroom.
- **Typography**: Choose your font pairing.
- **Spec Guidance**: Pick an archetype spec as a starting blueprint.

### 3. Review 3 Visual Concepts
Before writing any code, the agent will propose **2 to 3 creative concepts** for your script section. Click your favorite!

### 4. Locate Your Rendered Video
Your finished video will be rendered directly to:
📁 **`motion_clips/`**
with a clear name like `motion_01_first_few_words.mp4`, and logged in `motion_clips/broll_manifest.md` so you always know which paragraph it belongs to!

---

## ❓ Frequently Asked Questions (FAQ)

### Can I render a full 15-minute YouTube video at once?
No. High-retention video production works in modular B-roll segments (typically 3 to 15 seconds each). You generate clips for your key points, then drop them into your video editor (Premiere, DaVinci, Final Cut) over your voiceover track.

### Do I have to follow the chosen spec strictly?
No! Specs are **addons and creative guides**. The agent organically blends the archetype with whatever best illustrates your script's specific thought.

### Where are the sound effects stored?
All synchronized Foley audio files live in `public/sfx/` (`swoosh.wav`, `click.wav`, `stamp_slam.wav`, etc.) and are automatically imported by the Remotion compositions.
