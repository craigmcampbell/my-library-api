import { PrismaClient } from '@prisma/client';

export default interface Context {
  token?: string;
  prisma?: PrismaClient;
  userId?: string | undefined;
  roles?: string | undefined;
}
