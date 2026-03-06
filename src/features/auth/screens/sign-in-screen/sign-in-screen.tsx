import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInForm } from '../../components/sign-in-form';
import { useSignInScreen } from './sign-in-screen.hooks';

export function SignInScreen() {
  const { styles, navigateToSignUp } = useSignInScreen();

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <SafeAreaView style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>
        </View>

        <SignInForm />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
