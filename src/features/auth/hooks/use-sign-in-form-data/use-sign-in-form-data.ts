import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signInSchema } from '../../schemas/sign-in';
import { SignInSchema } from '../../types/sign-in';

export function useSignInFormData(defaultValues?: Partial<SignInSchema>) {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      ...defaultValues,
    },
    mode: 'onTouched',
  });

  const {
    control: signInFormControl,
    handleSubmit: signInFormHandleSubmit,
    formState: { errors: signInFormErrors, isValid: isSignInFormValid },
    reset: resetSignInForm,
  } = form;

  return {
    signInFormMethods: form,
    signInFormControl,
    signInFormHandleSubmit,
    signInFormErrors,
    isSignInFormValid,
    resetSignInForm,
  };
}
