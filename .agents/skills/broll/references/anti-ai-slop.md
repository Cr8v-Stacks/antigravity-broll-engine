# 🎨 Anti-AI Slop & Editorial Motion Design Commandments

These non-negotiable visual rules separate broadcast-grade editorial motion design from generic, disposable "AI slop".

---

## 1. The "Full Canvas" Trap & Unresolved Tension
- **The Sin**: Opening a scene at frame 0 with cards, icons, metrics, and labels already sitting on screen. The viewer reads everything in 0.5s; suspense is destroyed.
- **The Law**:
  - The scene opens clean, minimal, or empty.
  - Elements arrive word-by-word with the narrator's vocal cues.
  - Maintain unresolved tension: do not show the punchline or destination until the speaker utters the cue word.

---

## 2. The Atomic Staggering Law
- **If you have things you can animate separately, NEVER animate them together.**
- If a sentence introduces multiple products or clauses (*"Solarbank 2 Pro and 3 Pro"*), never dump them into a single static text block.
- Animate the first subject (`SOLARBANK 2`) with an authoritative spring punch and Foley hit (`thud.wav`).
- Sequentially punch in the second subject (`& 3 PRO`) on its exact vocal cue.
- Every distinct product, metric, or entity deserves its own isolated moment in time.

---

## 3. The "Lone Words" Rule
- Key action words, product models (`Hyper 2000`), dates (`AUGUST 2026`), and punchlines **MUST exist ALONE on the screen**.
- No borders, no solid cards, no clutter around them.
- For comma lists (*"Symptoms include burning plastic, fused joints, and sudden cutoffs"*):
  - Beat 1: `Symptoms include` animates in alone, then out.
  - Beat 2: `Burning plastic smells` animates in alone, then out.
  - Beat 3: `Fused electrical joints` animates in alone, then out.

---

## 4. Permanent Text Visibility (The Highlighter Rule)
- **Never let text disappear, flicker, or turn black-on-black** when a highlighter sweeps across it.
- The highlighter is a colored layer (`linear-gradient` with `box-decoration-break: clone`) sweeping behind permanent high-contrast text.

---

## 5. Strict Vertical Centering & Balanced Negative Space
- **Never align elements to the top edge when the bottom space is unused.**
- All content must be centered in the 1920x1080 canvas (`display: flex; justifyContent: center; alignItems: center;` or `top: 50%; transform: translateY(-50%)`).

---

## 6. Spatial Fluid Staging & Hero Subject Persistence
- **Never abruptly pop unrelated boxes in and out.**
- Treat the canvas as a continuous physical stage:
  1. Hero subject enters center stage.
  2. When comparing with another subject, it shifts left to receive the comparison element.
  3. When transitioning to the next thought, non-persisting elements exit, and the hero subject glides back to **dead-center stage** before receiving incoming telemetry or evidence.

---

## 7. Zero Irrelevant Stock Footage Rule
- Never use generic filler videos (spinning fans, random wind turbines, unrelated drone cityscapes) just to fill time.
- Every clip, photo, CAD drawing, or forum screenshot must directly depict the exact brand, mechanism, or evidence cited in the voiceover.

---

## 8. The "Premiere Pro" Subtitle Crop
- When using OEM footage with baked-in subtitles or watermarks in the lower third, scale up the container (`115% to 125%`) and shift `translateY` to push the subtitles off-screen while keeping the product centered.
