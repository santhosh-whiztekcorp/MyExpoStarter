import { colors } from '@/constants/design-system';
import { useRootStore } from '@/store/root-store';
import { getStyles } from './input.styles';

export function useInput() {
  const resolvedColorScheme = useRootStore((state) => state.resolvedColorScheme);
  const theme = resolvedColorScheme === 'dark' ? colors.dark : colors.light;
  const styles = getStyles(resolvedColorScheme);

  return {
    theme,
    styles,
  };
}
