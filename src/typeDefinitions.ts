import * as CSS from "csstype";
import { Config } from "webfontloader";

interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  inverse: string;
}

interface BackgroundColors {
  base: string;
  elevated: string;
  overlay: string;
  disabled: string;
  selected: string;
  hover: string;
  inverse: string;
  rowAlt: string;
}

interface OutlineColors {
  border: string;
  borderHover: string;
  borderActive: string;
  shadow: string;
  shadowHover: string;
  shadowActive: string;
}

interface TintColors {
  accent: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  blue: string;
  purple: string;
  black: string;
  white: string;
}

export interface ThemeColors {
  text: TextColors;
  background: BackgroundColors;
  outline: OutlineColors;
  tint: TintColors;
}

type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "normal"
  | "bold";

export interface ThemeTextStyle {
  fontSize: NonNullable<CSS.Properties["fontSize"]>;
  fontWeight: FontWeight;
  lineHeight: CSS.Properties["lineHeight"];
  letterSpacing: CSS.Properties["letterSpacing"];
  textTransform: CSS.Properties["textTransform"];
}

export interface SizeMultiplier {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Code {
  fontConfig: Config;
  style: ThemeTextStyle;
}

export interface Text {
  fontConfig: Config;
  h1: ThemeTextStyle;
  h2: ThemeTextStyle;
  h3: ThemeTextStyle;
  h4: ThemeTextStyle;
  h5: ThemeTextStyle;
  h6: ThemeTextStyle;
  strong: ThemeTextStyle;
  p: ThemeTextStyle;
  small: ThemeTextStyle;
}

export interface ThemeObject {
  lightColors: ThemeColors;
  darkColors: ThemeColors;
  baseRadius: number;
  baseSpacing: number;
  sizeMultiplier: SizeMultiplier;
  code: Code;
  text: Text;
}

export type SML = "xs" | "sm" | "md" | "lg" | "xl" | "none";

export const isThemeTextStyle = (
  obj: ThemeTextStyle | Config
): obj is ThemeTextStyle => (obj as ThemeTextStyle).fontSize !== undefined;


export type Tints =
  | "accent"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "black"
  | "white"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "inverse";
