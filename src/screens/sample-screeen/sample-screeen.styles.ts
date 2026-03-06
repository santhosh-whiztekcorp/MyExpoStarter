import { Platform, StyleSheet } from 'react-native';
import { Colors, FontFamilies, Radii, Spacings } from '@/constants/design-system/design-system.types';

export const createStyles = (
  theme: Colors['light' | 'dark'],
  spacings: Spacings,
  radii: Radii,
  fontFamilies: FontFamilies,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollView: {
      padding: spacings.lg,
      paddingTop: Platform.OS === 'android' ? spacings.xl : spacings.md,
      paddingBottom: spacings['3xl'],
    },
    header: {
      marginBottom: spacings.xl,
    },
    title: {
      fontFamily: fontFamilies.primaryExtraBold,
      fontSize: 32,
      color: theme.foreground,
      lineHeight: 40,
    },
    subtitle: {
      fontFamily: fontFamilies.primaryRegular,
      fontSize: 16,
      color: theme.mutedForeground,
      marginTop: spacings.xs,
    },
    section: {
      marginBottom: spacings.xl,
    },
    sectionTitle: {
      fontFamily: fontFamilies.primaryBold,
      fontSize: 18,
      color: theme.foreground,
      marginBottom: spacings.md,
    },
    themeSwitcher: {
      flexDirection: 'row',
      gap: spacings.sm,
    },
    themeButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacings.sm,
      borderRadius: radii.md,
      gap: spacings.xs,
      borderWidth: 1,
    },
    themeButtonText: {
      fontSize: 14,
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: radii.large,
      padding: spacings.md,
      borderWidth: 1,
      borderColor: theme.border,
    },
    architectureRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: spacings.sm,
      borderBottomWidth: 1,
    },
    techStackContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacings.sm,
    },
    badge: {
      paddingHorizontal: spacings.md,
      paddingVertical: spacings.xs,
      backgroundColor: theme.accent,
      borderRadius: radii.full,
      borderWidth: 1,
      borderColor: theme.border,
    },
    badgeText: {
      fontFamily: fontFamilies.primarySemiBold,
      fontSize: 12,
      color: theme.accentForeground,
    },
    nextStepItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacings.md,
      backgroundColor: theme.card,
      padding: spacings.md,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: theme.border,
      marginBottom: spacings.md,
    },
  });
