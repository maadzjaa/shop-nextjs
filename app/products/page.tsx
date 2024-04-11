import ProductsList from '../components/organisms/ProductsList';
import getProducts from '../api/products';

export default async function Products() {
	const products = await getProducts();
	return (
		<>
			<h2>Discover all of our products!</h2>
			<ProductsList products={products} />
		</>
	);
}
