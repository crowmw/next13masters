import { type ProductApiResponseType, type ProductListItemType } from "@/types";
import { ProductListItemCover } from "@/ui/atoms/ProductListItemCover";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const product = await getProduct(params.id);

	return {
		title: `${product.name} - NEXT13MASTERS`,
		description: product.description,
	};
}

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
	const product: ProductListItemType = await getProduct(id);

	return (
		<article className="mx-auto max-w-md">
			<ProductListItemCover {...product.coverImage} />
			<ProductListItemDescription product={product} />
		</article>
	);
}

async function getProduct(id: string) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await res.json()) as ProductApiResponseType;

	return mapProductApiResponseTypeToProductListItemType(product);
}

function mapProductApiResponseTypeToProductListItemType(
	product: ProductApiResponseType,
): ProductListItemType {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
}
