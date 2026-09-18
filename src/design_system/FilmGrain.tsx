import React from "react";

interface FilmGrainProps {
  opacity?: number;
}

export const FilmGrain: React.FC<FilmGrainProps> = ({ opacity = 0.5 }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
        opacity,
        mixBlendMode: "overlay",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <filter id="feTurbulence-film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0.05 0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#feTurbulence-film-grain)"
        />
      </svg>
    </div>
  );
};
