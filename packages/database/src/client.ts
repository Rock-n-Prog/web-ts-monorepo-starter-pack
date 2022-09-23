import { PrismaClient } from '../generated/prisma-client';

// TODO: Is this all really needed?
/*
declare global {
  let prisma: PrismaClient | undefined;
}

// TODO: Fix .prisma TS error in this file
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
*/

const prisma = new PrismaClient();

export { prisma };
