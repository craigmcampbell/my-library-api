import { Context } from '../../models/Context.interface';
import { addAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../../domain/author/author.service';
import { GraphQLError } from 'graphql';
import {
  AuthorResolvers,
  MutationAddAuthorArgs,
  MutationUpdateAuthorArgs,
  QueryGetAuthorByIdArgs,
} from '../__generated__/resolvers-types';

const AuthorResolver: AuthorResolvers = {
  Query: {
    async getAllAuthors(_: void, __: void, context: Context) {
      try {
        return await getAllAuthors(context);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
    async getAuthorById(_: void, args: QueryGetAuthorByIdArgs, context: Context) {
      try {
        return await getAuthorById(context, args.id);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {
    async addAuthor(_: void, args: MutationAddAuthorArgs, context: Context) {
      try {
        const { firstName, lastName } = args.author;

        return await addAuthor(context, {
          firstName,
          lastName,
        });
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
    async updateAuthor(_: void, args: MutationUpdateAuthorArgs, context: Context) {
      try {
        const { firstName, id, lastName } = args.author;

        return await updateAuthor(context, {
          firstName,
          id,
          lastName,
        });
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
};

export default AuthorResolver;
