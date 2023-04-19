import { IResolvers } from '@graphql-tools/utils';

const SeriesResolver: IResolvers = {
  Query: {
    getSeries(_: void, __: void, ___: void) {
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
