import SearchResult from '../models/ElasticResult.interface';

const elasticsearch = require('elasticsearch');

interface AddToIndexProps extends BaseSearchProps {
  id: string;
  body: object;
}

export async function addToIndex({ body, id, index, type }: AddToIndexProps) {
  const client = getElasticClient();

  await client.index({
    index,
    type,
    id,
    body,
  });
}

interface AutocompleteProps extends BaseSearchProps {
  fields: string[];
  query: string;
}

export async function autocomplete({ fields, index, query, type }: AutocompleteProps) {
  const client = getElasticClient();

  client
    .search({
      index,
      type,
      body: {
        query: {
          multi_match: {
            query,
            fields,
            type: 'phrase_prefix',
          },
        },
      },
    })
    .then(
      function (resp: any) {
        console.info(`resp: ${JSON.stringify(resp)}`);
        const results = resp.hits.hits.map(function (hit: any) {
          return hit._id + ' ' + hit._source.firstName + ' ' + hit._source.lastName;
        });

        console.info(`results: ${JSON.stringify(results)}`);

        // res.send(results);
      },
      function (err: any) {
        console.trace(err.message);
        // res.send({ response: err.message });
      }
    );
}

interface SearchProps extends BaseSearchProps {
  query: string;
}

export async function search({ index, query, type }: SearchProps): Promise<SearchResult[]> {
  const client = getElasticClient();

  const searchResults: SearchResult[] = [];

  const result = await client.search({
    index,
    type,
    body: {
      query: {
        query_string: {
          query,
        },
      },
    },
  });

  result.hits.hits.map((h: any) =>
    searchResults.push({
      _index: h._index,
      _type: h._type,
      _id: h._id,
      _score: h._score,
      _source: h._source,
    })
  );

  return searchResults;
}

function getElasticClient() {
  const searchlyUrl = process.env.SEARCHLY_URL;

  if (process.env.NODE_ENV === 'development') {
    return new elasticsearch.Client({
      host: searchlyUrl,
      ssl: { rejectUnauthorized: false, pfx: [] },
    });
  }

  return new elasticsearch.Client({
    host: searchlyUrl,
  });
}

interface BaseSearchProps {
  index: string;
  type: string;
}
