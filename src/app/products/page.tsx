import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemType } from "@/types";

const products: ProductListItemType[] = [
	{
		id: "1",
		name: "Koszulka",
		category: "Odzież",
		price: 2999,
		coverImage: {
			src: "./product1.jpeg",
			alt: "Koszulka",
		},
	},
	{
		id: "2",
		name: "Koszulka",
		category: "Odzież",
		price: 2922,
		coverImage: {
			src: "./product1.jpeg",
			alt: "Koszulka",
		},
	},
	{
		id: "3",
		name: "Koszulka",
		category: "Odzież",
		price: 299,
		coverImage: {
			src: "./product1.jpeg",
			alt: "Koszulka",
		},
	},
	{
		id: "4",
		name: "Kubek",
		category: "Akcesoria",
		price: 2999,
		coverImage: {
			src: "./product1.jpeg",
			alt: "Koszulka",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-4xl bg-slate-200">
			<ProductList products={products} />
		</section>
	);
}
