export const typography = {
  fonts: {
    sans: "'Outfit', 'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
  },
  sizes: {
    display: {
      fontSize: "clamp(3rem, 8vw, 6rem)",
      lineHeight: "1.1",
      letterSpacing: "-0.04em",
      fontWeight: "800",
    },
    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
      fontWeight: "700",
    },
    h2: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      fontWeight: "700",
    },
    body: {
      fontSize: "1rem",
      lineHeight: "1.6",
      letterSpacing: "0",
      fontWeight: "400",
    },
    label: {
      fontSize: "0.875rem",
      lineHeight: "1.4",
      letterSpacing: "0.05em",
      fontWeight: "600",
      textTransform: "uppercase" as const,
    }
  }
};
