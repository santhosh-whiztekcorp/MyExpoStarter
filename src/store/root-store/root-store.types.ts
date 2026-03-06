export type ColorScheme = 'light' | 'dark' | 'system';

export type RootState = {
  colorScheme: ColorScheme;
  setTheme: (theme: ColorScheme) => void;
  fontsLoaded: boolean;
  setFontsLoaded: (loaded: boolean) => void;
};
