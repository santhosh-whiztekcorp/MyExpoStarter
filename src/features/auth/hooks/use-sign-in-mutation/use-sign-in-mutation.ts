import { useMutation } from '@tanstack/react-query';
import { signInApi } from '../../lib/auth';

export function useSignInMutation() {
  const mutation = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      console.log('Sign in successful:', data);
    },
    onError: (error) => {
      console.error('Sign in failed:', error);
    },
  });

  return {
    signIn: mutation.mutate,
    isSigningIn: mutation.isPending,
    isSignInSuccess: mutation.isSuccess,
    isSignInError: mutation.isError,
    signInError: mutation.error,
  };
}
