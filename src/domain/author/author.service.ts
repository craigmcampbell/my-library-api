import { Context } from '../../models/Context.interface';
import { Author } from '@prisma/client';
import GetUniqueId from '../../helpers/getUniqueId.helper';
import { addToAuthorIndex, authorAlreadyExistsInElasticSearch } from './elasticAuthor.service';
import FeatureFlags from '../../services/featureFlag.service';

interface FindOrCreateAuthorArgs {
  firstName: string;
  lastName: string;
}

const featureFlags = FeatureFlags();

export async function addAuthor(context: Context, author: FindOrCreateAuthorArgs): Promise<Author> {
  const { prisma } = context;
  const { firstName, lastName } = author;
  const authorId = GetUniqueId();

  if (featureFlags.enableElasticSearch) {
    const alreadyExists = await authorAlreadyExistsInElasticSearch(author.firstName, author.lastName);

    if (!alreadyExists) {
      await addToAuthorIndex({
        firstName,
        id: authorId,
        lastName,
      });
    } else {
      throw new Error('Author already exists');
    }
  }

  return await prisma.author.create({
    data: {
      id: authorId,
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

export async function getAllAuthors(context: Context): Promise<Author[]> {
  return await context.prisma.author.findMany({ orderBy: { lastName: 'asc' } });
}

export async function getAuthorById(context: Context, authorId: string) {
  return await context.prisma.author.findUnique({ where: { id: authorId } });
}

export async function updateAuthor(context: Context, author: Author): Promise<Author> {
  return await context.prisma.author.update({ where: { id: author.id }, data: author });
}
