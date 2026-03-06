import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpForm } from '../../components/sign-up-form';
import { useSignUpScreen } from './sign-up-screen.hooks';

export function SignUpScreen() {
  const { styles, navigateToSignIn } = useSignUpScreen();

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <SafeAreaView style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>
        </View>

        <SignUpForm />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={navigateToSignIn}>
            <Text style={styles.link}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
