import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '../../schemas/sign-up';
import { SignUpSchema } from '../../types/sign-up';

export function useSignUpFormData(defaultValues?: Partial<SignUpSchema>) {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      ...defaultValues,
    },
    mode: 'onTouched',
  });

  const {
    control: signUpFormControl,
    handleSubmit: signUpFormHandleSubmit,
    formState: { errors: signUpFormErrors, isValid: isSignUpFormValid },
    reset: resetSignUpForm,
  } = form;

  return {
    signUpFormMethods: form,
    signUpFormControl,
    signUpFormHandleSubmit,
    signUpFormErrors,
    isSignUpFormValid,
    resetSignUpForm,
  };
}
