import { Ionicons } from '@expo/vector-icons';

export type ThemeMode = 'light' | 'dark' | 'system';

export type ArchitectureItem = {
  path: string;
  desc: string;
};

export type NextStepItem = {
  title: string;
  desc: string;
  icon: string;
};

export type ThemeModeItem = {
  mode: ThemeMode;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export type SOCItem = {
  suffix: string;
  role: string;
  icon: string;
};
