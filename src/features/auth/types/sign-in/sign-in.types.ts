import { z } from 'zod';
import { signInSchema } from '../../schemas/sign-in/sign-in.schema';

export type SignInSchema = z.infer<typeof signInSchema>;
