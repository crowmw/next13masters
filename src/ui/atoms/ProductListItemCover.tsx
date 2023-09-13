export const ProductListItemCover = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-lg">
			<img
				width={300}
				height={300}
				className="oject-center h-full w-full object-cover"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
