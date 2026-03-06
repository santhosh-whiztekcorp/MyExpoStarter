import { Colors } from '@/constants/design-system/design-system.types';

export type LoadingState = {
  fontsLoaded: boolean;
  theme: Colors['light' | 'dark'];
};
