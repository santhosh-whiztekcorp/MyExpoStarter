import { STORAGE_ACCESS_TOKEN, STORAGE_COLOR_THEME, STORAGE_REFRESH_TOKEN } from './storage.constants';
import { storageAdapter } from './storage.utils';

export const storage = {
  setColorTheme: (colorTheme: string) => storageAdapter.setItem(STORAGE_COLOR_THEME, colorTheme),
  getColorTheme: () => storageAdapter.getItem(STORAGE_COLOR_THEME),
  removeColorTheme: () => storageAdapter.removeItem(STORAGE_COLOR_THEME),

  setAccessToken: (token: string) => storageAdapter.setItem(STORAGE_ACCESS_TOKEN, token),
  getAccessToken: () => storageAdapter.getItem(STORAGE_ACCESS_TOKEN),
  removeAccessToken: () => storageAdapter.removeItem(STORAGE_ACCESS_TOKEN),

  setRefreshToken: (token: string) => storageAdapter.setItem(STORAGE_REFRESH_TOKEN, token),
  getRefreshToken: () => storageAdapter.getItem(STORAGE_REFRESH_TOKEN),
  removeRefreshToken: () => storageAdapter.removeItem(STORAGE_REFRESH_TOKEN),
};
