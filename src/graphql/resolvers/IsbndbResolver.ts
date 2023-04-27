import { getBookByIsbn, searchBooksByTitle } from '../../services/isbndb.service';
import { GraphQLError } from 'graphql';
import {
  IsbnDbBookResolvers,
  QuerySearchBooksByTitleArgs,
  QueryGetBookByIsbnArgs,
} from '../__generated__/resolvers-types';
import IsbndbBook from '../../models/isbndb/IsbndbBook';

const IsbndbResolver: IsbnDbBookResolvers = {
  Query: {
    async searchBooksByTitle(_: void, args: QuerySearchBooksByTitleArgs) {
      try {
        const searchResult = await searchBooksByTitle(args.title);

        if (!searchResult.data || searchResult.data.length === 0) return [];

        return searchResult.data.map((sr) => convertIsbndbBookToIsbndbBook(sr));
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
    async getBookByIsbn(_: void, args: QueryGetBookByIsbnArgs) {
      try {
        const result = await getBookByIsbn(args.isbn);
        return convertIsbndbBookToIsbndbBook(result.book);
      } catch (error: any) {
        throw new GraphQLError(error.message);
      }
    },
  },
};

function convertIsbndbBookToIsbndbBook(isbndbBook: IsbndbBook) {
  return {
    authors: isbndbBook.authors,
    binding: isbndbBook.binding,
    datePublished: isbndbBook.date_published,
    edition: isbndbBook.edition,
    image: isbndbBook.image,
    isbn: isbndbBook.isbn,
    pages: isbndbBook.pages,
    publisher: isbndbBook.publisher,
    synopsis: isbndbBook.synopsis,
    title: isbndbBook.title,
  };
}

export default IsbndbResolver;
