import { ArchitectureItem, NextStepItem, SOCItem, ThemeModeItem } from './sample-screeen.types';

export const ARCHITECTURE_DATA: ArchitectureItem[] = [
  { path: 'src/app', desc: 'Expo Router navigation & layouts' },
  { path: 'src/features', desc: 'Feature modules (auth, profile, etc)' },
  { path: 'src/components', desc: 'Global shared UI components' },
  { path: 'src/hooks', desc: 'Global shared custom hooks' },
  { path: 'src/utils', desc: 'Global shared utility functions' },
  { path: 'src/store', desc: 'Global state (Zustand)' },
];

export const SOC_STRUCTURE: SOCItem[] = [
  { suffix: '.tsx', role: 'UI component & structure', icon: '🎨' },
  { suffix: '.hooks.ts', role: 'Logic, state & hooks', icon: '🧪' },
  { suffix: '.styles.ts', role: 'Themed style definitions', icon: '✨' },
  { suffix: '.constants.ts', role: 'Local data & configs', icon: '📊' },
  { suffix: '.types.ts', role: 'TypeScript type definitions', icon: '🏷️' },
];

export const TECH_STACK = ['Expo 54', 'React Native', 'TypeScript', 'Zustand', 'Expo Router'];

export const NEXT_STEPS: NextStepItem[] = [
  { title: 'Feature Module', desc: 'Create src/features/[feature-name]', icon: '📁' },
  { title: 'Module SOC', desc: 'Encapsulate screens, hooks, etc', icon: '🏗️' },
  { title: 'Apply Patterns', desc: 'Use .tsx, .hooks, .styles etc', icon: '🧪' },
];

export const THEME_MODES: ThemeModeItem[] = [
  { mode: 'light', label: 'Light', icon: 'sunny-outline' },
  { mode: 'dark', label: 'Dark', icon: 'moon-outline' },
  { mode: 'system', label: 'System', icon: 'settings-outline' },
];
