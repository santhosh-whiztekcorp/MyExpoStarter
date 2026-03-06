import { useMemo } from 'react';
import { useRootStore } from '@/store/root-store';
import { getStyles } from './button.styles';
import { ButtonHookProps } from './button.types';

export function useButton({ variant, containerStyle, textStyle, activityIndicatorColor }: ButtonHookProps) {
  const resolvedColorScheme = useRootStore((state) => state.resolvedColorScheme);
  const styles = useMemo(() => getStyles(resolvedColorScheme), [resolvedColorScheme]);

  const containerVariantStyle = [styles[variant], containerStyle];
  const textVariantStyle = [styles[`${variant}Text`], textStyle];
  const activityIndicatorStyle = styles[`${variant}ActivityIndicatorColor`].color || activityIndicatorColor;

  return {
    styles,
    containerVariantStyle,
    textVariantStyle,
    activityIndicatorStyle,
  };
}
