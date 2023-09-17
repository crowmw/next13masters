import { type ProductListItemType } from "@/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemType;
};

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex h-16 justify-between">
			<div>
				<h3 className=" line-clamp-2 text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria: </span>
					{category}
				</p>
			</div>
			<p className=" whitespace-nowrap text-sm font-medium text-gray-900">
				<span className="sr-only">Cena: </span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
