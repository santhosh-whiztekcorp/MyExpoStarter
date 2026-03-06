import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/design-system/design-system.types';

export const createStyles = (theme: Colors['light' | 'dark']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
  });
