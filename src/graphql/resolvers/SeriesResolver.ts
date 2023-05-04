import { Context } from '../../models/Context.interface';
import {
  addSeries,
  deleteSeries,
  getAllSeries,
  getSeriesById,
  searchSeriesByName,
  updateSeries,
} from '../../domain/series/series.service';
import { GraphQLError } from 'graphql';
import {
  MutationAddSeriesArgs,
  MutationDeleteSeriesArgs,
  MutationUpdateSeriesArgs,
  QueryGetSeriesByIdArgs,
  QuerySearchSeriesByNameArgs,
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
    async searchSeriesByName(_: void, args: QuerySearchSeriesByNameArgs, context: Context) {
      try {
        return await searchSeriesByName(context, args.name);
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
    async deleteSeries(_: void, args: MutationDeleteSeriesArgs, context: Context) {
      try {
        const deletedSeries = await deleteSeries(context, args.id);
        return deletedSeries.id;
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
