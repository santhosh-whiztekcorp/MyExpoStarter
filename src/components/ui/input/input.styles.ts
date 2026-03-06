import { StyleSheet } from 'react-native';
import { colors, fontFamilies, radii, spacings } from '@/constants/design-system';

export function getStyles(colorScheme: 'light' | 'dark') {
  const theme = colorScheme === 'dark' ? colors.dark : colors.light;

  return StyleSheet.create({
    container: {
      width: '100%',
      gap: spacings.xs,
    },
    label: {
      fontFamily: fontFamilies.primarySemiBold,
      fontSize: 14,
      color: theme.foreground,
    },
    input: {
      backgroundColor: theme.card,
      borderRadius: radii.lg,
      borderWidth: 1.5,
      borderColor: theme.border,
      paddingHorizontal: spacings.md,
      color: theme.foreground,
      fontFamily: fontFamilies.primaryRegular,
      fontSize: 14,
    },
    inputError: {
      borderColor: theme.destructive,
    },
    errorText: {
      fontFamily: fontFamilies.primaryMedium,
      fontSize: 12,
      color: theme.destructive,
    },
  });
}
