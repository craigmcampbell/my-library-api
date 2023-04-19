import 'graphql-import-node';
import resolvers from './resolverMap';
import * as seriesTypeDef from './schemas/series.graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as baseTypeDef from './schemas/baseTypes.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [baseTypeDef, seriesTypeDef],
  resolvers,
});

export default schema;
