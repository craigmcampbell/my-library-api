import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../models/Context.interface';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddAuthorInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AddSeriesInput = {
  authorFirstName?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['ID']>;
  authorLastName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  numberOfBooks: Scalars['Int'];
};

export type Author = {
  __typename?: 'Author';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addAuthor: Author;
  addSeries: Series;
  updateAuthor: Author;
  updateSeries: Series;
};


export type MutationAddAuthorArgs = {
  author: AddAuthorInput;
};


export type MutationAddSeriesArgs = {
  series: AddSeriesInput;
};


export type MutationUpdateAuthorArgs = {
  author: UpdateAuthorInput;
};


export type MutationUpdateSeriesArgs = {
  series: UpdateSeriesInput;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getAllAuthors?: Maybe<Array<Author>>;
  getAllSeries?: Maybe<Array<Maybe<Series>>>;
  getAuthorById?: Maybe<Author>;
  getSeriesById?: Maybe<Series>;
};


export type QueryGetAuthorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetSeriesByIdArgs = {
  id: Scalars['ID'];
};

export type Series = {
  __typename?: 'Series';
  author: Author;
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  numberOfBooks: Scalars['Int'];
};

export type UpdateAuthorInput = {
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type UpdateSeriesInput = {
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  numberOfBooks: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddAuthorInput: AddAuthorInput;
  AddSeriesInput: AddSeriesInput;
  Author: ResolverTypeWrapper<Author>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Series: ResolverTypeWrapper<Series>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateAuthorInput: UpdateAuthorInput;
  UpdateSeriesInput: UpdateSeriesInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddAuthorInput: AddAuthorInput;
  AddSeriesInput: AddSeriesInput;
  Author: Author;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Series: Series;
  String: Scalars['String'];
  UpdateAuthorInput: UpdateAuthorInput;
  UpdateSeriesInput: UpdateSeriesInput;
}>;

export type AuthorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationAddAuthorArgs, 'author'>>;
  addSeries?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationAddSeriesArgs, 'series'>>;
  updateAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'author'>>;
  updateSeries?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationUpdateSeriesArgs, 'series'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAllAuthors?: Resolver<Maybe<Array<ResolversTypes['Author']>>, ParentType, ContextType>;
  getAllSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Series']>>>, ParentType, ContextType>;
  getAuthorById?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryGetAuthorByIdArgs, 'id'>>;
  getSeriesById?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<QueryGetSeriesByIdArgs, 'id'>>;
}>;

export type SeriesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Series'] = ResolversParentTypes['Series']> = ResolversObject<{
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfBooks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Author?: AuthorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
}>;

