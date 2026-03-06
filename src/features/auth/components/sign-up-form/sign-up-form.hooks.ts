import { useSignUpFormData } from '../../hooks/use-sign-up-form-data';
import { useSignUpMutation } from '../../hooks/use-sign-up-mutation';
import { SignUpSchema } from '../../types/sign-up';
import { getStyles } from './sign-up-form.styles';

export function useSignUpForm() {
  const styles = getStyles();

  const {
    signUpFormMethods,
    signUpFormControl,
    signUpFormHandleSubmit,
    signUpFormErrors,
    isSignUpFormValid,
    resetSignUpForm,
  } = useSignUpFormData();

  const { signUp, isSigningUp, isSignUpSuccess, isSignUpError, signUpError } = useSignUpMutation();

  const onSubmit = (data: SignUpSchema) => {
    signUp(data);
  };

  return {
    styles,
    signUpFormMethods,
    signUpFormControl,
    signUpFormHandleSubmit,
    signUpFormErrors,
    isSignUpFormValid,
    resetSignUpForm,
    isSigningUp,
    isSignUpSuccess,
    isSignUpError,
    signUpError,
    onSubmit,
  };
}
