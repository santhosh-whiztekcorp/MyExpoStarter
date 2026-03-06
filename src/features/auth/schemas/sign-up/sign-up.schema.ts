import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(2, { error: 'Name must be at least 2 characters' }),
    email: z.email({
      error: 'Invalid email address',
    }),
    password: z
      .string()
      .min(8, { error: 'Password must be at least 8 characters' })
      .regex(/[A-Z]/, { error: 'Password must contain at least one uppercase letter' })
      .regex(/[a-z]/, { error: 'Password must contain at least one lowercase letter' })
      .regex(/[0-9]/, { error: 'Password must contain at least one number' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    error: "Passwords don't match",
  });
