import { merge } from 'lodash';
import { Resolvers } from './__generated__/resolvers-types';

import AuthorResolver from './resolvers/AuthorResolver';
import SeriesResolver from './resolvers/SeriesResolver';

const resolverMap: Resolvers = merge(AuthorResolver, SeriesResolver);

export default resolverMap;
