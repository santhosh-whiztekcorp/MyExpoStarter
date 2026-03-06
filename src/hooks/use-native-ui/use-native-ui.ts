import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { setStatusBarStyle } from 'expo-status-bar';
import { useRootStore } from '@/store/root-store';
import { updateNativeUI } from '@/utils/ui-utils';
import { NativeUIOptions } from './use-native-ui.types';

export function useNativeUI(options: NativeUIOptions = {}) {
  const { colorScheme } = useRootStore();
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    const applyOverrides = async () => {
      if (options.statusBarStyle) {
        setStatusBarStyle(options.statusBarStyle);
      }

      if (options.navigationBarColor) {
        await NavigationBar.setBackgroundColorAsync(options.navigationBarColor);
      }

      if (options.navigationBarButtonStyle) {
        await NavigationBar.setButtonStyleAsync(options.navigationBarButtonStyle);
      }
    };

    applyOverrides();

    return () => {
      const activeTheme = colorScheme === 'system' ? systemColorScheme : colorScheme;
      updateNativeUI(activeTheme);
    };
  }, [
    options.statusBarStyle,
    options.navigationBarColor,
    options.navigationBarButtonStyle,
    colorScheme,
    systemColorScheme,
  ]);
}
