import React from "react";

export type IconType =
  | "sun"
  | "moon"
  | "zap"
  | "shield"
  | "alert"
  | "thermometer"
  | "battery"
  | "wrench"
  | "check"
  | "clock"
  | "folder";

interface BespokeIconProps {
  name: IconType;
  color?: string;
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const BespokeIcon: React.FC<BespokeIconProps> = ({
  name,
  color = "#F3EFE7",
  size = 24,
  strokeWidth = 1.8,
  style,
}) => {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const renderGlyph = () => {
    switch (name) {
      case "sun":
        return (
          <>
            <circle cx="12" cy="12" r="5" {...common} />
            <line x1="12" y1="1" x2="12" y2="3" {...common} />
            <line x1="12" y1="21" x2="12" y2="23" {...common} />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" {...common} />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" {...common} />
            <line x1="1" y1="12" x2="3" y2="12" {...common} />
            <line x1="21" y1="12" x2="23" y2="12" {...common} />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" {...common} />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" {...common} />
          </>
        );
      case "moon":
        return (
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            {...common}
          />
        );
      case "zap":
        return <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" {...common} />;
      case "shield":
        return (
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            {...common}
          />
        );
      case "alert":
        return (
          <>
            <path
              d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              {...common}
            />
            <line x1="12" y1="9" x2="12" y2="13" {...common} />
            <line x1="12" y1="17" x2="12.01" y2="17" {...common} />
          </>
        );
      case "thermometer":
        return (
          <path
            d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
            {...common}
          />
        );
      case "battery":
        return (
          <>
            <rect x="1" y="6" width="18" height="12" rx="2" ry="2" {...common} />
            <line x1="23" y1="11" x2="23" y2="13" {...common} />
          </>
        );
      case "wrench":
        return (
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            {...common}
          />
        );
      case "check":
        return <polyline points="20 6 9 17 4 12" {...common} />;
      case "clock":
        return (
          <>
            <circle cx="12" cy="12" r="10" {...common} />
            <polyline points="12 6 12 12 16 14" {...common} />;
          </>
        );
      case "folder":
        return (
          <path
            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            {...common}
          />
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    >
      {renderGlyph()}
    </svg>
  );
};
