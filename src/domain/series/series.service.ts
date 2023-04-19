import { Series } from '@prisma/client';
import { Context } from '../../models/Context.interface';
import GetUniqueId from '../../helpers/getUniqueId.helper';
import { findOrCreateAuthor } from '../author/author.service';
import { AddSeriesProps, UpdateSeriesProps } from './series.interface';

export async function addSeries(context: Context, series: AddSeriesProps): Promise<Series> {
  const { prisma } = context;
  const { authorFirstName, authorLastName, name, numberOfBooks } = series;

  if (!series.authorId && (!authorLastName || !authorFirstName)) throw new Error('No author information provided');

  const authorId =
    series.authorId.length > 0
      ? series.authorId
      : (await findOrCreateAuthor(context, { firstName: authorFirstName, lastName: authorLastName })).id;

  const seriesExists = await checkIfSeriesExistsForAuthor(context, authorId, name);

  if (seriesExists) throw new Error('That series already exists for that author');

  return await prisma.series.create({
    data: {
      id: GetUniqueId(),
      authorId,
      name,
      numberOfBooks,
    },
    include: { author: true },
  });
}

export async function getAllSeries(context: Context): Promise<Series[]> {
  return await context.prisma.series.findMany({ include: { author: true } });
}

export async function getSeriesById(context: Context, id: string): Promise<Series | null> {
  return await context.prisma.series.findUnique({
    where: { id },
    include: { author: true },
  });
}

export async function updateSeries(context: Context, series: UpdateSeriesProps): Promise<Series> {
  return await context.prisma.series.update({
    where: { id: series.id },
    data: {
      authorId: series.authorId,
      name: series.name,
      numberOfBooks: series.numberOfBooks,
    },
    include: { author: true },
  });
}

async function checkIfSeriesExistsForAuthor(context: Context, authorId: string, seriesName: string): Promise<boolean> {
  console.info(`authorId: ${JSON.stringify(authorId)}`);
  const series = await context.prisma.series.findFirst({
    where: { authorId, name: { equals: seriesName, mode: 'insensitive' } },
  });

  return series !== null;
}
