import { z } from 'zod';
import { ErrorMessage } from '../types/ErrorMessage';

const addUserInputSchema = z.object({
  name: z.string().min(1, ErrorMessage.NoEmpty),
  email: z.string().min(1, ErrorMessage.NoEmpty).email(ErrorMessage.EmailFormat),
});

type AddUserInput = z.infer<typeof addUserInputSchema>;

export type { AddUserInput };
export { addUserInputSchema };
