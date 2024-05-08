import { ProductsGetAllDocument, ProductsGetByIdDocument, TypedDocumentString } from '@/gql/graphql';
import { notFound } from 'next/navigation';

export type ProductImage = {
	url: string;
	alt: string;
};

type Collection = {
	name: string;
	slug: string;
};

type Category = {
	name: string;
	slug: string;
};

type Review = {
	id: string;
	author: string;
	email: string;
	comment: string;
	rating: number;
	createdAt: string;
};

export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	images: ProductImage[];
	collections: Collection[];
	categories: Category[];
	reviews: Review[];
};

export const getProductById = async (id: string): Promise<Product> => {
	const { product } = await executeGraphql(ProductsGetByIdDocument, {
		productId: id,
	});

	if (!product) {
		notFound();
	}

	return {
		...product,
		collections: product.collections || [],
		reviews: product.reviews || [],
	};
};

export const getProductList = async (page?: number): Promise<Product[]> => {
	const take = 4;
	const skip = page !== undefined && page - 1 ? (page - 1) * take : 0;
	const { products } = await executeGraphql(ProductsGetAllDocument, {
		take,
		skip,
	});

	if (!products) {
		notFound();
	}

	return products.map((product) => {
		if (!product) return notFound();

		return {
			...product,
			collections: product.collections || [],
			reviews: product.reviews || [],
		};
	});
};

export const executeGraphql = async <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, variables: TVariables): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError('GRAPHQL_URL is not defined');
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		body: JSON.stringify({ query, variables }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	type GraphQLResponse<T> = { data?: undefined; errors: { message: string }[] } | { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(`GraphQL Error:`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
