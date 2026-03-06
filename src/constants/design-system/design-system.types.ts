import { FontKey } from '../../components/providers/font-provider';

export type ColorPalette = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
};

export type Colors = {
  light: ColorPalette;
  dark: ColorPalette;
};

export type Radii = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  full: number;
  default: number;
  large: number;
};

export type FontFamilies = {
  primary: FontKey;
  primaryLight: FontKey;
  primaryRegular: FontKey;
  primaryMedium: FontKey;
  primarySemiBold: FontKey;
  primaryBold: FontKey;
  primaryExtraBold: FontKey;
  primaryItalic: FontKey;
  secondary: FontKey;
  secondaryLight: FontKey;
  secondaryRegular: FontKey;
  secondaryMedium: FontKey;
  secondarySemiBold: FontKey;
  secondaryBold: FontKey;
  secondaryItalic: FontKey;
};

export type Spacings = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
};
