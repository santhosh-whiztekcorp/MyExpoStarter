export type ColorScheme = 'light' | 'dark' | 'system';

export type RootState = {
  colorScheme: ColorScheme;
  resolvedColorScheme: 'light' | 'dark';
  setTheme: (theme: ColorScheme) => void;
  setResolvedTheme: (theme: 'light' | 'dark') => void;
  fontsLoaded: boolean;
  setFontsLoaded: (loaded: boolean) => void;
};
