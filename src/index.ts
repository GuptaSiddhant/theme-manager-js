import { SML, ThemeColors, ThemeObject } from "./typeDefinitions";
import { zIndices, shadows } from "./common";
import { getColorTint, generateThemeCSS, generateGlobalCSS } from "./utilities";
import WebFont from "webfontloader";

// Theme Object
export const Theme = {
  // Radius
  radius: (type: SML = "md") => `var(--radius-${type})`,

  // Scacing
  spacing: (type: SML = "md") => `var(--spacing-${type})`,

  // zIndex
  zIndex: (type: keyof typeof zIndices = "base") => zIndices[type],

  // Shadows
  shadow: (type: keyof typeof shadows = "default") => shadows[type],

  // Colors
  colorText: (type: keyof ThemeColors["text"] = "primary") =>
    `var(--colors-text-${type})`,

  colorBackground: (type: keyof ThemeColors["background"] = "base") =>
    `var(--colors-background-${type})`,

  colorOutline: (type: keyof ThemeColors["outline"] = "border") =>
    `var(--colors-outline-${type})`,

  colorTint: getColorTint
};

/**
 * Function to set or update theme.
 * The function wirtes global/root CSS which then can be accessed by any component.
 */
export function setTheme(
  theme: ThemeObject,
  enableDarkMode: boolean = false,
  globalCSS: string = ""
) {
  // Load fonts
  WebFont.load(theme.text.fontConfig);
  WebFont.load(theme.code.fontConfig);

  generateThemeCSS(theme, enableDarkMode);
  generateGlobalCSS(Theme, globalCSS);
}

export default Theme;
