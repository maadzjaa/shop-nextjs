import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

export const dynamicParams = true;

export async function generateStaticParams(): Promise<{ id: string }[] | any> {
	const response = await fetch('https://fakestoreapi.com/products');
	const products = await response.json();

	return products.map((product) => ({
		id: product.id.toString(),
	}));
}

async function getProduct(id) {
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

export default async function ProductDetails({ params }) {
	const product = await getProduct(params.id);

	return (
		<main className={styles.main}>
			<div className={styles.image}>
				<Image src={product.image} width={500} height={300} alt={product.title} />
			</div>
			<div className={styles.about}>
				<h2> {product.title}</h2>
				<p className='product-price'>{product.price} EUR</p>
				<p className='product-description'> {product.description}</p>
				<p className='product-rating'>Rate: {product.rating.rate}/5</p>
				<p className='product-number-of-ratings'>Number of ratings: {product.rating.count}</p>
			</div>
		</main>
	);
}
