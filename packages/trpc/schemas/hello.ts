import { z } from 'zod';

const helloInput = z.object({
  name: z.string().nullish(),
});

export { helloInput };