export const COLOR_TOKENS = {
  // Backgrounds
  bgDark: "#1A1B1D",
  card: "#232426",
  cardAlt: "#2D2E30",
  bgLight: "#E8E3D9",

  // Text
  text: "#F3EFE7",
  textDim: "rgba(243, 239, 231, 0.58)",
  textFaint: "rgba(243, 239, 231, 0.30)",

  // Accents
  copper: "#C9784A", // Channel accent / unifying thread
  ecoflow: "#3E7BFA",
  zendure: "#E8A93B",
  anker: "#E5493F",
  danger: "#D1584A",
  success: "#3ED598",
} as const;

export const EYEBROW_RECIPE = {
  fontFamily: "ibmPlexMonoFamily",
  fontSize: 16, // 15-22px
  letterSpacing: "4px", // 3-5px
  textTransform: "uppercase" as const,
  color: COLOR_TOKENS.textDim,
};
