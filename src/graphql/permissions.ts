import { GraphQLError } from 'graphql';
import { and, or, rule, shield } from 'graphql-shield';
import Context from '../models/Context.interface';

export default shield(
  {
    Query: {
      ...userQueryPermissions(),
    },
    Mutation: {
      ...userMutationPermissions(),
    },
  },
  {
    fallbackError: async (error: unknown, _: object, args: object, context: any, info: any) => {
      if (error instanceof GraphQLError) {
        // expected errors
        return error;
      } else if (error instanceof Error) {
        console.log(error.message);

        //TODO: Need to refine these errors https://www.apollographql.com/docs/apollo-server/data/errors/
        throw new GraphQLError('Internal server error');
      } else {
        // what the hell got thrown
        throw new GraphQLError('Internal server error');
      }
    },
  }
);

export const isOpen = rule({ cache: 'contextual' })((_: void, __: void, ___: Context) => {
  return true;
});

export const isAuthenticated = rule({ cache: 'contextual' })((_: void, __: void, { userId, roles }: Context) => {
  if (!userId || !roles) return false;

  return userId.length > 0;
});

export const isAdminAuthenticated = rule({ cache: 'contextual' })((_: void, __: void, { userId, roles }: Context) => {
  console.log('here');
  if (!userId || !roles || userId.length === 0) return false;

  // return hasAdminRole(roles);
  return false;
});

function userQueryPermissions() {
  return {
    getSeries: isAdminAuthenticated,
  };
}

function userMutationPermissions() {
  return {};
}
