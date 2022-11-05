import { z } from 'zod';

const helloInputSchema = z.object({
  name: z.string().nullish(),
});

export { helloInputSchema };
