import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email({
    error: 'Invalid email address',
  }),
  password: z.string().min(1, { error: 'Password is required' }),
});
