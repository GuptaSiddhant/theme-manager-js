import Color from "color";
import {
  ThemeObject,
  ThemeTextStyle,
  isThemeTextStyle,
  Tints
} from "./typeDefinitions";

type ColorParam =
  | Color
  | string
  | ArrayLike<number>
  | number
  | { [key: string]: any };

export const getFontName = (
  text: ThemeObject["text"] | ThemeObject["code"]
): string => {
  const config = { ...text.fontConfig };
  if (config.google) return config.google.families.join(", ");
  else if (config.typekit) return config.typekit.id || "";
  else if (config.fontdeck) return config.fontdeck.id || "";
  else if (config.monotype) return config.monotype.projectId || "";
  else if (config.custom && config.custom.families)
    return config.custom.families.join(", ") || "";
  return "Muil";
};

export const getColorTint = (type: Tints = "accent", opacity = 100) => {
  // Semantic colors
  if (type === "danger") type = "red";
  if (type === "warning") type = "orange";
  if (type === "success") type = "green";
  if (type === "info") type = "blue";

  let str = `var(--colors-tint-${type}`;
  opacity = Math.round(Math.abs(opacity) / 10) * 10;
  if (opacity > 100) opacity = 100;
  if (opacity < 0) opacity = 0;
  str += "-" + opacity.toString();
  return str + ")";
};

export const generateColorsCSS = (
  theme: ThemeObject,
  enableDarkMode: boolean
) => {
  function convertHex(hex: string, opacity: number) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
  }
  const colors =
    enableDarkMode && theme.darkColors ? theme.darkColors : theme.lightColors;
  let cssString = "";
  for (const [key1, value1] of Object.entries({ ...colors }))
    for (const [key2, value2] of Object.entries({ ...value1 }))
      if (key1 === "tint")
        for (let opacity = 100; opacity >= 0; opacity -= 10)
          cssString += `--colors-${key1}-${key2}-${opacity.toString()}: ${convertHex(
            value2,
            opacity
          )};`;
      else cssString += `--colors-${key1}-${key2}: ${value2};`;
  return cssString;
};

export const generateSMLCSS = (
  type: string,
  base: number,
  size: ThemeObject["sizeMultiplier"]
) => {
  let cssString = "";
  cssString += `--${type}: ${base.toString()}px;`;
  for (const [key, value] of Object.entries({ ...size }))
    cssString += `--${type}-${key}: ${(base * value).toString()}px;`;
  cssString += `--${type}-none: ${(base * 0).toString()}px;`;
  return cssString;
};

export const generateFontCSS = (theme: ThemeObject) => {
  function fontCSSString(name: string, style: ThemeTextStyle) {
    return `{ 
      display: inline;
      font-family: ${name};
      font-style: normal;
      font-size: ${style.fontSize}; 
      font-weight: ${style.fontWeight}; 
      line-height: ${style.lineHeight}; 
      letter-spacing: ${style.letterSpacing}; 
      text-transform: ${style.textTransform}; 
      margin: 0;
      vertical-align: bottom;
      white-space: wrap;
    }`;
  }

  let cssString = "";
  Object.entries(theme.text).forEach(([key, val]) => {
    if (isThemeTextStyle(val))
      cssString += `${key}, .${key} ${fontCSSString(
        getFontName(theme.text),
        val
      )}`;
  });
  cssString += `code, .code ${fontCSSString(
    getFontName(theme.code),
    theme.code.style
  )}`;

  return cssString;
};

export const generateThemeCSS = (
  theme: ThemeObject,
  enableDarkMode: boolean
) => {
  // CSSstring contains the variables-value pairs
  let cssString = `:root {`;

  // Set DarkMode globally
  localStorage.setItem("darkMode", enableDarkMode.toString());
  cssString += `--darkmode: ${enableDarkMode.toString()};`;

  // Colors
  cssString += generateColorsCSS(theme, enableDarkMode);

  // Radius
  cssString += generateSMLCSS("radius", theme.baseRadius, theme.sizeMultiplier);

  // Spacing
  cssString += generateSMLCSS(
    "spacing",
    theme.baseSpacing,
    theme.sizeMultiplier
  );

  // Close ROOT
  cssString += `} `;

  // Text
  cssString += generateFontCSS(theme);

  // Place it in CSS
  const styleTag = document.createElement("style");
  styleTag.innerHTML = cssString;
  document.head.insertAdjacentElement("beforeend", styleTag);
};

export const generateGlobalCSS = (Theme: any, globalCss: string) => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    :root {
      background: white;
    }

    html {
      box-sizing: border-box;
    }

    * {
      /* width */
      ::-webkit-scrollbar,
      ::-webkit-scrollbar:horizontal,
      ::-webkit-scrollbar:vertical {
        width: ${Theme.spacing()};
        height: ${Theme.spacing()};
      }

      /* Track & corner */
      ::-webkit-scrollbar-track,
      ::-webkit-scrollbar-corner {
        /* box-shadow: inset 0 0 5px grey; */
        background: ${Theme.colorBackground("hover")};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${Theme.colorText("disabled")};
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${Theme.colorOutline("shadowHover")};
      }
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      scrollbar-color: var(--themeMode);
    }

    *:focus {
      outline: none !important;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      font-family: Muli, sans-serif;
      font-size: 14px;
      color: ${Theme.colorText()};
    }

    .noselect {s
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    ${globalCss}
  `;
  document.head.insertAdjacentElement("beforeend", styleTag);
};
