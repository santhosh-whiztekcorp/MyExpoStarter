import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useRootStore } from '@/store/root-store';
import { updateNativeUI } from '@/utils/ui-utils';

export const useThemeProvider = () => {
  const { colorScheme, setResolvedTheme } = useRootStore();
  const systemColorScheme = useColorScheme();

  const activeTheme = colorScheme === 'system' ? systemColorScheme : colorScheme;
  const isDark = activeTheme === 'dark';

  useEffect(() => {
    updateNativeUI(activeTheme);
    setResolvedTheme(isDark ? 'dark' : 'light');
  }, [activeTheme, isDark, setResolvedTheme]);

  return {
    activeTheme,
    isDark,
  };
};
