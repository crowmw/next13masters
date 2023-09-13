import { type ProductListItemType } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductListItemType[] }) => {
	return (
		<ul className="grid grid-cols-4 gap-8 p-8" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>
	);
};
