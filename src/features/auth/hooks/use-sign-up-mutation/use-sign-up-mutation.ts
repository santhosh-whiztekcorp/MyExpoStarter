import { useMutation } from '@tanstack/react-query';
import { signUpApi } from '../../lib/auth';

export function useSignUpMutation() {
  const mutation = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log('Sign up successful:', data);
    },
    onError: (error) => {
      console.error('Sign up failed:', error);
    },
  });

  return {
    signUp: mutation.mutate,
    isSigningUp: mutation.isPending,
    isSignUpSuccess: mutation.isSuccess,
    isSignUpError: mutation.isError,
    signUpError: mutation.error,
  };
}
