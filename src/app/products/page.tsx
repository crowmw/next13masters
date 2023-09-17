import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductApiResponseType, type ProductListItemType } from "@/types";

export function metadata() {
	return {
		title: "Products - NEXT13MASTERS",
	};
}

export default async function Home() {
	const products = await getProducts();

	return <ProductList products={products} />;
}

async function getProducts() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const products = (await res.json()) as ProductApiResponseType[];

	return mapProductsApiResponseTypeToProductsListItemType(products);
}

function mapProductsApiResponseTypeToProductsListItemType(
	products: ProductApiResponseType[],
): ProductListItemType[] {
	return products.map((product) => ({
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	}));
}
