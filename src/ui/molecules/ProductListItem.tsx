import type { ProductListItemType } from "@/types";
import { ProductListItemCover } from "@/ui/atoms/ProductListItemCover";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = (product: ProductListItemType) => {
	return (
		<li>
			<article>
				<ProductListItemCover {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
