export type ProductListItemType = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

export interface ProductApiResponseType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}
