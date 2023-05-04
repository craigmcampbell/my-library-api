import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  Date: any;
};

export type AddAuthorInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AddBookToWishlistInput = {
  audioLength?: InputMaybe<Scalars['String']>;
  authorFirstName?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['ID']>;
  authorLastName?: InputMaybe<Scalars['String']>;
  bookNumber?: InputMaybe<Scalars['Int']>;
  bookType: BookType;
  coverUrl?: InputMaybe<Scalars['String']>;
  genreId: Scalars['ID'];
  numberOfBooks?: InputMaybe<Scalars['Int']>;
  seriesId?: InputMaybe<Scalars['ID']>;
  seriesName?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
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

export type Book = {
  __typename?: 'Book';
  audioLength?: Maybe<Scalars['String']>;
  author: Author;
  authorId: Scalars['ID'];
  bookNumber?: Maybe<Scalars['Int']>;
  bookType: BookType;
  coverUrl?: Maybe<Scalars['String']>;
  dateAdded: Scalars['Date'];
  genre: Genre;
  genreId: Scalars['ID'];
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
  readingStatus: Scalars['String'];
  series?: Maybe<Series>;
  seriesId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export enum BookType {
  Audio = 'Audio',
  Kindle = 'Kindle',
  Pdf = 'Pdf',
  Physical = 'Physical'
}

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IsbnDbBook = {
  __typename?: 'IsbnDbBook';
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  binding?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addAuthor: Author;
  addBookToWishlist: Book;
  addSeries: Series;
  deleteSeries: Scalars['ID'];
  updateAuthor: Author;
  updateSeries: Series;
};


export type MutationAddAuthorArgs = {
  author: AddAuthorInput;
};


export type MutationAddBookToWishlistArgs = {
  book: AddBookToWishlistInput;
};


export type MutationAddSeriesArgs = {
  series: AddSeriesInput;
};


export type MutationDeleteSeriesArgs = {
  id: Scalars['ID'];
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
  getAllBooks?: Maybe<Array<Book>>;
  getAllGenres?: Maybe<Array<Genre>>;
  getAllSeries?: Maybe<Array<Maybe<Series>>>;
  getAuthorById?: Maybe<Author>;
  getBookByIsbn?: Maybe<IsbnDbBook>;
  getSeriesById?: Maybe<Series>;
  searchBooksByTitle?: Maybe<Array<IsbnDbBook>>;
  searchSeriesByName?: Maybe<Array<Series>>;
};


export type QueryGetAuthorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetBookByIsbnArgs = {
  isbn: Scalars['String'];
};


export type QueryGetSeriesByIdArgs = {
  id: Scalars['ID'];
};


export type QuerySearchBooksByTitleArgs = {
  title: Scalars['String'];
};


export type QuerySearchSeriesByNameArgs = {
  name: Scalars['String'];
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
  AddBookToWishlistInput: AddBookToWishlistInput;
  AddSeriesInput: AddSeriesInput;
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  BookType: BookType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Genre: ResolverTypeWrapper<Genre>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IsbnDbBook: ResolverTypeWrapper<IsbnDbBook>;
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
  AddBookToWishlistInput: AddBookToWishlistInput;
  AddSeriesInput: AddSeriesInput;
  Author: Author;
  Book: Book;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Genre: Genre;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  IsbnDbBook: IsbnDbBook;
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

export type BookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  audioLength?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bookType?: Resolver<ResolversTypes['BookType'], ParentType, ContextType>;
  coverUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateAdded?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  genre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType>;
  genreId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  readingStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  series?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType>;
  seriesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GenreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IsbnDbBookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IsbnDbBook'] = ResolversParentTypes['IsbnDbBook']> = ResolversObject<{
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  binding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datePublished?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  synopsis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationAddAuthorArgs, 'author'>>;
  addBookToWishlist?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationAddBookToWishlistArgs, 'book'>>;
  addSeries?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationAddSeriesArgs, 'series'>>;
  deleteSeries?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteSeriesArgs, 'id'>>;
  updateAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'author'>>;
  updateSeries?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationUpdateSeriesArgs, 'series'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAllAuthors?: Resolver<Maybe<Array<ResolversTypes['Author']>>, ParentType, ContextType>;
  getAllBooks?: Resolver<Maybe<Array<ResolversTypes['Book']>>, ParentType, ContextType>;
  getAllGenres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  getAllSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Series']>>>, ParentType, ContextType>;
  getAuthorById?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryGetAuthorByIdArgs, 'id'>>;
  getBookByIsbn?: Resolver<Maybe<ResolversTypes['IsbnDbBook']>, ParentType, ContextType, RequireFields<QueryGetBookByIsbnArgs, 'isbn'>>;
  getSeriesById?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<QueryGetSeriesByIdArgs, 'id'>>;
  searchBooksByTitle?: Resolver<Maybe<Array<ResolversTypes['IsbnDbBook']>>, ParentType, ContextType, RequireFields<QuerySearchBooksByTitleArgs, 'title'>>;
  searchSeriesByName?: Resolver<Maybe<Array<ResolversTypes['Series']>>, ParentType, ContextType, RequireFields<QuerySearchSeriesByNameArgs, 'name'>>;
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
  Book?: BookResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Genre?: GenreResolvers<ContextType>;
  IsbnDbBook?: IsbnDbBookResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
}>;

