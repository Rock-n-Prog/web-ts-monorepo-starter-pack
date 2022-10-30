import { z } from 'zod';

const addUserInput = z.object({
  name: z.string(),
  email: z.string().email(),
});

export { addUserInput };