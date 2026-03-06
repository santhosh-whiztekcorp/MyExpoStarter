import { useFontProvider } from './font-provider.hooks';

export function FontProvider({ children }: { children: React.ReactNode }) {
  useFontProvider();

  return <>{children}</>;
}
