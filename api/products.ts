import { notFound } from 'next/navigation';
import { json } from 'stream/consumers';

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

export default async function getProducts(limit?: number): Promise<Product[]> {
	try {
		const limitParam = limit ? `?limit=${limit}` : '';
		const response = await fetch(`https://fakestoreapi.com/products${limitParam}`, {
			next: {
				revalidate: 0,
			},
		});
		return await response.json();
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}

export async function getProductById(id: string) {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
		next: {
			revalidate: 60,
		},
	});

	if (!response.ok) {
		notFound();
	}

	return response.json();
}

export async function getGraphlQLProducts() {
	const response = await fetch('http://localhost:4000/', {
		method: 'POST',
		body: JSON.stringify({
			query: `query ExampleQuery {
			products {
			  categories {
				name
				slug
			  }
			  price
			  name
			  images {
				alt
				src
			  }
			  id
			  description
			  collections {
				name
				slug
			  }
			}
		  }`,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const { data } = await response.json();

	return data;
}
