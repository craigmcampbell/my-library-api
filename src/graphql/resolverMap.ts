import { merge } from 'lodash';
import { IResolvers } from '@graphql-tools/utils';

import SeriesResolver from './resolvers/SeriesResolver';

const resolverMap: IResolvers = merge(SeriesResolver);

export default resolverMap;
