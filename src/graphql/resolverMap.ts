import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';

import { DateScalarResolvers } from './resolvers/DateScalarResolver';

import AuthorResolver from './resolvers/AuthorResolver';
import BookResolver from './resolvers/BookResolver';
import GenreResolver from './resolvers/GenreResolver';
import SeriesResolver from './resolvers/SeriesResolver';

const resolverMap: IResolvers = merge(AuthorResolver, BookResolver, DateScalarResolvers, GenreResolver, SeriesResolver);

export default resolverMap;
