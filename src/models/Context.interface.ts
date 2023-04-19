import { PrismaClient } from '@prisma/client';

export interface Context {
  token?: string;
  prisma?: PrismaClient;
  userId?: string | undefined;
  roles?: string | undefined;
}
