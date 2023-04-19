import { Context } from '../../models/Context.interface';
import { Author } from '@prisma/client';
import GetUniqueId from '../../helpers/getUniqueId.helper';

interface FindOrCreateAuthorArgs {
  firstName: string;
  lastName: string;
}

export async function addAuthor(context: Context, author: FindOrCreateAuthorArgs): Promise<Author> {
  const { prisma } = context;
  const { firstName, lastName } = author;

  return await prisma.author.create({
    data: {
      id: GetUniqueId(),
      firstName,
      lastName,
    },
  });
}

export async function findAuthor(context: Context, author: FindOrCreateAuthorArgs): Promise<Author | null> {
  return await context.prisma.author.findFirst({
    where: {
      firstName: {
        equals: author.firstName,
        mode: 'insensitive',
      },
      lastName: {
        equals: author.lastName,
        mode: 'insensitive',
      },
    },
  });
}

export async function findOrCreateAuthor(context: Context, author: FindOrCreateAuthorArgs): Promise<Author> {
  const existingAuthor = await findAuthor(context, author);
  return existingAuthor ?? (await addAuthor(context, author));
}
