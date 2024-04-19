import ProductsList from '../components/organisms/ProductsList';
import getProducts from '../api/products';
import { getGraphlQLProducts } from '../api/products';

export default async function Home() {
	const products = await getProducts(6);
	const productsFromGQL = await getGraphlQLProducts();
	console.log(productsFromGQL);
	return (
		<>
			<ProductsList products={products} />
		</>
	);
}
