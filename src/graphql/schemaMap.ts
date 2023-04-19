import 'graphql-import-node';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import * as baseTypeDef from './schemas/baseTypes.graphql';
import * as authorTypeDef from './schemas/author.graphql';
import * as seriesTypeDef from './schemas/series.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [baseTypeDef, authorTypeDef, seriesTypeDef],
  resolvers,
});

export default schema;
