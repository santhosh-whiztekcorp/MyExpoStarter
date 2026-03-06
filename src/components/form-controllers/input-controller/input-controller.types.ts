import { TextInputProps } from 'react-native';
import { FieldValues, Path } from 'react-hook-form';

export type InputControllerProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>;
  label?: string;
  error?: string;
};
