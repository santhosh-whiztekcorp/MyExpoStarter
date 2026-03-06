import { apiClient } from '@/lib/api-client';
import { SignInSchema } from '../../types/sign-in';
import { SignUpSchema } from '../../types/sign-up';

export async function signUpApi(data: SignUpSchema) {
  const response = await apiClient.post('/auth/signup', data);
  return response.data;
}

export async function signInApi(data: SignInSchema) {
  const response = await apiClient.post('/auth/login', data);
  return response.data;
}
