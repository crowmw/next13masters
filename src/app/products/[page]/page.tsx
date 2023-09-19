import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductApiResponseType, type ProductListItemType } from "@/types";
import { Paginator } from "@/ui/organisms/Paginator";

export function metadata() {
	return {
		title: "Products - NEXT13MASTERS",
	};
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
	return [{ page: "1" }, { page: "2" }, { page: "3" }];
}

export default async function ProductsPage({ params: { page } }: { params: { page: string } }) {
	const products = await getProducts(parseInt(page ?? 1));

	return (
		<>
			<Paginator totalPages={3} />
			<ProductList products={products} />
		</>
	);
}

async function getProducts(page: number) {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20${
			page > 1 ? `&offset=${(page - 1) * 20}` : ""
		}`,
	);
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
