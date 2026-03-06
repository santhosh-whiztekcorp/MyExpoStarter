import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { colors, fontFamilies, radii, spacings } from '@/constants/design-system';
import { useRootStore } from '@/store/root-store';
import { createStyles } from './sample-screeen.styles';

export const useSampleScreen = () => {
  const systemColorScheme = useColorScheme();
  const colorSchemePref = useRootStore((state) => state.colorScheme);
  const setTheme = useRootStore((state) => state.setTheme);

  const activeTheme = colorSchemePref === 'system' ? systemColorScheme : colorSchemePref;
  const theme = activeTheme === 'dark' ? colors.dark : colors.light;

  const styles = useMemo(() => createStyles(theme, spacings, radii, fontFamilies), [theme]);

  return {
    theme,
    styles,
    colorSchemePref,
    setTheme,
    activeTheme,
  };
};
