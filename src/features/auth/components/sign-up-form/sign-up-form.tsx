import { FormProvider } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { InputController } from '@/components/form-controllers';
import { Button } from '@/components/ui/button';
import { useSignUpForm } from './sign-up-form.hooks';

export function SignUpForm() {
  const {
    signUpFormMethods,
    signUpFormHandleSubmit,
    signUpFormErrors,
    isSignUpFormValid,
    isSigningUp,
    onSubmit,
    styles,
  } = useSignUpForm();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FormProvider {...signUpFormMethods}>
        <InputController name="name" label="Name" placeholder="Your full name" error={signUpFormErrors.name?.message} />

        <InputController
          name="email"
          label="Email"
          placeholder="example@mail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          error={signUpFormErrors.email?.message}
        />

        <InputController
          name="password"
          label="Password"
          placeholder="••••••••"
          secureTextEntry
          error={signUpFormErrors.password?.message}
        />

        <InputController
          name="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          secureTextEntry
          error={signUpFormErrors.confirmPassword?.message}
        />
      </FormProvider>

      <Button
        label="Create Account"
        onPress={signUpFormHandleSubmit(onSubmit)}
        loading={isSigningUp}
        disabled={!isSignUpFormValid}
      />
    </KeyboardAvoidingView>
  );
}
