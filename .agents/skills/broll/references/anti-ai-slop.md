# 🎨 Anti-AI Slop & Editorial Motion Design Commandments

These 20 non-negotiable visual rules separate broadcast-grade editorial motion design from generic, disposable "AI slop".

---

## 1. The Anti-Synthetic Drawing Mandate (CRITICAL LAW #1)
- **ZERO SYNTHETIC SVGS OR CSS SHAPES FOR REAL-WORLD PHYSICAL SUBJECTS.**
- If an entity exists in the real physical world (e.g. Eiffel Tower, solar panels, the sun, microinverters, batteries, vehicles, tools, lab instruments):
  - **NEVER draw it using SVG code, CSS shapes, or geometric approximations.**
  - Code-drawn shapes waste generation tokens, look like 1990s clip-art cartoons, and instantly destroy documentary credibility.
  - **The Law**: Go online, scrape the manufacturer website, search for high-resolution transparent PNG cutouts (`site:pngwing.com <subject> transparent png`), or source authentic 1080p/4K stock/OEM footage. Download the real asset to `public/` before writing code.

---

## 2. The Zero Eyebrow / Zero Pill Badge Law (CRITICAL LAW #2)
- **ABSOLUTELY NO EYEBROWS, NO PILL BADGES, AND NO CATEGORY TAGS.**
- Never add decorative uppercase pill boxes or labels above cards (e.g. `[ THE MODULAR GENERATION ]`, `[ COMPONENT 1 ]`, `[ HURDLE 01 ]`, `[ ARCHITECTURAL REDESIGN ]`).
- Pill tags and eyebrows are web/marketing bloat that scream amateur PowerPoint design. Broadcast-grade motion graphics (Vox, Bloomberg, MKBHD) rely on clean, authoritative typography, authentic cutouts, and pure negative space.

---

## 3. The Hero Opening Punch Rule
- Opening punch words (temporal hooks like `IN LATE 2023`, critical years, locations, or core thesis words) MUST land on screen **ALONE first** as an isolated hero element, accompanied by an authoritative acoustic hit (`thud.wav`).
- Explanatory companion clauses (e.g. *"Bluetti debuted their modular kit—"*) animate in alongside or below only **AFTER** the hero punch has established the scene. Never group them into a single simultaneous text block.

---

## 4. Comma-Separated Grow & Push Choreography (Dynamic Spatial Physics)
- When a sentence lists multiple entities or hardware separated by commas (e.g. *"the A80 microinverter, D100S controller, and B210 battery"*):
  - **Item 1** enters dead-center and grows into focus.
  - When **Item 2** enters dead-center, Item 1 physically pushes left (`-440px` to `-480px`) to make room.
  - When **Item 3** enters, it takes the right (`+440px` to `+480px`), locking a balanced 3-part layout.
  - **NEVER** dump them as a static 3-column card grid at once. The screen is a living stage where new arrivals physically push and displace existing elements.

---

## 5. Massive Stat Slam (Scale 2.4× down to 1.0×)
- Financial figures, prices (`€3,500`), wattage limits (`800W`), or critical numbers must slam down from 2.4× scale with a physical `stamp_slam.wav` or `thud.wav`, claiming the full screen rather than sitting in a polite little badge.

---

## 6. Dynamic Telemetry, Authentic Footage & Distressed Stamps vs Dry Text Cards
- Never chain 3 consecutive text cards together for hurdles or pain points. That turns the video into a boring slide deck.
- Mix in:
  - Authentic OEM footage with the Premiere Pro subtitle crop (`scale(1.2-1.38)` and `translateY(-35px)`).
  - Dynamic UI simulations (e.g. live solar dropping from 800W to 0W at sunset with flashing red alert and `alert_beep.wav`).
  - Distressed rubber stamp overlays (e.g. `FAILED TO UNTANGLE`) with tactile `stamp_slam.wav`.

---

## 7. The "Full Canvas" Trap & Unresolved Tension
- **The Sin**: Opening a scene at frame 0 with cards, icons, metrics, and labels already sitting on screen. The viewer reads everything in 0.5s; suspense is destroyed.
- **The Law**:
  - The scene opens clean, minimal, or empty.
  - Elements arrive word-by-word with the narrator's vocal cues.
  - Maintain unresolved tension: do not show the punchline or destination until the speaker utters the cue word.

---

## 8. The Atomic Staggering Law
- **If you have things you can animate separately, NEVER animate them together.**
- If a sentence introduces multiple products or clauses (*"Solarbank 2 Pro and 3 Pro"*), never dump them into a single static text block.
- Animate the first subject (`SOLARBANK 2`) with an authoritative spring punch and Foley hit (`thud.wav`).
- Sequentially punch in the second subject (`& 3 PRO`) on its exact vocal cue.
- Every distinct product, metric, or entity deserves its own isolated moment in time.

---

## 9. The "Lone Words" Rule
- Key action words, product models (`Hyper 2000`), dates (`AUGUST 2026`), and punchlines **MUST exist ALONE on the screen**.
- No borders, no solid cards, no clutter around them.
- For comma lists (*"Symptoms include burning plastic, fused joints, and sudden cutoffs"*):
  - Beat 1: `Symptoms include` animates in alone, then out.
  - Beat 2: `Burning plastic smells` animates in alone, then out.
  - Beat 3: `Fused electrical joints` animates in alone, then out.

---

## 10. Permanent Text Visibility (The Highlighter Rule)
- **Never let text disappear, flicker, or turn black-on-black** when a highlighter sweeps across it.
- The highlighter is a colored layer (`linear-gradient` with `box-decoration-break: clone`) sweeping behind permanent high-contrast text.

---

## 11. Strict Vertical Centering & Balanced Negative Space
- **Never align elements to the top edge when the bottom space is unused.**
- All content must be centered in the 1920x1080 canvas (`display: flex; justifyContent: center; alignItems: center;` or `top: 50%; transform: translateY(-50%)`).

---

## 12. Spatial Fluid Staging & Hero Subject Persistence
- **Never abruptly pop unrelated boxes in and out.**
- Treat the canvas as a continuous physical stage:
  1. Hero subject enters center stage.
  2. When comparing with another subject, it shifts left to receive the comparison element.
  3. When transitioning to the next thought, non-persisting elements exit, and the hero subject glides back to **dead-center stage** before receiving incoming telemetry or evidence.

---

## 13. Zero Irrelevant Stock Footage Rule
- Never use generic filler videos (spinning fans, random wind turbines, unrelated drone cityscapes) just to fill time.
- Every clip, photo, CAD drawing, or forum screenshot must directly depict the exact brand, mechanism, or evidence cited in the voiceover.

---

## 14. The "Premiere Pro" Subtitle Crop
- When using OEM footage with baked-in subtitles or watermarks in the lower third, scale up the container (`115% to 138%`) and shift `translateY(-35px)` to push subtitles off-screen while keeping the product centered.

---

## 15. The Deep Asset Harvest Mandate (Script-Proportional Scope)
- For long-form teardowns, comparisons, and product reviews, NEVER settle for a superficial 3–4 images. The depth of asset harvesting must match the script's narrative scope: systematically collect heroes, exploded internals, rear I/O, accessories, lifestyle installations, competitor benchmarks, predecessor hardware, and editorial launch event photos into `product_images/<brand>/`.

---

## 16. Strict Ban on Script Line Annotations & Fake Telemetry (The Anti-AI Slop Law)
- **ABSOLUTELY NEVER** render script line references (e.g. `Lines 145 to 175`, `Lines 207–211`) or internal development tags anywhere in user-facing visuals.
- **ABSOLUTELY NEVER** render fake telemetry or synthetic metadata stamps like `BENCHMARK VERIFIED`, `TIMECODE 02:00`, `AUDIO CHOP COMPLIANT`, or artificial status badges.
- Developer scratch notes, script line references, and synthetic verification badges are the definition of "AI slop" and are strictly forbidden from all visual output. Every visual element must be authentic editorial typography or real hardware data.

---

## 17. The Neo-Brutalist Design Standard ("Personality Without Aggression")
- When cards, containers, or scoreboard modules need distinctive character, employ **Neo-Brutalism**:
  - Master cards: High-contrast solid `#FFFFFF` cards on a warm studio paper desk background (`#F4F0E8` / `#F5F2EB`) with subtle architectural grid lines (`48px 48px`).
  - Bold borders: Crisp `3px` to `3.5px solid #0F172A` (or pure black).
  - Hard tactile drop shadows: `6px 6px 0px #0F172A`, `8px 8px 0px #0F172A`, or `10px 10px 0px #0F172A`. **NEVER use blurry, muddy CSS box-shadows or diffuse gradients.**
  - Refined corner rounding: `borderRadius: 6px` to `8px` (clean, contemporary neo-brutalism, never jagged or 90s web 1.0).
  - Solid color brutalist tags: Solid accent blocks (cobalt `#2563EB`, amber `#D97706`, emerald `#059669`, crimson `#DC2626`) with `2px solid #0F172A` borders and hard shadows.

---

## 18. Editorial Comparison Geometry: Compact Height & Edge-Aligned Framing (Zero Dead White Space)
- **Compact Card Sizing**: Never stretch comparison cards to fill the full vertical screen height, which creates massive awkward white gaps in the middle. Constrain cards to a compact, well-proportioned height (`480px` – `500px`), centered vertically on the screen.
- **Edge-Aligned Product Framing**: Never center a floating cutout in an empty void while text is left-aligned. House hardware images inside dedicated brutalist display frames (`border: 2px solid #0F172A`, `borderRadius: 6px`, subtle `#F8FAFC` background) that span the full width of the card's inner margins, creating harmonious edge alignment with the content.
- **Docked Verdict Badges**: Dock verdict stamps/badges directly beneath the bullet specs with clean margins (`marginTop: 12px`), completely eliminating empty dead space.
- **Color-Coded Semantic Badges**: High-contrast tags (`#ECFDF5` emerald for positive, `#FFFBEB` amber for caution/baseline, `#FEF2F2` crimson for penalty/failure) with solid `2px` borders and hard brutalist shadows.

---

## 19. Glitch-Free Video Playback with `<OffthreadVideo>` (Anti-Frame-Skipping Law)
- **CRITICAL REMOTION DIRECTIVE**: NEVER use HTML5 `<Video>` for video footage with camera panning or horizontal scrolling! Chromium drops frames and stutters during headless seeks, producing visible video glitching.
- **ALWAYS use `<OffthreadVideo>`** from `remotion`, which uses native FFmpeg to extract frames deterministically, ensuring 100% glitch-free horizontal scrolling and panning.
- Start from frame 0 (or constant keyframe offset), with no unnecessary looping.

---

## 20. Chapter B-Roll Transitions: Canonical 6.0s Calibration, Retention Hooks & Pure Negative Space
- **Strict Origin from Script**: Chapters MUST strictly follow the narrative chapters defined in the actual script (e.g. Chapter 01: *The Balcony Shading Trap*, Chapter 02: *The Bedroom Acoustic Reality*, etc.). Never invent generic corporate titles like "Prologue" or "The Paris Launch".
- **Duration**: Exactly **6.0 seconds (180 frames @ 30fps)** per chapter. Continuous master reel: **60.0 seconds (1,800 frames)**.
- **Zero Voiceover / Audio Timeline Chop**: Built specifically to be chopped during video editing. The narrator does not speak over the chapter card; it relies exclusively on frame-accurate acoustic Foley (`paper_slide.wav`, `click.wav`, `thud.wav`, `pop.wav`).
- **High-Tension Dopamine Curiosity Hook ("What to Watch For")**: Every chapter transition must contain a bold, provocative retention question in quotes (`“...”`) that creates an open loop and prevents viewer drop-off.
- **Zero Eyebrow / Zero Timecode Law**: NEVER add decorative uppercase pills or fake timestamps (`TIMECODE 02:00`). Pure neo-brutalist typography only.
