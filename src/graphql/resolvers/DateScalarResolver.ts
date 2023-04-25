import { IResolvers } from '@graphql-tools/utils';
import dateScalar from '../scalarTypes/dateScalar';

export const DateScalarResolvers: IResolvers = {
  Date: dateScalar,
};
