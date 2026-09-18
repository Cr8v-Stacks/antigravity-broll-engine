import React from "react";
import { ibmPlexMonoFamily } from "./fonts";
import { COLOR_TOKENS } from "./tokens";

interface EyebrowProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  letterSpacing?: number;
  style?: React.CSSProperties;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  color = COLOR_TOKENS.textDim,
  size = 16,
  letterSpacing = 4,
  style,
}) => {
  return (
    <span
      style={{
        fontFamily: ibmPlexMonoFamily,
        fontSize: size,
        letterSpacing: `${letterSpacing}px`,
        textTransform: "uppercase",
        color,
        fontWeight: 700,
        display: "inline-block",
        lineHeight: 1.2,
        ...style,
      }}
    >
      {children}
    </span>
  );
};
