import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useButton } from './button.hooks';
import { ButtonProps } from './button.types';

export function Button(props: ButtonProps) {
  const {
    label,
    variant = 'primary',
    loading,
    style,
    disabled,
    containerStyle,
    textStyle,
    activityIndicatorColor,
    ...restProps
  } = props;
  const { styles, containerVariantStyle, textVariantStyle, activityIndicatorStyle } = useButton({
    variant,
    containerStyle,
    textStyle,
    activityIndicatorColor,
  });

  return (
    <TouchableOpacity
      style={[styles.base, containerVariantStyle, style, (disabled || loading) && styles.disabled]}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...restProps}>
      {loading ? (
        <ActivityIndicator color={activityIndicatorStyle} />
      ) : (
        <Text style={[styles.textBase, textVariantStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
