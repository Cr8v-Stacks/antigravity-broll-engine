import React from "react";

interface VoxStampProps {
  label: string;
  color?: string;
  rotate?: number;
  scale?: number;
  sublabel?: string;
}

export const VoxStamp: React.FC<VoxStampProps> = ({
  label,
  color = "#DC2626",
  rotate = -8,
  scale = 1,
  sublabel,
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        border: `3.5px solid ${color}`,
        borderRadius: 4,
        padding: "6px 16px",
        backgroundColor: `${color}0D`,
        boxShadow: `inset 0 0 0 1.5px ${color}88, 2px 3px 6px rgba(0,0,0,0.15)`,
        pointerEvents: "none",
        zIndex: 35,
      }}
    >
      <span
        style={{
          color,
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontFamily: "'Courier New', Courier, monospace",
          lineHeight: 1.1,
          textShadow: `0 0 1px ${color}`,
        }}
      >
        {label}
      </span>
      {sublabel && (
        <span
          style={{
            color,
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
            marginTop: 2,
          }}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
};
