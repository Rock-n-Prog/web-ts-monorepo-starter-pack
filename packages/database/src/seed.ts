import type { User } from '@prisma/client';
import { prisma } from '.';

const defaultUsers = [
  {
    name: 'Joe Botine',
    email: 'joe@botine.com',
  },
  {
    name: 'Marc du Prelore',
    email: 'timarc@letsgo.com',
  },
] as readonly Partial<User>[];

(async () => {
  /* eslint-disable-next-line functional/no-try-statement */
  try {
    await Promise.all(
      defaultUsers.map(user =>
        prisma.user.upsert({
          where: {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            email: user.email!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        }),
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
