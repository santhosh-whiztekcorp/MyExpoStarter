import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storageAdapter } from '../../lib/storage/storage.utils';
import { RootState } from './root-store.types';

export const useRootStore = create<RootState>()(
  persist(
    (set) => ({
      colorScheme: 'system',
      resolvedColorScheme: 'light',
      fontsLoaded: false,
      setTheme: (colorScheme) => set({ colorScheme }),
      setResolvedTheme: (resolvedColorScheme) => set({ resolvedColorScheme }),
      setFontsLoaded: (fontsLoaded) => set({ fontsLoaded }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => storageAdapter),
      partialize: (state) => ({
        colorScheme: state.colorScheme,
      }),
    },
  ),
);
