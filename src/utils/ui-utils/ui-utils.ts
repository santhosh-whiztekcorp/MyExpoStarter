import * as NavigationBar from 'expo-navigation-bar';
import { setStatusBarStyle } from 'expo-status-bar';
import { ActiveTheme } from './ui-utils.types';

export async function updateNativeUI(activeTheme: ActiveTheme) {
  if (!activeTheme) return;

  const isDark = activeTheme === 'dark';

  try {
    setStatusBarStyle(isDark ? 'light' : 'dark');
    await NavigationBar.setBackgroundColorAsync('transparent');
    await NavigationBar.setButtonStyleAsync(isDark ? 'light' : 'dark');
  } catch (error) {
    console.error('Failed to update native UI:', error);
  }
}
