import { useSignInFormData } from '../../hooks/use-sign-in-form-data';
import { useSignInMutation } from '../../hooks/use-sign-in-mutation';
import { SignInSchema } from '../../types/sign-in';
import { getStyles } from './sign-in-form.styles';

export function useSignInForm() {
  const styles = getStyles();

  const {
    signInFormMethods,
    signInFormControl,
    signInFormHandleSubmit,
    signInFormErrors,
    isSignInFormValid,
    resetSignInForm,
  } = useSignInFormData();

  const { signIn, isSigningIn, isSignInSuccess, isSignInError, signInError } = useSignInMutation();

  const onSubmit = (data: SignInSchema) => {
    signIn(data);
  };

  return {
    styles,
    signInFormMethods,
    signInFormControl,
    signInFormHandleSubmit,
    signInFormErrors,
    isSignInFormValid,
    resetSignInForm,
    isSigningIn,
    isSignInSuccess,
    isSignInError,
    signInError,
    onSubmit,
  };
}
