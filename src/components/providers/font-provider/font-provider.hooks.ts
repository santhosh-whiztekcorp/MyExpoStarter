import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useRootStore } from '@/store/root-store';
import { FONT_ASSETS } from './font-provider.constants';

export const useFontProvider = () => {
  const [loaded, error] = useFonts(FONT_ASSETS);
  const setFontsLoaded = useRootStore((state) => state.setFontsLoaded);

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
    if (error) {
      console.error('Error loading fonts:', error);
    }
  }, [loaded, error, setFontsLoaded]);

  return { loaded, error };
};
