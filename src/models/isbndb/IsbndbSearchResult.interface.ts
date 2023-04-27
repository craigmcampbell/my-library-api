import IsbndbBook from './IsbndbBook';

export default interface IsbndbSearchResult {
  total: number;
  data: IsbndbBook[];
}
