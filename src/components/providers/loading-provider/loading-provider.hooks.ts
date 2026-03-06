import { useColorScheme } from 'react-native';
import { colors } from '@/constants/design-system';
import { useRootStore } from '@/store/root-store';
import { LoadingState } from './loading-provider.types';

export const useLoadingProvider = (): LoadingState => {
  const fontsLoaded = useRootStore((state) => state.fontsLoaded);
  const colorSchemePref = useRootStore((state) => state.colorScheme);
  const systemColorScheme = useColorScheme();

  const activeTheme = colorSchemePref === 'system' ? systemColorScheme : colorSchemePref;
  const theme = activeTheme === 'dark' ? colors.dark : colors.light;

  return {
    fontsLoaded,
    theme,
  };
};
