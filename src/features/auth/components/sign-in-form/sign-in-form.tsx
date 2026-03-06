import { View } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { InputController } from '@/components/form-controllers/input-controller';
import { Button } from '@/components/ui/button';
import { useSignInForm } from './sign-in-form.hooks';

export function SignInForm() {
  const {
    signInFormMethods,
    signInFormHandleSubmit,
    signInFormErrors,
    isSignInFormValid,
    isSigningIn,
    onSubmit,
    styles,
  } = useSignInForm();

  return (
    <View style={styles.container}>
      <FormProvider {...signInFormMethods}>
        <InputController
          name="email"
          label="Email"
          placeholder="example@mail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          error={signInFormErrors.email?.message}
        />

        <InputController
          name="password"
          label="Password"
          placeholder="••••••••"
          secureTextEntry
          error={signInFormErrors.password?.message}
        />
      </FormProvider>

      <Button
        label="Sign In"
        onPress={signInFormHandleSubmit(onSubmit)}
        loading={isSigningIn}
        disabled={!isSignInFormValid}
      />
    </View>
  );
}
