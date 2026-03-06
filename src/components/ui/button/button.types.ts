import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activityIndicatorColor?: string;
};

export type ButtonHookProps = {
  variant: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activityIndicatorColor?: string;
};
