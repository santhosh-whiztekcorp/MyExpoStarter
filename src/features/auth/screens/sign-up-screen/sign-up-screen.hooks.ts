import { useRootStore } from '@/store/root-store';
import { getStyles } from './sign-up-screen.styles';

export function useSignUpScreen() {
  const resolvedColorScheme = useRootStore((state) => state.resolvedColorScheme);
  const styles = getStyles(resolvedColorScheme);

  const navigateToSignIn = () => {
    console.log('Navigate to sign in');
  };

  return {
    styles,
    navigateToSignIn,
  };
}
