import { StyleSheet } from 'react-native';
import { colors, fontFamilies, spacings } from '@/constants/design-system';

export function getStyles(colorScheme: 'light' | 'dark') {
  const theme = colorScheme === 'dark' ? colors.dark : colors.light;

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    wrapper: {
      flex: 1,
      backgroundColor: theme.background,
      padding: spacings.xl,
      justifyContent: 'center',
      gap: spacings['2xl'],
    },

    title: {
      fontSize: 28,
      fontFamily: fontFamilies.primaryBold,
      color: theme.foreground,
    },
    subtitle: {
      fontSize: 16,
      color: theme.mutedForeground,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footerText: {
      color: theme.mutedForeground,
    },
    link: {
      color: theme.primary,
      fontFamily: fontFamilies.primaryBold,
    },
  });
}
