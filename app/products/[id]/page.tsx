import getProducts, { getProductById } from '@/api/products';
import styles from './page.module.css';

export const dynamicParams = true;

export async function generateStaticParams(): Promise<{ id: string }[] | any> {
	const products = await getProducts();

	return products.map((product) => ({
		id: product.id.toString(),
	}));
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	return (
		<main className={styles.main}>
			<div className={styles.image}>
				<img src={product.image} width={500} height={300} alt={product.title} />
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
