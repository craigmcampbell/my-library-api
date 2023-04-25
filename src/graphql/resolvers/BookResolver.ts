import { Context } from '../../models/Context.interface';
import { GraphQLError } from 'graphql';
import { GenreResolvers, MutationAddBookToWishlistArgs } from '../__generated__/resolvers-types';
import { addBookToWishlist, getAllBooks } from '../../domain/book/book.service';

const BookResolver: GenreResolvers = {
  Query: {
    async getAllBooks(_: void, __: void, context: Context) {
      try {
        return await getAllBooks(context);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {
    async addBookToWishlist(_: void, input: MutationAddBookToWishlistArgs, context: Context) {
      const { book } = input;

      try {
        return await addBookToWishlist(context, {
          audioLength: book.audioLength ?? null,
          authorFirstName: book.authorFirstName ?? '',
          authorId: book.authorId ?? '',
          authorLastName: book.authorLastName ?? '',
          bookNumber: book.bookNumber ?? null,
          numberOfBooks: book.numberOfBooks ?? null,
          bookType: book.bookType,
          coverUrl: book.coverUrl ?? null,
          genreId: book.genreId,
          seriesId: book.seriesId ?? null,
          seriesName: book.seriesName ?? null,
          title: book.title,
        });
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
};

export default BookResolver;
