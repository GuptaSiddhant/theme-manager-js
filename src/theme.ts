import { ThemeObject } from "./typeDefinitions";
export const DefaultTheme: ThemeObject = {
  lightColors: {
    text: {
      primary: "#000000",
      secondary: "#4d4d4d",
      disabled: "#8E8E93",
      inverse: "#f2f2f2"
    },
    background: {
      elevated: "#FFFFFF",
      base: "#FAFAFF",
      disabled: "#F2F2F7",
      overlay: "rgba(0,0,0,0.25)",
      selected: "rgba(0,0,0,0.1)",
      hover: "rgba(0,0,0,0.05)",
      rowAlt: "rgba(0,0,0,0.025)",
      inverse: "#000000"
    },
    outline: {
      shadow: "#E1E1E6",
      shadowHover: "rgba(0,0,0,0.5)",
      shadowActive: "rgba(351,100,68,0.2)",
      border: "#CECED9",
      borderHover: "#CECED9",
      borderActive: "#CECED9"
    },
    tint: {
      accent: "#AE001A",
      red: "#FF3B30",
      orange: "#FF9500",
      yellow: "#FFCC00",
      green: "#2EB24F",
      blue: "#007AFF",
      purple: "#AF52DE",
      black: "#000000",
      white: "#FFFFFF"
    }
  },
  darkColors: {
    text: {
      primary: "#FFFFFF",
      secondary: "#C6C6C8",
      disabled: "#8E8E93",
      inverse: "#202020"
    },
    background: {
      base: "#1C1C1E",
      elevated: "#333333",
      overlay: "rgba(0,0,0,0.5)",
      selected: "rgba(255,255,255,0.2)",
      disabled: "#111111",
      hover: "rgba(255,255,255,0.1)",
      rowAlt: "rgba(255,255,255,0.05)",
      inverse: "#FFFFFF"
    },
    outline: {
      shadow: "#18181A",
      shadowHover: "rgba(255,255,255,0.5)",
      shadowActive: "rgba(351,100,68,0.2)",
      border: "#4D4D4D",
      borderHover: "#4D4D4D",
      borderActive: "#4D4D4D"
    },
    tint: {
      accent: "#AE001A",
      red: "#FF453A",
      orange: "#FF9F0A",
      yellow: "#FFD60A",
      green: "#32D74B",
      blue: "#0A84FF",
      purple: "#BF5AF2",
      black: "#000000",
      white: "#FFFFFF"
    }
  },
  baseRadius: 8,
  baseSpacing: 8,
  sizeMultiplier: {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2
  },
  code: {
    fontConfig: {
      google: {
        families: ["Fira Code"]
      }
    },
    style: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "20px",
      letterSpacing: 0,
      textTransform: "none"
    }
  },
  text: {
    fontConfig: {
      google: {
        families: ["Muli"]
      }
    },
    h1: {
      fontSize: "26px",
      fontWeight: 800,
      lineHeight: "36px",
      letterSpacing: 0,
      textTransform: "capitalize"
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: 0,
      textTransform: "none"
    },
    h3: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: 0,
      textTransform: "none"
    },
    h4: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: 0,
      textTransform: "none"
    },
    h5: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0.5px",
      textTransform: "none"
    },
    h6: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px",
      letterSpacing: "0.25px",
      textTransform: "none"
    },
    strong: {
      fontSize: "12px",
      fontWeight: 900,
      lineHeight: "16px",
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    p: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: 0,
      textTransform: "none"
    },
    small: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: 0,
      textTransform: "none"
    }
  }
};
