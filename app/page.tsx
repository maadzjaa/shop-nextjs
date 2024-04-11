import ProductsList from './components/organisms/ProductsList';
import getProducts from './api/products';

export default async function Home() {
	const products = await getProducts(6);
	return (
		<>
			<ProductsList products={products} />
		</>
	);
}
