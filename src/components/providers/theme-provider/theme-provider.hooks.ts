import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useRootStore } from '@/store/root-store';
import { updateNativeUI } from '@/utils/ui-utils';

export const useThemeProvider = () => {
  const { colorScheme } = useRootStore();
  const systemColorScheme = useColorScheme();

  const activeTheme = colorScheme === 'system' ? systemColorScheme : colorScheme;
  const isDark = activeTheme === 'dark';

  useEffect(() => {
    updateNativeUI(activeTheme);
  }, [activeTheme]);

  return {
    activeTheme,
    isDark,
  };
};
