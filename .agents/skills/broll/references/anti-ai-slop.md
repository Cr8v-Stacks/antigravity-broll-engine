# 🎨 Anti-AI Slop & Editorial Motion Design Commandments

These 15 non-negotiable visual rules separate broadcast-grade editorial motion design from generic, disposable "AI slop".

---

## 1. The Zero Eyebrow / Zero Pill Badge Law (CRITICAL)
- **ABSOLUTELY NO EYEBROWS, NO PILL BADGES, AND NO CATEGORY TAGS.**
- Never add decorative uppercase pill boxes or labels above cards (e.g. `[ THE MODULAR GENERATION ]`, `[ COMPONENT 1 ]`, `[ HURDLE 01 ]`, `[ ARCHITECTURAL REDESIGN ]`).
- Pill tags and eyebrows are web/marketing bloat that scream amateur PowerPoint design. Broadcast-grade motion graphics (Vox, Bloomberg, MKBHD) rely on clean, authoritative typography, authentic cutouts, and pure negative space.

---

## 2. The Hero Opening Punch Rule
- Opening punch words (temporal hooks like `IN LATE 2023`, critical years, locations, or core thesis words) MUST land on screen **ALONE first** as an isolated hero element, accompanied by an authoritative acoustic hit (`thud.wav`).
- Explanatory companion clauses (e.g. *"Bluetti debuted their modular kit—"*) animate in alongside or below only **AFTER** the hero punch has established the scene. Never group them into a single simultaneous text block.

---

## 3. Comma-Separated Grow & Push Choreography (Dynamic Spatial Physics)
- When a sentence lists multiple entities or hardware separated by commas (e.g. *"the A80 microinverter, D100S controller, and B210 battery"*):
  - **Item 1** enters dead-center and grows into focus.
  - When **Item 2** enters dead-center, Item 1 physically pushes left (`-440px` to `-480px`) to make room.
  - When **Item 3** enters, it takes the right (`+440px` to `+480px`), locking a balanced 3-part layout.
  - **NEVER** dump them as a static 3-column card grid at once. The screen is a living stage where new arrivals physically push and displace existing elements.

---

## 4. Massive Stat Slam (Scale 2.4× down to 1.0×)
- Financial figures, prices (`€3,500`), wattage limits (`800W`), or critical numbers must slam down from 2.4× scale with a physical `stamp_slam.wav` or `thud.wav`, claiming the full screen rather than sitting in a polite little badge.

---

## 5. Dynamic Telemetry, Authentic Footage & Distressed Stamps vs Dry Text Cards
- Never chain 3 consecutive text cards together for hurdles or pain points. That turns the video into a boring slide deck.
- Mix in:
  - Authentic OEM footage with the Premiere Pro subtitle crop (`scale(1.2-1.38)` and `translateY(-35px)`).
  - Dynamic UI simulations (e.g. live solar dropping from 800W to 0W at sunset with flashing red alert and `alert_beep.wav`).
  - Distressed rubber stamp overlays (e.g. `FAILED TO UNTANGLE`) with tactile `stamp_slam.wav`.

---

## 6. The "Full Canvas" Trap & Unresolved Tension
- **The Sin**: Opening a scene at frame 0 with cards, icons, metrics, and labels already sitting on screen. The viewer reads everything in 0.5s; suspense is destroyed.
- **The Law**:
  - The scene opens clean, minimal, or empty.
  - Elements arrive word-by-word with the narrator's vocal cues.
  - Maintain unresolved tension: do not show the punchline or destination until the speaker utters the cue word.

---

## 7. The Atomic Staggering Law
- **If you have things you can animate separately, NEVER animate them together.**
- If a sentence introduces multiple products or clauses (*"Solarbank 2 Pro and 3 Pro"*), never dump them into a single static text block.
- Animate the first subject (`SOLARBANK 2`) with an authoritative spring punch and Foley hit (`thud.wav`).
- Sequentially punch in the second subject (`& 3 PRO`) on its exact vocal cue.
- Every distinct product, metric, or entity deserves its own isolated moment in time.

---

## 8. The "Lone Words" Rule
- Key action words, product models (`Hyper 2000`), dates (`AUGUST 2026`), and punchlines **MUST exist ALONE on the screen**.
- No borders, no solid cards, no clutter around them.
- For comma lists (*"Symptoms include burning plastic, fused joints, and sudden cutoffs"*):
  - Beat 1: `Symptoms include` animates in alone, then out.
  - Beat 2: `Burning plastic smells` animates in alone, then out.
  - Beat 3: `Fused electrical joints` animates in alone, then out.

---

## 9. Permanent Text Visibility (The Highlighter Rule)
- **Never let text disappear, flicker, or turn black-on-black** when a highlighter sweeps across it.
- The highlighter is a colored layer (`linear-gradient` with `box-decoration-break: clone`) sweeping behind permanent high-contrast text.

---

## 10. Strict Vertical Centering & Balanced Negative Space
- **Never align elements to the top edge when the bottom space is unused.**
- All content must be centered in the 1920x1080 canvas (`display: flex; justifyContent: center; alignItems: center;` or `top: 50%; transform: translateY(-50%)`).

---

## 11. Spatial Fluid Staging & Hero Subject Persistence
- **Never abruptly pop unrelated boxes in and out.**
- Treat the canvas as a continuous physical stage:
  1. Hero subject enters center stage.
  2. When comparing with another subject, it shifts left to receive the comparison element.
  3. When transitioning to the next thought, non-persisting elements exit, and the hero subject glides back to **dead-center stage** before receiving incoming telemetry or evidence.

---

## 12. Zero Irrelevant Stock Footage Rule
- Never use generic filler videos (spinning fans, random wind turbines, unrelated drone cityscapes) just to fill time.
- Every clip, photo, CAD drawing, or forum screenshot must directly depict the exact brand, mechanism, or evidence cited in the voiceover.

---

## 13. The "Premiere Pro" Subtitle Crop
- When using OEM footage with baked-in subtitles or watermarks in the lower third, scale up the container (`115% to 138%`) and shift `translateY(-35px)` to push subtitles off-screen while keeping the product centered.

---

## 14. The Authentic Sourcing Law (No Synthetic SVGs for Real Subjects)
- Never generate synthetic SVG line drawings for real-world architectural landmarks (e.g. Eiffel Tower, Brandenburg Gate), physical venues, or real hardware products.
- Always search the web and extract authentic, high-resolution photographic transparent PNG cutouts. Real physical texture, metal reflection, and architectural realism are mandatory for documentary credibility.

---

## 15. The Deep Asset Harvest Mandate (Script-Proportional Scope)
- For long-form teardowns, comparisons, and product reviews, NEVER settle for a superficial 3–4 images. The depth of asset harvesting must match the script's narrative scope: systematically collect heroes, exploded internals, rear I/O, accessories, lifestyle installations, competitor benchmarks, predecessor hardware, and editorial launch event photos into `product_images/<brand>/`.
