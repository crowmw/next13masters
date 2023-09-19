import Link from "next/link";
import type { ProductListItemType } from "@/types";
import { ProductListItemCover } from "@/ui/atoms/ProductListItemCover";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = (product: ProductListItemType) => {
	return (
		<li>
			<Link href={`/product/${product.id}`} prefetch={false}>
				<article className=" max-w-lg rounded-lg border border-gray-200 bg-white p-4 shadow ">
					<ProductListItemCover {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
