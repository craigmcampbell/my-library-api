import { Context } from '../../models/Context.interface';
import { GraphQLError } from 'graphql';
import { GenreResolvers } from '../__generated__/resolvers-types';
import { getAllGenres } from '../../domain/genre/genre.service';

const SeriesResolver: GenreResolvers = {
  Query: {
    async getAllGenres(_: void, __: void, context: Context) {
      try {
        return await getAllGenres(context);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {},
};

export default SeriesResolver;
