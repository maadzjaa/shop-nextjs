import { notFound } from "next/navigation";

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
