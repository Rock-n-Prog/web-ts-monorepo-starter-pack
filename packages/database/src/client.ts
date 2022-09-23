import { PrismaClient } from '../generated/prisma-client';

declare global {
  let prisma: PrismaClient | undefined;
}

// TODO: Fix .prisma TS error in this file
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export { prisma };
