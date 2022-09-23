import { prisma } from '.';
import type { User } from '../generated/prisma-client';

const defaultUsers = [
  {
    name: 'Joe Botine',
    email: 'joe@botine.com',
  },
  {
    name: 'Marc du Prelore',
    email: 'timarc@letsgo.com',
  },
] as Partial<User>[];

(async () => {
  try {
    await Promise.all(
      defaultUsers.map(user =>
        prisma.user.upsert({
          where: {
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
