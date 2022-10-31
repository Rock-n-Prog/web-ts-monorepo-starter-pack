import { z } from 'zod';

const addUserInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type AddUserInput = z.infer<typeof addUserInputSchema>;

export type { AddUserInput };
export { addUserInputSchema };
