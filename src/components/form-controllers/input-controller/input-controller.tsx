import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { InputControllerProps } from './input-controller.types';

export function InputController<T extends FieldValues>({ name, label, error, ...props }: InputControllerProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input label={label} onBlur={onBlur} onChangeText={onChange} value={value} error={error} {...props} />
      )}
    />
  );
}
