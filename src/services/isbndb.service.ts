import IsbndbBookResult from '../models/isbndb/IsbnBookResult.interface';
import IsbndbSearchResult from '../models/isbndb/IsbndbSearchResult.interface';
import { get } from './axiosService';

const baseUrl = process.env.ISBNDB_URL ?? '';

export async function getBookByIsbn(isbn: string): Promise<IsbndbBookResult> {
  const path = `book/${isbn}`;

  return await get<IsbndbBookResult>({
    baseUrl,
    path: encodeURI(path),
    headers: getIsbndbHeaders(),
  });
}

export async function searchBooksByTitle(
  title: string,
  page: number = 1,
  pageSize: number = 10
): Promise<IsbndbSearchResult> {
  const path = `search/books?page=${page}&pageSize=${pageSize}&text=${title}`;

  return await get<IsbndbSearchResult>({
    baseUrl,
    path: encodeURI(path),
    headers: getIsbndbHeaders(),
  });
}

function getIsbndbHeaders() {
  return {
    Allow: '*/*',
    Authorization: process.env.ISBNDB_TOKEN,
  };
}
