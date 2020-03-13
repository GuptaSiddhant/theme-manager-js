# Theme Manager JS

Apply and manage theme easily with this light-weight JavaScript library. (TypeScript Supported)

It exports a function `setTheme` and an object `Theme`.

## Theme

It is an object which contains methods to access the right theme variable. It can be used throughout the app. But to see any effect, `setTheme` fucnction must be called.

### Methods

Methods may require additional parameters to return correct value. Params ending with `?` are optional.

    // Radius
    // type? : "xl" | "lg" | "md" | "sm" | "xs" | "none
    Theme.radius(type?)

    // Scacing
    // type? : "xl" | "lg" | "md" | "sm" | "xs" | "none
    Theme.spacing(type?)

    // zIndex
    // type? : "hide" | "menu" | "base" | "docked" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipLink" | "toast" | "contextMenu" | "tooltip"
    Theme.zIndex(type?);

    // Shadows
    // type?: "default" | "large" | "hover" | "active" | "outline" | "inner"
    Theme.shadow(type?);

    // Colors

    // type?: "inverse" | "primary" | "secondary" | "disabled"
    Theme.colorText(type?); 

    // type?: "inverse" | "base" | "overlay" | "hover" | "disabled" | "elevated" | "selected" | "rowAlt"
    Theme.colorBackground(type?);

    // type?: "border" | "borderHover" | "borderActive" | "shadow" | "shadowHover" | "shadowActive"
    Theme.colorOutline(type?);

    // type: "accent" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "black" | "white" | "danger" | "warning" | "success" | "info" | "inverse"
    // opacity?: 0-100
    Theme.colorTint(type, opacity?)

## setTheme

Function to set or update theme. The function wirtes global/root CSS which then can be accessed by any component.

Call this function atleast once to initialise the theme. Call it again to update theme.

### example

    setTheme(YourTheme); // Only theme
    setTheme(YourTheme, true); // Theme with Dark Mode enabled
    setTheme(YourTheme, , "a { color: white; }"); // Theme in loght mode with global CSS

#### Sample Theme

    import { ThemeObject } from "./typeDefinitions";
    export const SampleTheme: ThemeObject = {
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

