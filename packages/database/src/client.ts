import { PrismaClient } from '@prisma/client';

declare global {
  /* eslint-disable-next-line */
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

/* eslint-disable-next-line functional/no-conditional-statement */
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable-next-line functional/immutable-data */
  global.prisma = prisma;
}

export { prisma };
