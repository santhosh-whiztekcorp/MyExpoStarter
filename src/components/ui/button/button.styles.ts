import { StyleSheet } from 'react-native';
import { colors, fontFamilies, radii, spacings } from '@/constants/design-system';

export function getStyles(colorScheme: 'light' | 'dark') {
  const theme = colorScheme === 'dark' ? colors.dark : colors.light;

  return StyleSheet.create({
    base: {
      height: 48,
      borderRadius: radii.lg,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacings.lg,
      flexDirection: 'row',
    },
    textBase: {
      fontFamily: fontFamilies.primarySemiBold,
      fontSize: 16,
    },
    disabled: {
      opacity: 0.5,
    },

    // Primary
    primary: {
      backgroundColor: theme.primary,
    },
    primaryText: {
      color: theme.primaryForeground,
    },
    primaryActivityIndicatorColor: {
      color: theme.primaryForeground,
    },

    // Secondary
    secondary: {
      backgroundColor: theme.secondary,
    },
    secondaryText: {
      color: theme.secondaryForeground,
    },
    secondaryActivityIndicatorColor: {
      color: theme.secondaryForeground,
    },

    // Outline
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.border,
    },
    outlineText: {
      color: theme.foreground,
    },
    outlineActivityIndicatorColor: {
      color: theme.foreground,
    },

    // Ghost
    ghost: {
      backgroundColor: 'transparent',
    },
    ghostText: {
      color: theme.primary,
    },
    ghostActivityIndicatorColor: {
      color: theme.primary,
    },
  });
}
