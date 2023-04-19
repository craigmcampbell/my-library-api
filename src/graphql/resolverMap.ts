import { merge } from 'lodash';
import { Resolvers } from './__generated__/resolvers-types';
import SeriesResolver from './resolvers/SeriesResolver';

const resolverMap: Resolvers = merge(SeriesResolver);

export default resolverMap;
