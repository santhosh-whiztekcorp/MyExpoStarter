import { useRootStore } from '@/store/root-store';
import { getStyles } from './sign-in-screen.styles';

export function useSignInScreen() {
  const resolvedColorScheme = useRootStore((state) => state.resolvedColorScheme);
  const styles = getStyles(resolvedColorScheme);

  const navigateToSignUp = () => {
    console.log('Navigate to sign up');
  };

  return {
    styles,
    navigateToSignUp,
  };
}
