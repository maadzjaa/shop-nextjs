import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductsList.module.css';
import { Product } from '../../api/products';

export default async function ProductsList({ products }: { products: Product[] }) {
	return (
		<main className={styles.productsWrapper}>
			{products.map((product) => (
				<div key={product.id} className={styles.productWrapper}>
					<Link href={`/products/${product.id}`}>
						<Image src={product.image} width={500} height={300} alt={product.title} className={styles.productImage} />
						<h3 className={styles.productTitle}>{product.title}</h3>
						<p className={styles.productPrice}>{product.price} EUR</p>
					</Link>
				</div>
			))}
		</main>
	);
}
