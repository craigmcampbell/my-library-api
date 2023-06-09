import 'graphql-import-node';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import * as baseTypeDef from './schemas/baseTypes.graphql';

import * as authorTypeDef from './schemas/author.graphql';
import * as bookTypeDef from './schemas/book.graphql';
import * as genreTypeDef from './schemas/genre.graphql';
import * as isbndbTypeDef from './schemas/isbndb.graphql';
import * as seriesTypeDef from './schemas/series.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [baseTypeDef, authorTypeDef, bookTypeDef, genreTypeDef, isbndbTypeDef, seriesTypeDef],
  resolvers,
});

export default schema;
