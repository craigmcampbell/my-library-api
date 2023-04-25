import { BookType, ReadingStatus } from '@prisma/client';

export interface AddBookProps {
  audioLength: string | null;
  authorId: string;
  bookNumber: number | null;
  bookType: BookType;
  coverUrl: string | null;
  dateAdded: Date;
  genreId: string;
  rating: number | null;
  readingStatus: ReadingStatus;
  seriesId: string | null;
  title: string;
}

export interface AddBookToWishlistProps {
  audioLength: string | null;
  authorFirstName: string;
  authorId: string;
  authorLastName: string;
  bookNumber: number | null;
  bookType: BookType;
  coverUrl: string | null;
  genreId: string;
  numberOfBooks: number | null;
  seriesId: string | null;
  seriesName: string | null;
  title: string;
}
