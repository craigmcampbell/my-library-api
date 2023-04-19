import { SeriesResolvers, Series } from '../__generated__/resolvers-types';
import { Context } from '../../models/Context.interface';

const SeriesResolver: SeriesResolvers = {
  Query: {
    getSeries(_: void, __: void, ___: Context): Series[] {
      return [
        {
          id: '1',
          name: 'Series 1',
          numberOfBooks: 3,
          authorId: '8a15b022-6b89-44b0-bec3-eebe40579c96',
        },
      ];
    },
  },
  Mutation: {},
};

export default SeriesResolver;
