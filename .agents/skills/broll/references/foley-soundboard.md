# 🎧 Acoustic Foley Soundboard & Audio-Visual Synchronization

> **THE GOLDEN FOLEY RULE**:
> **Every visual entrance, element transition, or state change MUST have an acoustic cue.**
> Never trigger audio only at frame 0 and let subsequent cards or bullet points appear silently.

---

## Sound Library (`public/sfx/`)

| File | Acoustic Signature | Typical Duration | Best Used For |
| :--- | :--- | :--- | :--- |
| `swoosh.wav` | Airy rush / clean pan | ~220ms | Card slide, panel push, camera sweep, scene transition |
| `click.wav` | Crisp mechanical snap | ~35ms | Bullet points, spec rows, toggle switch, caliper triggers |
| `pop.wav` | Tactile snap pop | ~45ms | Spec cards, bullet badges, criteria reveals, socket connection |
| `thud.wav` | Authoritative punch | ~130ms | Crate landing, solid hardware lock, showdown arrival |
| `stamp_slam.wav` | Heavy rubber stamp / thud | ~200ms | Audit stamp slam, verdict seal, warning banner punch |
| `draw.wav` | Felt-tip marker friction | ~280ms | Highlighter sweep across text, laser scan line |
| `camera_click.wav` | Dual mechanical shutter | ~100ms | Snapshot reveal, polaroid photo landing, lab receipt reveal |
| `alert_beep.wav` | Clean electronic chime | ~120ms | System warning, error code, thermal limit trigger |
| `paper_slide.wav` | Tactile document slide | ~200ms | Community receipt card sliding into frame |

---

## Remotion Implementation Patterns

```tsx
import { Sequence, Audio, staticFile } from "remotion";

{/* 1. Scene Transition Swoosh */}
<Sequence from={0}>
  <Audio src={staticFile("sfx/swoosh.wav")} volume={0.25} />
</Sequence>

{/* 2. Staggered Row Clicks */}
{items.map((_, idx) => (
  <Sequence key={idx} from={60 + idx * 15}>
    <Audio src={staticFile("sfx/click.wav")} volume={0.28} />
  </Sequence>
))}

{/* 3. Highlighter Felt-Tip Draw */}
<Sequence from={40}>
  <Audio src={staticFile("sfx/draw.wav")} volume={0.30} />
</Sequence>

{/* 4. Heavy Rubber Stamp Slam */}
<Sequence from={115}>
  <Audio src={staticFile("sfx/stamp_slam.wav")} volume={0.38} />
</Sequence>
```

---

## Audio-Visual Timing Math
- **Standard Pace**: 1 spoken word ≈ 13.3 frames @ 30fps (~2.25 words per second).
- **SFX Trigger Offset**: Fire the SFX **1 to 2 frames before** the visual element reaches peak impact or settlement for maximum tactile punch.
