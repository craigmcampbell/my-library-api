import { Context } from '../../models/Context.interface';

export async function getAllGenres(context: Context) {
  return await context.prisma.genre.findMany({ orderBy: { name: 'asc' } });
}
