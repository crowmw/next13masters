import { ActiveLink } from "../atoms/ActiveLink";

export const Paginator = ({ totalPages }: { totalPages: number }) => {
	const pages = Array.from({ length: totalPages }, (_, index) => {
		const pageNumber = index + 1;
		return (
			<ActiveLink
				key={pageNumber}
				href={`/products/${pageNumber}`}
				className="mx-1 rounded-md  px-4 py-2 text-gray-800"
				activeClassName="bg-slate-500 text-white"
			>
				{pageNumber}
			</ActiveLink>
		);
	});

	return <div className="flex w-full justify-center">{pages}</div>;
};
