/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars['String']['output'];
};

export type Collection = {
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars['String']['output'];
};

export type Images = {
  alt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Product = {
  categories: Array<Category>;
  collections?: Maybe<Array<Collection>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Images>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  reviews?: Maybe<Array<Review>>;
};

export type Query = {
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type ProductsGetAllQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type ProductsGetAllQuery = { products?: Array<{ id: string, name: string, description: string, price: number, images: Array<{ url: string, alt: string }>, collections?: Array<{ name: string, slug: string }> | null, categories: Array<{ name: string, slug: string }>, reviews?: Array<{ id: string, author: string, email: string, comment: string, rating: number, createdAt: string }> | null } | null> | null };

export type ProductsGetByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductsGetByIdQuery = { product?: { id: string, name: string, description: string, price: number, images: Array<{ url: string, alt: string }>, collections?: Array<{ name: string, slug: string }> | null, categories: Array<{ name: string, slug: string }>, reviews?: Array<{ id: string, author: string, email: string, comment: string, rating: number, createdAt: string }> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const ProductsGetAllDocument = new TypedDocumentString(`
    query ProductsGetAll($take: Int!, $skip: Int!) {
  products(take: $take, skip: $skip) {
    id
    name
    description
    price
    images {
      url
      alt
    }
    collections {
      name
      slug
    }
    categories {
      name
      slug
    }
    reviews {
      id
      author
      email
      comment
      rating
      createdAt
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetAllQuery, ProductsGetAllQueryVariables>;
export const ProductsGetByIdDocument = new TypedDocumentString(`
    query ProductsGetById($productId: ID!) {
  product(id: $productId) {
    id
    name
    description
    price
    images {
      url
      alt
    }
    collections {
      name
      slug
    }
    categories {
      name
      slug
    }
    reviews {
      id
      author
      email
      comment
      rating
      createdAt
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByIdQuery, ProductsGetByIdQueryVariables>;