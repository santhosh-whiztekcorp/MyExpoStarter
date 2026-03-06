import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { useThemeProvider } from './theme-provider.hooks';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark } = useThemeProvider();

  return <NavThemeProvider value={isDark ? DarkTheme : DefaultTheme}>{children}</NavThemeProvider>;
}
