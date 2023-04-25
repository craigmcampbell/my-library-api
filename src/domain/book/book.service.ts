import { Context } from '../../models/Context.interface';
import { AddBookProps, AddBookToWishlistProps } from './book.interface';
import GetUniqueId from '../../helpers/getUniqueId.helper';
import { ReadingStatus } from '@prisma/client';
import { findOrCreateAuthor } from '../author/author.service';
import { findOrCreateSeries } from '../series/series.service';

export async function getAllBooks(context: Context) {
  return await context.prisma.book.findMany({ orderBy: { title: 'asc' } });
}

export async function addBookToWishlist(context: Context, book: AddBookToWishlistProps) {
  const { authorFirstName, authorLastName } = book;

  // Handle Author
  if (book.authorId && (!authorLastName || !authorFirstName)) throw new Error('No author information provided');

  const authorId =
    book.authorId.length > 0
      ? book.authorId
      : (await findOrCreateAuthor(context, { firstName: authorFirstName, lastName: authorLastName })).id;

  // Handle Series
  let seriesId: string | null = null;

  if (book.seriesId || book.seriesName) {
    if (book.seriesId) seriesId = book.seriesId;

    if (book.seriesName) {
      seriesId = (
        await findOrCreateSeries(context, {
          authorFirstName: book.authorFirstName,
          authorId: book.authorId,
          authorLastName: book.authorLastName,
          name: book.seriesName,
          numberOfBooks: book.numberOfBooks ?? 0,
        })
      ).id;
    }
  }

  return await addBook(context, {
    audioLength: book.audioLength,
    authorId,
    bookNumber: book.bookNumber,
    bookType: book.bookType,
    coverUrl: book.coverUrl,
    dateAdded: new Date(),
    genreId: book.genreId,
    rating: null,
    readingStatus: ReadingStatus.Wishlist,
    seriesId,
    title: book.title,
  });
}

export async function addBook(context: Context, book: AddBookProps) {
  return await context.prisma.book.create({
    data: {
      audioLength: book.audioLength,
      authorId: book.authorId,
      bookNumber: book.bookNumber,
      bookType: book.bookType,
      coverUrl: book.coverUrl,
      dateAdded: book.dateAdded,
      genreId: book.genreId,
      id: GetUniqueId(),
      rating: book.rating,
      readingStatus: book.readingStatus,
      seriesId: book.seriesId,
      title: book.title,
    },
    include: {
      author: true,
      genre: true,
      series: true,
    },
  });
}
