import * as SecureStore from 'expo-secure-store';

export const storageAdapter = {
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      await SecureStore.setItemAsync(name, value);
    } catch {}
  },
  getItem: async (name: string): Promise<string | null> => {
    try {
      return (await SecureStore.getItemAsync(name)) ?? null;
    } catch {
      return null;
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(name);
    } catch {}
  },
};
