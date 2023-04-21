import { Author } from '@prisma/client';
import { addToIndex, autocomplete, search } from '../../services/elastic.service';

const authorIndexName = 'authors';
const authorType = 'authors';

interface AddToAuthorIndexProps {
  id: string;
  firstName: string;
  lastName: string;
}

export async function addToAuthorIndex({ firstName, id, lastName }: AddToAuthorIndexProps) {
  await addToIndex({
    body: {
      lastName,
      firstName,
    },
    id,
    index: authorIndexName,
    type: authorType,
  });
}

export async function authorAlreadyExistsInElasticSearch(firstName: string, lastName: string): Promise<boolean> {
  const searchResults = await searchForAuthor(`${firstName} ${lastName}`);

  if (searchResults.length === 0) return false;

  const match = searchResults.find(
    (x) => x.firstName.toLowerCase() === firstName.toLowerCase() && x.lastName.toLowerCase() === lastName.toLowerCase()
  );

  return match !== undefined;
}

export async function searchForAuthor(query: string): Promise<Author[]> {
  const results = await search({
    index: authorIndexName,
    query,
    type: authorType,
  });

  if (!results || results.length === 0) return [];

  const authors: Author[] = [];
  results.map((r) =>
    authors.push({
      id: r._id,
      firstName: r._source.firstName,
      lastName: r._source.lastName,
    })
  );

  return authors;
}

export async function partialSearch(query: string) {
  await autocomplete({
    fields: ['firstName', 'lastName'],
    index: authorIndexName,
    query,
    type: authorType,
  });
}
