import { Text, TextInput, View } from 'react-native';
import { useInput } from './input.hooks';
import { InputProps } from './input.types';

export function Input({ label, error, containerStyle, style, ...props }: InputProps) {
  const { theme, styles } = useInput();

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error ? styles.inputError : null, style]}
        placeholderTextColor={theme.mutedForeground}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
