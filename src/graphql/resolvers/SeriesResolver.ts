import { Context } from '../../models/Context.interface';
import { addSeries, getAllSeries, getSeriesById, updateSeries } from '../../domain/series/series.service';
import { GraphQLError } from 'graphql';
import {
  MutationAddSeriesArgs,
  MutationUpdateSeriesArgs,
  QueryGetSeriesByIdArgs,
  SeriesResolvers,
} from '../__generated__/resolvers-types';

const SeriesResolver: SeriesResolvers = {
  Query: {
    async getAllSeries(_: void, __: void, context: Context) {
      try {
        return await getAllSeries(context);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
    async getSeriesById(_: void, args: QueryGetSeriesByIdArgs, context: Context) {
      try {
        return await getSeriesById(context, args.id);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {
    async addSeries(_: void, args: MutationAddSeriesArgs, context: Context) {
      try {
        const { authorId, name, numberOfBooks, authorFirstName, authorLastName } = args.series;

        return await addSeries(context, {
          authorFirstName: authorFirstName ?? '',
          authorId: authorId ?? '',
          authorLastName: authorLastName ?? '',
          name,
          numberOfBooks,
        });
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
    async updateSeries(_: void, args: MutationUpdateSeriesArgs, context: Context) {
      try {
        const { authorId, id, name, numberOfBooks } = args.series;

        return await updateSeries(context, {
          authorId: authorId ?? '',
          id,
          name,
          numberOfBooks,
        });
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
};

export default SeriesResolver;
